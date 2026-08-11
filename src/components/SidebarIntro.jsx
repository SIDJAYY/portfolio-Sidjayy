import React, { useEffect } from 'react';
import { Briefcase, GraduationCap, MapPin, Globe, Brain, FileText, Sparkles, Heart } from 'lucide-react';

export default function SidebarIntro({ setActiveTab }) {
  useEffect(() => {
    const updateStickyTop = () => {
      if (window.innerWidth <= 860) return;

      const sidebarCard = document.querySelector('.sidebar-intro-card');
      const sidebarCol = document.querySelector('.left-sidebar-col');
      if (!sidebarCard || !sidebarCol) return;

      const sidebarHeight = sidebarCard.offsetHeight;
      const viewportHeight = window.innerHeight;
      const topOffset = 45;
      const bottomGap = 16;

      if (sidebarHeight > (viewportHeight - topOffset - bottomGap)) {
        const calculatedTop = viewportHeight - sidebarHeight - bottomGap;
        sidebarCol.style.setProperty('--sidebar-sticky-top', `${calculatedTop}px`);
      } else {
        sidebarCol.style.setProperty('--sidebar-sticky-top', `${topOffset}px`);
      }
    };

    updateStickyTop();
    window.addEventListener('resize', updateStickyTop);

    const cardEl = document.querySelector('.sidebar-intro-card');
    let observer;
    if (cardEl && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(updateStickyTop);
      observer.observe(cardEl);
    }

    return () => {
      window.removeEventListener('resize', updateStickyTop);
      if (observer) observer.disconnect();
    };
  }, []);
  return (
    <div className="sidebar-intro-card">
      <h3 className="card-title-heading"></h3>

      <div className="intro-list">
        <div className="intro-item">
          <Briefcase className="intro-icon" size={18} />
          <span><span className="intro-highlight">Information Technology Specialist</span></span>
        </div>

        <div className="intro-item">
          <img src="/profile_picture/BCP.png" alt="BCP" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
          <span>Studied at <span className="intro-highlight">Bestlink College of the Philippines</span></span>
        </div>

        <div className="intro-item">
          <MapPin className="intro-icon" size={18} />
          <span>Based in <span className="intro-highlight">Philippines / Remote</span></span>
        </div>

        <div className="intro-item">
          <Globe className="intro-icon" size={18} />
          <a href="https://github.com/SIDJAYY" target="_blank" rel="noreferrer" style={{ color: '#14213D', textDecoration: 'none', fontWeight: 700 }}>
            SIDJAYY | GITHUB
          </a>
        </div>

        <div className="intro-item">
          <Brain className="intro-icon" size={18} />
          <span>Specialized in <span className="intro-highlight">Hardware, Networking & Web Systems</span></span>
        </div>
      </div>

      <button className="btn-sidebar-full" onClick={() => setActiveTab('ABOUT')}>
        <FileText size={16} />
        View Complete Details
      </button>

      <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px solid #E5E5E5' }}>
        <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#14213D', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={16} color="#FCA311" />
          Featured Services
        </h4>
        <div className="sidebar-featured-grid">
          <div className="featured-pill">
            <span style={{ color: '#FCA311' }}>🛠️</span> Hardware & Software Troubleshooting
          </div>
          <div className="featured-pill">
            <span style={{ color: '#FCA311' }}>�️</span> System Debloating
          </div>
          <div className="featured-pill">
            <span style={{ color: '#FCA311' }}>💻</span> PC Assembly & Unit Setup
          </div>
          <div className="featured-pill">
            <span style={{ color: '#FCA311' }}>💾</span> Operating System Installation & Configuration
          </div>
          <div className="featured-pill">
            <span style={{ color: '#FCA311' }}>💾</span> Hardware Upgrades (RAM, SSD/HDD, GPU)
          </div>
          <div className="featured-pill">
            <span style={{ color: '#FCA311' }}>💾</span> Data Recovery & Backups
          </div>
        </div>
      </div>

      <a
        href="/certificates/Carl_Janus_Bacolod_Resume.pdf"
        download
        className="btn-sidebar-full"
        style={{
          background: '#14213D',
          color: '#FCA311',
          marginTop: '12px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <Heart size={16} color="#FCA311" />
        Download Resume (PDF)
      </a>
    </div>
  );
}
