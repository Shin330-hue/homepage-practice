import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <header className="hero">
                <div className="hero-container">
                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1>映像は"魂"を映し出す</h1>
                        <p>
                            映像には、言葉を超えて心を動かす力がある。<br />
                            岐阜を拠点に、ストーリーのある映像制作を行っています。<br />
                            撮影から編集まで、一貫したクリエイティブを提供します。
                        </p>
                        <a href="#contact" className="btn-contact">お問い合わせ →</a>
                    </motion.div>
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src="/img/hero-new.png" alt="Creative Workspace" />
                    </motion.div>
                </div>
            </header>

            {/* Greeting Section */}
            <section className="greeting">
                <div className="greeting-container">
                    <motion.div
                        className="greeting-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>ご挨拶</h2>
                        <p>
                            私は、仕事を「作業」ではなく「ワクワクする体験」に変えることを大切にしています。<br />
                            個人の興味や情熱を尊重し、想いをカタチにするお手伝いをさせていただきます。<br />
                            あなたのその思い、映像というカタチにしましょう。
                        </p>
                    </motion.div>

                    <motion.div
                        className="greeting-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img src="/img/profile-new.png" alt="Profile" />
                    </motion.div>
                </div>
            </section>

            {/* Video Section */}
            <section className="video-section" id="video">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    動画編集
                </motion.h2>

                <div className="video-grid">
                    {/* Business Column */}
                    <motion.div
                        className="video-column"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="column-title">ビジネス</h3>
                        <div className="video-items">
                            <Link to="/video/business/vertical" className="video-card">
                                <img src="/img/video-biz-vertical.png" alt="Business Vertical" className="video-thumb vertical" />
                                <p>縦型動画</p>
                            </Link>
                            <Link to="/video/business/horizontal" className="video-card">
                                <img src="/img/video-biz-horizontal.png" alt="Business Horizontal" className="video-thumb horizontal" />
                                <p>横型動画</p>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Variety Column */}
                    <motion.div
                        className="video-column"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="column-title">バラエティ</h3>
                        <div className="video-items">
                            <Link to="/video/variety/vertical" className="video-card">
                                <img src="/img/video-variety-vertical.png" alt="Variety Vertical" className="video-thumb vertical" />
                                <p>縦型動画</p>
                            </Link>
                            <Link to="/video/variety/horizontal" className="video-card">
                                <img src="/img/video-variety-horizontal.png" alt="Variety Horizontal" className="video-thumb horizontal" />
                                <p>横型動画</p>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Thumbnail Section */}
            <section className="thumbnail-section" id="thumbnail">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    サムネイル制作
                </motion.h2>

                <div className="thumbnail-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/thumbnail/business" className="thumbnail-card">
                            <img src="/img/thumb-business.jpg" alt="Business Thumbnail" className="thumbnail-img" />
                            <p>ビジネス向けサムネイル</p>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link to="/thumbnail/variety" className="thumbnail-card">
                            <img src="/img/thumb-variety.png" alt="Variety Thumbnail" className="thumbnail-img" />
                            <p>バラエティ向けサムネイル</p>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactForm />
        </>
    )
}

export default Home
