# K's Movie Producet Portfolio

映像制作クリエイターのポートフォリオサイト - 岐阜を拠点に、ストーリーのある映像制作を提供

## 🎬 デモ

- **Vercel**: [https://homepage-practice.vercel.app](https://homepage-practice.vercel.app)
- **ローカル**: http://localhost:5173

## ✨ 特徴

- 📱 フルレスポンシブデザイン
- 🎥 YouTube動画埋め込み対応
- ✨ Framer Motionによるスムーズなアニメーション
- 🧭 React Router v6による7ページ構成
- 📝 問い合わせフォーム実装
- 🔝 ページ遷移時の自動スクロールリセット

## 🛠 技術スタック

- **Vite** - 高速ビルドツール
- **React** - UIライブラリ
- **React Router** - ルーティング
- **Framer Motion** - アニメーション
- **Vanilla CSS** - スタイリング
- **Vercel** - デプロイ

## 📦 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プレビュー
npm run preview
```

## 📁 フォルダ構成

```
homepage-practice/
├── docs/                    # ドキュメント
│   ├── Progress.md          # 進捗管理
│   ├── README.md            # プロジェクト概要
│   └── Specification.md     # 仕様書
├── public/
│   └── img/                 # 画像ファイル
│       ├── hero-new.png
│       ├── profile-new.png
│       ├── video-*.png      # 動画サムネイル
│       └── thumb-*.jpg/png  # 作品サムネイル
├── src/
│   ├── components/          # 再利用可能コンポーネント
│   │   └── ContactForm.jsx
│   ├── pages/               # ページコンポーネント
│   │   ├── Home.jsx
│   │   ├── VideoWorksPage.jsx
│   │   └── ThumbnailWorksPage.jsx
│   ├── App.jsx              # メインコンポーネント
│   ├── App.css              # メインスタイル
│   ├── main.jsx             # エントリーポイント
│   └── index.css            # グローバルスタイル
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 ページ構成

| パス | 説明 |
|------|------|
| `/` | トップページ |
| `/video/business/vertical` | ビジネス縦型動画 |
| `/video/business/horizontal` | ビジネス横型動画（YouTube埋め込み） |
| `/video/variety/vertical` | バラエティ縦型動画 |
| `/video/variety/horizontal` | バラエティ横型動画 |
| `/thumbnail/business` | ビジネスサムネイル |
| `/thumbnail/variety` | バラエティサムネイル |

## 🚀 デプロイ

### Vercel（推奨）
1. GitHubにプッシュ
2. Vercelが自動的にビルド・デプロイ
3. プレビューURLで確認

### その他のプラットフォーム
```bash
npm run build
# dist/ フォルダをデプロイ
```

## 📝 ライセンス

© 2025 K's Movie Producet. All rights reserved.
