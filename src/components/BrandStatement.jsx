import React from 'react';
import { ArrowUpRight, Award, ShieldCheck, Clock, Users } from 'lucide-react';

export default function BrandStatement({ onExploreProjects }) {
  const metrics = [
    { num: '20+', label: 'Years of Excellence', icon: Award },
    { num: '100%', label: 'Timely Execution', icon: Clock },
    { num: '50+', label: 'Acres Master Planned', icon: ShieldCheck },
    { num: '100+', label: 'Satisfied Families', icon: Users },
  ];

  return (
    <section className="brand-statement-section" id="brand-statement">
      <div className="container brand-statement-container">
        {/* Eyebrow */}
        <div className="section-tag">
          SKYOM LUXURY REAL ESTATE
        </div>

        {/* Main Heading */}
        <h1 className="brand-main-heading">
          Building Dreams. <br />
          <span className="accent-serif">Shaping Futures.</span>
        </h1>

        <div className="brand-divider-gold" />

        {/* Lead Subheading */}
        <p className="brand-lead-text">
          Crafting luxury residences that stand as timeless landmarks across India’s most coveted destinations.
          Designed with architectural mastery, sustainable innovation, and unyielding elegance.
        </p>

        {/* Metrics Grid */}
        <div className="brand-metrics-grid">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="metric-card">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  <Icon size={20} color="var(--color-gold)" />
                </div>
                <div className="metric-value">{metric.num}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Explore CTA */}
        <div>
          <button 
            className="btn-gold" 
            onClick={onExploreProjects}
          >
            <span>Explore Our Portfolio</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
