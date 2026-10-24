import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, RotateCw } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, imageSrc, title }) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  if (!isOpen || !imageSrc) return null;

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.6));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);
  const handleReset = () => {
    setScale(1);
    setRotation(0);
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
            <a 
              href={imageSrc} 
              download 
              className="social-circle-btn" 
              title="Download Plan"
              aria-label="Download"
            >
              <Download size={16} />
            </a>
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
        </div>
      </div>
    </div>
  );
}
