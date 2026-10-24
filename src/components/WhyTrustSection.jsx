import React from 'react';
import { Clock, Trees, Sparkles, Building, Leaf, Compass } from 'lucide-react';

export default function WhyTrustSection() {
  const trustPoints = [
    {
      title: 'Timely Execution',
      desc: 'Our word is our bond. We are uncompromisingly committed to executing our developments in the promised timeframe — without cutting corners on architectural excellence.',
      icon: Clock
    },
    {
      title: 'Breathe Easy & Live Pure',
      desc: 'Wake up to fresh air, lush botanical gardens, and serene views. 24+ landscaped parks, morning jogging trails, and shaded meditation zones designed for your holistic well-being.',
      icon: Trees
    },
    {
      title: 'Everyday Luxury Redefined',
      desc: 'Signature multi-level clubhouse, Olympic-grade swimming pool, wellness spa, tennis & squash courts, and member lounges bring resort living straight to your doorstep.',
      icon: Sparkles
    },
    {
      title: 'Future-Ready Architecture',
      desc: 'Smart, expansive floor plans, subterranean utility conduits, earthquake-resistant structural engineering, and premium finishes built to impress for generations.',
      icon: Building
    },
    {
      title: 'Sustainable by Design',
      desc: 'Eco-conscious planning featuring rainwater harvesting reservoirs, solar-ready common spaces, EV rapid-charging networks, and indigenous botanical landscaping.',
      icon: Leaf
    },
    {
      title: 'Strategic Connectivity',
      desc: 'Engineered with wide 40ft & 60ft internal avenues with intelligent traffic flow, moments away from major expressways, international airports, hospitals, and educational hubs.',
      icon: Compass
    }
  ];

  return (
    <section style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', background: '#0a0a0a', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <div className="section-tag">The SKYOM Assurance</div>
          <h2 className="section-title">
            Why Trust While <span className="accent-serif">Investing?</span>
          </h2>
          <p className="section-desc" style={{ margin: '1rem auto 0' }}>
            Two decades of unblemished delivery, clear legal titles, and relentless pursuit of perfection make SKYOM India’s most trusted real estate partner.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ padding: '2.5rem 2rem' }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
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
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
                  {point.title}
                </h4>
                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
