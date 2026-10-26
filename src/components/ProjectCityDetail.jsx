import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowUpRight, Download, MapPin, 
  ShieldCheck, Trees, Building2, Dumbbell, Waves, Zap, 
  Smile, Compass, ChevronDown, ChevronUp, ZoomIn, Send, CheckCircle2
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

  const plotTypes = [
    { type: 'Type - 1', size: '9.75 x 21.0 m', areaSqm: '204.75 Sq.m', areaSqft: '~2,204 Sq.ft', color: '#fef08a' },
    { type: 'Type - 2', size: '9.15 x 18.30 m', areaSqm: '167.45 Sq.m', areaSqft: '~1,802 Sq.ft', color: '#67e8f9' },
    { type: 'Type - 2c', size: '12.15 x 18.30 m', areaSqm: '222.35 Sq.m', areaSqft: '~2,393 Sq.ft', color: '#06b6d4' },
    { type: 'Type - 3', size: '8.50 x 16.00 m', areaSqm: '136.00 Sq.m', areaSqft: '~1,464 Sq.ft', color: '#f0abfc' },
    { type: 'Type - 3a', size: '9.34 x 16.00 m', areaSqm: '149.44 Sq.m', areaSqft: '~1,608 Sq.ft', color: '#e879f9' },
    { type: 'Type - 3c', size: '10.50 x 16.00 m', areaSqm: '168.00 Sq.m', areaSqft: '~1,808 Sq.ft', color: '#c084fc' },
    { type: 'Type - 4', size: '7.32 x 16.50 m', areaSqm: '120.78 Sq.m', areaSqft: '~1,300 Sq.ft', color: '#fca5a5' },
    { type: 'Type - 4c', size: '9.32 x 16.50 m', areaSqm: '153.78 Sq.m', areaSqft: '~1,655 Sq.ft', color: '#f87171' },
    { type: 'Type - 5', size: '6.30 x 14.10 m', areaSqm: '88.83 Sq.m', areaSqft: '~956 Sq.ft', color: '#a5b4fc' },
    { type: 'Type - 5c', size: '7.80 x 14.10 m', areaSqm: '110.00 Sq.m', areaSqft: '~1,184 Sq.ft', color: '#818cf8' },
    { type: 'Type - 6', size: '6.45 x 10.48 m', areaSqm: '67.60 Sq.m', areaSqft: '~728 Sq.ft', color: '#38bdf8' },
    { type: 'Type - 6c', size: '7.95 x 10.48 m', areaSqm: '83.32 Sq.m', areaSqft: '~897 Sq.ft', color: '#0284c7' },
  ];

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
      a: 'SKYOM City is situated on State Highway 173 to Unnao, near Raibareli Road, Mohanlalganj, Lucknow (PIN 226301). It connects seamlessly to Kisan Path, Shaheed Path, and the Lucknow-Varanasi corridor.'
    },
    {
      q: 'Is the township RERA approved and legally clear?',
      a: 'Yes, SKYOM City is fully registered under Uttar Pradesh RERA with official Registration Number UPRERAPRJ600292/06/2025. All land titles are 100% freehold and verified.'
    },
    {
      q: 'What types of plots and configurations are available?',
      a: 'The township features meticulously planned residential plot sizes ranging from 67.60 Sq.m (Type-6) up to 222.35 Sq.m (Type-2c), spread across Sector 01 and Sector 02.'
    },
    {
      q: 'Can I visit the township site for a physical inspection?',
      a: 'Yes. Our corporate sales team organizes scheduled VIP site visits seven days a week with guided vehicle tours of the master layout and road network.'
    }
  ];

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

          <span className="badge-status ongoing">
            <span className="pulse-dot" />
            Ongoing Township • Mohanlalganj, Lucknow
          </span>
        </div>
      </div>

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

      {/* Statutory RERA Banner Strip */}
      <section style={{ borderBottom: '1px solid var(--color-border)', padding: '2rem 0', background: '#100f0d' }}>
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

      {/* Official Layout Plan Section (Image 1) */}
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

          {/* Layout Plan Visual with Zoom Modal Trigger */}
          <div 
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              padding: 'clamp(1rem, 3vw, 2.5rem)',
              marginBottom: '3rem',
              position: 'relative',
              textAlign: 'center'
            }}
          >
            <div 
              style={{ position: 'relative', cursor: 'zoom-in', display: 'inline-block', maxWidth: '100%' }}
              onClick={() => onOpenLightbox('/assets/skyom-city-layout-plan.png', 'SKYOM City — Official Master Layout Plan')}
              title="Click to zoom high resolution blueprint"
            >
              <img 
                src="/assets/skyom-city-layout-plan.webp" 
                alt="SKYOM City Master Layout Plan"
                style={{ width: '100%', maxHeight: '680px', objectFit: 'contain', borderRadius: '4px' }}
                loading="eager"
              />
              <div className="zoom-hint-badge" style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem' }}>
                <ZoomIn size={14} />
                <span>Click to Enlarge Layout Plan</span>
              </div>
            </div>
          </div>

          {/* Plot Specifications & Area Table */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
            padding: 'clamp(1.5rem, 4vw, 3rem)'
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
              Residential Plot Schedule & Dimensions
            </h3>
            <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Official color code and area schedule as per approved layout plan for Sector 01 and Sector 02.
            </p>

            <div style={{ width: '100%', maxWidth: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '0 auto', boxSizing: 'border-box' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '540px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'rgba(255, 255, 255, 0.02)' }}>
                    <th style={{ padding: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>Color Code</th>
                    <th style={{ padding: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>Type of Plot</th>
                    <th style={{ padding: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>Plot Size (in Mts)</th>
                    <th style={{ padding: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>Plot Area (in Sqm)</th>
                    <th style={{ padding: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gold)' }}>Approx Area (Sq.ft)</th>
                  </tr>
                </thead>
                <tbody>
                  {plotTypes.map((row, idx) => (
                    <tr 
                      key={idx} 
                      style={{ 
                        borderBottom: '1px solid var(--color-border-subtle)',
                        background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)'
                      }}
                    >
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          display: 'inline-block',
                          width: '26px',
                          height: '16px',
                          backgroundColor: row.color,
                          borderRadius: '2px',
                          border: '1px solid rgba(0,0,0,0.4)',
                          verticalAlign: 'middle'
                        }} />
                      </td>
                      <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-ivory)' }}>{row.type}</td>
                      <td style={{ padding: '1rem', color: 'var(--color-ivory-muted)' }}>{row.size}</td>
                      <td style={{ padding: '1rem', color: 'var(--color-gold)', fontWeight: 600 }}>{row.areaSqm}</td>
                      <td style={{ padding: '1rem', color: 'var(--color-ivory-muted)' }}>{row.areaSqft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

      {/* Frequently Asked Questions */}
      <section style={{ padding: 'clamp(5rem, 8vw, 7.5rem) 0', borderTop: '1px solid var(--color-border)' }}>
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
    </div>
  );
}
