import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';

// 出力するCSSの名前を sass/ 直下のscss（styles.scss）から決める → styles.css
const cssName = (() => {
  try {
    const entry = fs
      .readdirSync(path.resolve(__dirname, 'sass'))
      .find((f) => f.endsWith('.scss') && !f.startsWith('_'));
    return entry ? path.basename(entry, '.scss') : 'styles';
  } catch {
    return 'styles';
  }
})();

// dev中に画像が追加・変更されたらWebPを自動生成するプラグイン
function autoWebp() {
  return {
    name: 'auto-webp',
    configureServer(server) {
      server.watcher.on('add', (file) => {
        if (/images\/.*\.(jpe?g|png)$/i.test(file)) {
          exec('node scripts/generate-webp.js', (err, stdout) => {
            if (stdout) console.log(stdout.trim());
          });
        }
      });
      server.watcher.on('change', (file) => {
        if (/images\/.*\.(jpe?g|png)$/i.test(file)) {
          exec('node scripts/generate-webp.js', (err, stdout) => {
            if (stdout) console.log(stdout.trim());
          });
        }
      });
    },
  };
}

// HTML から相対パスで参照されないファイル（og:image は絶対URLのため）を dist へ書き出すプラグイン
function copyStaticFiles(files) {
  return {
    name: 'copy-static-files',
    generateBundle() {
      files.forEach((file) => {
        this.emitFile({ type: 'asset', fileName: file, source: fs.readFileSync(path.resolve(__dirname, file)) });
      });
    },
  };
}

export default defineConfig({
  // ビルド対象のHTMLを指定（マルチページは rollupOptions.input に追記する）
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    cssMinify: false, // 納品3原則: CSSは非圧縮（先方コーダーが読める状態）。圧縮は先方指定時のみtrueへ
    minify: 'esbuild', // ポートフォリオ公開用に JS は圧縮（GSAP 同梱で 280KB → 118KB）。読める形は js/script.js を参照
    assetsInlineLimit: 0, // 小さい画像もdata URIに埋め込まず画像ファイルとして書き出す
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // ページを追加する場合はここに追記する
        // about:   path.resolve(__dirname, 'about/index.html'),
        // contact: path.resolve(__dirname, 'contact/index.html'),
      },
      output: {
        /* 納品用にハッシュ無しの素直な構成で出す（既定は dist/assets/ へ全ファイル平置き＋
           ハッシュ付き = main-DyQFGBCk.js のような名前になり、納品物として読みづらい）。
           CSS→css/ JS→js/ 画像→images/（サブフォルダ構成も維持するので同名衝突しない） */
        entryFileNames: 'js/[name].bundle.js', // 入力(js/script.js)と同名だとソースを上書きするため分離
        chunkFileNames: 'js/[name].bundle.js',
        assetFileNames: (info) => {
          const src = (info.originalFileNames?.[0] || info.originalFileName || '').replace(/\\/g, '/');
          const name = info.names?.[0] || info.name || '';

          // CSS → css/styles.css（元の .scss の名前を引き継ぐ）
          if (name.endsWith('.css')) {
            const base = /\.(scss|sass|css)$/i.test(src)
              ? path.basename(src).replace(/\.[^.]+$/, '')
              : cssName;
            return `css/${base}.css`;
          }

          // 画像 → images/（サブフォルダも維持）
          if (src.startsWith('images/')) return src;

          return '[name][extname]';
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Sass警告を抑制（legacy API非推奨メッセージ対策）
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  plugins: [
    autoWebp(),
    copyStaticFiles(['images/ogp.jpg']),
    ViteImageOptimizer({
      /* 画像劣化の方針: 「非可逆圧縮は元画像から1回だけ」。
         - WebPは generate-webp.js が元画像から生成済み → ここで再圧縮すると二重非可逆になるため除外
         - PNGはパレット減色禁止（sharpはquality指定でpalette=256色化が自動ONになり、
           グラデ・写真がバンディング＝等高線状の筋になる）→ palette:false + ロスレス圧縮のみ */
      /* SVGも除外する。①最適化にはsvgoの別途インストールが必要でビルドがエラーを出す
         ②プラグイン既定のSVGO設定は preset-default をそのまま使うため viewBox が削除され、
         mask-image + mask-size: contain で使うアイコンの拡縮が壊れる。
         アイコンSVGは元々1KB前後で最適化の利得もない
         （assetsInlineLimit: 0 でSVGがファイル出力されるようになると顕在化する） */
      exclude: /\.(webp|svg)$/,
      // JPEGの圧縮設定
      jpg: {
        quality: 80,
      },
      // JPEGと同じ設定（拡張子違い）
      jpeg: {
        quality: 80,
      },
      // PNGはロスレスのみ（quality/paletteは指定しない＝減色させない）
      png: {
        palette: false,
        compressionLevel: 9,
      },
    }),
  ],
});
