import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ZoomIn, 
  Download, 
  Send,
  Lock,
  X
} from 'lucide-react';

export default function ProjectNovaDetail({ onBack, onOpenEnquiry, onOpenLightbox }) {
  const [activePlanTab, setActivePlanTab] = useState(0);

  // Floor Plan Blur & Unlock State
  const [isPlanUnlocked, setIsPlanUnlocked] = useState(() => {
    try {
      return typeof window !== 'undefined' && sessionStorage.getItem('skyom_nova_plan_unlocked') === 'true';
    } catch {
      return false;
    }
  });
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [planForm, setPlanForm] = useState({ name: '', phone: '' });
  const [planLoading, setPlanLoading] = useState(false);
  const [planError, setPlanError] = useState('');

  const handleUnlockPlan = (e) => {
    e.preventDefault();
    if (!planForm.name.trim()) {
      setPlanError('Please enter your full name.');
      return;
    }
    const cleanPhone = planForm.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setPlanError('Please enter a valid 10-digit phone number.');
      return;
    }
    setPlanError('');
    setPlanLoading(true);
    setTimeout(() => {
      setPlanLoading(false);
      setIsPlanUnlocked(true);
      try {
        sessionStorage.setItem('skyom_nova_plan_unlocked', 'true');
      } catch (err) {
        // ignore storage error
      }
      setPlanModalOpen(false);
    }, 500);
  };

  // Main Consultation Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const floorPlans = [
    {
      title: 'Typical Tower Floor Plan',
      subtitle: 'Full Floor Layout with 2 Lifts & Wide Corridors',
      src: '/assets/Skyom Nova/skyom-nova-typical-floor-plan.webp',
      pdf: '/assets/Skyom Nova/EWS TYPICAL FLOOR.pdf',
      desc: 'A spacious and well-lit tower floor layout planned for easy movement. Features two high-speed elevators opening into a wide central lobby, 5-foot-wide corridors, and dual fire escape staircases ensuring comfort and safety.',
      specs: [
        { label: 'Building Structure', val: 'Ground + 9 Floors Tower' },
        { label: 'Corridor Width', val: '5 Feet Wide (1.5 m)' },
        { label: 'Central Lift Lobby', val: '13\' x 9\' (4.0m x 2.8m)' },
        { label: 'Elevators', val: '2 High-Speed Lifts with Backup' },
        { label: 'Safety Exits', val: 'Dual Fire Escape Staircases' },
        { label: 'Fresh Air & Light', val: 'Open Ventilation on All Sides' }
      ]
    },
    {
      title: '1 BHK Modern Residence',
      subtitle: 'Master Bedroom, Open Living Room & Private Balcony',
      src: '/assets/Skyom Nova/skyom-nova-typical-floor-plan.webp',
      pdf: '/assets/Skyom Nova/EWS TYPICAL FLOOR.pdf',
      desc: 'A smartly planned 1 BHK home designed for comfortable everyday living. Offers an airy living lounge, a restful master bedroom, a modern modular kitchen space, a full bathroom, and a private open-air balcony with scenic views.',
      specs: [
        { label: 'Living & Dining Room', val: '11\' x 11\' (3.4m x 3.4m)' },
        { label: 'Master Bedroom', val: '10\'-8" x 11\'-1" (3.3m x 3.4m)' },
        { label: 'Kitchen Space', val: '5\'-10" x 7\'-1" (1.8m x 2.2m)' },
        { label: 'Bathroom', val: '5\'-2" x 6\'-10" (1.6m x 2.1m)' },
        { label: 'Private Balcony', val: '1.1 Meter Wide Open Air' },
        { label: 'Windows & Airflow', val: 'Large Outer Windows' }
      ]
    }
  ];

  const currentPlan = floorPlans[activePlanTab];

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
      {/* Hero Header */}
      <section className="project-hero-clean">
        <img
          src="/assets/Skyom Nova/skyom-nova-tower.webp"
          alt="SKYOM Nova - Modern High-Rise Tower"
          className="project-hero-bg-img"
        />
        <div className="project-hero-overlay" />

        <div className="container project-hero-container">
          <div className="project-hero-title-box">
            <h1 className="project-hero-title">
              SKYOM <span className="accent-serif">Nova</span>
            </h1>
          </div>

          <div className="project-hero-rera-box">
            <span className="project-hero-rera-badge">
              UP RERA: UPRERAPRJ960284/10/2026
            </span>
          </div>
        </div>
      </section>

      {/* Tower Architecture & Visual Elevation Showcase - Heading and Image Only */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(180deg, #0e0e0e 0%, #12110e 100%)' }}>
        <div className="container" style={{ maxWidth: '1050px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Architectural Design</div>
            <h2 className="section-title">
              Modern Classical Symmetry with <span className="accent-serif">Illuminated Facades</span>
            </h2>
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

      {/* Floor Plans Section with Blur and Unlock Form */}
      <section className="floorplans-section" id="floorplans" style={{ padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <div className="section-tag">Floor Plans</div>
            <h2 className="section-title">
              Thoughtfully Planned <span className="accent-serif">Floor Layouts</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Explore smart and comfortable 1 BHK residences at SKYOM Nova, designed for plenty of natural light, fresh air, and modern high-rise living.
            </p>
          </div>

          {/* Floor Tabs */}
          <div className="floorplan-tabs-bar">
            {floorPlans.map((fp, idx) => (
              <button
                key={idx}
                className={`plan-tab-btn ${activePlanTab === idx ? 'active' : ''}`}
                onClick={() => setActivePlanTab(idx)}
              >
                {fp.title}
              </button>
            ))}
          </div>

          {/* Current Floor Display */}
          <div className="floorplan-display-grid">
            <div 
              className="floorplan-img-container"
              onClick={() => {
                if (isPlanUnlocked) {
                  onOpenLightbox(currentPlan.src, currentPlan.title);
                } else {
                  setPlanModalOpen(true);
                }
              }}
              title={isPlanUnlocked ? "Click to zoom floor plan" : "Click to unlock floor plan"}
              style={{
                background: '#ffffff',
                borderRadius: '6px',
                padding: '1rem',
                minHeight: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: isPlanUnlocked ? 'zoom-in' : 'pointer'
              }}
            >
              <img 
                src={currentPlan.src} 
                alt={currentPlan.title} 
                loading="lazy" 
                style={{
                  maxHeight: '520px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: isPlanUnlocked ? 'none' : 'blur(16px)',
                  transition: 'filter 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  userSelect: 'none'
                }}
              />

              {/* Blurred Overlay with Unlock Prompt */}
              {!isPlanUnlocked && (
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
                    setPlanModalOpen(true);
                  }}
                >
                  <div style={{
                    maxWidth: '420px',
                    width: '100%',
                    background: '#121212',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '8px',
                    padding: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
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

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.55rem', color: 'var(--color-ivory)', marginBottom: '0.4rem' }}>
                      Unlock Detailed Floor Plan
                    </h3>
                    <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      Enter your details to view clear room dimensions and download the high-resolution architectural CAD drawing.
                    </p>

                    <button
                      type="button"
                      className="btn-gold"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlanModalOpen(true);
                      }}
                    >
                      <span>Unlock & View Plan</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Unlocked Zoom Hint Badge */}
              {isPlanUnlocked && (
                <div className="zoom-hint-badge" style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem' }}>
                  <ZoomIn size={14} />
                  <span>Click to Enlarge CAD Plan</span>
                </div>
              )}
            </div>

            <div className="floorplan-info-col">
              <div className="section-tag" style={{ marginBottom: '0.4rem' }}>{currentPlan.subtitle}</div>
              <h3 className="floorplan-info-title">{currentPlan.title}</h3>
              <p className="floorplan-info-desc">{currentPlan.desc}</p>

              <div className="floorplan-specs-table">
                {currentPlan.specs.map((s, idx) => (
                  <div key={idx} className="plan-spec-item">
                    <span className="plan-spec-lbl">{s.label}</span>
                    <span className="plan-spec-val">{s.val}</span>
                  </div>
                ))}
              </div>

              {isPlanUnlocked && (
                <div style={{
                  marginTop: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-delivered)',
                  fontSize: '0.88rem'
                }}>
                  <CheckCircle2 size={16} />
                  <span>Floor Plan Unlocked — Click image to view in fullscreen</span>
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn-gold" 
                  style={{ flex: 1, minWidth: '180px' }}
                  onClick={() => {
                    if (isPlanUnlocked) {
                      onOpenLightbox(currentPlan.src, currentPlan.title);
                    } else {
                      setPlanModalOpen(true);
                    }
                  }}
                >
                  <span>{isPlanUnlocked ? 'Enlarge Full Plan' : 'Unlock & View Plan'}</span>
                  {isPlanUnlocked ? <ZoomIn size={15} /> : <Lock size={15} />}
                </button>
                <a 
                  href={isPlanUnlocked ? currentPlan.pdf : '#'} 
                  target={isPlanUnlocked ? "_blank" : undefined}
                  rel={isPlanUnlocked ? "noopener noreferrer" : undefined}
                  className="btn-outline-gold"
                  onClick={(e) => {
                    if (!isPlanUnlocked) {
                      e.preventDefault();
                      setPlanModalOpen(true);
                    }
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <Download size={15} />
                  <span>Download CAD PDF</span>
                </a>
              </div>
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
              Register your interest for unit allotment, floor preferences, and construction milestone schedules.
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
                  Thank you, <strong>{formData.name}</strong>. Our residential sales team will contact you at <strong>{formData.phone}</strong> regarding 1 BHK high-rise residences and payment plans.
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
                    placeholder="I am interested in 1 BHK high-rise unit allotment / payment schedule..."
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

      {/* Modal: Unlock Floor Plan */}
      {planModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setPlanModalOpen(false)}
          style={{ zIndex: 1050 }}
        >
          <div
            className="modal-content-box"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '480px', padding: 'clamp(1.75rem, 3.5vw, 2.5rem)', position: 'relative' }}
          >
            <button
              className="modal-close-btn"
              onClick={() => setPlanModalOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="section-tag" style={{ marginBottom: '0.5rem' }}>SKYOM Nova</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
              Unlock Floor Plan
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Please enter your name and phone number to instantly view and download the high-resolution architectural layout.
            </p>

            <form onSubmit={handleUnlockPlan}>
              {planError && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '1rem', background: 'rgba(239,68,68,0.1)', padding: '0.6rem 0.8rem', borderRadius: '4px', border: '1px solid rgba(239,68,68,0.2)' }}>
                  {planError}
                </div>
              )}

              <div className="form-group-field">
                <label className="form-field-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  className="form-input-field"
                  value={planForm.name}
                  onChange={(e) => setPlanForm({ ...planForm, name: e.target.value })}
                />
              </div>

              <div className="form-group-field">
                <label className="form-field-label">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99999 99999"
                  className="form-input-field"
                  value={planForm.phone}
                  onChange={(e) => setPlanForm({ ...planForm, phone: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{ width: '100%', marginTop: '1rem' }}
                disabled={planLoading}
              >
                {planLoading ? (
                  <span>Unlocking Plan...</span>
                ) : (
                  <>
                    <span>Unlock & View Plan</span>
                    <ArrowUpRight size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
