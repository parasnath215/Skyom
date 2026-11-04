import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ZoomIn, 
  MapPin, 
  Layers, 
  Download, 
  FileText, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  Send,
  Calendar,
  Check,
  ExternalLink
} from 'lucide-react';

export default function ProjectNovaDetail({ onBack, onOpenEnquiry, onOpenLightbox }) {
  const [activePlanTab, setActivePlanTab] = useState(0);

  // Form state
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
      title: 'Typical High-Rise Floor Plan',
      subtitle: 'Efficient 1 BHK Living with Dedicated Lift Lobby & Dual Staircases',
      src: '/assets/Skyom Nova/skyom-nova-typical-floor-plan.webp',
      pdf: '/assets/Skyom Nova/EWS TYPICAL FLOOR.pdf',
      desc: 'Optimized tower floor layout engineered for abundant natural sunlight, dual high-speed elevators opening onto a grand 4060 x 2815 mm lobby, 1500 mm wide central corridors, and dual fire escape staircases.',
      specs: [
        { label: 'Tower Elevation', val: 'G+9 Floors High-Rise' },
        { label: 'Corridor Width', val: '1500 mm (5 Feet Clear)' },
        { label: 'Lift Lobby', val: '4060 x 2815 mm (13\'-4" x 9\'-3")' },
        { label: 'Vertical Transport', val: 'Dual High-Speed Elevators' },
        { label: 'RERA Reg.', val: 'UPRERAPRJ960284/10/2026' },
        { label: 'Target Completion', val: '24 January 2028' }
      ]
    },
    {
      title: '1 BHK Contemporary Residence',
      subtitle: 'Proportionate Master Bedroom & Open Living-Dining',
      src: '/assets/Skyom Nova/skyom-nova-typical-floor-plan.webp',
      pdf: '/assets/Skyom Nova/EWS TYPICAL FLOOR.pdf',
      desc: 'Every home inside SKYOM Nova features an airy living lounge, private master bedroom with double-glazed window access, separate modular-ready kitchen, fully plumbed toilet, and private outdoor balcony.',
      specs: [
        { label: 'Drawing / Living Room', val: '3372 x 3365 mm (11\'-1" x 11\'-1.5")' },
        { label: 'Master Bedroom', val: '3270 x 3395 mm (10\'-8.5" x 11\'-1.5")' },
        { label: 'Kitchen Area', val: '1780 x 2165 mm (5\'-10" x 7\'-1")' },
        { label: 'Toilet / Bath', val: '1580 x 2095 mm (5\'-2" x 6\'-10.5")' },
        { label: 'Private Balcony', val: '1100 mm Wide Open-Air' },
        { label: 'Ventilation', val: 'External Shafts & Cross Airway' }
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
      {/* Top Breadcrumb Bar */}
      <div style={{ borderBottom: '1px solid var(--color-border)', padding: '1rem 0', background: '#0e0e0e' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <button 
            onClick={onBack} 
            className="nav-link" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="badge-status ongoing">
              <span className="pulse-dot" />
              Ongoing High-Rise Tower — UP RERA Approved
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{ position: 'relative', width: '100%', minHeight: '65vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="/assets/Skyom Nova/skyom-nova-tower.webp"
          alt="SKYOM Nova - Modern High-Rise Tower"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.88) 100%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '3.5rem', paddingTop: '6rem' }}>
          <div className="section-tag" style={{ color: 'var(--color-gold-light)', marginBottom: '0.5rem' }}>
            Ongoing High-Rise Landmark
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--color-ivory)' }}>
            SKYOM <span className="accent-serif">Nova</span>
          </h1>
          <p style={{ maxWidth: '680px', color: 'var(--color-ivory-muted)', fontSize: '1.1rem', marginTop: '0.85rem', lineHeight: 1.7 }}>
            A towering G+9 modern classical residential landmark rising gracefully in SKYOM City. Thoughtfully designed 1 BHK & studio residences with sweeping skyline vistas, dual elevators, and full UP RERA statutory backing.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onOpenEnquiry && onOpenEnquiry('SKYOM Nova (Lucknow)')}
              className="btn-gold"
            >
              <span>Schedule a Private Site Tour</span>
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
          </div>
        </div>
      </section>

      {/* Overview Specs Bar */}
      <section style={{ borderBottom: '1px solid var(--color-border)', padding: '2rem 0', background: '#100f0d' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.75rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              RERA Registration
            </span>
            <div style={{ fontFamily: 'var(--font-brand)', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-gold)', marginTop: '0.2rem' }}>
              UPRERAPRJ960284/10/2026
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Elevation & Heights
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ivory)', marginTop: '0.2rem' }}>
              Ground + 9 Floors Tower
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Target Completion
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ongoing)', marginTop: '0.2rem' }}>
              24 January 2028
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Location & Township
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ivory)', marginTop: '0.2rem' }}>
              SKYOM City, Mohanlalganj
            </div>
          </div>
        </div>
      </section>

      {/* Tower Architecture & Visual Elevation Showcase */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(180deg, #0e0e0e 0%, #12110e 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
            <div className="section-tag">High-Rise Elegance</div>
            <h2 className="section-title">
              Architectural Tower & <span className="accent-serif">Sunset Elevation</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Rising nine levels with rhythmic classical pilasters, warm architectural cornice illumination, ground-level arched colonnade, and spacious balconies for every unit.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            {/* Tower Image Showcase */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                background: '#0a0a0a',
                cursor: 'pointer'
              }}
              onClick={() => onOpenLightbox('/assets/Skyom Nova/VIEW 1.png', 'SKYOM Nova - High-Rise Elevation Render')}
              title="Click to view ultra-high-resolution"
            >
              <img
                src="/assets/Skyom Nova/skyom-nova-tower.webp"
                alt="SKYOM Nova Tower"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
              />
              <div 
                className="zoom-hint-badge"
                style={{ bottom: '1.25rem', right: '1.25rem' }}
              >
                <ZoomIn size={13} />
                <span>Zoom In (4913x6550 Ultra Res)</span>
              </div>
            </div>

            {/* Architectural Highlights Info */}
            <div>
              <div className="section-tag" style={{ marginBottom: '0.5rem' }}>Architectural Design</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--color-ivory)', marginBottom: '1.25rem', fontWeight: 300, lineHeight: 1.2 }}>
                Modern Classical Symmetry with <span className="accent-serif">Illuminated Facades</span>
              </h3>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                SKYOM Nova stands as a monument to engineering precision. Designed to withstand seismic forces under latest NBC & BIS codes, the building combines robust earthquake-resistant RCC construction with timeless architectural proportion.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0 }}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h5 style={{ color: 'var(--color-ivory)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Ground-Level Arched Colonnade</h5>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem', lineHeight: 1.6 }}>An inviting street-level facade featuring classical arches and warm ambient illumination.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0 }}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h5 style={{ color: 'var(--color-ivory)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Dual High-Speed Elevators</h5>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem', lineHeight: 1.6 }}>Large 1900 x 3050 mm and 1900 x 1750 mm lifts serving all nine levels with power backup.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(197, 160, 89, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', flexShrink: 0 }}>
                    <Check size={16} />
                  </div>
                  <div>
                    <h5 style={{ color: 'var(--color-ivory)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>Private Open-Air Balconies</h5>
                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.85rem', lineHeight: 1.6 }}>Panoramic open vistas towards the township greenery and serene skyline.</p>
                  </div>
                </div>
              </div>

              <div>
                <button 
                  className="btn-gold"
                  onClick={() => onOpenLightbox('/assets/Skyom Nova/VIEW 1.png', 'SKYOM Nova - High-Rise Elevation Render')}
                >
                  <span>Enlarge Full Tower Render</span>
                  <ZoomIn size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official UP RERA Statutory Section */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 6.5rem) 0', borderBottom: '1px solid var(--color-border)', background: '#100f0d' }}>
        <div className="container">
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Left RERA Info */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                <ShieldCheck size={20} />
                <span>OFFICIAL STATUTORY DISCLOSURE</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--color-ivory)', marginBottom: '1rem', fontWeight: 300 }}>
                Registered with <span className="accent-serif">UP RERA</span>
              </h3>
              <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                SKYOM Nova is granted official project registration by the Uttar Pradesh Real Estate Regulatory Authority under Section 5 of the Real Estate (Regulation and Development) Act.
              </p>

              <div style={{ background: '#161513', padding: '1.5rem', borderRadius: '6px', border: '1px solid var(--color-border)', marginBottom: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', display: 'block' }}>Project Reg. No:</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-ivory)', fontWeight: 600, fontFamily: 'var(--font-brand)' }}>UPRERAPRJ960284/10/2026</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', display: 'block' }}>Form:</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-ivory)', fontWeight: 600 }}>FORM C (Reg. Certificate)</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', display: 'block' }}>Proposed Completion:</span>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-delivered)', fontWeight: 600 }}>24 January 2028</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', display: 'block' }}>Authority Portal:</span>
                    <a href="https://www.up-rera.in" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', color: 'var(--color-gold)', textDecoration: 'underline' }}>www.up-rera.in</a>
                  </div>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', display: 'block' }}>Project Land & Location:</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-ivory-muted)' }}>
                    Khasra No. 1700, 1701, 1702, 1703, EWS Block at SKYOM City, Village- Uttargaon, Tehsil- Mohanlalganj, District- Lucknow
                  </span>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', display: 'block' }}>Promoter Consortium:</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-ivory-muted)' }}>
                    Bihani Constructions Pvt Ltd & Ambalika Construction Limited
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="/assets/Skyom Nova/Skyom Nova_RERA_Reg Cert.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <FileText size={15} />
                  <span>Download Form-C Certificate</span>
                </a>
              </div>
            </div>

            {/* Right Certificate Preview */}
            <div 
              style={{
                background: '#ffffff',
                padding: '0.75rem',
                borderRadius: '6px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
                cursor: 'pointer',
                textAlign: 'center',
                position: 'relative'
              }}
              onClick={() => onOpenLightbox('/assets/Skyom Nova/skyom-nova-rera-cert.webp', 'UP RERA Registration Certificate - SKYOM Nova')}
              title="Click to view full certificate"
            >
              <img
                src="/assets/Skyom Nova/skyom-nova-rera-cert.webp"
                alt="UP RERA Certificate - SKYOM Nova"
                style={{ width: '100%', maxHeight: '460px', objectFit: 'contain' }}
              />
              <div className="zoom-hint-badge" style={{ bottom: '1rem', right: '1rem' }}>
                <ZoomIn size={13} />
                <span>Zoom Official Certificate</span>
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
              Typical Floor Plan & <span className="accent-serif">Spatial Layout</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              CAD layout of the typical floor at SKYOM Nova, showing 1 BHK residences, dual elevators, large 4.0m lift lobby, wide corridor, and open balconies.
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
                {fp.title.split(' ')[0]} {fp.title.split(' ')[1]} {fp.title.split(' ')[2] || ''}
              </button>
            ))}
          </div>

          {/* Current Floor Display */}
          <div className="floorplan-display-grid">
            <div 
              className="floorplan-img-container"
              onClick={() => onOpenLightbox(currentPlan.src, currentPlan.title)}
              title="Click to zoom floor plan"
              style={{ background: '#ffffff', borderRadius: '6px', padding: '1rem', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img 
                src={currentPlan.src} 
                alt={currentPlan.title} 
                loading="lazy" 
                style={{ maxHeight: '520px', width: 'auto', objectFit: 'contain' }}
              />
              <div className="zoom-hint-badge">
                <ZoomIn size={13} />
                <span>Click to Enlarge CAD Plan (3531px)</span>
              </div>
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

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn-gold" 
                  style={{ flex: 1, minWidth: '180px' }}
                  onClick={() => onOpenLightbox(currentPlan.src, currentPlan.title)}
                >
                  <span>Enlarge Full Plan</span>
                  <ZoomIn size={15} />
                </button>
                <a 
                  href={currentPlan.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
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
                    placeholder="I am interested in 1 BHK high-rise unit allotment / RERA payment schedule..."
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

