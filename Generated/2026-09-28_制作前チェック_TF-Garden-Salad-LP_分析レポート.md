# TF Garden Salad LP｜制作前チェックの結果

確認日時：2026年9月28日 13:36

更新日時：2026年9月28日 13:45（案件の前提とフォームの扱いを反映）

Figmaの「デザインカンプ」ページを、[PC（1440px）](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-2)、[スマホ（375px）](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-252)、[ルールセット](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-2)、キャンバスに置かれたパララックス用画像まで含めて確認しました。まず相談したいのは次の4点です。

- 表記ゆれ：「アボガド」「Salada」
- 緑色の小さい文字の読みやすさ
- フォーム：エラー表示と送信後の画面が無い
- 本番サイトか練習用か（練習用に決定済み）

動きの指定はFigmaのプロトタイプ設定には無く、ルールセット内の文章で指示されています。

確認済みの案件前提：練習用（見本）として作ります。フォームは実際には送信しません。1ページ構成のLP（About / Menu / Shop / Contact）です。PCとスマホのデザインがあり、ルールセットで書体・色・ボタン・入力欄・動きが指定されています。公開・納品・日程の条件はまだ決まっていません。

## 制作前に決めたいこと

| 気になった箇所 | 今の状態 | おすすめの対応 |
|---|---|---|
| About「01」本文（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-219) / [スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-469)） | 「TF Garden Saladaの食材は全て…」と、店名の末尾に「a」が付いています | 「TF Garden Salad」に直してよいか確認 |
| Menuの商品名（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-178) / [スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-429)） | 表示は「アボガドサラダ」、レイヤー名は「アボカドサラダ」です | 一般的な表記の「アボカドサラダ」に揃えてよいか確認 |
| 緑の小さい文字・白抜き文字 | 白と#159741の比は3.79:1、#159741と#F2F2F2の比は3.39:1です。18px以下の文字ではWCAG AAの基準4.5:1に届きません | 対象（下の「色と読みやすさ」）の緑を少し濃くするか、そのままにするかを決める |
| お問い合わせフォーム（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-34) / [スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-285)） | 入力画面だけがあり、エラー表示・確認画面・送信完了画面のデザインがありません | 本番で送信するなら、エラー文言と送信後の表示を決める |
| 本番か練習用か | 住所「〒150 - 0000」、電話「090 - 1234 - 8899」、プライバシーポリシーの会社名が空欄など、仮の値に見える箇所があります | 練習用（見本）として作ると決まりました。仮の値はそのまま使います |
| パララックス（ルールセット「アニメーション」） | 「img：サラダ」「img：店内」の帯に効果を付ける指示と参考サイト2件があります。速度や動き方の数値はありません | [アニメーション指示書](2026-09-28_制作前チェック_TF-Garden-Salad-LP_アニメーション指示書.md)の範囲で進めてよいか確認 |
| ロゴ（[PCヘッダー](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-247)） | 文字（Reross）と楕円の組み合わせで作られています。スマホのヘッダーでは「TF」が4.776pxです | ロゴのSVGデータをもらうか、Figmaから書き出してよいか確認 |

詳しい質問は[確認依頼書](2026-09-28_制作前チェック_TF-Garden-Salad-LP_確認依頼書.md)にまとめています。

## 画面幅・本文幅

| 寸法 | PC | スマホ |
|---|---|---|
| デザインの幅 | 1440px | 375px |
| 本文部分の幅 | 1080px（左右180px。About・Menu・Shop） | 343px（左右16px。About・フォームの背景） |
| TOPのヘッダーの高さ | 90px | 60px |

切り替える幅の指定は、ルールセットにも注記にもありません。デザイン幅から考えると、768px前後でスマホのレイアウトにするのがよさそうです（提案）。ルールセットには「Instagramの画像は、画面がカンプより狭いときはサイズを変えずに横スクロール」との指示があります。それ以外の中間幅の扱いは決まっていません。中間幅での表示は、コーディング後に確認します。まだ確認できていません。

## フォント・色・余白

| 使う場所 | 書体 |
|---|---|
| 日本語の本文・見出し | Noto Sans JP（Regular / Medium / Bold） |
| 英字の見出し・ナビ・ロゴ・価格 | Reross Quadratic |
| 「Have a nice day !!」「Dear You.」「Recommendation」 | Satisfy Regular |

ルールセットに配布元が書かれています。Satisfyは Google Fonts（無料）、RerossはAdobe Fontsです。Adobe Fontsはサイトで使うのにAdobeのプランとWebプロジェクトの登録が必要です。どなたのアカウントで使うかは未確認です。

Noto Sans JPは Google Fontsで無料配布されています。お問い合わせの同意文の外枠にRobotoが設定されていますが、表示される文字はNoto Sans JPです。

| 色の用途・区分 | 色の指定値 |
|---|---|
| ベースカラー（ヘッダー・Menu背景） | #2F2F2F |
| メインカラー（About・Shop・カード背景） | #F2F2F2 |
| アクセントカラー（ボタン・強調文字・ロゴ） | #159741 |
| 文字色 | #333333 / #FFFFFF |
| ポストカード本文 | #4F4F4F |
| 入力欄の例文・送信ボタン無効時 | #BDBDBD |
| About・コンセプトの大きな飾り文字 | rgba(255,255,255,0.8) / rgba(103,103,103,0.3) |
| ホバー時（送信ボタン・リンク） | #159741の不透明度70% |
| チェックボックスのクリック時 | rgba(21,151,65,0.15) |

入力欄とチェックボックスの枠は、ページでは#2F2F2Fです。ルールセットの見本では#4F4F4Fです。チェックボックスの大きさも、ページは30px、見本は40pxで違います。

余白は、セクション上端から見出しまでが About 130px、Shop 120pxで、10px違います。見出し下の線の位置も、英字見出しの上端から About・Menu 74px、Shop 72px、Contact 68pxと少しずつ違います。揃えてよいかは確認依頼書で聞いています。

文字サイズはルールセットの指定（PC：見出し30px・小見出し18px・基本16px、スマホ：見出し24px・小見出し14px・基本16px）とおおむね合っています。ただ、次の箇所は指定の段階から外れています。

- PCの本文：多くが18px
- PCのメニュー栄養表示：24px
- スマホのコンセプト見出し：20px

**色と読みやすさ（WCAG 2.1 AA、通常の文字4.5:1・大きな文字3:1）**

| 場所 | 組み合わせ | 比率 | 判定 |
|---|---|---|---|
| 送信ボタン「送信」18px、必須バッジ12px、「Recommendation」14px | 白 / #159741 | 3.79:1 | 通常の文字として不足 |
| 見出し上の「Garden Saladのこだわり」「店舗情報」「お問い合わせ」（PC 18px太字・スマホ14px太字）、「プライバシーポリシー」リンク | #159741 / #F2F2F2 | 3.39:1 | 通常の文字として不足 |
| 入力欄の例文 | #BDBDBD / 白 | 1.88:1 | 不足（例文のため参考） |
| リンクのホバー時 | 緑70% / #F2F2F2 | 2.33:1 | 不足 |
| 送信ボタンのホバー時 | 白 / 緑70% | 2.61:1 | 不足 |
| MVのキャッチ（32px太字）、「国産」など30px・24px太字 | 白 / #159741、#159741 / #F2F2F2 | 3.79:1 / 3.39:1 | 大きな文字のため基準内 |
| 本文 #333 / #F2F2F2、白 / #2F2F2F | — | 11.29:1 / 13.39:1 | 基準内 |

MVの写真に重なる英字キャッチは、背景が写真のため測れていません。コーディング後に確認します。

## 表記とPC・スマホの違い

| 比べた箇所 | 今の状態 | 扱い・提案 |
|---|---|---|
| フッターのコピーライト（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-10) / [スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-257)） | PC「©︎ TF Garden Salad」、スマホ「©︎ TF Garden Salad.」 | どちらかに揃える（ピリオドなしを提案） |
| Instagramの案内文（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-152) / [スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-405)） | PC「…載せています」、スマホ「…載せています！」 | どちらかに揃える |
| ルールセットのプライバシーポリシー見出し（[見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-147)） | 「プライバシポリシー」。ページ内は「プライバシーポリシー」 | モーダルでは「プライバシーポリシー」を使う |
| 電話番号・時刻の書き方（[PC店舗情報](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-111)） | 「090 - 1234 - 8899」「11 : 00 - 20 : 00」は記号の前後に空白あり。フォームの例文は「090-0000-0000」 | 意図したデザインなら店舗情報はこのまま |
| 栄養表示の説明（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-195)） | 「C : 糖質」。Cは一般に炭水化物（Carbohydrate）を指します | 表示したい内容が糖質で合っているか確認 |
| 店名の読み（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-113)） | 「（ ガーデンサラダ  ）」で、閉じかっこの前だけ空白が2つ | 空白をそろえる |

## 意図しない誤差

PCとスマホの全セクションを、見出し・本文・カード・フォームの位置で比べました。数値の差だけでミスとは決めていません。

| 場所 | 対象の文章 | 読みづらくなっている点 |
|---|---|---|
| スマホ Shop 店舗情報（[スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-364)） | 「アクセス　東京メトロ千代田線「明治神宮 / 前駅」5番出口から徒歩5分」 | 駅名が「明治神宮」と「前駅」の途中で改行されています。字下げも半角と全角の空白が混ざっています |
| PC About 本文（[01](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-219) / [03](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-207)） | 01の本文は左697px、03の本文は左701px | 同じ右側配置なのに4pxずれています |
| PC Menu アボカド・チキンのカード（[アボカド](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-169) / [チキン](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-158)） | 商品名・価格・栄養表示の上端が、チキンの方が3〜4px下です。カード幅も524pxと525px | 横並びのカードで揃っていません |
| スマホ Menu のカード左端（[バジル](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-433) / [チキン](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-411)） | バジル・アボカドは左38px、チキン・Instagramは左41px | 縦に並ぶカードが3pxずれています |
| PC 「img：店内」（[前面](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-132) / [背面](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-131)） | 同じ名前の画像が2枚重なり（左0pxと左3px）、写真も別です | ルールセットのパララックス図と同じ前面の写真を使います（背面は消し忘れと推定） |
| PC Shop 背景（[section_access](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-83)） | 背景が左-4px・幅1444px、地図が左3px・幅1440pxで、画面幅からはみ出しています | 1440pxに揃えます |
| スマホ フッター（[footer 1](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-255) / [footer 2](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=71-2)） | 同じ内容のフッターが2つ重なっています | 1つとして作ります |
| フッターのSNSアイコン（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-21) / [スマホ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-268)） | PC 40px、スマホ 50px | スマホの方が大きいのが意図どおりか確認（タップしやすさのためならこのまま） |
| 入力欄のホバー（[名前欄見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-133) / [内容欄見本](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-128)） | お問い合わせ内容の欄だけ緑の光彩（0 0 2px）があり、名前欄にはありません | どちらかに揃える |

## 未確定コンテンツ

| 対象 | 現在の状態 | 次にすること・提案 |
|---|---|---|
| 住所・電話（[PC店舗情報](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-111)） | 「〒150 - 0000」「東京都渋谷区表参道 10 - 20 - 20」「Tel. 090 - 1234 - 8899」。仮の値に見えます | 本番なら正しい値をもらう |
| プライバシーポリシー（[ルールセット](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=72-149)） | 会社名が「＿＿＿＿＿＿＿＿」の空欄で、第2条の途中で文章が切れています。「中の文章はお任せ」と指示があります | 会社名と使う文面を決める |
| SNSのリンク先（[PCフッター](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-21)） | Twitter・Instagram・TikTokのアイコンだけで、URLの指定がありません。Twitterは旧ロゴです | 各URLと、Xの新しいロゴにするかを確認 |
| Instagram（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-136)） | 「ID：tf_gardensalad」と写真4枚。実在のアカウントかは未確認です | 実際の投稿を自動で表示するか、固定の画像にするかを決める |
| 地図（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-117)） | 地図は画像で、ロゴ入りの目印が重なっています | 画像のまま使うか、Googleマップを埋め込むかを決める |
| MV画像（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-231)） | 切り抜き設定の値が異常で、そのままでは正しく書き出せない可能性があります。スマホ版と同じ写真です | 元の写真をもらうか、Figmaから表示範囲で書き出す |
| パララックス用画像（[サラダ](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=914-25) / [店内](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=914-26)） | 1920×1536px、1920×1280px | 使えます。高解像度画面で1440px幅に表示すると少し粗くなる可能性があります（未確認） |
| ファビコン・404ページ | どちらもFigma内にありません | ファビコンの素材を決める。1ページLPのため404ページは不要か確認 |

## レスポンシブギャップ分析（画面幅が変わるときの確認）

| 見るページ | 確認する箇所 | PC（Figmaを開く） | スマホ（Figmaを開く） |
|---|---|---|---|
| TOP（LP） | ヘッダー | [ロゴ左・ナビ4項目右、高さ90px](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-240) | [同じ並び（メニューボタンなし）、高さ60px](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-488) |
| TOP（LP） | MV | [写真右1080×650px、英字100px＋日本語32pxを左に重ねる](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-230) | [写真右308×243px、英字36px＋日本語14pxを重ねる](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-480) |
| TOP（LP） | コンセプト | [本文は手動改行、飾り文字「Garden Salad」1行](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-225) | [本文は自動折り返し、見出し2行、飾り文字2行](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-476) |
| TOP（LP） | About 01〜03 | [写真と文章を左右交互、番号は文章の右に大きく](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-201) | [見出し→本文→写真の縦並び、番号は見出しの右](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-452) |
| TOP（LP） | Menu 店長おすすめ | [写真左・カード右の横並び](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-180) | [写真の下にカードの縦並び](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-431) |
| TOP（LP） | Menu アボカド・チキン | [2列](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-169) | [1列](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-420) |
| TOP（LP） | Instagram | [写真4枚を横1列（231px）、案内文の左右に斜線](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-136) | [写真4枚を2×2（125px）、斜線なし](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-390) |
| TOP（LP） | Shop 店舗情報と外観写真 | [情報左・写真右](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-109) | [情報→写真の縦並び](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-363) |
| TOP（LP） | Shop ポストカード | [写真2枚を横並び、下に文章](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-85) | [写真2枚を縦並び、下に文章](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-336) |
| TOP（LP） | Contact フォーム | [幅800pxの背景、入力欄520×50px、ラベル18px](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-34) | [幅343pxの背景、入力欄312×56px、ラベル16px](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-285) |
| TOP（LP） | フッター | [SNS 40px、ナビ18px](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-8) | [SNS 50px、ナビ16px](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-255) |
| TOP（LP） | ページトップボタン | [直径120px](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-79) | [直径70px](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-330) |

比べた範囲では、PCとスマホで無くなる要素や増える要素はありませんでした。スマホのヘッダーはPCと同じ並びです。ルールセットには「タップできる範囲をできるだけ上下に広く」と指示があります。ヘッダーを画面上に固定するかは、デザインから読み取れません。

## フォーム

お問い合わせフォームは入力画面のみです。PC・スマホ両方にあり、項目と必須区分は同じです。確認画面・送信完了画面・エラー表示のデザインはありません。練習用のため、実際の送信はしません。

| 項目 | 必須／任意 | サンプル | エラーの文言 |
|---|---|---|---|
| お名前 | 必須 | 例 )  山田　花子 | 指定なし |
| メールアドレス | 必須 | 例 )  hanako-yamada@example.com | 指定なし |
| 電話番号 | 任意（必須の表示なし） | 例 )  090-0000-0000 | 指定なし |
| お問い合わせ内容 | 必須 | 例 )  ご質問やお問い合わせ内容をご記入ください。 | 指定なし |
| プライバシーポリシーに同意する（チェックボックス） | 不明（必須の表示なし） | — | 指定なし |

ルールセットには次の見本があります。送信ボタンの無効時がどの条件で出るか（同意前か、必須項目の未入力時か）は書かれていません。

- 送信ボタン：通常・ホバー・無効時（#BDBDBD）
- 入力欄：通常・入力中とホバー時
- チェックボックス：未選択・選択済み・ホバー・クリック時
- 同意文：「プライバシーポリシー」をクリックするとモーダルで開き、縦にスクロールできる

PCとスマホの違いは寸法だけです（入力欄の高さ 50px / 56px、送信ボタンの幅 239px / 300px、同意文 18px / 16px）。エラーは項目の下に赤字で出します。電話番号は任意、同意は必須とし、同意するまで送信ボタンを無効にします。

## ページURL案

| ページ | URL案 |
|---|---|
| TOP（LP） | `/` |

**TOP（LP）**（`/`）

タイトル：TF Garden Salad（ガーデンサラダ）｜明治神宮前・原宿のサラダのお店

説明文：明治神宮前駅から徒歩5分のサラダのお店「TF Garden Salad」。食材はすべて国産、ベース・トッピング・ドレッシングの組み合わせは全400種類。ジムトレーナー監修の高たんぱくメニューやテイクアウトもご用意しています。

SNSで共有したときの画像は、MVの写真（[PC](https://www.figma.com/design/N1ZysTJQbDnLOipovXTBBl/?node-id=59-231)）を1200×630pxに切り抜くのがよさそうです。専用の画像はデザインにありません。プライバシーポリシーはモーダルなので、別ページのURLは作りません。練習用で実際に送信しないため、送信完了ページは作りません。
