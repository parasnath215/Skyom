import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Calendar, User, Clock, X, BookOpen } from 'lucide-react';
import ContactSection from './ContactSection.jsx';

export default function BlogPage({ onBack }) {
  const [activeArticle, setActiveArticle] = useState(null);

  const posts = [
    {
      title: 'Why Integrated Townships Represent the Future of Lucknow Real Estate',
      date: 'February 2026',
      readTime: '5 min read',
      author: 'SKYOM Research Desk',
      category: 'Market Insights',
      excerpt: 'As Lucknow rapidly expands toward Mohanlalganj and the Kisan Path ring corridor, master-planned townships offering 24+ parks, underground utilities, and wide boulevards are outperforming standalone plots.',
      paragraphs: [
        'The real estate landscape of Lucknow is undergoing a profound structural evolution. For decades, traditional plotted developments without unified civic infrastructure dominated city peripheries. Today, master-planned integrated townships are redefining the benchmark of modern urban living.',
        'As the capital of Uttar Pradesh rapidly expands along major growth corridors including Mohanlalganj, Kisan Path, and Shaheed Path, home seekers are increasingly prioritizing comprehensive living ecosystems. Integrated townships bring together 24+ landscaped theme parks, wide 12-meter and 9-meter internal boulevards, underground utility cabling, and dedicated commercial retail zones.',
        'Statutory compliance through UP RERA and Awas Vikas Parishad ensures clear freehold land titles, eliminating the risks historically associated with unorganized layouts. Furthermore, integrated townships guarantee 24/7 multi-tier security, dedicated clubhouse amenities, sports courts, and planned social spaces that standalone plots simply cannot offer.',
        'From an investment perspective, integrated townships have consistently demonstrated higher capital appreciation and superior rental yields compared to fragmented colonies. As infrastructure corridors like Kisan Path and the Outer Ring Road mature, master-planned communities in Mohanlalganj represent the golden standard of modern urban living in Lucknow.'
      ]
    },
    {
      title: 'The Rise of Luxury Independent Builder Floors in Delhi NCR',
      date: 'January 2026',
      readTime: '4 min read',
      author: 'Architectural Digest',
      category: 'Design & Living',
      excerpt: 'Discover why high-net-worth families are choosing boutique independent floors with private elevators, Italian marble, and terrace ownership over dense high-rise apartments.',
      paragraphs: [
        'A noticeable shift is transforming luxury residential choices across Delhi NCR. While high-rise condominium complexes were once the hallmark of aspirational living, discerning high-net-worth families are increasingly returning to independent builder floors.',
        'The reasons for this transition are both practical and philosophical: independent floors offer unmatched privacy, low resident density, dedicated private elevator access, and exclusive terrace ownership. Unlike monolithic towers where maintenance overheads are high and elevator wait times are frequent, boutique 4-floor residences provide immediate autonomy.',
        'Modern luxury builder floors in prime Delhi micro-markets now feature high-specification architectural finishes—including imported Italian marble flooring, bespoke modular kitchens with German appliances, smart home automation, and soundproof double-glazed fenestration.',
        'For families seeking a harmonious blend of low-density exclusivity, freehold asset security, and prime central location, luxury independent floors continue to set the benchmark for refined city living.'
      ]
    },
    {
      title: 'Why to Invest in Dehradun Real Estate',
      date: 'March 2026',
      readTime: '6 min read',
      author: 'SKYOM Research Desk',
      category: 'Investment Insights',
      excerpt: 'With the upcoming Delhi-Dehradun Expressway cutting travel to 2.5 hours, pristine Himalayan foothill air, and rapid smart city infrastructure, Dehradun has emerged as North India’s most lucrative residential real estate destination.',
      paragraphs: [
        'Surrounded by the tranquil Shivalik foothills and blessed with a year-round pleasant climate, Dehradun has evolved from a serene retirement town into one of North India’s most high-performing real estate investment hotspots.',
        'Historically celebrated for its world-class boarding schools and lush tea gardens, Uttarakhand’s capital is currently experiencing an unprecedented economic and infrastructural renaissance. Discerning urban homebuyers, NRIs, and institutional investors are increasingly allocating capital toward Dehradun for several decisive reasons:',
        '1. The Delhi-Dehradun Expressway Advantage: The upcoming Delhi-Saharanpur-Dehradun Expressway will drastically cut travel time from Delhi NCR from 6 hours to just 2.5 hours. Featuring an Asia-record 12-km elevated wildlife corridor, this highway fundamentally integrates Dehradun into the NCR high-speed economic orbit, making weekend getaways and second-home living effortlessly accessible.',
        '2. Clean Air, Scenic Climate & Holistic Wellness: In an era where metropolitan air quality indices frequently reach alarming levels, the Doon Valley offers pure Himalayan breezes, tranquil Sal forests, and minimal noise pollution. Wellness-oriented luxury villa communities and scenic hillside plots are witnessing soaring buyer interest.',
        '3. Prime Educational & Institutional Hub: Home to esteemed institutions such as The Doon School, Welham, the Forest Research Institute, and UPES, the city enjoys steady year-round rental demand from faculty, students, and corporate professionals.',
        '4. Flourishing Eco-Tourism & Rental Yields: Proximity to Mussoorie, Rishikesh, and Rajaji National Park makes Dehradun an exceptional hub for holiday home rentals, boutique homestays, and luxury hospitality ventures, yielding strong recurring income in addition to capital gains.',
        '5. Limited Freehold Land & High Capital Appreciation: Geographically bounded by the Himalayan foothills and Rajaji National Park, developable land in the Doon Valley is inherently finite. High demand combined with strict ecological zoning guarantees sustained capital appreciation for approved residential projects.',
        'Conclusion: Investing in Dehradun real estate is not merely a financial asset allocation—it is an investment in health, tranquility, and generational prosperity. As strategic infrastructure converges on the valley, early investors stand to achieve substantial compounding value.'
      ]
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
              <article 
                key={idx} 
                className="glass-card" 
                style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
                onClick={() => setActiveArticle(post)}
              >
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
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-gold)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div 
          className="modal-overlay" 
          onClick={() => setActiveArticle(null)}
          style={{ zIndex: 1050 }}
        >
          <div 
            className="modal-content-box" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '780px', padding: 'clamp(2rem, 4vw, 3rem)', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}
          >
            <button 
              className="modal-close-btn" 
              onClick={() => setActiveArticle(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="section-tag" style={{ margin: 0 }}>{activeArticle.category}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>{activeArticle.date}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)' }}>• {activeArticle.readTime}</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--color-ivory)', marginBottom: '1rem', lineHeight: 1.25 }}>
              {activeArticle.title}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-dim)', fontSize: '0.82rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '1rem' }}>
              <span>By {activeArticle.author}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--color-ivory-muted)', fontSize: '1rem', lineHeight: 1.85, fontWeight: 300 }}>
              {activeArticle.paragraphs.map((p, pIdx) => (
                <p key={pIdx} style={{ margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <button 
                className="btn-gold" 
                onClick={() => setActiveArticle(null)}
              >
                <span>Back to Articles</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form at Last */}
      <ContactSection />
    </div>
  );
}
