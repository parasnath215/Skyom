import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import BrandStatement from './components/BrandStatement.jsx';
import VisionSection from './components/VisionSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ProjectCityDetail from './components/ProjectCityDetail.jsx';
import ProjectAuraDetail from './components/ProjectAuraDetail.jsx';
import ProjectNovaDetail from './components/ProjectNovaDetail.jsx';
import ProjectFloorsDetail from './components/ProjectFloorsDetail.jsx';
import ProjectAyodhyaDetail from './components/ProjectAyodhyaDetail.jsx';
import ProjectDehradunDetail from './components/ProjectDehradunDetail.jsx';
import WhyTrustSection from './components/WhyTrustSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import AwardsSection from './components/AwardsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import BlogPage from './components/BlogPage.jsx';
import NewsPage from './components/NewsPage.jsx';
import Footer from './components/Footer.jsx';
import StickyActions from './components/StickyActions.jsx';
import EnquiryModal from './components/EnquiryModal.jsx';
import LightboxModal from './components/LightboxModal.jsx';

export default function App() {
  const pageTitles = {
    'home': 'SKYOM — Luxury Real Estate Builder | Integrated Townships & Residences',
    'project-city': 'SKYOM City — 50-Acre Integrated Township in Mohanlalganj, Lucknow | SKYOM',
    'project-aura': 'SKYOM Aura — Neo-Classical Arched Residences & Retail | Mohanlalganj, Lucknow',
    'project-nova': 'SKYOM Nova — G+9 Modern Classical High-Rise Tower | Mohanlalganj, Lucknow',
    'project-floors': 'SKYOM Floors — Delivered Luxury Independent Floors in New Delhi | SKYOM',
    'project-ayodhya': 'The Ayodhya Vision — Sacred Heritage Luxury Residences | SKYOM',
    'project-dehradun': 'The Dehradun Retreat — Himalayan Foothill Luxury Villa Plots | SKYOM',
    'about': 'About SKYOM — 20+ Years of Architectural Mastery & Luxury Building',
    'blog': 'Articles & Architectural Insights | SKYOM Blog',
    'news': 'Press & Media Recognition | SKYOM News',
    'contact': 'Contact SKYOM — Corporate Office & Schedule a Visit'
  };

  const getInitialPage = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && pageTitles[hash]) return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [enquiryModal, setEnquiryModal] = useState({ isOpen: false, topic: '' });
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', title: '' });

  // Scroll to top and update document title on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (pageTitles[activePage]) {
      document.title = pageTitles[activePage];
    }
  }, [activePage]);

  // Listen for hash changes (e.g., #project-aura, #project-nova)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && pageTitles[hash]) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (pageId, sectionId = null) => {
    if (pageId === 'home' && sectionId) {
      if (activePage !== 'home') {
        setActivePage('home');
        if (window.location.hash) window.location.hash = '';
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActivePage(pageId);
      if (pageId !== 'home') {
        window.location.hash = pageId;
      } else if (window.location.hash) {
        window.location.hash = '';
      }
    }
  };

  const openEnquiry = (topic = 'Contact With Our Team') => {
    setEnquiryModal({ isOpen: true, topic });
  };

  const closeEnquiry = () => {
    setEnquiryModal({ isOpen: false, topic: '' });
  };

  const openLightbox = (src, title) => {
    setLightbox({ isOpen: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '', title: '' });
  };

  return (
    <div className="skyom-app">
      {/* Header Navigation with original style */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenEnquiry={openEnquiry}
      />

      {/* Main Routed Content */}
      <main>
        {activePage === 'home' && (
          <>
            <HeroBanner onScrollNext={() => handleNavigate('home', 'brand-statement')} />
            <BrandStatement onExploreProjects={() => handleNavigate('home', 'projects')} />
            <VisionSection />
            <ProjectsSection onSelectProject={(id) => handleNavigate(id)} />
            <WhyTrustSection />
            <TestimonialsSection />
            <AwardsSection />
            <AboutSection onOpenEnquiry={openEnquiry} showFounders={false} onNavigate={handleNavigate} />
            <ContactSection />
          </>
        )}

        {/* Individual Project 1: SKYOM City */}
        {activePage === 'project-city' && (
          <ProjectCityDetail
            onBack={() => handleNavigate('home', 'projects')}
            onOpenLightbox={openLightbox}
          />
        )}

        {/* Individual Project: SKYOM Aura */}
        {activePage === 'project-aura' && (
          <ProjectAuraDetail
            onBack={() => handleNavigate('home', 'projects')}
            onOpenEnquiry={openEnquiry}
            onOpenLightbox={openLightbox}
          />
        )}

        {/* Individual Project: SKYOM Nova */}
        {activePage === 'project-nova' && (
          <ProjectNovaDetail
            onBack={() => handleNavigate('home', 'projects')}
            onOpenEnquiry={openEnquiry}
            onOpenLightbox={openLightbox}
          />
        )}

        {/* Individual Project 2: SKYOM Floors */}
        {activePage === 'project-floors' && (
          <ProjectFloorsDetail
            onBack={() => handleNavigate('home', 'projects')}
            onOpenEnquiry={openEnquiry}
            onOpenLightbox={openLightbox}
          />
        )}

        {/* Individual Project 3: The Ayodhya Vision */}
        {activePage === 'project-ayodhya' && (
          <ProjectAyodhyaDetail
            onBack={() => handleNavigate('home', 'projects')}
          />
        )}

        {/* Individual Project 4: The Dehradun Retreat */}
        {activePage === 'project-dehradun' && (
          <ProjectDehradunDetail
            onBack={() => handleNavigate('home', 'projects')}
          />
        )}

        {/* About Page */}
        {activePage === 'about' && (
          <div style={{ paddingTop: 'var(--nav-height)' }}>
            <AboutSection onOpenEnquiry={openEnquiry} showFounders={true} onNavigate={handleNavigate} />
            <WhyTrustSection />
            <AwardsSection />
            <ContactSection />
          </div>
        )}

        {/* Blog Page */}
        {activePage === 'blog' && (
          <BlogPage onBack={() => handleNavigate('home')} />
        )}

        {/* News Page */}
        {activePage === 'news' && (
          <NewsPage onBack={() => handleNavigate('home')} />
        )}

        {/* Contact Page */}
        {activePage === 'contact' && (
          <div style={{ paddingTop: 'var(--nav-height)' }}>
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Sticky Actions */}
      <StickyActions onOpenEnquiry={openEnquiry} />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={closeEnquiry}
        defaultTopic={enquiryModal.topic}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        imageSrc={lightbox.src}
        title={lightbox.title}
      />
    </div>
  );
}
