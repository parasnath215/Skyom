import React from 'react';
import { ArrowLeft, ArrowUpRight, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';
import ContactSection from './ContactSection.jsx';

export default function NewsPage({ onBack }) {
  const newsItems = [
    {
      title: 'SKYOM City Receives Formal Uttar Pradesh RERA Approval (UPRERAPRJ600292/06/2025)',
      date: 'June 2025',
      badge: 'Regulatory Milestone',
      body: 'The Real Estate Regulatory Authority of Uttar Pradesh has formally issued the project registration certificate for the 50-acre integrated township in Mohanlalganj, Lucknow. Intending purchasers are invited to inspect all sanctioned layout plans.'
    },
    {
      title: 'Phase-1 Internal Roadworks and Underground Power Ducting Initiated at Mohanlalganj',
      date: 'September 2025',
      badge: 'Site Progress',
      body: 'High-speed grading and paving of the 60ft and 40ft arterial avenues have commenced on site. Subterranean conduit channels for electricity, optical fiber, and water lines are progressing in line with our 100% timely delivery benchmark.'
    },
    {
      title: 'SKYOM Honored with "Excellence in Integrated Township Planning" Leadership Award',
      date: 'November 2025',
      badge: 'Award Honor',
      body: 'At the annual Urban Builders Federation Summit, SKYOM was recognized for pioneering 24+ landscaped theme parks and low-density plot segregation in Lucknow’s southern growth corridor.'
    }
  ];

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
            <span>Back to Home</span>
          </button>
          <span className="badge-status delivered">Corporate Press & News</span>
        </div>
      </div>

      {/* Header */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) 0 3rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Official Bulletins</div>
          <h1 className="section-title">
            Latest News & <span className="accent-serif">Milestones</span>
          </h1>
          <p className="section-desc" style={{ margin: '1rem auto 0' }}>
            Official announcements, construction updates, and corporate releases from the desk of SKYOM.
          </p>
        </div>
      </section>

      {/* News List */}
      <section style={{ padding: '2rem 0 clamp(5rem, 8vw, 8rem)' }}>
        <div className="container" style={{ maxWidth: '950px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {newsItems.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ padding: '2.5rem 2rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="badge-status ongoing">
                    <span className="pulse-dot" />
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-gold)', fontWeight: 600 }}>{item.date}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-ivory)', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form at Last */}
      <ContactSection />
    </div>
  );
}
