import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Layers, CheckCircle2, Clock } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'project-city',
      num: '01',
      title: 'SKYOM City',
      tagline: '50 Acres Integrated Township',
      status: 'ongoing',
      statusLabel: 'Ongoing',
      location: 'Mohanlalganj, Lucknow',
      type: '50 Acres Integrated Township',
      desc: 'Lucknow’s most ambitious integrated residential township featuring 24+ landscaped theme parks, villa plots, luxury clubhouse, and wide signal-free boulevards.',
      mediaType: 'video',
      videoSrc: '/assets/city-entrance-720p.mp4',
      posterSrc: '/assets/city-entrance-poster.webp',
      ctaText: 'Explore SKYOM City',
    },
    {
      id: 'project-floors',
      num: '02',
      title: 'SKYOM Floors',
      tagline: 'Independent Builder Floors',
      status: 'delivered',
      statusLabel: 'Delivered',
      location: 'New Delhi',
      type: 'Independent Luxury Floors',
      desc: 'Our delivered landmark in the capital. Meticulously designed independent floors offering generous volume, private elevator access, and pristine finishes.',
      mediaType: 'image',
      imageSrc: '/assets/skyom-floors.webp',
      ctaText: 'View Floor Plans & Details',
    },
    {
      id: 'project-ayodhya',
      num: '03',
      title: 'The Ayodhya Vision',
      tagline: 'Sacred Heritage Residences',
      status: 'upcoming',
      statusLabel: 'Coming Soon',
      location: 'Ayodhya, UP',
      type: 'Premium Heritage Residences',
      desc: 'Where ancient sanctity meets regal modern architecture. Thoughtfully crafted residences that honor tradition while embracing world-class comforts.',
      mediaType: 'image',
      imageSrc: '/assets/ayodhya.webp',
      ctaText: 'Request Early Access',
    },
    {
      id: 'project-dehradun',
      num: '04',
      title: 'The Dehradun Retreat',
      tagline: 'Himalayan Foothill Villa Plots',
      status: 'upcoming',
      statusLabel: 'Coming Soon',
      location: 'Dehradun, UK',
      type: 'Hillside Luxury Villa Plots',
      desc: 'Nestled amidst lush deodar trees in the Himalayan foothills. Expansive villa plots boasting panoramic valley views and crisp mountain air.',
      mediaType: 'image',
      imageSrc: '/assets/dehradun.webp',
      ctaText: 'Register Interest',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.status === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Header & Filter Controls */}
        <div className="projects-header-row">
          <div>
            <div className="section-tag">Portfolio</div>
            <h2 className="section-title">
              Our <span className="accent-serif">Projects</span>
            </h2>
          </div>

          <div className="projects-filter-bar">
            {['all', 'ongoing', 'delivered', 'upcoming'].map((tab) => (
              <button
                key={tab}
                className={`filter-btn ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab === 'all' ? 'All Projects' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="projects-cards-grid">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="project-card"
              onClick={() => onSelectProject(proj.id)}
              style={{ cursor: 'pointer' }}
            >
              {/* Media Wrap */}
              <div className="project-media-wrap">
                {proj.mediaType === 'video' ? (
                  <video
                    src={proj.videoSrc}
                    poster={proj.posterSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="project-media-video"
                  />
                ) : (
                  <img
                    src={proj.imageSrc}
                    alt={proj.title}
                    className="project-media-img"
                    loading="lazy"
                  />
                )}
                <div className="project-media-gradient" />

                {/* Floating Status Badge */}
                <div className="project-badge-float">
                  <span className={`badge-status ${proj.status}`}>
                    <span className="pulse-dot" />
                    {proj.statusLabel}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="project-body">
                <div className="project-card-num">{proj.num} // LANDMARK</div>
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.desc}</p>

                {/* Specs */}
                <div className="project-specs-row">
                  <div className="spec-cell">
                    <span className="spec-cell-label">Location</span>
                    <span className="spec-cell-val" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MapPin size={13} color="var(--color-gold)" />
                      {proj.location}
                    </span>
                  </div>

                  <div className="spec-cell">
                    <span className="spec-cell-label">Configuration</span>
                    <span className="spec-cell-val" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Layers size={13} color="var(--color-gold)" />
                      {proj.type}
                    </span>
                  </div>
                </div>

                {/* CTA Action */}
                <div style={{ marginTop: 'auto' }}>
                  <button className="btn-outline-gold" style={{ width: '100%' }}>
                    <span>{proj.ctaText}</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
