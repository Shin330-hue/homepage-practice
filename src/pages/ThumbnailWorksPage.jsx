import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ページ設定
const pageConfig = {
    'business': {
        title: 'サムネイル - ビジネス',
    },
    'variety': {
        title: 'サムネイル - バラエティ',
    }
}

// 仮データ
const sampleThumbnails = [
    { id: 1, title: 'サムネイルサンプル 1', description: 'YouTube動画用サムネイル' },
    { id: 2, title: 'サムネイルサンプル 2', description: 'SNS投稿用画像' },
    { id: 3, title: 'サムネイルサンプル 3', description: 'バナー広告デザイン' },
    { id: 4, title: 'サムネイルサンプル 4', description: 'ライブ配信用サムネイル' },
    { id: 5, title: 'サムネイルサンプル 5', description: 'チャンネルアート' },
    { id: 6, title: 'サムネイルサンプル 6', description: 'プロモーション画像' },
]

function ThumbnailWorksPage() {
    const { category } = useParams()
    const config = pageConfig[category] || { title: 'サムネイル作品' }

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    return (
        <div className="works-page">
            <div className="works-header">
                <Link to="/" className="back-link">← トップに戻る</Link>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {config.title}
                </motion.h1>
            </div>

            <motion.div
                className="works-grid thumbnail"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {sampleThumbnails.map((work) => (
                    <motion.div
                        key={work.id}
                        className="work-item thumbnail"
                        variants={fadeInUp}
                    >
                        <div className="work-thumb-placeholder horizontal">
                            <span>サムネ {work.id}</span>
                        </div>
                        <div className="work-info">
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default ThumbnailWorksPage
