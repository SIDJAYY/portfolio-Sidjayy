import React from 'react';
import { Briefcase, GraduationCap, MapPin, Globe, Code, FileText, Sparkles, Heart } from 'lucide-react';

export default function SidebarIntro({ setActiveTab }) {
  return (
    <div className="sidebar-intro-card">
      <h3 className="card-title-heading">Intro</h3>

      <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
        Building high-impact web apps, interactive user interfaces, and scalable backend services with passion.
      </p>

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
          <Code className="intro-icon" size={18} />
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

      <button className="btn-sidebar-full" style={{ background: '#14213D', color: '#FCA311', marginTop: '12px' }}>
        <Heart size={16} color="#FCA311" />
        Download Resume (PDF)
      </button>
    </div>
  );
}
