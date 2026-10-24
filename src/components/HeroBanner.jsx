import React, { useState, useRef, useEffect } from 'react';

export default function HeroBanner({ onScrollNext }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Auto-pause video when scrolled off-screen to preserve resources
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="hero-banner-wrapper" id="hero">
      {/* Instant High-Res Poster Layer */}
      <div 
        className={`hero-poster-layer ${isVideoLoaded ? 'faded' : ''}`}
        style={{ backgroundImage: `url('/assets/banner-poster.webp')` }}
        aria-hidden="true"
      />

      {/* Optimized Web Video */}
      <video
        ref={videoRef}
        className={`hero-video-layer ${isVideoLoaded ? '' : 'hidden'}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/assets/banner-720p.mp4" type="video/mp4" />
        <source src="/assets/banner-optimized.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Atmospheric Overlays */}
      <div className="hero-banner-overlay" />
      <div className="hero-vignette" />

      {/* Scroll Down Indicator */}
      <div 
        className="hero-scroll-indicator" 
        onClick={onScrollNext}
        role="button"
        tabIndex={0}
        aria-label="Scroll to explore"
      >
        <span className="scroll-text">EXPLORE</span>
        <div className="scroll-line-track">
          <div className="scroll-line-thumb" />
        </div>
      </div>
    </section>
  );
}
