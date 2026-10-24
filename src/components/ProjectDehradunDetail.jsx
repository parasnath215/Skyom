import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, MapPin, Trees, Send, CheckCircle2, ShieldCheck, Sun, Compass } from 'lucide-react';

export default function ProjectDehradunDetail({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: 'Hillside Villa Plot (3,000 sq.ft.)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const features = [
    {
      title: 'Himalayan Foothill Vista',
      desc: 'Perched in the lush green foothills of Dehradun with uninterrupted panoramic mountain views and fresh Himalayan breezes.',
      icon: Trees
    },
    {
      title: 'Gated Luxury Sanctuary',
      desc: 'Exclusive, low-density gated community designed for bespoke architectural villas with underground services and solar energy.',
      icon: ShieldCheck
    },
    {
      title: 'Active Mountain Wellness',
      desc: 'Private forest jogging tracks, sunrise yoga decks, infinity mountain-view pool, and signature wellness spa club.',
      icon: Sun
    },
    {
      title: 'Rapid City & Hill Connectivity',
      desc: 'Conveniently connected to Jolly Grant Airport, Dehradun city center, and the scenic highway to Mussoorie.',
      icon: Compass
    }
  ];

  const connectivity = [
    { name: 'Dehradun City Center & Clock Tower', time: '15 Mins' },
    { name: 'Max Super Specialty Hospital', time: '15 Mins' },
    { name: 'Pacific Mall Rajpur Road', time: '18 Mins' },
    { name: 'Dehradun Railway Station', time: '20 Mins' },
    { name: 'Jolly Grant International Airport', time: '35 Mins' },
    { name: 'Mussoorie Queen of Hills', time: '40 Mins' },
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
            Coming Soon • Planning Phase • Dehradun, UK
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{ position: 'relative', width: '100%', height: '65vh', minHeight: '440px', overflow: 'hidden' }}>
        <img
          src="/assets/dehradun.webp"
          alt="The Dehradun Retreat by SKYOM"
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
              Mountain Luxury Living
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.6rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--color-ivory)' }}>
              The <span className="accent-serif">Dehradun</span> Retreat
            </h1>
            <p style={{ maxWidth: '680px', color: 'var(--color-ivory-muted)', fontSize: '1.05rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
              Nestled in the tranquil foothills of the Himalayas. Premium hillside plots for luxury villas offering pure mountain air, verdant pine surroundings, and resort-style living.
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
              Master Land Consolidation & Planning
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

      {/* Features Grid */}
      <section style={{ padding: 'clamp(5rem, 8vw, 8rem) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
            <div className="section-tag">Pure Himalayan Living</div>
            <h2 className="section-title">
              Nature Meets <span className="accent-serif">Refined Luxury</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Discover an idyllic second home or generational retirement villa sanctuary far removed from urban congestion.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((f, i) => {
              const Icon = f.icon;
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
                    {f.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-dim)', lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Distances */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) 0', background: '#0e0e0e', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag">Strategic Mountain Gateway</div>
            <h2 className="section-title">
              Dehradun <span className="accent-serif">Connectivity</span>
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
            <div className="section-tag">Priority Access</div>
            <h2 className="section-title">
              Register Priority Interest in <span className="accent-serif">Dehradun</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0' }}>
              Reserve your hillside villa plot or schedule a private consultation for our upcoming Dehradun retreat.
            </p>
          </div>

          <div className="contact-form-box">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={44} color="var(--color-delivered)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  Priority Registration Received
                </h3>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry for Dehradun has been prioritized. Our team will contact you at <strong>{formData.phone}</strong>.
                </p>
                <button 
                  className="btn-outline-gold"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', plotSize: 'Hillside Villa Plot (3,000 sq.ft.)', message: '' });
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
                    placeholder="Enter your full name"
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
                      placeholder="name@domain.com"
                      className="form-input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Preferred Plot Size</label>
                  <select
                    className="form-select-field"
                    value={formData.plotSize}
                    onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                  >
                    <option value="Hillside Villa Plot (2,400 sq.ft.)">Hillside Villa Plot (2,400 sq.ft.)</option>
                    <option value="Hillside Villa Plot (3,600 sq.ft.)">Hillside Villa Plot (3,600 sq.ft.)</option>
                    <option value="Grand Himalayan Estate (5,000+ sq.ft.)">Grand Himalayan Estate (5,000+ sq.ft.)</option>
                  </select>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Message / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Looking for mountain-facing plots with road frontage..."
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
                    <span>Submitting Priority Request...</span>
                  ) : (
                    <>
                      <span>Submit Dehradun Priority Request</span>
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
