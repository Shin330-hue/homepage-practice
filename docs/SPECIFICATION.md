# Homepage Practice - 仕様書

## 概要
ビデオクリエイター向けポートフォリオサイト

## 技術スタック
| 項目 | 技術 | バージョン |
|------|------|-----------|
| フレームワーク | React | 19.2.0 |
| ビルドツール | Vite | 7.2.4 |
| アニメーション | Framer Motion | 12.23.25 |
| アイコン | React Icons | 5.5.0 |
| デプロイ | Vercel | - |

## ディレクトリ構成
```
practice-homepage/
├── docs/               # ドキュメント
├── public/
│   └── img/            # 画像アセット
│       ├── hero-bg.png       # ヒーロー背景
│       ├── profile.png       # プロフィール画像
│       ├── thumb-vp.png      # 作品サムネイル（VP）
│       ├── thumb-mv.png      # 作品サムネイル（MV）
│       └── thumb-yt.png      # 作品サムネイル（YouTube）
├── src/
│   ├── App.jsx         # メインコンポーネント
│   ├── App.css         # スタイル
│   ├── main.jsx        # エントリーポイント
│   └── index.css       # ベーススタイル
├── index.html
├── package.json
└── vite.config.js
```

## ページ構成
1. **Hero** - フルスクリーンタイトル、キャッチコピー、CTAボタン
2. **About** - プロフィール画像、自己紹介文
3. **Works** - 作品カード3枚（VP、MV、YouTube）
4. **Skills** - スキルタグ（Premiere Pro, After Effects等）
5. **Contact** - SNSリンク（Twitter, YouTube, Email）
6. **Footer** - コピーライト

## デザイン仕様
- **テーマ**: ダークモード（#0a0a0e ベース）
- **アクセントカラー**:
  - Primary: #ff3366（ネオンピンク）
  - Secondary: #00f2ff（シアン）
- **フォント**: Outfit（Google Fonts）
- **アニメーション**: Framer Motionによるスクロール連動

## デプロイ
- **URL**: https://homepage-practice.vercel.app/
- **自動デプロイ**: GitHubのmainブランチへのpushで自動更新
