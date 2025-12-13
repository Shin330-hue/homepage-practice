# 進捗メモ

## 2025-12-13

### 完了
- [x] デザインリファイン（白背景・クリーンデザイン）
- [x] Hero/Greetingセクションのレイアウト変更（左テキスト・右画像）
- [x] 全8枚の画像を生成・配置
  - Hero画像（作業風景）
  - プロフィール画像
  - 動画サムネイル4枚（ビジネス/バラエティ x 縦/横）
  - 作品サムネイル2枚（ビジネス/バラエティ）
- [x] Hero/Greetingのテキスト更新（岐阜ベースのメッセージ）
- [x] YouTube動画埋め込み機能実装
  - ビジネス横型ページに4本の動画を埋め込み
  - レスポンシブ対応（16:9比率維持）
- [x] ScrollToTop機能追加（ページ遷移時のスクロールリセット）
- [x] ルーティング修正（/video/:category/:type形式）
- [x] ビジネスサムネイル.jpg対応
- [x] Vercelへ自動デプロイ

## 2025-12-07

### 完了
- [x] GitHub Pagesでの静的HTMLデプロイ練習
- [x] Vite + React プロジェクトへ移行
- [x] ポートフォリオのベースデザイン作成
- [x] Framer Motion でアニメーション追加
- [x] React Icons でアイコン追加
- [x] ナビゲーション固定ヘッダー実装
- [x] React Router導入（7ページ構成）
- [x] 問い合わせフォーム実装

### 作業中
- [ ] 他の動画ページへのコンテンツ追加
- [ ] サムネイル作品ページのコンテンツ追加

### 未着手
- [ ] OGP画像生成・メタタグ設定
- [ ] 問い合わせフォームのバックエンド連携
- [ ] カスタムドメイン設定（オプション）

---

## サイト構成

### ページ一覧
- `/` - トップページ
- `/video/business/vertical` - ビジネス縦型動画
- `/video/business/horizontal` - ビジネス横型動画（YouTube埋め込み済み）
- `/video/variety/vertical` - バラエティ縦型動画
- `/video/variety/horizontal` - バラエティ横型動画
- `/thumbnail/business` - ビジネスサムネイル
- `/thumbnail/variety` - バラエティサムネイル

### YouTube動画（ビジネス横型）
1. 宣伝動画 - `BJw9yrK8RU0`
2. Healty Life様サンプル - `w8TAWbs4UoM`
3. 250801 ブイスト様 - `w_O-lvkn3OA`
4. サムネ集 25 11 14 - `dHPY-CRSttM`

---

## メモ

### Vercelデプロイ
- GitHubへpush → Vercel自動デプロイ
- デプロイURL: https://homepage-practice.vercel.app （または類似）

### 追加したライブラリ
```bash
npm install framer-motion react-icons react-router-dom
```

### 配置済み画像
`public/img/`ディレクトリ:
- hero-new.png
- profile-new.png
- video-biz-vertical.png
- video-biz-horizontal.png
- video-variety-vertical.png
- video-variety-horizontal.png
- thumb-business.jpg
- thumb-variety.png

### 技術スタック
- **フレームワーク**: React (Vite)
- **ルーティング**: React Router v6
- **アニメーション**: Framer Motion
- **スタイリング**: Vanilla CSS
- **デプロイ**: Vercel
