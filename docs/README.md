# Video Creator Portfolio

動画クリエイター向けポートフォリオサイト

## 技術スタック

- **Vite** - ビルドツール
- **React** - UIライブラリ
- **Framer Motion** - アニメーション
- **React Icons** - アイコン

## セットアップ

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

## デプロイ

- **Vercel**: GitHubリポジトリを接続して自動デプロイ
- **GitHub Pages**: `npm run build` 後、`dist/`フォルダをデプロイ

## フォルダ構成

```
homepage-practice/
├── docs/              # ドキュメント
├── public/
│   └── img/           # 画像ファイル
├── src/
│   ├── App.jsx        # メインコンポーネント
│   ├── App.css        # スタイル
│   ├── main.jsx       # エントリーポイント
│   └── index.css      # グローバルスタイル
├── index.html
├── package.json
└── vite.config.js
```

## 必要な画像ファイル

`public/img/`に以下を配置:

- `hero-bg.png` - ヒーロー背景
- `profile.png` - プロフィール写真
- `thumb-vp.png` - 企業VP作品サムネイル
- `thumb-mv.png` - MV作品サムネイル
- `thumb-yt.png` - YouTube作品サムネイル
