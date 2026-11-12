import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ZoomIn, 
  MapPin, 
  Layers, 
  Building2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Sun, 
  Moon,
  Send,
  Trees,
  Dumbbell,
  Smile,
  Compass,
  Zap
} from 'lucide-react';

export default function ProjectAuraDetail({ onBack, onOpenEnquiry, onOpenLightbox }) {
  const [viewMode, setViewMode] = useState('night'); // 'night' or 'day'

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Single Curated Façade Option: Tans & Beiges
  const facadeInfo = {
    name: 'Option 03: Tans & Beiges',
    title: 'Signature Mediterranean Façade (Tans & Beiges)',
    description: 'Signature Mediterranean palette with rich golden tans, light stone beiges, and classical nighttime illumination.',
    badge: 'Signature Choice',
    dayImg: '/assets/Skyom Aura/option-3-day.webp',
    nightImg: '/assets/Skyom Aura/skyom-aura-hero.webp'
  };

  const currentOptionImg = viewMode === 'day' ? facadeInfo.dayImg : facadeInfo.nightImg;

  // Curated Interior Room Photos (Generated to match Mediterranean Neo-Classical 2 BHK Floor Plan)
  const galleryImages = [
    {
      title: 'Mediterranean Drawing Lounge',
      category: 'Living / Drawing Hall',
      desc: 'Spacious Mediterranean neo-classical living space with classical arch details, warm beige tones, and natural morning daylight.',
      src: '/assets/Skyom Aura/aura-living-room.webp'
    },
    {
      title: 'Serene Master Suite',
      category: 'Master Bedroom',
      desc: 'Refined master bedroom with tailored headboard mouldings, natural oak wood flooring, soft cove lighting, and private sit-out access.',
      src: '/assets/Skyom Aura/aura-master-bedroom.webp'
    },
    {
      title: 'Contemporary Modular Kitchen',
      category: 'Modular Kitchen & Breakfast Bar',
      desc: 'Designer modular kitchen with ivory and reeded oak cabinetry, Calacatta quartz countertops, and built-in chimney.',
      src: '/assets/Skyom Aura/aura-kitchen.webp'
    },
    {
      title: 'Private Sit-Out Balcony',
      category: 'Balcony & Veranda',
      desc: 'Classic wrought iron balustrade veranda opening to expansive fresh air and lush landscaped green surroundings.',
      src: '/assets/Skyom Aura/aura-balcony.webp'
    }
  ];

  // Comprehensive Project Amenities (No Swimming Pool)
  const amenities = [
    {
      title: 'Landscaped Garden & Parks',
      desc: 'Manicured green lawns, shaded walking pathways, and tranquil sitting pavilions.',
      icon: Trees
    },
    {
      title: 'Modern Fitness Gym',
      desc: 'Fully equipped fitness center with cardio equipment, free weights, and stretching zone.',
      icon: Dumbbell
    },
    {
      title: 'Children’s Play Arena',
      desc: 'Dedicated safe outdoor play turf with interactive activity sets and family seating.',
      icon: Smile
    },
    {
      title: 'Residents Community Lounge',
      desc: 'Multi-purpose clubhouse hall for family gatherings, indoor recreation, and celebrations.',
      icon: Building2
    },
    {
      title: '24/7 Multi-Tier Security',
      desc: 'Gated perimeter with CCTV surveillance, security guard posts, and access control.',
      icon: ShieldCheck
    },
    {
      title: 'Dual High-Speed Elevators',
      desc: 'Modern passenger and service elevators with 100% power backup for smooth vertical movement.',
      icon: Zap
    },
    {
      title: 'Dedicated Resident Parking',
      desc: 'Organized surface and stilt vehicle parking bays with seamless internal road circulation.',
      icon: Compass
    },
    {
      title: 'Doorstep Retail Conveniences',
      desc: 'Ground-level street-facing retail commercial suites for daily groceries and essential services.',
      icon: Sparkles
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero Header with Rich Black Gradient & Text Placed at Bottom Like Skyom City */}
      <section className="project-hero-section" style={{ position: 'relative', width: '100%', minHeight: '65vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="/assets/Skyom Aura/skyom-aura-hero.webp"
          alt="SKYOM Aura - Neo-Classical Residences"
          className="project-hero-bg-img"
        />
        <div 
          className="project-hero-overlay" 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(8,8,8,0.05) 0%, rgba(8,8,8,0.3) 32%, rgba(8,8,8,0.8) 70%, rgba(8,8,8,0.98) 100%)',
            pointerEvents: 'none'
          }} 
        />

        <div className="container project-hero-container">
          <div className="project-hero-top-row">
            <div className="section-tag" style={{ color: 'var(--color-gold-light)', margin: 0 }}>
              Ongoing Residential Landmark • Mohanlalganj, Lucknow
            </div>
            <span className="project-hero-rera-badge">
              UP RERA: UPRERAPRJ600292/06/2025
            </span>
          </div>

          <h1 className="project-hero-title">
            SKYOM <span className="accent-serif">Aura</span>
          </h1>

          <p className="project-hero-desc">
            Mediterranean neo-classical residences blending arched colonnades, warm masonry finishes, and boutique commercial suites in Mohanlalganj, Lucknow.
          </p>

          <div className="project-hero-cta-row">
            <button 
              onClick={() => onOpenEnquiry && onOpenEnquiry('SKYOM Aura (Lucknow)')}
              className="btn-gold"
            >
              <span>Enquire for Allotment</span>
              <ArrowUpRight size={15} />
            </button>
            <a 
              href="#gallery"
              className="btn-outline-gold"
            >
              <span>View Interior Gallery</span>
            </a>
            <a 
              href="#amenities"
              className="btn-outline-gold"
            >
              <span>Project Amenities</span>
            </a>
          </div>
        </div>
      </section>

      {/* Façade Design Showcase - Tans & Beiges with Day / Night Toggle */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(180deg, #0e0e0e 0%, #12110e 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Architectural Aesthetics</div>
            <h2 className="section-title">
              Façade Design & <span className="accent-serif">Illumination</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Experience the signature Mediterranean palette in Tans & Beiges under natural daylight and dusk illumination.
            </p>
          </div>

          {/* Preview Card with Day / Night Toggle */}
          <div style={{
            background: '#141311',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            maxWidth: '1080px',
            margin: '0 auto'
          }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '480px', maxHeight: '680px', overflow: 'hidden', background: '#080808' }}>
              <img
                src={currentOptionImg}
                alt={facadeInfo.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer', transition: 'transform 0.4s ease' }}
                onClick={() => onOpenLightbox(currentOptionImg, facadeInfo.name)}
                title="Click to view high-resolution"
              />

              {/* Day / Night Floating Switcher */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                background: 'rgba(14, 14, 14, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--color-border)',
                borderRadius: '30px',
                padding: '4px',
                gap: '4px',
                zIndex: 3
              }}>
                <button
                  onClick={() => setViewMode('day')}
                  style={{
                    background: viewMode === 'day' ? 'var(--color-gold)' : 'transparent',
                    color: viewMode === 'day' ? '#0a0a0a' : 'var(--color-ivory-muted)',
                    border: 'none',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Sun size={13} />
                  <span>Day View</span>
                </button>
                <button
                  onClick={() => setViewMode('night')}
                  style={{
                    background: viewMode === 'night' ? 'var(--color-gold)' : 'transparent',
                    color: viewMode === 'night' ? '#0a0a0a' : 'var(--color-ivory-muted)',
                    border: 'none',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Moon size={13} />
                  <span>Night Dusk</span>
                </button>
              </div>

              {/* Floating Badge */}
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', zIndex: 3 }}>
                <span className="badge-status ongoing" style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(6px)' }}>
                  <Sparkles size={12} style={{ marginRight: 4 }} />
                  {facadeInfo.badge}
                </span>
              </div>

              {/* Zoom hint */}
              <div 
                className="zoom-hint-badge"
                onClick={() => onOpenLightbox(currentOptionImg, facadeInfo.name)}
                style={{ bottom: '1.25rem', right: '1.25rem', top: 'auto' }}
              >
                <ZoomIn size={13} />
                <span>Zoom In (3306px Res)</span>
              </div>
            </div>

            {/* Description Footer */}
            <div style={{ padding: '1.5rem 2rem', background: '#100f0d', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--color-ivory)', marginBottom: '0.3rem' }}>
                  {facadeInfo.title}
                </h4>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', maxWidth: '700px', lineHeight: 1.6 }}>
                  {facadeInfo.description}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  className="btn-outline-gold"
                  onClick={() => onOpenLightbox(currentOptionImg, facadeInfo.name)}
                  style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
                >
                  <ZoomIn size={14} />
                  <span>Fullscreen View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Interior Room Gallery Section */}
      <section className="residence-gallery-section" id="gallery">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Interior Living Spaces</div>
            <h2 className="section-title">
              Crafted Interiors & <span className="accent-serif">Private Living</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Step inside the Mediterranean-inspired residences of SKYOM Aura — thoughtfully planned with expansive living spaces, serene master suites, contemporary modular kitchens, and sunlit private balconies.
            </p>
          </div>

          <div className="residence-gallery-grid">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="gallery-card-item"
                onClick={() => onOpenLightbox(img.src, `${img.title} — SKYOM Aura`)}
                title="Click to view full screen"
              >
                <div className="gallery-img-wrap">
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <div className="gallery-overlay-gradient" />
                  <div className="gallery-card-content">
                    <div className="gallery-card-text">
                      <span className="gallery-room-tag">{img.category}</span>
                      <h3 className="gallery-room-title">{img.title}</h3>
                      <p className="gallery-room-desc">{img.desc}</p>
                    </div>
                    <div className="gallery-zoom-btn">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Project Amenities Section (No Swimming Pool) */}
      <section className="amenities-section" id="amenities">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Curated Project Amenities</div>
            <h2 className="section-title">
              Thoughtfully Designed for <span className="accent-serif">Comfort & Community</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              SKYOM Aura provides an independent ecosystem of wellness, recreation, and essential conveniences located in Mohanlalganj, Lucknow.
            </p>
          </div>

          <div className="amenities-grid">
            {amenities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="amenity-card-item">
                  <div className="amenity-icon-ring">
                    <IconComp size={24} />
                  </div>
                  <h4 className="amenity-item-title">{item.title}</h4>
                  <p className="amenity-item-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Building Highlights & Engineering Features */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 6.5rem) 0', borderTop: '1px solid var(--color-border)', background: '#100f0d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <div className="section-tag">Design Standards</div>
            <h2 className="section-title">
              Crafted for Comfort, <span className="accent-serif">Engineered for Life</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Every aspect of SKYOM Aura has been thoughtfully planned to balance luxury aesthetics with high-efficiency urban living.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#161513', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                <Building2 size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.6rem' }}>
                Neo-Classical Arched Architecture
              </h4>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Grand lower-level arched colonnades inspired by Mediterranean palaces, adorned with ambient architectural facade lighting and decorative moldings.
              </p>
            </div>

            <div style={{ background: '#161513', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                <Layers size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.6rem' }}>
                Wide 1500 mm Central Corridors
              </h4>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Extra-wide 5-foot hallways engineered for natural cross-ventilation, dual elevator vestibules, and safe ramp accessibility.
              </p>
            </div>

            <div style={{ background: '#161513', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                <ShieldCheck size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.6rem' }}>
                Exclusive Residential Amenities
              </h4>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                An independent luxury landmark located in Mohanlalganj, Lucknow. Residents enjoy landscaped gardens, modern fitness gym, 24/7 multi-tier security, and doorstep conveniences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry / Consultation Section */}
      <section style={{ padding: 'clamp(5rem, 8vw, 7.5rem) 0', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Direct Priority Allotment</div>
            <h2 className="section-title">
              Inquire for <span className="accent-serif">SKYOM Aura</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Register your interest for unit availability, payment plans, and architectural presentations in Mohanlalganj, Lucknow.
            </p>
          </div>

          <div className="contact-form-box">
            {formSubmitted ? (
              <div className="form-success-box" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="var(--color-delivered)" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  Enquiry Logged for SKYOM Aura
                </h3>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Our residential advisor will connect with you at <strong>{formData.phone}</strong> regarding available residences and commercial retail suites.
                </p>
                <button 
                  className="btn-outline-gold"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', message: '' });
                  }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group-field">
                  <label className="form-field-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="form-input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group-field">
                    <label className="form-field-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99999 99999"
                      className="form-input-field"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group-field">
                    <label className="form-field-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      className="form-input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Specific Preference / Questions</label>
                  <textarea
                    rows={3}
                    placeholder="I am interested in residence allotment / ground floor retail shop..."
                    className="form-textarea-field"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-gold" 
                  style={{ width: '100%', marginTop: '0.5rem' }}
                  disabled={formLoading}
                >
                  {formLoading ? (
                    <span>Registering Interest...</span>
                  ) : (
                    <>
                      <span>Submit SKYOM Aura Enquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
