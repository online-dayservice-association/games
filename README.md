# あそび・脳トレ素材集（games）

一般社団法人オンラインデイサービス協会の「あそび・脳トレ素材集」。
オンラインデイサービスの時間に、画面共有で一緒に楽しむための HTML 素材集です。

- 公開URL: https://game.onlinedayservice.com/
- ホスティング: GitHub Pages（`main` / `(root)`）
- 独自ドメイン: `game.onlinedayservice.com`（CNAME ファイルで設定。**消さない／変更しない**）
- すべて静的（HTML/CSS/JS のみ）。サーバ処理なし。

## 構成

```
games/
├─ index.html              … メニュー（全ゲーム一覧）
├─ CNAME                   … game.onlinedayservice.com
├─ wakamono-nayami/
│   └─ index.html          … 「若者の悩みに答えよう」
└─ （以降、ゲームごとにフォルダを追加）
```

## ゲームの追加方法

1. `ゲーム名/index.html` のフォルダを追加（単体HTML推奨）。
2. ルートの `index.html`（メニュー）にカードを1枚足す。
3. `main` に push すると GitHub Pages が自動で反映。

## 方針

- 協会は**中立的な業界団体**。特定事業者（長老大学等）の固有名は出さない。
- トーン：静かで誠実。点数化・記憶力の優劣は前面に出さず、「会話とつながりのきっかけ」として提供する。
- すべて無料・インストール不要（PC／スマホ／タブレットのブラウザで動く）。
