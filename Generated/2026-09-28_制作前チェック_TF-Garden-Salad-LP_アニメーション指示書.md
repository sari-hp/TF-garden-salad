# アニメーション指示書（ページ×パーツ対応表）

案件名: TF Garden Salad LP / 作成日: 2026年9月28日 13:36
Figma: https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-2（ルールセット）

指示は、ルールセットに書かれた注釈と、状態の見本から読み取りました。Figmaのプロトタイプには、動きの設定（アニメーション）がありません。そのため、速さ（duration）と加減速（イージング）は数値で指定されていません。

## TOP（LP）

| セクション/パーツ | トリガー | 指示内容（原文ベース） |
|---|---|---|
| 「img：サラダ」の帯（About と Menu の間、[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-200) / [スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-451)） | スクロール | 「内にパララックスの効果をつけてください。(パララックス用の画像は右側にあります。)」。ルールセットの図で、この帯が枠で囲まれています。画像はキャンバス右の「[salad-5904093_1920 1](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=914-25)」（1920×1536px）を使います |
| 「img：店内」の帯（Menu と Shop の間、[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-132) / [スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-386)） | スクロール | 上と同じパララックスの指示です。画像はキャンバス右の「[cafe-768771_1920 1](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=914-26)」（1920×1280px）を使います |
| パララックスの参考 | スクロール | 「全体的にのっぺりしたサイトなので、おしゃれさと、視覚的な興味を引き出したいです。」<br>・https://matsushitahome.com/（Topページ内をスクロールした際の、Products部分に使用されている画像の様な動き）<br>・https://aitosauna.jp/（Topページ内をスクロールした際の、MV・About・Showroomに使用されている画像の様な動き） |
| その他のアニメーション | — | 「その他のアニメーションはお任せします。」 |
| ヘッダー・フッターのナビ（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-211)） | hover | 文字の下に線が出ます（見本は線の太さ2px）。「ヘッダー、フッター共に共通です。ホバー時の下線は文字幅に合わせてください。」 |
| 送信ボタン（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-72)） | hover | 「Hover(opacity:0.7)」：背景が#159741の不透明度70%。無効時は背景#BDBDBD（「Disable」） |
| プライバシーポリシーのリンク（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-91)） | hover | 「Hover(opacity:0.7)」：文字色が#159741の不透明度70%。下線はそのまま |
| Instagramの「もっとメニューを見る」ボタン（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-84)） | hover | 通常は白背景・枠と文字#333です。ホバーで背景#333、文字と外部リンクアイコンが白になります |
| SNSアイコン（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-224)） | hover | 通常は濃い色の丸に白いマークです。ホバーで白い丸に枠線、マークが濃い色になり、色が反転します。「各アイコンはFontAwesomeを使用してください。」 |
| 入力欄（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-114)） | hover / 入力中 | 「入力時・マウスオーバー時」：枠が#159741になります。お問い合わせ内容の欄だけ、緑の光彩（0 0 2px）が付きます。「※右下のリサイズ表示はデフォルトのものでお願いします。」 |
| チェックボックス（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-92)） | hover / クリック | ・未選択<br>・選択済み：チェックマーク<br>・マウスオーバー：枠#159741と緑の光彩（0 0 2px）<br>・クリック時：背景 rgba(21,151,65,0.15) |
| プライバシーポリシー（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-140)） | クリック | 「プライバシーポリシーをクリックするとモーダルで表示され、縦にスクロールできるようにお願いします。モーダルサイズとフォントサイズは、読みやすいことを優先して決めてください。スクロールの表示と中の文章はお任せします。」右上に閉じるボタン（×）があります |
| Instagramの写真（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-154)） | 画面幅の変化 | 「内はカンプより幅が狭まった際、画像のサイズは変えずに横にスクロールできるようにしてください。スクロールの表示はお任せします。SP版は画像を4枚固定で表示させてください。」 |

## 注釈がないページ

1ページのLPのため、対象はTOP（LP）だけです。MV・About・Menu・Shop・Contactの各セクションには、個別の動きの指示はありません。「その他のアニメーションはお任せします」に従います。

## あわせて検出した実装指示（アニメ以外・キャンバス注釈より）

- 和文フォント：Noto Sans JP。英文フォント：Reross（Adobe Fonts「Reross Quadratic」）、Satisfy（Google Fonts「Satisfy Regular 400」）
- 文字サイズ PC：
  - 和文：見出し30px / 小見出し18px / 基本16px / 最小12px
  - 英文：Big Heading 100px / Heading 48px / Base 18px
- 文字サイズ スマホ：
  - 和文：見出し24px / 小見出し14px / 基本16px / 最小12px
  - 英文：Big Heading 36px / Heading 32px
- カラー：ベース#2F2F2F、メイン#F2F2F2、アクセント#159741、文字#333 / #FFF
- SNSアイコンはFontAwesome（https://fontawesome.com/）を使う
- ヘッダー（スマホ）：「ナビが4つしかないので、PC版と同じレイアウトにしています。そのため、選択可能範囲をできるだけ上下に作っていただきたいです。」
- ブレイクポイントの指定はありません（確認依頼書 No.13）

## 検出根拠（node-id）

- キャンバス直下（ページ枠の外）：914:28「【パララックス用画像】」（text）、914:25・914:26（パララックス用画像）
- ルールセット 72:2 内：
  - 72:28〜72:30（書体）
  - 72:6（カラー）
  - 72:37〜72:60（文字サイズ）
  - 72:61〜72:91（ボタン）
  - 72:211〜72:219（ナビゲーション）
  - 72:114〜72:139（入力欄）
  - 72:92〜72:112（チェックボックス）
  - 72:140〜72:153（プライバシーポリシー）
  - 72:220〜72:365（SNS）
  - 72:154〜72:210（インスタグラム）
  - 72:258〜72:344（アニメーション）
  - 72:345〜72:363（ヘッダー（SP））
- プロトタイプ設定：59:2（PC）・59:252（スマホ）とも動きの設定なし
