import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Township Investor',
      project: 'SKYOM City — Ongoing',
      badgeClass: 'ongoing',
      quote: 'Skyom City has completely redefined my perspective on real estate in Lucknow. The 50-acre master plan, extensive theme parks, and rapid on-ground construction progress are truly phenomenal.'
    },
    {
      name: 'Amit Verma',
      role: 'Resident Homeowner',
      project: 'SKYOM Floors — Delivered',
      badgeClass: 'delivered',
      quote: 'Their commitment to high quality construction and timely delivery is unmatched in Delhi NCR. Living at Skyom Floors gives our entire family complete tranquility and architectural luxury.'
    },
    {
      name: 'Rajesh Patel',
      role: 'Villa Plot Owner',
      project: 'SKYOM City — Ongoing',
      badgeClass: 'ongoing',
      quote: 'Investing in Skyom City in Mohanlalganj was our best financial decision. The wide boulevards, underground cabling, and strategic outer ring road connectivity are first-rate.'
    },
    {
      name: 'Sunita Saxena',
      role: 'Resident Homeowner',
      project: 'SKYOM Floors — Delivered',
      badgeClass: 'delivered',
      quote: 'We received our possession right on schedule. The double-height lobby, German fittings, and acoustic insulation demonstrate their extraordinary eye for detail.'
    },
    {
      name: 'Vikram Malhotra',
      role: 'Commercial Investor',
      project: 'SKYOM City — Ongoing',
      badgeClass: 'ongoing',
      quote: 'The vision of an integrated community with 24+ landscaped parks is world-class. You can visibly feel the passion and integrity the leadership brings to this project.'
    },
    {
      name: 'Neha Agarwal',
      role: 'Resident Homeowner',
      project: 'SKYOM Floors — Delivered',
      badgeClass: 'delivered',
      quote: 'Skyom delivered our independent floor with absolute perfection. From marble grain matching to plumbing standards, everything was executed flawlessly.'
    }
  ];

  // Duplicate for seamless loop
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
        <div className="section-tag">Client Voices</div>
        <h2 className="section-title">
          What Our <span className="accent-serif">Residents & Investors</span> Say
        </h2>
        <p className="section-desc" style={{ margin: '1rem auto 0' }}>
          Hear from the discerning families and investors who placed their faith in SKYOM’s promise of timely delivery and timeless luxury.
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {duplicated.map((item, idx) => (
            <div key={idx} className="testimonial-card-item">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className={`badge-status ${item.badgeClass}`}>
                    <span className="pulse-dot" />
                    {item.project}
                  </span>
                  <Quote size={20} color="var(--color-gold)" style={{ opacity: 0.6 }} />
                </div>
                <p className="testimonial-quote-body">
                  "{item.quote}"
                </p>
              </div>

              <div className="testimonial-author-block">
                <div>
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-role">{item.role}</span>
                </div>
                <span style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
