import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'SKYOM City (Lucknow)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div className="section-tag">Direct Access</div>
          <h2 className="section-title">
            Let’s Discuss Your <span className="accent-serif">Future Residence</span>
          </h2>
          <p className="section-desc" style={{ margin: '1rem auto 0' }}>
            Schedule an exclusive private consultation with our client advisors, or book a guided tour of the 50-acre SKYOM City township.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Info Column */}
          <div className="contact-info-col">
            <div className="contact-detail-row">
              <div className="contact-icon-bubble">
                <Phone size={20} />
              </div>
              <div>
                <h5 className="contact-row-title">Call Direct / WhatsApp</h5>
                <a href="tel:+919999990320" className="contact-row-value" style={{ display: 'block', fontSize: '1.15rem', color: 'var(--color-ivory)', fontWeight: 500 }}>
                  +91 999999 0320
                </a>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>Lines active Mon - Sun, 9:00 AM - 7:30 PM IST</span>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-bubble">
                <Mail size={20} />
              </div>
              <div>
                <h5 className="contact-row-title">Official Electronic Mail</h5>
                <a href="mailto:info@skyomcity.in" className="contact-row-value" style={{ display: 'block' }}>
                  info@skyomcity.in
                </a>
                <a href="mailto:contact@skyom.in" className="contact-row-value" style={{ display: 'block', fontSize: '0.88rem', color: 'var(--color-text-dim)' }}>
                  contact@skyom.in
                </a>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-bubble">
                <MapPin size={20} />
              </div>
              <div>
                <h5 className="contact-row-title">Corporate Headquarters</h5>
                <p className="contact-row-value">
                  5th Floor, ROMS Code, SKYOM Corporate Office, <br />
                  Sushant Golf City, Lucknow, Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-bubble">
                <Clock size={20} />
              </div>
              <div>
                <h5 className="contact-row-title">Township Experience Center</h5>
                <p className="contact-row-value">
                  On State Highway 173 to Unnao, Near Raibareli Road, <br />
                  Mohanlalganj, Lucknow 226301
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-box">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} color="var(--color-delivered)" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  Consultation Request Received
                </h3>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. A Senior Real Estate Advisor from SKYOM will contact you via phone within 2 hours.
                </p>
                <button 
                  className="btn-outline-gold"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', project: 'SKYOM City (Lucknow)', message: '' });
                  }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.35rem' }}>
                    Request VIP Callback
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>
                    Fill out the form below to receive exclusive brochures, pricing schedules, or book a site visit.
                  </p>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
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
                      placeholder="vikram@example.com"
                      className="form-input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Project of Interest</label>
                  <select
                    className="form-select-field"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  >
                    <option value="SKYOM City (Lucknow)">SKYOM City — 50 Acres Township, Lucknow</option>
                    <option value="SKYOM Floors (Delhi)">SKYOM Floors — Independent Floors, Delhi</option>
                    <option value="The Ayodhya Vision">The Ayodhya Vision — Sacred Residences</option>
                    <option value="The Dehradun Retreat">The Dehradun Retreat — Hillside Plots</option>
                    <option value="General Investment Enquiry">General Corporate & Investment Enquiry</option>
                  </select>
                </div>

                <div className="form-group-field">
                  <label className="form-field-label">Preferred Date / Message</label>
                  <textarea
                    rows={3}
                    placeholder="I would like to schedule a site visit this Saturday..."
                    className="form-textarea-field"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-gold" 
                  style={{ width: '100%' }}
                  disabled={loading}
                >
                  {loading ? (
                    <span>Transmitting Request...</span>
                  ) : (
                    <>
                      <span>Transmit VIP Consultation Request</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
