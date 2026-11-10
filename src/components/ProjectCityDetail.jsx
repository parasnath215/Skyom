import React, { useState } from 'react';
import {
  ArrowUpRight, Download, MapPin,
  ShieldCheck, Trees, Building2, Dumbbell, Waves, Zap,
  Smile, Compass, ChevronDown, ChevronUp, ZoomIn, Send, CheckCircle2,
  X, Lock, FileText, Check
} from 'lucide-react';

export default function ProjectCityDetail({ onBack, onOpenLightbox }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Master Layout Blur & Unlock State
  const [isLayoutUnlocked, setIsLayoutUnlocked] = useState(() => {
    try {
      return typeof window !== 'undefined' && sessionStorage.getItem('skyom_city_layout_unlocked') === 'true';
    } catch {
      return false;
    }
  });
  const [layoutModalOpen, setLayoutModalOpen] = useState(false);
  const [layoutForm, setLayoutForm] = useState({ name: '', phone: '' });
  const [layoutLoading, setLayoutLoading] = useState(false);
  const [layoutError, setLayoutError] = useState('');

  // Brochure Download Modal State
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureForm, setBrochureForm] = useState({ name: '', phone: '' });
  const [brochureAgreed, setBrochureAgreed] = useState(false);
  const [brochureLoading, setBrochureLoading] = useState(false);
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);
  const [brochureError, setBrochureError] = useState('');
  const [showTermsDetail, setShowTermsDetail] = useState(false);

  const amenities = [
    {
      title: '24/7 Multi-Tier Security',
      desc: 'Gated boundary with RFID access gates, 24/7 CCTV surveillance, and perimeter patrols.',
      icon: ShieldCheck
    },
    {
      title: '24+ Landscaped Theme Parks',
      desc: 'Zen meditation lawns, aroma gardens, jogging trails, and expansive community open spaces.',
      icon: Trees
    },
    {
      title: 'Grand Lifestyle Clubhouse',
      desc: 'Signature multi-level club with banquet spaces, indoor recreation, and fitness suites.',
      icon: Building2
    },
    {
      title: 'Sports & Active Wellness',
      desc: 'Tennis and badminton courts, outdoor fitness arena, and dedicated children’s sports fields.',
      icon: Dumbbell
    },
    {
      title: 'Olympic Swimming Pool',
      desc: 'Temperature-controlled swimming pool with dedicated kids splash deck and sun lounges.',
      icon: Waves
    },
    {
      title: 'Sustainable EV Charging',
      desc: 'EV fast-charging infrastructure integrated along primary boulevard junctions.',
      icon: Zap
    },
    {
      title: 'Dedicated Kids Play Zones',
      desc: 'Rubberized play safety turf, sensory equipment, and shaded family seating pavilions.',
      icon: Smile
    },
    {
      title: 'Wide Internal Boulevards',
      desc: '12.0m, 9.0m, and 7.5m wide paved roads engineered for smooth two-way transit and zero congestion.',
      icon: Compass
    }
  ];

  const connectivity = [
    { name: 'Kisan Path / Outer Ring Road', time: '5 Mins', detail: 'Rapid signal-free expressway access' },
    { name: 'Medanta & SGPGIMS Hospitals', time: '15 Mins', detail: 'World-class super specialty healthcare' },
    { name: 'Shaheed Path & Ekana Stadium', time: '18 Mins', detail: 'Prime sports & entertainment district' },
    { name: 'Chaudhary Charan Singh Airport', time: '20 Mins', detail: 'Domestic & International terminal' },
    { name: 'Lulu Mall & Phoenix Palassio', time: '20 Mins', detail: 'Premier luxury shopping & retail centers' },
    { name: 'Charbagh Central Railway Station', time: '25 Mins', detail: 'Direct arterial highway access' },
  ];

  const faqs = [
    {
      q: 'Where is SKYOM City located?',
      a: 'SKYOM City is situated on State Highway 173 to Unnao, near Raibareli Road, Mohanlalganj, Lucknow (PIN 226301).'
    },
    {
      q: 'Is the township RERA approved ?',
      a: 'Yes, SKYOM City is fully registered under Uttar Pradesh RERA with official Registration Number UPRERAPRJ600292/06/2025. And the Project is Approved by UP-Awas Vikas.'
    },
    {
      q: 'What types of plots and configurations are available?',
      a: 'The township features meticulously planned residential plot sizes ranging from 728 Sq.ft up to 2400 Sq.ft.'
    },
    {
      q: 'Can I visit the township site for a physical inspection?',
      a: 'Yes. Our corporate sales team organizes scheduled site visits.'
    }
  ];

  const handleUnlockLayout = (e) => {
    e.preventDefault();
    if (!layoutForm.name.trim()) {
      setLayoutError('Please enter your full name.');
      return;
    }
    const cleanPhone = layoutForm.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setLayoutError('Please enter a valid 10-digit phone number.');
      return;
    }
    setLayoutError('');
    setLayoutLoading(true);
    setTimeout(() => {
      setLayoutLoading(false);
      setIsLayoutUnlocked(true);
      try {
        sessionStorage.setItem('skyom_city_layout_unlocked', 'true');
      } catch (err) {
        // ignore storage error
      }
      setLayoutModalOpen(false);
    }, 500);
  };

  const handleDownloadBrochure = (e) => {
    e.preventDefault();
    if (!brochureForm.name.trim()) {
      setBrochureError('Please enter your full name.');
      return;
    }
    const cleanPhone = brochureForm.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setBrochureError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!brochureAgreed) {
      setBrochureError('Please agree to the Terms and Conditions to proceed.');
      return;
    }
    setBrochureError('');
    setBrochureLoading(true);

    setTimeout(() => {
      setBrochureLoading(false);
      setBrochureDownloaded(true);

      // Trigger automatic file download
      const link = document.createElement('a');
      link.href = '/assets/SKYOM%20CITY%20E-BOOK.pdf';
      link.setAttribute('download', 'SKYOM CITY E-BOOK.pdf');
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 600);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--color-bg)' }}>
      {/* Hero Showcase Video Banner */}
      <section style={{ position: 'relative', width: '100%', height: '65vh', minHeight: '440px', overflow: 'hidden' }}>
        <video
          src="/assets/city-entrance-720p.mp4"
          poster="/assets/city-entrance-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.88) 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '3.5rem'
        }}>
          <div className="container">
            <div className="section-tag" style={{ color: 'var(--color-gold-light)' }}>
              Flagship Integrated Township
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.6rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--color-ivory)' }}>
              SKYOM <span className="accent-serif">City</span>
            </h1>
            <p style={{ maxWidth: '680px', color: 'var(--color-ivory-muted)', fontSize: '1.05rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
              A visionary 50-acre integrated township in Mohanlalganj, Lucknow. Crafted for those who demand expansive nature, unyielding luxury, and a thriving community.
            </p>
          </div>
        </div>
      </section>

      {/* Township Vision & Modern Living Showcase Section */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 6.5rem) 0', background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Township Showcase</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)', lineHeight: 1.25, marginBottom: '1.25rem' }}>
            SKYOM CITY – A World of Luxury, <span className="accent-serif">Comfort & Modern Living</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-serif, "Cormorant Garamond", serif)',
            fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
            color: 'var(--color-gold)',
            fontStyle: 'italic',
            marginBottom: '2rem',
            letterSpacing: '0.02em'
          }}>
            Experience a Lifestyle Beyond Ordinary at SKYOM CITY, Mohanlalganj, Lucknow.
          </p>

          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'left',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: 'clamp(2rem, 4vw, 3rem)'
          }}>
            <p style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
              color: 'var(--color-ivory)',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
              fontWeight: 300
            }}>
              Welcome to <strong style={{ color: 'var(--color-gold)', fontWeight: 600 }}>SKYOM CITY</strong>, a thoughtfully planned 50-acre integrated township in the promising location of Mohanlalganj, Lucknow. Designed to redefine modern urban living, SKYOM CITY brings together contemporary infrastructure, world-class amenities, green open spaces and a vibrant community — all in one exceptional destination.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
              color: 'var(--color-ivory-muted)',
              lineHeight: 1.85,
              fontWeight: 300,
              marginBottom: '2rem'
            }}>
              More than just a residential address, SKYOM CITY is a place where life finds a new meaning. Every aspect of the township is envisioned to offer a perfect balance of comfort, convenience, recreation and well-being. With its UP Awas Vikas and RERA-approved status, the project aspires to provide residents with greater confidence and peace of mind.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => {
                  setBrochureDownloaded(false);
                  setBrochureModalOpen(true);
                }}
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <Download size={16} />
                <span>Download Brochure (PDF)</span>
              </button>
              <a
                href="#layout-plan"
                className="btn-outline-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <span>View Master Layout</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Official Layout Plan Section */}
      <section className="floorplans-section" id="layout-plan" style={{ padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <div className="section-tag">Master Layout</div>
            <h2 className="section-title">
              SKYOM City <span className="accent-serif">Layout Plan</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Official master layout plan showcasing Sector 01 & Sector 02, State Highway 173 frontage, 12m & 9m internal roads, and color-coded residential plot configurations.
            </p>
          </div>

          {/* Layout Plan Visual with Blur and Unlock Mechanism */}
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: 'clamp(1rem, 3vw, 2.5rem)',
              marginBottom: '3rem',
              position: 'relative',
              textAlign: 'center',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                maxWidth: '100%',
                cursor: isLayoutUnlocked ? 'zoom-in' : 'pointer'
              }}
              onClick={() => {
                if (isLayoutUnlocked) {
                  onOpenLightbox('/assets/skyom-city-layout-plan.png', 'SKYOM City — Official Master Layout Plan');
                } else {
                  setLayoutModalOpen(true);
                }
              }}
            >
              <img
                src="/assets/skyom-city-layout-plan.webp"
                alt="SKYOM City Master Layout Plan"
                style={{
                  width: '100%',
                  maxHeight: '680px',
                  objectFit: 'contain',
                  borderRadius: '4px',
                  filter: isLayoutUnlocked ? 'none' : 'blur(16px)',
                  transition: 'filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none'
                }}
                loading="eager"
              />

              {/* Blurred Overlay with Load Layout Prompt */}
              {!isLayoutUnlocked && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(6, 6, 6, 0.72)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '4px',
                    padding: '1.5rem',
                    zIndex: 2
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLayoutModalOpen(true);
                  }}
                >
                  <div style={{
                    maxWidth: '460px',
                    width: '100%',
                    background: '#121212',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '8px',
                    padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: 'var(--color-gold-subtle)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem'
                    }}>
                      <Lock size={22} />
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                      Official Master Layout Plan
                    </h3>
                    <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                      To view the full high-resolution blueprint of Sector 01 & Sector 02, please click below and enter your contact details.
                    </p>

                    <button
                      type="button"
                      className="btn-gold"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLayoutModalOpen(true);
                      }}
                    >
                      <span>Load Layout</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Unlocked Zoom Hint Badge */}
              {isLayoutUnlocked && (
                <div className="zoom-hint-badge" style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem' }}>
                  <ZoomIn size={14} />
                  <span>Click to Enlarge Layout Plan</span>
                </div>
              )}
            </div>

            {isLayoutUnlocked && (
              <div style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-delivered)',
                fontSize: '0.88rem'
              }}>
                <CheckCircle2 size={16} />
                <span>Layout Unlocked — Click on the blueprint image to zoom in fullscreen</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Brochure Download Feature Section */}
      <section style={{ padding: '3.5rem 0', background: 'linear-gradient(180deg, #100f0d 0%, #0a0a0a 100%)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{
            background: 'radial-gradient(ellipse at top right, rgba(200, 169, 126, 0.08), transparent 70%), var(--color-surface)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: '8px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ maxWidth: '560px' }}>
              <div className="section-tag" style={{ marginBottom: '0.5rem' }}>Official Documentation</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: 'var(--color-ivory)', marginBottom: '0.6rem' }}>
                Download Official <span className="accent-serif">Project Brochure</span>
              </h3>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                Explore high-resolution master blueprints, park allocations, road networks, and development timelines in our official e-book.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setBrochureDownloaded(false);
                  setBrochureModalOpen(true);
                }}
                className="btn-gold"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.9rem 1.75rem' }}
              >
                <Download size={18} />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* World-Class Amenities */}
      <section className="amenities-section" id="amenities">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <div className="section-tag">Township Infrastructure</div>
            <h2 className="section-title">
              World-Class <span className="accent-serif">Amenities</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Every conceivable luxury right at your doorstep, blending active wellness, family entertainment, and green tranquility.
            </p>
          </div>

          <div className="amenities-grid">
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="amenity-card-item">
                  <div className="amenity-icon-ring">
                    <Icon size={24} />
                  </div>
                  <h4 className="amenity-item-title">{item.title}</h4>
                  <p className="amenity-item-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Location & Connectivity */}
      <section className="location-section" id="location">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <div className="section-tag">Strategic Corridor</div>
            <h2 className="section-title">
              Location & <span className="accent-serif">Connectivity</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Located in Mohanlalganj, Lucknow’s most promising growth corridor, minutes away from key civic destinations.
            </p>
          </div>

          <div className="location-grid">
            {connectivity.map((loc, idx) => (
              <div key={idx} className="location-card">
                <div className="location-info-block">
                  <div className="location-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h5 className="location-name">{loc.name}</h5>
                    <span className="location-tagline">{loc.detail}</span>
                  </div>
                </div>
                <div className="location-time-badge">{loc.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory RERA Banner Strip */}
      <section className="city-rera-strip" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '2.5rem 0', background: '#100f0d' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Official UP RERA Registration
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ivory)', marginTop: '0.2rem' }}>
              Registration No. UPRERAPRJ600292/06/2025
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => {
                setBrochureDownloaded(false);
                setBrochureModalOpen(true);
              }}
              className="btn-outline-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={15} />
              <span>Download Brochure</span>
            </button>
            <a
              href="#contact-form-section"
              className="btn-gold"
            >
              <span>Schedule Site Visit</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ padding: 'clamp(5rem, 8vw, 7.5rem) 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag">Frequently Asked</div>
            <h2 className="section-title">
              Questions & <span className="accent-serif">Answers</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      color: isOpen ? 'var(--color-gold)' : 'var(--color-ivory)'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="var(--color-gold)" /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Contact Form at the End */}
      <section id="contact-form-section" style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', background: '#0e0e0e', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Inquire Now</div>
            <h2 className="section-title">
              Book a Site Visit for <span className="accent-serif">SKYOM City</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Reserve your plot or schedule a guided site tour in Mohanlalganj with our senior sales advisors.
            </p>
          </div>

          <div className="contact-form-box">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={44} color="var(--color-delivered)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  Enquiry Received Successfully
                </h3>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Our team will contact you at <strong>{formData.phone}</strong> regarding your site visit inquiry.
                </p>
                <button
                  className="btn-outline-gold"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', date: '', message: '' });
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
                    placeholder="e.g. Rajesh Patel"
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
                    <label className="form-field-label">Email ID</label>
                    <input
                      type="email"
                      placeholder="rajesh@example.com"
                      className="form-input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Preferred Date for Site Visit</label>
                  <input
                    type="date"
                    className="form-input-field"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Special Requirements / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Looking for east-facing plot near central park..."
                    className="form-textarea-field"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                  disabled={loading}
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit SKYOM City Enquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 1. Modal: Load / Unlock Master Layout */}
      {layoutModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setLayoutModalOpen(false)}
          style={{ zIndex: 1050 }}
        >
          <div
            className="modal-content-box"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '480px', padding: 'clamp(1.75rem, 3.5vw, 2.5rem)', position: 'relative' }}
          >
            <button
              className="modal-close-btn"
              onClick={() => setLayoutModalOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="section-tag" style={{ marginBottom: '0.5rem' }}>Township Blueprint</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
              Load Master Layout
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Please enter your name and phone number to instantly view the official high-resolution approved layout plan for SKYOM City.
            </p>

            <form onSubmit={handleUnlockLayout}>
              {layoutError && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '1rem', background: 'rgba(239,68,68,0.1)', padding: '0.6rem 0.8rem', borderRadius: '4px', border: '1px solid rgba(239,68,68,0.2)' }}>
                  {layoutError}
                </div>
              )}

              <div className="form-group-field">
                <label className="form-field-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  className="form-input-field"
                  value={layoutForm.name}
                  onChange={(e) => setLayoutForm({ ...layoutForm, name: e.target.value })}
                />
              </div>

              <div className="form-group-field">
                <label className="form-field-label">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99999 99999"
                  className="form-input-field"
                  value={layoutForm.phone}
                  onChange={(e) => setLayoutForm({ ...layoutForm, phone: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{ width: '100%', marginTop: '1rem' }}
                disabled={layoutLoading}
              >
                {layoutLoading ? (
                  <span>Unlocking Layout...</span>
                ) : (
                  <>
                    <span>Unlock & View Layout</span>
                    <ArrowUpRight size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. Modal: Download Brochure with Sales Terms & Conditions */}
      {brochureModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setBrochureModalOpen(false)}
          style={{ zIndex: 1050 }}
        >
          <div
            className="modal-content-box"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '520px', padding: 'clamp(1.75rem, 3.5vw, 2.5rem)', position: 'relative' }}
          >
            <button
              className="modal-close-btn"
              onClick={() => setBrochureModalOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {brochureDownloaded ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(52, 211, 153, 0.12)',
                  border: '1px solid var(--color-delivered)',
                  color: 'var(--color-delivered)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem'
                }}>
                  <CheckCircle2 size={30} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--color-ivory)', marginBottom: '0.6rem' }}>
                  Brochure Download Started
                </h3>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{brochureForm.name}</strong>. Your copy of <strong>SKYOM CITY E-BOOK</strong> is downloading.
                </p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <a
                    href="/assets/SKYOM%20CITY%20E-BOOK.pdf"
                    download="SKYOM CITY E-BOOK.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold"
                    style={{ fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Download size={14} />
                    <span>Click here if download didn't start</span>
                  </a>
                </div>
                <button
                  className="btn-gold"
                  onClick={() => setBrochureModalOpen(false)}
                  style={{ width: '100%' }}
                >
                  <span>Close Window</span>
                </button>
              </div>
            ) : (
              <div>
                <div className="section-tag" style={{ marginBottom: '0.5rem' }}>Official Documentation</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  Download SKYOM City E-Brochure
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Enter your contact details to instantly access the official 50-acre township master plan, sector maps, and project catalog.
                </p>

                <form onSubmit={handleDownloadBrochure}>
                  {brochureError && (
                    <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '1rem', background: 'rgba(239,68,68,0.1)', padding: '0.6rem 0.8rem', borderRadius: '4px', border: '1px solid rgba(239,68,68,0.2)' }}>
                      {brochureError}
                    </div>
                  )}

                  <div className="form-group-field">
                    <label className="form-field-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Roy"
                      className="form-input-field"
                      value={brochureForm.name}
                      onChange={(e) => setBrochureForm({ ...brochureForm, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group-field">
                    <label className="form-field-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99999 99999"
                      className="form-input-field"
                      value={brochureForm.phone}
                      onChange={(e) => setBrochureForm({ ...brochureForm, phone: e.target.value })}
                    />
                  </div>

                  {/* Terms & Conditions Checkbox for Sales Purpose */}
                  <div style={{ margin: '1.25rem 0 1rem' }}>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        userSelect: 'none'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={brochureAgreed}
                        onChange={(e) => setBrochureAgreed(e.target.checked)}
                        style={{
                          marginTop: '0.2rem',
                          width: '18px',
                          height: '18px',
                          accentColor: 'var(--color-gold)',
                          cursor: 'pointer'
                        }}
                      />
                      <span style={{ fontSize: '0.88rem', color: 'var(--color-ivory)', lineHeight: 1.5 }}>
                        I agree to the <strong>Terms &amp; Conditions</strong> for sales and communication purposes.
                      </span>
                    </label>
                  </div>

                  {/* Sales Terms & Conditions Card */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: '6px',
                    padding: '0.85rem 1rem',
                    fontSize: '0.78rem',
                    color: 'var(--color-ivory-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <strong style={{ color: 'var(--color-gold)', fontSize: '0.8rem' }}>Sales Consent &amp; Privacy Policy:</strong>
                      <button
                        type="button"
                        onClick={() => setShowTermsDetail(!showTermsDetail)}
                        style={{ background: 'none', border: 'none', color: 'var(--color-gold)', cursor: 'pointer', fontSize: '0.75rem', textDecoration: 'underline', padding: 0 }}
                      >
                        {showTermsDetail ? 'Hide Details' : 'Read Full Terms'}
                      </button>
                    </div>
                    <p style={{ margin: 0 }}>
                      By checking the box above and submitting your details, you authorize SKYOM and its accredited representatives to contact you via Call, SMS, WhatsApp, and Email regarding plot inquiries, township developments, pricing schedules, and promotional offers. This consent expressly overrides any DNC / NDNC registry restrictions under TRAI guidelines.
                    </p>
                    {showTermsDetail && (
                      <ul style={{ margin: '0.6rem 0 0', paddingLeft: '1.2rem', color: 'var(--color-text-dim)', lineHeight: 1.5 }}>
                        <li>Your personal information will be strictly used for project consultation, site tour coordination, and transaction support.</li>
                        <li>We respect your privacy: your contact information is stored securely and will never be sold or leased to third-party telemarketers.</li>
                        <li>All project visuals, plans, and dimensions in the downloaded material are indicative and subject to statutory approvals by UP RERA and Awas Vikas Parishad.</li>
                        <li>You retain the right to unsubscribe or opt out of communications at any time by notifying our official desk.</li>
                      </ul>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ width: '100%' }}
                    disabled={brochureLoading || !brochureAgreed}
                  >
                    {brochureLoading ? (
                      <span>Preparing Download...</span>
                    ) : (
                      <>
                        <Download size={16} />
                        <span>Download Brochure (PDF)</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
