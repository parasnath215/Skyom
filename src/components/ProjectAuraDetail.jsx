import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ZoomIn, 
  MapPin, 
  Layers, 
  Download, 
  FileText, 
  Building2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Eye, 
  Sun, 
  Moon,
  Send,
  Lock,
  X
} from 'lucide-react';

export default function ProjectAuraDetail({ onBack, onOpenEnquiry, onOpenLightbox }) {
  const [viewMode, setViewMode] = useState('night'); // 'night' or 'day'
  const [activeFloorTab, setActiveFloorTab] = useState(0);

  // Floor Plan Blur & Unlock State
  const [isPlanUnlocked, setIsPlanUnlocked] = useState(() => {
    try {
      return typeof window !== 'undefined' && sessionStorage.getItem('skyom_aura_plan_unlocked') === 'true';
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
        sessionStorage.setItem('skyom_aura_plan_unlocked', 'true');
      } catch (err) {
        // ignore storage error
      }
      setPlanModalOpen(false);
    }, 500);
  };

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

  const floorPlans = [
    {
      title: 'Ground Floor Master Plan & Streetscape',
      subtitle: 'Complete Level Layout with 2 BHK Residences & High-Footfall Retail',
      src: '/assets/Skyom Aura/skyom-aura-ground-floor-plan.webp',
      pdf: '/assets/Skyom Aura/LIG BLOCK GROUND FLOOR.pdf',
      desc: 'Architectural blueprint showcasing dual commercial suites at the street frontage, wide central 1500 mm naturally ventilated corridors, handicap-friendly 1:10 gradient ramps, dual elevators, and spacious 2 BHK residential units.',
      specs: [
        { label: 'Building Type', val: 'LIG Mid-Rise Housing Block' },
        { label: 'Corridor Width', val: '1500 mm (5 Feet Clear)' },
        { label: 'Vertical Transport', val: 'Dual Passenger & Service Lifts' },
        { label: 'Accessibility', val: '1:10 Slope Ramps & Wide Entrances' },
        { label: 'Design Architecture', val: 'Mediterranean Neo-Classical' },
        { label: 'Township', val: 'SKYOM City, Mohanlalganj, Lucknow' }
      ]
    },
    {
      title: 'Typical 2 BHK Luxury Residence',
      subtitle: 'Efficient & Proportionate Living with Private Sit-Out',
      src: '/assets/Skyom Aura/skyom-aura-ground-floor-plan.webp',
      pdf: '/assets/Skyom Aura/LIG BLOCK GROUND FLOOR.pdf',
      desc: 'Each 2 BHK home is designed with cross-ventilation, generous living spaces, separated bath and WC for maximum hygiene, and a secluded private sit-out balcony overlooking landscaped green pockets.',
      specs: [
        { label: 'Drawing / Living Room', val: '3638 x 2935 mm (11\'-11" x 9\'-7.5")' },
        { label: 'Master Bedroom', val: '3613 x 2935 mm (11\'-10" x 9\'-7.5")' },
        { label: 'Secondary Bedroom', val: '2780 x 3045 mm (9\'-0.5" x 9\'-10")' },
        { label: 'Kitchen', val: '1615 x 2195 mm (5\'-3.5" x 7\'-2.5")' },
        { label: 'Bath & WC', val: 'Bath 1215x2195 mm + WC 1072x1380 mm' },
        { label: 'Private Sit-Out', val: '1050 mm Wide Balcony' }
      ]
    },
    {
      title: 'Ground Level Commercial & Retail Suites',
      subtitle: 'Dedicated Street-Facing Retail Frontage',
      src: '/assets/Skyom Aura/skyom-aura-ground-floor-plan.webp',
      pdf: '/assets/Skyom Aura/LIG BLOCK GROUND FLOOR.pdf',
      desc: 'Two high-visibility ground floor commercial units positioned directly at the township promenade, ideal for daily convenience stores, pharmacies, cafes, or boutique services.',
      specs: [
        { label: 'Shop 1 Area', val: '11.42 SQM (9\'-5" x 10\'-10")' },
        { label: 'Shop 2 Area', val: '11.42 SQM (9\'-5" x 10\'-10")' },
        { label: 'Shutter Type', val: 'Full Width Rolling Shutters (R.S)' },
        { label: 'Footfall', val: 'Integrated Township Access' },
        { label: 'Service Lift Access', val: 'Direct 1900 x 3050 mm Service Foyer' },
        { label: 'Safety', val: 'Fire Hydrant Cabinet (FHC) Adjacent' }
      ]
    }
  ];

  const currentFloor = floorPlans[activeFloorTab];

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
      <section className="project-hero-section">
        <img
          src="/assets/Skyom Aura/skyom-aura-hero.webp"
          alt="SKYOM Aura - Neo-Classical Residences"
          className="project-hero-bg-img"
        />
        <div className="project-hero-overlay" />

        <div className="container project-hero-container">
          <div className="project-hero-top-row">
            <div className="section-tag" style={{ color: 'var(--color-gold-light)', margin: 0 }}>
              Ongoing Residential Landmark
            </div>
            <span className="project-hero-rera-badge">
              UP RERA: UPRERAPRJ600292/06/2025
            </span>
          </div>

          <h1 className="project-hero-title">
            SKYOM <span className="accent-serif">Aura</span>
          </h1>

          <p className="project-hero-desc">
            Mediterranean neo-classical residences blending arched colonnades, warm masonry finishes, and boutique commercial suites within the prestigious 50-acre SKYOM City integrated township.
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
              href="/assets/Skyom Aura/20261029-LIG COLOUR OPTIONS STAGE 2.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={15} />
              <span>Architectural Lookbook PDF</span>
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

      {/* Floor Plans Section */}
      <section className="floorplans-section" id="floorplans" style={{ padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <div className="section-tag">Architectural Blueprints</div>
            <h2 className="section-title">
              Floor Plans & <span className="accent-serif">Spatial Layouts</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Detailed CAD drawings from the official Ground Floor Block plan, featuring 2 BHK residences, integrated convenience retail, dual elevator cores, and expansive corridors.
            </p>
          </div>

          {/* Floor Tabs */}
          <div className="floorplan-tabs-bar">
            {floorPlans.map((fp, idx) => (
              <button
                key={idx}
                className={`plan-tab-btn ${activeFloorTab === idx ? 'active' : ''}`}
                onClick={() => setActiveFloorTab(idx)}
              >
                {fp.title.split(' ')[0]} {fp.title.split(' ')[1]} {fp.title.split(' ')[2] || ''}
              </button>
            ))}
          </div>

          {/* Current Floor Display */}
          <div className="floorplan-display-grid">
            <div 
              className="floorplan-img-container"
              onClick={() => {
                if (isPlanUnlocked) {
                  onOpenLightbox(currentFloor.src, currentFloor.title);
                } else {
                  setPlanModalOpen(true);
                }
              }}
              title={isPlanUnlocked ? "Click to zoom floor plan" : "Click to unlock floor plan"}
              style={{
                background: '#ffffff',
                borderRadius: '6px',
                padding: '1rem',
                minHeight: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: isPlanUnlocked ? 'zoom-in' : 'pointer'
              }}
            >
              <img 
                src={currentFloor.src} 
                alt={currentFloor.title} 
                loading="lazy" 
                style={{
                  maxHeight: '550px',
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
              <div className="section-tag" style={{ marginBottom: '0.4rem' }}>{currentFloor.subtitle}</div>
              <h3 className="floorplan-info-title">{currentFloor.title}</h3>
              <p className="floorplan-info-desc">{currentFloor.desc}</p>

              <div className="floorplan-specs-table">
                {currentFloor.specs.map((s, idx) => (
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
                      onOpenLightbox(currentFloor.src, currentFloor.title);
                    } else {
                      setPlanModalOpen(true);
                    }
                  }}
                >
                  <span>{isPlanUnlocked ? 'Enlarge Full Plan' : 'Unlock & View Plan'}</span>
                  {isPlanUnlocked ? <ZoomIn size={15} /> : <Lock size={15} />}
                </button>
                <a 
                  href={isPlanUnlocked ? currentFloor.pdf : '#'} 
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
                Integrated Township Amenities
              </h4>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Nestled inside the 50-Acre SKYOM City. Residents enjoy seamless access to 24+ landscaped theme parks, sports facilities, and 24/7 security.
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
              Register your interest for unit availability, payment plans, and architectural presentations.
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
                  Thank you, <strong>{formData.name}</strong>. Our residential advisor will connect with you at <strong>{formData.phone}</strong> regarding available 2 BHK residences and commercial retail suites.
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
                    placeholder="I am interested in 2 BHK residence / ground floor retail shop..."
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

            <div className="section-tag" style={{ marginBottom: '0.5rem' }}>SKYOM Aura</div>
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

