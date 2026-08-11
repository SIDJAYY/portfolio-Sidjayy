import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Instagram, Twitter, Facebook, Github, Linkedin } from 'lucide-react';

export default function ProfileHeader({ activeTab, setActiveTab }) {
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScrollCheck = () => {
      const wrapper = document.querySelector('.profile-tabs-sticky-wrapper');
      if (!wrapper) return;
      const top = wrapper.getBoundingClientRect().top;
      setIsSticky(top <= 2);
    };

    handleScrollCheck();

    window.addEventListener('scroll', handleScrollCheck, { passive: true });
    window.addEventListener('resize', handleScrollCheck, { passive: true });

    const sentinel = sentinelRef.current;
    let observer;
    if (sentinel && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        () => handleScrollCheck(),
        { threshold: [0, 1] }
      );
      observer.observe(sentinel);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollCheck);
      window.removeEventListener('resize', handleScrollCheck);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    // Smoothly scroll the window to position sticky tab bar & content at top
    setTimeout(() => {
      const isMobile = window.innerWidth <= 768;
      const stickyWrapper = document.querySelector('.profile-tabs-sticky-wrapper');
      const mainFeed = document.querySelector('.main-feed-col');

      if (isMobile && mainFeed && stickyWrapper) {
        // On mobile single-column layout, scroll past SidebarIntro straight into main-feed-col
        const stickyHeight = stickyWrapper.offsetHeight || 44;
        const targetY = mainFeed.getBoundingClientRect().top + window.scrollY - stickyHeight;
        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      } else if (stickyWrapper) {
        // On desktop 2-column layout, scroll to top of profile-main-layout / stickyWrapper
        const targetY = stickyWrapper.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      }
    }, 20);
  };

  return (
    <>
      {/* Profile Header Main Card (Cover + Avatar + Info) */}
      <div className="profile-header-card">
        {/* Cover Banner */}
        <div className="cover-banner-wrap">
          <img
            src="/profile_picture/background_photo.png"
            alt="Cover Banner"
            className="cover-photo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="cover-overlay"></div>

          {/* Floating Social Icons on Cover Photo */}
          <div className="cover-social-floating">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-link" title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-link" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-link" title="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-link" title="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-link" title="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Profile Details Container */}
        <div className="profile-info-section">
          <div className="avatar-and-actions">
            {/* Circular Profile Avatar Frame */}
            <div className="avatar-container">
              <img
                src="/profile_picture/profilepicture.jpg"
                alt="Carl Janus Bacolod Graduation Profile"
                className="avatar-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                }}
              />
              <div className="avatar-badge-verified" title="Verified Specialist">
                <CheckCircle2 size={16} />
              </div>
            </div>
          </div>

          {/* User Identity Container */}
          <div className="user-identity-wrapper">
            <div className="user-identity-main">
              <div className="name-row">
                <h1 className="user-full-name">Carl Janus Bacolod</h1>
                <span className="pronoun-text">He/Him</span>
              </div>

              <p className="user-bio-text">
                IT Graduate | Web Developer | Technical Support Specialist | AI Automation &amp; Integration | Computer Technician
                <br /> Open to Entry-Level IT Opportunities
              </p>

              <div className="user-location-row">
                <span>Caloocan City, National Capital Region, Philippines</span>
                <span className="dot-divider">•</span>
                <a href="#contact" className="contact-info-link" onClick={(e) => { e.preventDefault(); handleTabClick('ABOUT'); }}>Contact info</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Tab Navigation Bar - Sentinel for Sticky detection */}
      <div ref={sentinelRef} className="sticky-tab-sentinel" />

      {/* Sticky Tab Navigation Bar - Direct child of profile-shell for full page sticky scrolling */}
      <div className={`profile-tabs-sticky-wrapper ${isSticky ? 'is-sticky' : ''}`}>
        <div className="profile-tabs-bar">
          <button
            className={`profile-tab-button ${activeTab === 'ALL' ? 'active' : ''}`}
            onClick={() => handleTabClick('ALL')}
          >
            ALL
          </button>
          <button
            className={`profile-tab-button ${activeTab === 'ABOUT' ? 'active' : ''}`}
            onClick={() => handleTabClick('ABOUT')}
          >
            ABOUT
          </button>
          <button
            className={`profile-tab-button ${activeTab === 'EXPERIENCE' ? 'active' : ''}`}
            onClick={() => handleTabClick('EXPERIENCE')}
          >
            <span className="tab-label-full">EXPERIENCE</span>
            <span className="tab-label-short">EXP</span>
          </button>
          <button
            className={`profile-tab-button ${activeTab === 'SKILLS' ? 'active' : ''}`}
            onClick={() => handleTabClick('SKILLS')}
          >
            SKILLS
          </button>
          <button
            className={`profile-tab-button ${activeTab === 'CERTIFICATIONS' ? 'active' : ''}`}
            onClick={() => handleTabClick('CERTIFICATIONS')}
          >
            <span className="tab-label-full">CERTIFICATIONS</span>
            <span className="tab-label-short">CERTS</span>
          </button>
        </div>
      </div>
    </>
  );
}
