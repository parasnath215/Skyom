import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          {/* Brand Col - Strictly Left Aligned */}
          <div className="footer-brand-col" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              style={{ display: 'inline-block', margin: 0, padding: 0 }}
            >
              <img 
                src="/assets/Skyom.webp" 
                alt="SKYOM Logo" 
                className="footer-logo-img" 
                width="140"
                height="48"
                style={{ marginLeft: 0, display: 'block' }}
              />
            </a>
            <p className="footer-tagline" style={{ textAlign: 'left', marginLeft: 0 }}>
              Building Dreams. Shaping Futures. Luxury residences and master-planned townships crafted with architectural mastery and enduring value.
            </p>
            <div className="footer-social-row" style={{ justifyContent: 'flex-start', marginLeft: 0 }}>
              <a href="#" className="social-circle-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-circle-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-circle-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-circle-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Projects Links */}
          <div style={{ textAlign: 'left' }}>
            <h4 className="footer-col-title">Portfolio</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="nav-link" style={{ padding: '0.2rem 0', fontSize: '0.88rem' }} onClick={() => onNavigate('project-city')}>
                  SKYOM City, Lucknow
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" style={{ padding: '0.2rem 0', fontSize: '0.88rem' }} onClick={() => onNavigate('project-floors')}>
                  SKYOM Floors, Delhi
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" style={{ padding: '0.2rem 0', fontSize: '0.88rem' }} onClick={() => onNavigate('project-ayodhya')}>
                  The Ayodhya Vision
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" style={{ padding: '0.2rem 0', fontSize: '0.88rem' }} onClick={() => onNavigate('project-dehradun')}>
                  The Dehradun Retreat
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div style={{ textAlign: 'left' }}>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="nav-link" style={{ padding: '0.2rem 0', fontSize: '0.88rem' }} onClick={() => onNavigate('about')}>
                  About Us
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" style={{ padding: '0.2rem 0', fontSize: '0.88rem' }} onClick={() => onNavigate('blog')}>
                  Blog & Articles
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" style={{ padding: '0.2rem 0', fontSize: '0.88rem' }} onClick={() => onNavigate('news')}>
                  News & Press
                </button>
              </li>
              <li>
                <button type="button" className="nav-link" style={{ padding: '0.2rem 0', fontSize: '0.88rem' }} onClick={() => onNavigate('contact')}>
                  Contact & Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Verification */}
          <div style={{ textAlign: 'left' }}>
            <h4 className="footer-col-title">Statutory RERA</h4>
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--color-border)',
              padding: '1.25rem',
              borderRadius: '4px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                <ShieldCheck size={18} />
                <span>RERA Registered Project</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-ivory)', fontFamily: 'var(--font-brand)', letterSpacing: '0.04em' }}>
                UPRERAPRJ600292/06/2025
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-dim)', marginTop: '0.4rem' }}>
                Registration dated 03.06.2025
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations Strip */}
        <div className="footer-offices-strip">
          <div className="office-info-item">
            <span className="office-tag">Corporate Headquarters:</span>
            <span>5th Floor, ROMS Code, SKYOM Corporate Office, Sushant Golf City, Lucknow</span>
          </div>

          <div className="office-info-item">
            <span className="office-tag">Township Site Office:</span>
            <span>State Highway 173 to Unnao, Near Raibareli Road, Mohanlalganj, Lucknow 226301</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-copyright-row">
          <div>© {new Date().getFullYear()} SKYOM Luxury Real Estate. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--color-text-dim)' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--color-text-dim)' }}>Terms of Service</a>
            <a href="#" style={{ color: 'var(--color-text-dim)' }}>RERA Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
