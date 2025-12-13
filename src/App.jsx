import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import VideoWorksPage from './pages/VideoWorksPage'
import ThumbnailWorksPage from './pages/ThumbnailWorksPage'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
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
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 K's Movie Producet. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
