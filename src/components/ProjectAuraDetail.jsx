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
  Send
} from 'lucide-react';

export default function ProjectAuraDetail({ onBack, onOpenEnquiry, onOpenLightbox }) {
  // Façade Color Options tabs
  const [selectedOption, setSelectedOption] = useState(0);
  const [viewMode, setViewMode] = useState('night'); // 'night' or 'day'
  const [activeFloorTab, setActiveFloorTab] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const colorOptions = [
    {
      id: 'opt-3',
      name: 'Option 03: Tans & Beiges',
      shortName: 'Tans & Beiges',
      palette: ['#c9a063', '#d9c7af', '#4a3b2c'],
      description: 'Signature Mediterranean palette with rich golden tans, light stone beiges, and classical nighttime illumination.',
      dayImg: '/assets/Skyom Aura/option-3-day.webp',
      nightImg: '/assets/Skyom Aura/skyom-aura-hero.webp',
      badge: 'Signature Choice'
    },
    {
      id: 'opt-1',
      name: 'Option 01: Olives & Beiges',
      shortName: 'Olives & Beiges',
      palette: ['#7c7d62', '#d5cbbe', '#8c593e'],
      description: 'Sophisticated natural harmony with subtle olive-green accents, warm beige stucco, and terracotta roof highlights.',
      dayImg: '/assets/Skyom Aura/option-1-day.webp',
      nightImg: '/assets/Skyom Aura/option-1-night.webp',
      badge: 'Organic Warmth'
    },
    {
      id: 'opt-2',
      name: 'Option 02: Creams & Greys',
      shortName: 'Creams & Greys',
      palette: ['#e4ded4', '#8a8984', '#3d3c3a'],
      description: 'Refined modern neoclassical elegance blending soft ivory cream stone with understated urban grey archways.',
      dayImg: '/assets/Skyom Aura/option-2-day.webp',
      nightImg: '/assets/Skyom Aura/option-2-night.webp',
      badge: 'Contemporary Classic'
    },
    {
      id: 'opt-4',
      name: 'Option 04: Shades of Brown',
      shortName: 'Shades of Brown',
      palette: ['#593822', '#b39274', '#ecdcc9'],
      description: 'Regal Tuscan masonry aesthetic featuring earthy espresso undertones, sun-baked clay, and warm arched porticos.',
      dayImg: '/assets/Skyom Aura/option-4-day.webp',
      nightImg: '/assets/Skyom Aura/option-4-night.webp',
      badge: 'Tuscan Heritage'
    },
    {
      id: 'opt-roof',
      name: 'Alternate Balustrade Parapet',
      shortName: 'Balustrade Roof',
      palette: ['#e0d4c3', '#a8947f', '#ffffff'],
      description: 'Classical European parapet crowning the entire structure with ornate stone balustrades and rooftop promenades.',
      dayImg: '/assets/Skyom Aura/skyom-aura-daylight.webp',
      nightImg: '/assets/Skyom Aura/skyom-aura-hero.webp',
      badge: 'Classical Crown'
    }
  ];

  const currentOption = colorOptions[selectedOption];
  const currentOptionImg = viewMode === 'day' ? currentOption.dayImg : currentOption.nightImg;

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
        { label: 'Architects', val: 'Ar. Nehareeka Mehindru & Ar. Nimit Jain' },
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
      <section style={{ position: 'relative', width: '100%', minHeight: '62vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="/assets/Skyom Aura/skyom-aura-hero.webp"
          alt="SKYOM Aura - Neo-Classical Residences"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8,8,8,0.25) 0%, rgba(8,8,8,0.88) 100%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '3.5rem', paddingTop: '6rem' }}>
          <div className="section-tag" style={{ color: 'var(--color-gold-light)', marginBottom: '0.5rem' }}>
            Ongoing Residential Landmark
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--color-ivory)' }}>
            SKYOM <span className="accent-serif">Aura</span>
          </h1>
          <p style={{ maxWidth: '680px', color: 'var(--color-ivory-muted)', fontSize: '1.1rem', marginTop: '0.85rem', lineHeight: 1.7 }}>
            Mediterranean neo-classical residences blending arched colonnades, warm masonry finishes, and boutique commercial suites within the prestigious 50-acre SKYOM City integrated township.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
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

      {/* Overview Specs Bar */}
      <section style={{ borderBottom: '1px solid var(--color-border)', padding: '2rem 0', background: '#100f0d' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.75rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Development Status
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ongoing)', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="pulse-dot" /> Under Construction
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Configuration
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ivory)', marginTop: '0.2rem' }}>
              2 BHK Luxury + Retail
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Architectural Concept
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ivory)', marginTop: '0.2rem' }}>
              Ar. Nehareeka & Ar. Nimit
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Location
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ivory)', marginTop: '0.2rem' }}>
              SKYOM City, Lucknow
            </div>
          </div>
        </div>
      </section>

      {/* Façade Design & Color Options (Stage 2 Lookbook) */}
      <section style={{ padding: 'clamp(4.5rem, 7vw, 7rem) 0', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(180deg, #0e0e0e 0%, #12110e 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
            <div className="section-tag">Architectural Aesthetics</div>
            <h2 className="section-title">
              Façade Palette & <span className="accent-serif">Design Options</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Directly from the Stage 2 architectural presentation by Ar. Nehareeka Mehindru & Ar. Nimit Jain. Explore four refined exterior palettes and the alternate classical balustrade roof option.
            </p>
          </div>

          {/* Palette Selector Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {colorOptions.map((opt, idx) => (
              <button
                key={opt.id}
                onClick={() => setSelectedOption(idx)}
                style={{
                  background: selectedOption === idx ? 'rgba(197, 160, 89, 0.15)' : '#161513',
                  border: selectedOption === idx ? '1px solid var(--color-gold)' : '1px solid var(--color-border)',
                  color: selectedOption === idx ? 'var(--color-gold)' : 'var(--color-ivory-muted)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  transition: 'all 0.25s ease',
                  fontSize: '0.88rem',
                  fontWeight: 500
                }}
              >
                {/* Mini Color Swatches */}
                <div style={{ display: 'flex', gap: '3px' }}>
                  {opt.palette.map((color, cIdx) => (
                    <span 
                      key={cIdx} 
                      style={{ 
                        width: '10px', 
                        height: '10px', 
                        borderRadius: '50%', 
                        backgroundColor: color, 
                        border: '1px solid rgba(255,255,255,0.2)' 
                      }} 
                    />
                  ))}
                </div>
                <span>{opt.shortName}</span>
              </button>
            ))}
          </div>

          {/* Preview Card with Day / Night Toggle */}
          <div style={{
            background: '#141311',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <div style={{ position: 'relative', width: '100%', minHeight: '480px', maxHeight: '680px', overflow: 'hidden', background: '#080808' }}>
              <img
                src={currentOptionImg}
                alt={currentOption.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer', transition: 'transform 0.4s ease' }}
                onClick={() => onOpenLightbox(currentOptionImg, currentOption.name)}
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
                  {currentOption.badge}
                </span>
              </div>

              {/* Zoom hint */}
              <div 
                className="zoom-hint-badge"
                onClick={() => onOpenLightbox(currentOptionImg, currentOption.name)}
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
                  {currentOption.name}
                </h4>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', maxWidth: '700px', lineHeight: 1.6 }}>
                  {currentOption.description}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  className="btn-outline-gold"
                  onClick={() => onOpenLightbox(currentOptionImg, currentOption.name)}
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
              onClick={() => onOpenLightbox(currentFloor.src, currentFloor.title)}
              title="Click to zoom floor plan"
              style={{ background: '#ffffff', borderRadius: '6px', padding: '1rem', minHeight: '440px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <img 
                src={currentFloor.src} 
                alt={currentFloor.title} 
                loading="lazy" 
                style={{ maxHeight: '550px', width: 'auto', objectFit: 'contain' }}
              />
              <div className="zoom-hint-badge">
                <ZoomIn size={13} />
                <span>Click to Enlarge CAD Plan</span>
              </div>
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

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn-gold" 
                  style={{ flex: 1, minWidth: '180px' }}
                  onClick={() => onOpenLightbox(currentFloor.src, currentFloor.title)}
                >
                  <span>Enlarge Full Plan</span>
                  <ZoomIn size={15} />
                </button>
                <a 
                  href={currentFloor.pdf} 
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
    </div>
  );
}

