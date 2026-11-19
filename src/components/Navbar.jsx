import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Toggle flag: Set to true to re-enable SKYOM Aura & Nova in navbar
const SHOW_AURA_AND_NOVA = true;

export default function Navbar({ onNavigate, activePage, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(() => activePage ? activePage.startsWith('project') : false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure projects accordion is open if currently on a project page
  useEffect(() => {
    if (activePage && activePage.startsWith('project')) {
      setMobileProjectsOpen(true);
    }
  }, [activePage]);

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
                  {SHOW_AURA_AND_NOVA && (
                    <>
                      <button type="button" onClick={() => handleNavClick('project-aura')}>
                        SKYOM Aura
                      </button>
                      <button type="button" onClick={() => handleNavClick('project-nova')}>
                        SKYOM Nova
                      </button>
                    </>
                  )}
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
      <div 
        id="mobile-menu" 
        className={`mobile-menu ${mobileOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target.id === 'mobile-menu') {
            setMobileOpen(false);
          }
        }}
      >
        {/* Explicit Mobile Menu Close Button */}
        <button 
          type="button" 
          className="mobile-close-btn" 
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={24} />
        </button>

        <div className="mobile-menu-links">
          <button 
            className={`mobile-link ${activePage === 'home' ? 'active' : ''}`} 
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>

          {/* Grouped Projects Accordion */}
          <div className="mobile-nav-group">
            <button 
              type="button"
              className={`mobile-link mobile-dropdown-btn ${mobileProjectsOpen ? 'open' : ''} ${activePage.startsWith('project') ? 'active' : ''}`}
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              aria-expanded={mobileProjectsOpen}
            >
              <span>Projects</span>
              <span className="mobile-arrow">{mobileProjectsOpen ? '▴' : '▾'}</span>
            </button>

            <div className={`mobile-submenu-panel ${mobileProjectsOpen ? 'open' : ''}`}>
              {/* Delivered Projects */}
              <div className="mobile-group-section">
                <span className="mobile-group-header">Delivered Projects</span>
                <button 
                  className={`mobile-sublink ${activePage === 'project-floors' ? 'active' : ''}`}
                  onClick={() => handleNavClick('project-floors')}
                >
                  SKYOM Floors
                </button>
              </div>

              {/* Ongoing Projects */}
              <div className="mobile-group-section">
                <span className="mobile-group-header">Ongoing Projects</span>
                <button 
                  className={`mobile-sublink ${activePage === 'project-city' ? 'active' : ''}`}
                  onClick={() => handleNavClick('project-city')}
                >
                  SKYOM City
                </button>
                {SHOW_AURA_AND_NOVA && (
                  <>
                    <button 
                      className={`mobile-sublink ${activePage === 'project-aura' ? 'active' : ''}`}
                      onClick={() => handleNavClick('project-aura')}
                    >
                      SKYOM Aura
                    </button>
                    <button 
                      className={`mobile-sublink ${activePage === 'project-nova' ? 'active' : ''}`}
                      onClick={() => handleNavClick('project-nova')}
                    >
                      SKYOM Nova
                    </button>
                  </>
                )}
              </div>

              {/* The Future */}
              <div className="mobile-group-section">
                <span className="mobile-group-header">The Future</span>
                <button 
                  className={`mobile-sublink ${activePage === 'project-ayodhya' ? 'active' : ''}`}
                  onClick={() => handleNavClick('project-ayodhya')}
                >
                  Ayodhya
                </button>
                <button 
                  className={`mobile-sublink ${activePage === 'project-dehradun' ? 'active' : ''}`}
                  onClick={() => handleNavClick('project-dehradun')}
                >
                  Dehradun
                </button>
              </div>
            </div>
          </div>

          <button 
            className={`mobile-link ${activePage === 'about' ? 'active' : ''}`} 
            onClick={() => handleNavClick('about')}
          >
            About Us
          </button>
          <button 
            className={`mobile-link ${activePage === 'blog' ? 'active' : ''}`} 
            onClick={() => handleNavClick('blog')}
          >
            Blog
          </button>
          <button 
            className={`mobile-link ${activePage === 'news' ? 'active' : ''}`} 
            onClick={() => handleNavClick('news')}
          >
            News
          </button>
          <button 
            className={`mobile-link ${activePage === 'contact' ? 'active' : ''}`} 
            onClick={() => handleNavClick('contact')}
          >
            Contact Us
          </button>

          <button 
            className="mobile-cta-btn"
            onClick={() => onOpenEnquiry ? onOpenEnquiry('Mobile Menu CTA') : handleNavClick('contact')}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </>
  );
}
