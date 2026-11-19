import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, imageSrc, title }) {
  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{ zIndex: 3000, padding: '0.75rem' }}
    >
      <div 
        className="lightbox-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar: Only Name and Close Button */}
        <div className="lightbox-header">
          <div className="lightbox-title-box">
            <h4 className="lightbox-title-text">
              {title || 'Architectural Visual'}
            </h4>
          </div>

          <button 
            onClick={onClose} 
            className="lightbox-close-btn" 
            title="Close"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Viewport Area */}
        <div className="lightbox-viewport-area">
          <img
            src={imageSrc}
            alt={title || 'Visual Preview'}
            style={{
              maxWidth: '100%',
              maxHeight: '78vh',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
      </div>
    </div>
  );
}
