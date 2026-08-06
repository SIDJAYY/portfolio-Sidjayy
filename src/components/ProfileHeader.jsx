import React, { useState } from 'react';
import { CheckCircle2, UserPlus, MessageSquare, MoreHorizontal, Instagram, Twitter, Facebook, Github, Linkedin, Share2, ExternalLink } from 'lucide-react';

export default function ProfileHeader({ activeTab, setActiveTab }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(22200);

  const handleFollowClick = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount(prev => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount(prev => prev + 1);
    }
  };

  const formattedFollowers = followerCount >= 1000
    ? (followerCount / 1000).toFixed(1) + 'K'
    : followerCount;

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

        {/* Edit Cover Photo Button */}
        <button className="cover-edit-btn" title="Edit Cover Photo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </button>

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

        {/* User Identity & Schools Container */}
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

            <div className="stats-counter-row">
              <div className="stat-item">
                <span className="stat-value">500</span>
                <span className="stat-label">Following</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{formattedFollowers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">48</span>
                <span className="stat-label">Projects</span>
              </div>
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
