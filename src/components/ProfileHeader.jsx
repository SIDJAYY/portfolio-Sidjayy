import React from 'react';
import { CheckCircle2, Instagram, Twitter, Facebook, Github, Linkedin } from 'lucide-react';

export default function ProfileHeader({ activeTab, setActiveTab }) {
  return (
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
              <br></br> Open to Entry-Level IT Opportunities
            </p>

            <div className="user-location-row">
              <span>Caloocan City, National Capital Region, Philippines</span>
              <span className="dot-divider">•</span>
              <a href="#contact" className="contact-info-link" onClick={(e) => { e.preventDefault(); setActiveTab('ABOUT'); }}>Contact info</a>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation Bar: ALL, ABOUT, EXPERIENCE, SKILLS, CERTIFICATIONS */}
      <div className="profile-tabs-bar">
        <button
          className={`profile-tab-button ${activeTab === 'ALL' ? 'active' : ''}`}
          onClick={() => setActiveTab('ALL')}
        >
          ALL
        </button>
        <button
          className={`profile-tab-button ${activeTab === 'ABOUT' ? 'active' : ''}`}
          onClick={() => setActiveTab('ABOUT')}
        >
          ABOUT
        </button>
        <button
          className={`profile-tab-button ${activeTab === 'EXPERIENCE' ? 'active' : ''}`}
          onClick={() => setActiveTab('EXPERIENCE')}
        >
          EXPERIENCE
        </button>
        <button
          className={`profile-tab-button ${activeTab === 'SKILLS' ? 'active' : ''}`}
          onClick={() => setActiveTab('SKILLS')}
        >
          SKILLS
        </button>
        <button
          className={`profile-tab-button ${activeTab === 'CERTIFICATIONS' ? 'active' : ''}`}
          onClick={() => setActiveTab('CERTIFICATIONS')}
        >
          CERTIFICATIONS
        </button>
      </div>
    </div>
  );
}
