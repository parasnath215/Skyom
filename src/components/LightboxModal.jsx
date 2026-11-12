import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, RotateCw, CheckCircle2 } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, imageSrc, title }) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadForm, setDownloadForm] = useState({ name: '', phone: '', email: '' });
  const [downloadDone, setDownloadDone] = useState(false);

  if (!isOpen || !imageSrc) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.6));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);
  const handleReset = () => {
    setScale(1);
    setRotation(0);
  };

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    setDownloadDone(true);
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = (title ? title.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'skyom_asset') + '.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setDownloadModalOpen(false);
      setDownloadDone(false);
      setDownloadForm({ name: '', phone: '', email: '' });
    }, 2500);
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={() => {
        handleReset();
        onClose();
      }}
      style={{ zIndex: 3000, padding: '1rem' }}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(12, 12, 12, 0.95)',
          border: '1px solid var(--color-border)',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.9)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
          background: '#0a0a0a'
        }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-ivory)' }}>
              {title || 'Architectural Blueprint'}
            </h4>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              High-Resolution Visual
            </span>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button 
              onClick={handleZoomIn} 
              className="social-circle-btn" 
              title="Zoom In"
              aria-label="Zoom in"
            >
              <ZoomIn size={16} />
            </button>
            <button 
              onClick={handleZoomOut} 
              className="social-circle-btn" 
              title="Zoom Out"
              aria-label="Zoom out"
            >
              <ZoomOut size={16} />
            </button>
            <button 
              onClick={handleRotate} 
              className="social-circle-btn" 
              title="Rotate 90deg"
              aria-label="Rotate"
            >
              <RotateCw size={16} />
            </button>
            <button 
              onClick={() => setDownloadModalOpen(true)}
              className="social-circle-btn" 
              title="Download High-Res Visual"
              aria-label="Download"
            >
              <Download size={16} />
            </button>
            <button 
              onClick={() => {
                handleReset();
                onClose();
              }} 
              className="social-circle-btn" 
              title="Close"
              aria-label="Close"
              style={{ background: 'var(--color-gold)', color: '#080808' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Viewport Area */}
        <div style={{
          position: 'relative',
          flexGrow: 1,
          overflow: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#070707',
          minHeight: '400px'
        }}>
          <img
            src={imageSrc}
            alt={title}
            style={{
              maxWidth: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              transition: 'transform 0.25s ease-out',
              transformOrigin: 'center center'
            }}
          />

          {/* Download Lead Form Modal Inside Lightbox */}
          {downloadModalOpen && (
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.88)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                zIndex: 10
              }}
              onClick={() => setDownloadModalOpen(false)}
            >
              <div 
                style={{
                  background: '#141311',
                  border: '1px solid var(--color-gold)',
                  borderRadius: '8px',
                  maxWidth: '420px',
                  width: '100%',
                  padding: '2rem 1.75rem',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                  textAlign: 'center',
                  position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setDownloadModalOpen(false)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--color-ivory-muted)',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>

                <div className="section-tag" style={{ justifyContent: 'center', fontSize: '0.72rem', letterSpacing: '0.12em' }}>
                  High-Resolution Download
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ivory)', margin: '0.35rem 0 0.5rem 0' }}>
                  Download Project Visual
                </h3>

                {downloadDone ? (
                  <div style={{ padding: '1.5rem 0 0.5rem' }}>
                    <CheckCircle2 size={44} color="var(--color-delivered)" style={{ margin: '0 auto 0.75rem' }} />
                    <p style={{ color: 'var(--color-ivory)', fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                      Download Started!
                    </p>
                    <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.85rem' }}>
                      Thank you, {downloadForm.name}. Your high-resolution file is downloading.
                    </p>
                  </div>
                ) : (
                  <>
                    <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      Please provide your details below to download this high-resolution architectural visual.
                    </p>
                    <form onSubmit={handleDownloadSubmit} style={{ textAlign: 'left' }}>
                      <div className="form-group-field" style={{ marginBottom: '0.85rem' }}>
                        <label className="form-field-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          className="form-input-field"
                          value={downloadForm.name}
                          onChange={(e) => setDownloadForm({ ...downloadForm, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group-field" style={{ marginBottom: '0.85rem' }}>
                        <label className="form-field-label">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="form-input-field"
                          value={downloadForm.phone}
                          onChange={(e) => setDownloadForm({ ...downloadForm, phone: e.target.value })}
                        />
                      </div>
                      <div className="form-group-field" style={{ marginBottom: '1.25rem' }}>
                        <label className="form-field-label">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@example.com"
                          className="form-input-field"
                          value={downloadForm.email}
                          onChange={(e) => setDownloadForm({ ...downloadForm, email: e.target.value })}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-gold"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <Download size={15} />
                        <span>Download High-Res File</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
