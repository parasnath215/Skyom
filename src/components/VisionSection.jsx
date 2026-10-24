import React from 'react';
import { Compass, Sparkles, Building2 } from 'lucide-react';

export default function VisionSection() {
  const pillars = [
    {
      title: 'Boundless Vision',
      desc: 'Sky represents our boundless aspiration and pursuit of architectural innovation, creating spaces that inspire.',
      icon: Sparkles
    },
    {
      title: 'Grounded Strength',
      desc: 'Om anchors us in stability, peace, and sacred purpose, ensuring long-term security and harmony for families.',
      icon: Compass
    },
    {
      title: 'Architectural Mastery',
      desc: 'Engineered with premium materials, immaculate finishes, and structural precision that endure for generations.',
      icon: Building2
    }
  ];

  return (
    <section className="our-vision-section" id="vision" style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', background: '#0a0a0a', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '1050px', margin: '0 auto' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>Our Vision</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', marginBottom: '2rem' }}>
          Where Ambition Meets <span className="accent-serif">Harmony</span>
        </h2>
        <p style={{
          fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
          lineHeight: '1.85',
          color: 'var(--color-ivory-muted)',
          maxWidth: '850px',
          margin: '0 auto 4rem',
          fontWeight: 300
        }}>
          At Skyom, our philosophy is written in our name. <strong style={{ color: 'var(--color-gold)', fontWeight: 600 }}>Sky</strong> represents our boundless vision and pursuit of innovation; <strong style={{ color: 'var(--color-gold)', fontWeight: 600 }}>Om</strong> grounds us in strength, peace, and purpose. Shaped by experience and driven by a global perspective, we craft state-of-the-art spaces that transform the way you live.
        </p>

        {/* 3 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          textAlign: 'left'
        }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ padding: '2rem 1.75rem' }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--color-gold-subtle)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <Icon size={20} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--color-ivory)', marginBottom: '0.4rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
