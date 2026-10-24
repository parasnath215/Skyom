import React from 'react';
import { ArrowUpRight, Award, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onOpenEnquiry }) {
  return (
    <section style={{ padding: 'clamp(5rem, 8vw, 8rem) 0', background: '#080808', borderTop: '1px solid var(--color-border)' }} id="about">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center'
        }}>
          {/* Image Column */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              position: 'relative'
            }}>
              <img 
                src="/assets/about.webp" 
                alt="About SKYOM Luxury Builder" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(8,8,8,0.85) 100%)'
              }} />
            </div>

            {/* Floating Experience Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '1.5rem',
              background: 'linear-gradient(135deg, var(--color-gold-light), var(--color-gold))',
              color: '#080808',
              padding: '1.25rem 2rem',
              borderRadius: '2px',
              boxShadow: '0 12px 35px rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 700, lineHeight: 1 }}>
                20+
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.3 }}>
                Years of <br /> Architectural Pedigree
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div>
            <div className="section-tag">About SKYOM</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Redefining the Horizon of <span className="accent-serif">Luxury Living</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
              At <strong>SKYOM</strong>, we don’t merely construct buildings; we curate enduring landmarks that transform the way families live, grow, and thrive. 
              Founded with the vision to bridge unbounded ambition with inner serenity, our portfolio spans bespoke luxury floors in New Delhi to grand integrated townships in Lucknow.
            </p>
            <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Every brick laid is fortified by strict regulatory compliance (UPRERA registered), clear freehold documentation, and cutting-edge structural precision. Our legacy is built on the unwavering conviction that timely execution is sacred.
            </p>

            {/* Key Value Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {[
                '100% On-Time Delivery Record across all delivered projects',
                'Unrivaled master planning with extensive green open spaces & parks',
                'Institutional corporate transparency & full RERA statutory compliance',
                'Future expansions in India’s spiritual & scenic epicenters (Ayodhya & Dehradun)'
              ].map((val, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--color-ivory)' }}>
                  <CheckCircle2 size={16} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <button 
              className="btn-gold"
              onClick={() => onOpenEnquiry('About Us Consultation')}
            >
              <span>Connect with Our Leadership</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
