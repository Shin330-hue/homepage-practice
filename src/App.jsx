import './App.css'

function App() {
  return (
    <>
      {/* ヒーロー */}
      <header className="hero">
        <h1>YOUR NAME</h1>
        <p className="tagline">Video Creator / Editor</p>
        <a href="#works" className="cta">View Works</a>
      </header>

      {/* 自己紹介 */}
      <section id="about">
        <h2>About</h2>
        <div className="about">
          <div className="about-img">👤</div>
          <div className="about-text">
            <p>映像クリエイターとして活動しています。企業VP、MV、YouTube動画など幅広く制作しています。</p>
            <p>映像で「伝わる」を形にすることを大切にしています。</p>
          </div>
        </div>
      </section>

      {/* 作品 */}
      <section id="works">
        <h2>Works</h2>
        <div className="works-grid">
          <div className="work-item">
            <div className="work-thumbnail">▶</div>
            <div className="work-info">
              <h3>企業VP - Sample Inc.</h3>
              <p>会社紹介映像</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-thumbnail">▶</div>
            <div className="work-info">
              <h3>MV - "Song Title"</h3>
              <p>アーティスト名</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-thumbnail">▶</div>
            <div className="work-info">
              <h3>YouTube動画</h3>
              <p>チャンネル用コンテンツ</p>
            </div>
          </div>
        </div>
      </section>

      {/* スキル */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill-tag">Premiere Pro</span>
          <span className="skill-tag">After Effects</span>
          <span className="skill-tag">DaVinci Resolve</span>
          <span className="skill-tag">Photoshop</span>
          <span className="skill-tag">撮影</span>
          <span className="skill-tag">カラーグレーディング</span>
        </div>
      </section>

      {/* コンタクト */}
      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-links">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 YOUR NAME. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
