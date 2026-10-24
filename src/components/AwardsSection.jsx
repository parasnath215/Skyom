import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';

export default function AwardsSection() {
  const awards = [
    {
      img: '/assets/Awards/Award-1.webp',
      title: 'Excellence in Integrated Township Development',
      org: 'National Real Estate Leadership Honors',
      year: '2025'
    },
    {
      img: '/assets/Awards/Award-2.webp',
      title: 'Best Luxury Residential Floor Architecture',
      org: 'India Design & Infrastructure Conclave',
      year: '2024'
    },
    {
      img: '/assets/Awards/Award-3.webp',
      title: 'Fastest Execution & Timely Delivery Benchmark',
      org: 'Urban Builders Federation of India',
      year: '2025'
    }
  ];

  return (
    <section className="awards-section" id="awards">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div className="section-tag">Industry Recognition</div>
          <h2 className="section-title">
            Our <span className="accent-serif">Awards & Accolades</span>
          </h2>
          <p className="section-desc" style={{ margin: '1rem auto 0' }}>
            Celebrated by apex real estate bodies for architectural visionary design, sustainable township planning, and timely handover.
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((award, idx) => (
            <div key={idx} className="award-card" style={{ flexDirection: 'column' }}>
              <div style={{ width: '100%', maxHeight: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
                <img 
                  src={award.img} 
                  alt={award.title} 
                  loading="lazy" 
                  style={{ maxHeight: '180px', width: 'auto' }}
                />
              </div>

              <div style={{ textAlign: 'center', width: '100%', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                  {award.year} • {award.org}
                </span>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-ivory)', marginTop: '0.35rem' }}>
                  {award.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
