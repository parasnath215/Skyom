import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ZoomIn, 
  Download, 
  Send,
  Building2,
  ShieldCheck,
  Trees,
  Dumbbell,
  Smile,
  Compass,
  Zap,
  Sparkles,
  Layers
} from 'lucide-react';

export default function ProjectNovaDetail({ onBack, onOpenEnquiry, onOpenLightbox }) {
  // Main Consultation Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Curated Interior Room Photos (Generated for Modern High-Rise Tower Residences)
  const galleryImages = [
    {
      title: 'Panoramic High-Rise Living Lounge',
      category: 'Living Room Lounge',
      desc: 'Airy and modern living space featuring expansive floor-to-ceiling windows, open horizon vistas, and warm cove illumination.',
      src: '/assets/Skyom Nova/nova-living-lounge.webp'
    },
    {
      title: 'Sophisticated Master Suite',
      category: 'Master Bedroom',
      desc: 'Serene high-rise bedroom with panoramic glass, warm wood acoustic paneling, tailored linens, and designer pendant fixtures.',
      src: '/assets/Skyom Nova/nova-bedroom.webp'
    },
    {
      title: 'Open-Concept Designer Kitchen',
      category: 'Kitchen & Breakfast Bar',
      desc: 'Contemporary modular kitchen with waterfall Calacatta marble island, graphite & oak cabinetry, and integrated appliances.',
      src: '/assets/Skyom Nova/nova-kitchen.webp'
    },
    {
      title: 'Skyline Balcony Terrace',
      category: 'Balcony Lounge',
      desc: 'Private high-rise balcony with frameless glass railings overlooking sweeping views and lush green surroundings.',
      src: '/assets/Skyom Nova/nova-balcony.webp'
    }
  ];

  // Comprehensive Project Amenities (No Swimming Pool)
  const amenities = [
    {
      title: 'Landscaped Green Park',
      desc: 'Lush open gardens with jogging tracks, outdoor benches, and manicured green lawns.',
      icon: Trees
    },
    {
      title: 'Modern Fitness Center',
      desc: 'High-tech gym equipped with top-tier cardio machines, strength stations, and free weights.',
      icon: Dumbbell
    },
    {
      title: 'Children’s Play Arena',
      desc: 'Secure play area with rubberized safety flooring, slides, and kids recreational equipment.',
      icon: Smile
    },
    {
      title: 'Community Clubhouse Lounge',
      desc: 'Elegant indoor multipurpose lounge for community gatherings, meetings, and celebrations.',
      icon: Building2
    },
    {
      title: '24/7 Gated Security & CCTV',
      desc: 'Round-the-clock security surveillance, RFID access checkpoints, and perimeter monitoring.',
      icon: ShieldCheck
    },
    {
      title: 'Dual High-Speed Elevators',
      desc: 'High-speed automatic elevators with dedicated power backup for seamless vertical transit.',
      icon: Zap
    },
    {
      title: 'Organized Vehicle Parking',
      desc: 'Designated resident and visitor parking bays with smooth driveway circulation.',
      icon: Compass
    },
    {
      title: 'EV Charging Provisions',
      desc: 'Future-ready electric vehicle charging infrastructure for modern eco-conscious living.',
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
          src="/assets/Skyom Nova/skyom-nova-tower.webp"
          alt="SKYOM Nova - Modern High-Rise Tower"
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
              Ongoing High-Rise Landmark • Mohanlalganj, Lucknow
            </div>
            <span className="project-hero-rera-badge">
              UP RERA: UPRERAPRJ960284/10/2026
            </span>
          </div>

          <h1 className="project-hero-title">
            SKYOM <span className="accent-serif">Nova</span>
          </h1>

          <p className="project-hero-desc">
            A towering G+9 modern classical residential landmark rising gracefully in Mohanlalganj, Lucknow. Thoughtfully designed modern residences with sweeping skyline vistas, dual elevators, and full UP RERA statutory backing.
          </p>

          <div className="project-hero-cta-row">
            <button 
              onClick={() => onOpenEnquiry && onOpenEnquiry('SKYOM Nova (Lucknow)')}
              className="btn-gold"
            >
              <span>Schedule a Site Tour</span>
              <ArrowUpRight size={15} />
            </button>
            <a 
              href="/assets/Skyom Nova/Skyom Nova_RERA_Reg Cert.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={15} />
              <span>Download UP RERA Certificate (PDF)</span>
            </a>
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
              <span>Tower Amenities</span>
            </a>
          </div>
        </div>
      </section>

      {/* Tower Architecture & Visual Elevation Showcase */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(180deg, #0e0e0e 0%, #12110e 100%)' }}>
        <div className="container" style={{ maxWidth: '1050px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Architectural Design</div>
            <h2 className="section-title">
              Modern Classical Symmetry with <span className="accent-serif">Illuminated Facades</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0', maxWidth: '750px' }}>
              Standing nine levels tall, SKYOM Nova pairs classical architectural pilasters, decorative cornices, and ambient architectural lighting with contemporary structural safety.
            </p>
          </div>

          <div 
            style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              background: '#0a0a0a',
              cursor: 'pointer',
              maxWidth: '850px',
              margin: '0 auto',
              boxShadow: '0 20px 45px rgba(0,0,0,0.6)'
            }}
            onClick={() => onOpenLightbox('/assets/Skyom Nova/VIEW 1.png', 'SKYOM Nova - Modern Classical High-Rise Tower Render')}
            title="Click to view ultra-high-resolution render"
          >
            <img
              src="/assets/Skyom Nova/skyom-nova-tower.webp"
              alt="SKYOM Nova - Modern High-Rise Tower"
              style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
            />
            <div 
              className="zoom-hint-badge"
              style={{ bottom: '1.25rem', right: '1.25rem' }}
            >
              <ZoomIn size={14} />
              <span>Click to Enlarge Render (Ultra Res)</span>
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
              High-Rise Living & <span className="accent-serif">Panoramic Vistas</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Explore the modern residences of SKYOM Nova — crafted with open layouts, expansive glass horizons, tailored bedroom spaces, designer kitchens, and scenic balcony terraces.
            </p>
          </div>

          <div className="residence-gallery-grid">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="gallery-card-item"
                onClick={() => onOpenLightbox(img.src, `${img.title} — SKYOM Nova`)}
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
            <div className="section-tag" style={{ justifyContent: 'center' }}>Tower Amenities & Lifestyle</div>
            <h2 className="section-title">
              Modern Infrastructure for <span className="accent-serif">Elevated Urban Living</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              SKYOM Nova offers an independent high-rise living ecosystem equipped with wellness, security, and recreational facilities in Mohanlalganj, Lucknow.
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
            <div className="section-tag">Engineering Excellence</div>
            <h2 className="section-title">
              High-Rise Engineering, <span className="accent-serif">Enduring Quality</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Built according to rigorous structural codes and modern architectural benchmarks in Mohanlalganj, Lucknow.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#161513', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                <Building2 size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.6rem' }}>
                G+9 Modern Classical High-Rise
              </h4>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Nine stories of majestic classical symmetry, featuring decorative cornices, double-height entrance lobby, and panoramic skyline vistas.
              </p>
            </div>

            <div style={{ background: '#161513', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: '6px' }}>
              <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>
                <Layers size={28} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginBottom: '0.6rem' }}>
                Earthquake-Resistant RCC Frame
              </h4>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Precision structural engineering conforming to Indian seismic codes, dual fire-escape stairwells, and advanced fire suppression infrastructure.
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
                An independent development in Mohanlalganj, Lucknow. Residents enjoy landscaped park gardens, modern gym, 24/7 security, and high-speed elevators.
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
              Inquire for <span className="accent-serif">SKYOM Nova</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Register your interest for unit allotment, floor preferences, and construction milestone schedules in Mohanlalganj, Lucknow.
            </p>
          </div>

          <div className="contact-form-box">
            {formSubmitted ? (
              <div className="form-success-box" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="var(--color-delivered)" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  Enquiry Logged for SKYOM Nova
                </h3>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Our residential sales team will contact you at <strong>{formData.phone}</strong> regarding high-rise tower residences and payment plans.
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
                    placeholder="e.g. Amit Verma"
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
                      placeholder="amit@example.com"
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
                    placeholder="I am interested in high-rise tower residence allotment / payment schedule..."
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
                      <span>Submit SKYOM Nova Enquiry</span>
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
