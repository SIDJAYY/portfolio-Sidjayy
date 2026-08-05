import React from 'react';
import { Search, Home, Tv, Store, Users, Bell, MessageSquare, Menu } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="fb-navbar">
      {/* Left: Brand Logo & Search */}
      <div className="fb-navbar-left">
        <a href="#home" onClick={(e) => { e.preventDefault(); setActiveTab('ALL'); }} className="fb-brand-logo">
          C
        </a>
        <div className="fb-search-bar">
          <Search size={16} color="#E5E5E5" />
          <input
            type="text"
            placeholder="Search Carl's portfolio..."
            className="fb-search-input"
          />
        </div>
      </div>

      {/* Center: Facebook-style navigation shortcuts */}
      <div className="fb-navbar-center">
        <button
          className={`nav-tab-icon-btn ${activeTab === 'ALL' ? 'active' : ''}`}
          onClick={() => setActiveTab('ALL')}
          title="Feed & Projects (ALL)"
        >
          <Home size={22} />
        </button>

        <button
          className={`nav-tab-icon-btn ${activeTab === 'ABOUT' ? 'active' : ''}`}
          onClick={() => setActiveTab('ABOUT')}
          title="About Profile"
        >
          <Users size={22} />
        </button>

        <button
          className={`nav-tab-icon-btn ${activeTab === 'EXPERIENCE' ? 'active' : ''}`}
          onClick={() => setActiveTab('EXPERIENCE')}
          title="Work Experience"
        >
          <Tv size={22} />
        </button>

        <button
          className={`nav-tab-icon-btn ${activeTab === 'SKILLS' ? 'active' : ''}`}
          onClick={() => setActiveTab('SKILLS')}
          title="Tech Skills"
        >
          <Store size={22} />
        </button>
      </div>

      {/* Right: Quick action circle buttons */}
      <div className="fb-navbar-right">
        <button className="nav-circle-btn" title="Menu">
          <Menu size={18} />
        </button>
        <button
          className="nav-circle-btn"
          title="Messenger"
          onClick={() => {
            const fab = document.getElementById('messenger-fab-trigger');
            if (fab) fab.click();
          }}
        >
          <MessageSquare size={18} />
        </button>
        <button className="nav-circle-btn" title="Notifications">
          <Bell size={18} />
        </button>
        <img
          src="/profile_picture/profilepicture.jpg"
          alt="Profile"
          style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', cursor: 'pointer', border: '2px solid #FCA311' }}
          onClick={() => setActiveTab('ALL')}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
          }}
        />
      </div>
    </header>
  );
}
