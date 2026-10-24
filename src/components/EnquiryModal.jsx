import React, { useState } from 'react';
import { X, CheckCircle2, Send, Calendar, Phone, Mail, User } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, defaultTopic }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: defaultTopic || 'SKYOM City (Lucknow)',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div 
        className="modal-content-box" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button 
          className="modal-close-btn" 
          onClick={handleClose}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(52, 211, 153, 0.12)',
              border: '1px solid var(--color-delivered)',
              color: 'var(--color-delivered)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
              Booking Request Confirmed
            </h3>
            <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Thank you, <strong>{formData.name}</strong>. Your consultation request for <strong>{formData.project}</strong> has been logged. An executive will call you shortly at <strong>{formData.phone}</strong>.
            </p>

            <button className="btn-gold" onClick={handleClose} style={{ width: '100%' }}>
              <span>Done</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="section-tag" style={{ marginBottom: '0.5rem' }}>VIP Appointment</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
              Schedule VIP Consultation
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)', marginBottom: '1.75rem' }}>
              Experience the craftsmanship firsthand. Receive private brochures, plot allocations, and scheduled site transfers.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group-field">
                <label className="form-field-label">Full Name *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="form-input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
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
                <label className="form-field-label">Project of Interest</label>
                <select
                  className="form-select-field"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                >
                  <option value="SKYOM City (Lucknow)">SKYOM City — 50 Acres Township, Lucknow</option>
                  <option value="SKYOM Floors (Delhi)">SKYOM Floors — Independent Luxury Floors</option>
                  <option value="The Ayodhya Vision">The Ayodhya Vision — Sacred Residences</option>
                  <option value="The Dehradun Retreat">The Dehradun Retreat — Hillside Plots</option>
                  <option value="Direct Sales Consultation">Direct VIP Leadership Consultation</option>
                </select>
              </div>

              <div className="form-group-field">
                <label className="form-field-label">Preferred Date for Visit</label>
                <input
                  type="date"
                  className="form-input-field"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="btn-gold" 
                style={{ width: '100%', marginTop: '0.75rem' }}
                disabled={loading}
              >
                {loading ? (
                  <span>Processing Appointment...</span>
                ) : (
                  <>
                    <span>Confirm Consultation</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
