import React from 'react';
import { ArrowLeft, ArrowUpRight, Calendar, User, Clock } from 'lucide-react';
import ContactSection from './ContactSection.jsx';

export default function BlogPage({ onBack }) {
  const posts = [
    {
      title: 'Why Integrated Townships Represent the Future of Lucknow Real Estate',
      date: 'February 2026',
      readTime: '5 min read',
      author: 'SKYOM Research Desk',
      category: 'Market Insights',
      excerpt: 'As Lucknow rapidly expands toward Mohanlalganj and the Kisan Path ring corridor, master-planned townships offering 24+ parks, underground utilities, and wide boulevards are outperforming standalone plots.'
    },
    {
      title: 'The Rise of Luxury Independent Builder Floors in Delhi NCR',
      date: 'January 2026',
      readTime: '4 min read',
      author: 'Architectural Digest',
      category: 'Design & Living',
      excerpt: 'Discover why high-net-worth families are choosing boutique independent floors with private elevators, Italian marble, and terrace ownership over dense high-rise apartments.'
    },
    {
      title: 'Sustainable Real Estate: How Green Corridors & EV Networks Enhance Asset Value',
      date: 'December 2025',
      readTime: '6 min read',
      author: 'Eco-Living Forum',
      category: 'Sustainability',
      excerpt: 'Modern homebuyers prioritize wellness. Exploring how rainwater conservation, extensive native tree plantations, and EV-ready infrastructure yield higher long-term capital appreciation.'
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
          <span className="badge-status ongoing">Insights & Articles</span>
        </div>
      </div>

      {/* Header */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) 0 3rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>The SKYOM Journal</div>
          <h1 className="section-title">
            Articles & <span className="accent-serif">Market Perspectives</span>
          </h1>
          <p className="section-desc" style={{ margin: '1rem auto 0' }}>
            Thought leadership on luxury real estate, township urbanism, and architectural innovations across India.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ padding: '2rem 0 clamp(5rem, 8vw, 8rem)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {posts.map((post, idx) => (
              <article key={idx} className="glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    {post.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-ivory)', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {post.title}
                </h3>

                <p style={{ color: 'var(--color-ivory-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>
                  {post.excerpt}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>{post.date}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-gold)', fontWeight: 600 }}>Read Article →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form at Last */}
      <ContactSection />
    </div>
  );
}
