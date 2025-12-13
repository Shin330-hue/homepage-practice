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
                        <h1>
                            <span>VIDEO & THUMBNAIL</span>
                            CREATOR
                        </h1>
                        <p>映像は"魂"を映し出す。<br />あなたのビジョンを、心に残る物語へ。</p>
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
                            はじめまして。K's Movie Producetです。<br />
                            ビジネス向けからバラエティまで、幅広いジャンルの動画編集とサムネイル制作を行っております。<br />
                        </p>
                        <p>
                            「ただ作る」のではなく、「伝わる」映像を。<br />
                            お客様のイメージを形にし、視聴者の心に響くコンテンツを提供いたします。
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
                            <Link to="/video/business-vertical" className="video-card">
                                <img src="/img/video-biz-vertical.png" alt="Business Vertical" className="video-thumb vertical" />
                                <p>縦型動画</p>
                            </Link>
                            <Link to="/video/business-horizontal" className="video-card">
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
                            <Link to="/video/variety-vertical" className="video-card">
                                <img src="/img/video-variety-vertical.png" alt="Variety Vertical" className="video-thumb vertical" />
                                <p>縦型動画</p>
                            </Link>
                            <Link to="/video/variety-horizontal" className="video-card">
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
                            <img src="/img/thumb-business.png" alt="Business Thumbnail" className="thumbnail-img" />
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
