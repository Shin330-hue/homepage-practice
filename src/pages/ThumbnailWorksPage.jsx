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

// サムネイル作品データ（全10枚）
const thumbnailWorks = [
    { id: 1, image: '/img/thumb-work-01.png', title: 'あおり風デザイン' },
    { id: 2, image: '/img/thumb-work-02.png', title: 'ギラギラスタイル' },
    { id: 3, image: '/img/thumb-work-03.png', title: 'きたしょー様風' },
    { id: 4, image: '/img/thumb-work-04.png', title: '動画マーケティング攻略チャンネル様風' },
    { id: 5, image: '/img/thumb-work-05.png', title: 'ダラシメンホラーチャンネル様風' },
    { id: 6, image: '/img/thumb-work-06.png', title: 'ブラックな社長様風' },
    { id: 7, image: '/img/thumb-work-07.png', title: 'ゴンザレス様風' },
    { id: 8, image: '/img/thumb-work-08.png', title: '2分割デザイン' },
    { id: 9, image: '/img/thumb-work-09.png', title: '松井証券様風' },
    { id: 10, image: '/img/thumb-work-10.png', title: 'サムネイル制作' }
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
                {thumbnailWorks.map((work) => (
                    <motion.div
                        key={work.id}
                        className="work-item"
                        variants={fadeInUp}
                    >
                        <div className="work-thumb-wrapper">
                            <img src={work.image} alt={work.title} className="work-thumb-img" />
                        </div>
                        <div className="work-info">
                            <h3>{work.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default ThumbnailWorksPage
