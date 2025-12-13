import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ページ設定
const pageConfig = {
    'business-vertical': {
        title: 'ビジネス - 縦型動画',
        category: 'business',
        type: 'vertical'
    },
    'business-horizontal': {
        title: 'ビジネス - 横型動画',
        category: 'business',
        type: 'horizontal'
    },
    'variety-vertical': {
        title: 'バラエティ - 縦型動画',
        category: 'variety',
        type: 'vertical'
    },
    'variety-horizontal': {
        title: 'バラエティ - 横型動画',
        category: 'variety',
        type: 'horizontal'
    }
}

// 仮データ
const sampleWorks = [
    { id: 1, title: '作品サンプル 1', description: 'クライアント様向けプロモーション動画' },
    { id: 2, title: '作品サンプル 2', description: 'YouTube用コンテンツ' },
    { id: 3, title: '作品サンプル 3', description: 'SNS向けショート動画' },
    { id: 4, title: '作品サンプル 4', description: '企業PR動画' },
    { id: 5, title: '作品サンプル 5', description: 'イベント紹介動画' },
    { id: 6, title: '作品サンプル 6', description: '商品紹介動画' },
]

function VideoWorksPage() {
    const { category, type } = useParams()
    const pageKey = `${category}-${type}`
    const config = pageConfig[pageKey] || { title: '動画作品', type: 'horizontal' }

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
                className={`works-grid ${config.type}`}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {sampleWorks.map((work) => (
                    <motion.div
                        key={work.id}
                        className={`work-item ${config.type}`}
                        variants={fadeInUp}
                    >
                        <div className={`work-thumb-placeholder ${config.type}`}>
                            <span>作品 {work.id}</span>
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

export default VideoWorksPage
