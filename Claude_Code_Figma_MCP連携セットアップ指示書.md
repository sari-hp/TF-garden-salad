# Claude Code × Figma MCP 連携セットアップ指示書

Claude Codeに渡して実行してもらう指示書。Claude Codeはインストール済み、Figmaデスクトップ側のMCPサーバーは有効化済みの前提。

---

## 前提（実行前にユーザーに確認すること）

以下2点が揃っているか必ず確認する。未達ならセットアップを止めて案内する。

1. **Claudeのプラン**: Proプラン以上（月額20ドル〜）を契約済みであること
2. **Figmaのプラン**: Professionalプラン以上で「Devシート」が割り当てられていること

どちらも無料プランでは不可。

---

## 手順: Figma MCPを登録

ターミナル（Windowsの場合はPowerShell）で以下2つのコマンドを実行する。

```bash
claude mcp add --transport http figma-remote-mcp https://mcp.figma.com/mcp
claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp
```

- 1行目: Figmaのリモート版MCP（`mcp.figma.com`）
- 2行目: Figmaデスクトップアプリのローカル版MCP

登録後、Claude Codeの対話シェルで `/mcp` を叩き、両方が `connected` になっていることを確認する。

---

## トラブルシュート

- `figma-desktop` が `failed` → Figmaデスクトップ側のMCPサーバーが起動しているかユーザーに確認してもらう。その後Claude Codeを再起動
- `figma-remote-mcp` が `failed` → 初回はブラウザでFigmaへの認可が必要な場合があるので、指示に従って認証を済ませる
- 【Windows + WSLの場合】WSL内のClaude Codeからは `127.0.0.1` がWindows側のFigmaデスクトップアプリに届かず `figma-desktop` が `failed` になることがある。PowerShellから直接Claude Codeを使うか、WSLのネットワーク設定（mirroredモード）を有効にする

---

## 完了報告

`/mcp` で `figma-remote-mcp` と `figma-desktop` の両方が `connected` になっていることをユーザーに報告して完了。
