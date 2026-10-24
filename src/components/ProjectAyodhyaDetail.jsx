import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, MapPin, Sparkles, Send, CheckCircle2, ShieldCheck, Compass, Trees } from 'lucide-react';

export default function ProjectAyodhyaDetail({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Sacred Heritage Villa Residence',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const highlights = [
    {
      title: 'Sacred Architectural Heritage',
      desc: 'Drawing inspiration from Ayodhya’s eternal spiritual legacy, crafting residences that honor tradition while embracing world-class comforts.',
      icon: Sparkles
    },
    {
      title: 'Prime Pilgrimage Corridor',
      desc: 'Minutes away from Shri Ram Janmabhoomi Mandir, Saryu River Ghats, and the new Maharishi Valmiki International Airport.',
      icon: MapPin
    },
    {
      title: 'Holistic Green Corridors',
      desc: 'Tranquil meditation courtyards, sacred flora gardens, and sound-insulated residences engineered for inner peace.',
      icon: Trees
    },
    {
      title: 'Freehold Clear Title Land',
      desc: 'Backed by SKYOM’s rigorous legal scrutiny, ensuring 100% transparent and clear freehold title acquisition.',
      icon: ShieldCheck
    }
  ];

  const connectivity = [
    { name: 'Maharishi Valmiki International Airport', time: '12 Mins' },
    { name: 'Shri Ram Janmabhoomi Temple', time: '15 Mins' },
    { name: 'Saryu River Ghats & Promenade', time: '15 Mins' },
    { name: 'Ayodhya Dham Junction Railway Station', time: '18 Mins' },
    { name: 'Lucknow-Gorakhpur National Highway', time: '5 Mins' },
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

          <span className="badge-status upcoming">
            <span className="pulse-dot" />
            Coming Soon • Planning Phase • Ayodhya, UP
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{ position: 'relative', width: '100%', height: '65vh', minHeight: '440px', overflow: 'hidden' }}>
        <img
          src="/assets/ayodhya.webp"
          alt="The Ayodhya Vision by SKYOM"
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
              Sacred Heritage Residences
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.6rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--color-ivory)' }}>
              The <span className="accent-serif">Ayodhya</span> Vision
            </h1>
            <p style={{ maxWidth: '680px', color: 'var(--color-ivory-muted)', fontSize: '1.05rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
              Where ancient heritage meets modern luxury. An exclusive residential enclave in India’s sacred spiritual capital, offering serene residences designed for timeless generational living.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Specs Bar */}
      <section style={{ borderBottom: '1px solid var(--color-border)', padding: '2rem 0', background: '#100f0d' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 600 }}>
              Development Stage
            </span>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-upcoming)', marginTop: '0.2rem' }}>
              Master Planning & Regulatory Approvals
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="#contact-form-section" 
              className="btn-gold"
            >
              <span>Register Early Interest</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section style={{ padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <div className="section-tag">Sanctuary of Tranquility</div>
            <h2 className="section-title">
              Spiritual Elegance & <span className="accent-serif">Modern Comfort</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              A sanctuary planned around serene courtyards, traditional stone facades, and contemporary lifestyle amenities.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="glass-card" style={{ padding: '2.5rem 2rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--color-gold-subtle)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                    {h.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', lineHeight: 1.7 }}>
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) 0', background: '#0e0e0e', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Strategic Location</div>
            <h2 className="section-title">
              Ayodhya <span className="accent-serif">Distances</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {connectivity.map((item, idx) => (
              <div 
                key={idx} 
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  padding: '1.5rem',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={18} color="var(--color-gold)" />
                  <span style={{ fontSize: '0.92rem', color: 'var(--color-ivory)', fontWeight: 500 }}>{item.name}</span>
                </div>
                <span className="location-time-badge">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Contact Form at Last */}
      <section id="contact-form-section" style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', background: '#080808', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Early Access</div>
            <h2 className="section-title">
              Register Priority Interest in <span className="accent-serif">Ayodhya</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Be among the select few to receive initial site layouts, pre-launch pricing schedules, and priority allotment privileges.
            </p>
          </div>

          <div className="contact-form-box">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={44} color="var(--color-delivered)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  Priority Registration Confirmed
                </h3>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. You have been added to the priority investor list. Our senior director will be in touch with you at <strong>{formData.phone}</strong>.
                </p>
                <button 
                  className="btn-outline-gold"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', category: 'Sacred Heritage Villa Residence', message: '' });
                  }}
                >
                  Register Another Member
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group-field">
                  <label className="form-field-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
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
                      placeholder="name@domain.com"
                      className="form-input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Property Preference</label>
                  <select
                    className="form-select-field"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Sacred Heritage Villa Residence">Sacred Heritage Villa Residence</option>
                    <option value="Spiritual Retreat Plot">Spiritual Retreat Residential Plot</option>
                    <option value="Commercial / Hospitality Investment">Hospitality / Commercial Land Option</option>
                  </select>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Notes / Specific Preferences</label>
                  <textarea
                    rows={3}
                    placeholder="Interested in plots with proximity to riverfront or temple corridor..."
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
                    <span>Registering Priority Interest...</span>
                  ) : (
                    <>
                      <span>Submit Ayodhya Priority Interest</span>
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
