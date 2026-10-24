import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function StickyActions({ onOpenEnquiry }) {
  return (
    <aside className="sticky-actions-bar" aria-label="Quick contact actions">
      {/* WhatsApp Action */}
      <a
        href="https://wa.me/919999990320?text=Hello%20SKYOM%20Team,%20I%20am%20interested%20in%20learning%20more%20about%20your%20luxury%20projects."
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-action-circle"
        aria-label="Direct WhatsApp Chat with Sales Advisor"
      >
        <MessageSquare size={21} />
        <span className="sticky-action-tooltip">WhatsApp Chat</span>
      </a>

      {/* Direct Phone Call */}
      <a
        href="tel:+919999990320"
        className="sticky-action-circle"
        aria-label="Direct Voice Call to Representative"
      >
        <Phone size={20} />
        <span className="sticky-action-tooltip">Call Representative</span>
      </a>

      {/* Book VIP Visit / Enquiry */}
      <button
        onClick={() => onOpenEnquiry('Floating Action Widget')}
        className="sticky-action-circle"
        aria-label="Book VIP Site Tour or Consultation"
      >
        <Calendar size={20} />
        <span className="sticky-action-tooltip">Schedule Visit</span>
      </button>
    </aside>
  );
}
