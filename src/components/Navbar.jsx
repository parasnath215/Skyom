import React, { useState, useEffect } from 'react';

export default function Navbar({ onNavigate, activePage, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <>
      <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          <img 
            src="/assets/Skyom.webp" 
            alt="SKYOM Logo" 
            className="nav-logo-img" 
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <button 
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>

          {/* Projects Multi-Level Dropdown */}
          <div className="nav-dropdown-wrapper">
            <span className={`nav-link dropdown-trigger ${activePage.startsWith('project') ? 'active' : ''}`}>
              Projects <span className="arrow-down">▾</span>
            </span>
            <div className="dropdown-menu">
              <div className="dropdown-item has-submenu">
                <button type="button" onClick={() => handleNavClick('project-floors')}>
                  <span>Delivered Projects</span> <span className="arrow-right">▸</span>
                </button>
                <div className="submenu">
                  <button type="button" onClick={() => handleNavClick('project-floors')}>
                    SKYOM Floors
                  </button>
                </div>
              </div>

              <div className="dropdown-item has-submenu">
                <button type="button" onClick={() => handleNavClick('project-city')}>
                  <span>Ongoing Projects</span> <span className="arrow-right">▸</span>
                </button>
                <div className="submenu">
                  <button type="button" onClick={() => handleNavClick('project-city')}>
                    SKYOM City
                  </button>
                </div>
              </div>

              <div className="dropdown-item has-submenu">
                <button type="button">
                  <span>The Future</span> <span className="arrow-right">▸</span>
                </button>
                <div className="submenu">
                  <button type="button" onClick={() => handleNavClick('project-ayodhya')}>
                    Ayodhya
                  </button>
                  <button type="button" onClick={() => handleNavClick('project-dehradun')}>
                    Dehradun
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button 
            className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About Us
          </button>

          <button 
            className={`nav-link ${activePage === 'blog' ? 'active' : ''}`}
            onClick={() => handleNavClick('blog')}
          >
            Blog
          </button>

          <button 
            className={`nav-link ${activePage === 'news' ? 'active' : ''}`}
            onClick={() => handleNavClick('news')}
          >
            News
          </button>

          <button 
            className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact Us
          </button>
        </div>

        {/* CTA Button */}
        <button 
          className="nav-cta-btn"
          onClick={() => onOpenEnquiry ? onOpenEnquiry('Navbar CTA') : handleNavClick('contact')}
        >
          GET IN TOUCH
        </button>

        {/* Mobile Toggle */}
        <button 
          id="nav-toggle" 
          className={`nav-toggle ${mobileOpen ? 'active' : ''}`} 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
        <div className="mobile-menu-links">
          <button className="mobile-link" onClick={() => handleNavClick('home')}>Home</button>
          <button className="mobile-link" onClick={() => handleNavClick('project-city')}>SKYOM City</button>
          <button className="mobile-link" onClick={() => handleNavClick('project-floors')}>SKYOM Floors</button>
          <button className="mobile-link" onClick={() => handleNavClick('project-ayodhya')}>Ayodhya</button>
          <button className="mobile-link" onClick={() => handleNavClick('project-dehradun')}>Dehradun</button>
          <button className="mobile-link" onClick={() => handleNavClick('about')}>About Us</button>
          <button className="mobile-link" onClick={() => handleNavClick('blog')}>Blog</button>
          <button className="mobile-link" onClick={() => handleNavClick('news')}>News</button>
          <button className="mobile-link" onClick={() => handleNavClick('contact')}>Contact Us</button>
        </div>
      </div>
    </>
  );
}
