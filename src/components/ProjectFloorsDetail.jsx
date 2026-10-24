import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ZoomIn } from 'lucide-react';

export default function ProjectFloorsDetail({ onBack, onOpenEnquiry, onOpenLightbox }) {
  const [activeFloorIndex, setActiveFloorIndex] = useState(0);

  const floorPlans = [
    {
      title: '6 BHK Duplex Signature Floor Plan',
      src: '/assets/Skyom Floor/skyom-6bhk-duplex-floorplan.webp',
      desc: 'Sprawling duplex layout featuring double-height living areas, private rooftop terrace, dedicated servants quarters, and private elevator vestibule.',
      specs: [
        { label: 'Configuration', val: '6 BHK Duplex' },
        { label: 'Super Built-Up Area', val: '5,800 sq.ft.' },
        { label: 'Parking', val: '3 Reserved Covered' },
        { label: 'Status', val: '100% Delivered' }
      ]
    },
    {
      title: 'Ground Floor Luxury Residence',
      src: '/assets/Skyom Floor/Skyom Floor-1.webp',
      desc: 'Ground floor residence with exclusive rear lawn access, separate entrance foyer, and Italian marble flooring throughout.',
      specs: [
        { label: 'Configuration', val: '4 BHK Independent' },
        { label: 'Super Built-Up Area', val: '3,200 sq.ft.' },
        { label: 'Private Lawn', val: 'Included' },
        { label: 'Status', val: '100% Delivered' }
      ]
    },
    {
      title: 'First Floor Classical Floor Plan',
      src: '/assets/Skyom Floor/Skyom Floor-2.webp',
      desc: 'First floor apartment boasting large wrap-around balconies, panoramic street views, and high ceilings.',
      specs: [
        { label: 'Configuration', val: '4 BHK Independent' },
        { label: 'Super Built-Up Area', val: '3,200 sq.ft.' },
        { label: 'Balcony Area', val: '450 sq.ft.' },
        { label: 'Status', val: '100% Delivered' }
      ]
    },
    {
      title: 'Second Floor Executive Suite',
      src: '/assets/Skyom Floor/Skyom Floor-3.webp',
      desc: 'Airy second floor residence filled with natural sunlight, acoustic double-glazed windows, and modular German kitchen.',
      specs: [
        { label: 'Configuration', val: '4 BHK Independent' },
        { label: 'Super Built-Up Area', val: '3,200 sq.ft.' },
        { label: 'Kitchen', val: 'Fitted Modular' },
        { label: 'Status', val: '100% Delivered' }
      ]
    },
    {
      title: 'Penthouse with Terrace Garden',
      src: '/assets/Skyom Floor/Skyom Floor-4.webp',
      desc: 'Top floor penthouse residence enjoying exclusive private terrace ownership, gazebo setup, and city skyline views.',
      specs: [
        { label: 'Configuration', val: '4 BHK Penthouse' },
        { label: 'Terrace Rights', val: '100% Private' },
        { label: 'Super Built-Up Area', val: '3,200 sq.ft. + Terrace' },
        { label: 'Status', val: '100% Delivered' }
      ]
    }
  ];

  const currentFloor = floorPlans[activeFloorIndex];

  return (
    <div style={{ paddingTop: 'var(--nav-height)', backgroundColor: 'var(--color-bg)' }}>
      {/* Top Breadcrumb Bar */}
      <div style={{ borderBottom: '1px solid var(--color-border)', padding: '1rem 0', background: '#0e0e0e' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button 
            onClick={onBack} 
            className="nav-link" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </button>

          <span className="badge-status delivered">
            <CheckCircle2 size={13} style={{ marginRight: 2 }} />
            Delivered Landmark • New Delhi
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{ position: 'relative', width: '100%', height: '60vh', minHeight: '400px', overflow: 'hidden' }}>
        <img
          src="/assets/skyom-floors.webp"
          alt="SKYOM Floors New Delhi"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.85) 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '3rem'
        }}>
          <div className="container">
            <div className="section-tag" style={{ color: 'var(--color-gold-light)' }}>
              Completed Landmark
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--color-ivory)' }}>
              SKYOM <span className="accent-serif">Floors</span>
            </h1>
            <p style={{ maxWidth: '650px', color: 'var(--color-ivory-muted)', fontSize: '1.05rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
              Our flagship residential project that laid the cornerstone of SKYOM’s architectural reputation. Delivered on time with immaculate craftsmanship in the heart of New Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Specs Bar */}
      <section style={{ borderBottom: '1px solid var(--color-border)', padding: '2rem 0', background: '#100f0d' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Delivery Status
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-delivered)', marginTop: '0.2rem' }}>
              100% Handed Over & Occupied
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onOpenEnquiry && onOpenEnquiry('SKYOM Floors')} 
              className="btn-gold"
            >
              <span>Enquire for Similar Residences</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="floorplans-section" style={{ padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
            <div className="section-tag">Delivered Blueprints</div>
            <h2 className="section-title">
              Floor Plans & <span className="accent-serif">Layouts</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Explore the detailed architectural floor plans that defined the luxury standard of SKYOM Floors.
            </p>
          </div>

          {/* Floor Tabs */}
          <div className="floorplan-tabs-bar">
            {floorPlans.map((fp, idx) => (
              <button
                key={idx}
                className={`plan-tab-btn ${activeFloorIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveFloorIndex(idx)}
              >
                {fp.title.split(' ')[0]} {fp.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Current Floor Display */}
          <div className="floorplan-display-grid">
            <div 
              className="floorplan-img-container"
              onClick={() => onOpenLightbox(currentFloor.src, currentFloor.title)}
              title="Click to zoom floor plan"
            >
              <img 
                src={currentFloor.src} 
                alt={currentFloor.title} 
                loading="lazy" 
              />
              <div className="zoom-hint-badge">
                <ZoomIn size={13} />
                <span>Click to Zoom</span>
              </div>
            </div>

            <div className="floorplan-info-col">
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

              <div>
                <button 
                  className="btn-gold" 
                  style={{ width: '100%' }}
                  onClick={() => onOpenLightbox(currentFloor.src, currentFloor.title)}
                >
                  <span>Enlarge Full Floor Plan</span>
                  <ZoomIn size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
