import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import VideoWorksPage from './pages/VideoWorksPage'
import ThumbnailWorksPage from './pages/ThumbnailWorksPage'
import PrivacyPolicy from './pages/PrivacyPolicy'

// スクロールをトップにリセットするコンポーネント
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        {/* Navigation */}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="logo">K's Movie Producet</Link>
          <div className="nav-links">
            <a href="#video">動画</a>
            <a href="#thumbnail">サムネイル</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:category/:type" element={<VideoWorksPage />} />
          <Route path="/thumbnail/:category" element={<ThumbnailWorksPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>

        {/* Back to Top Button */}
        <button
          className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="トップへ戻る"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <p>&copy; 2025 K's Movie Producet. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">プライバシーポリシー</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
