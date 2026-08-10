import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader.jsx';
import SidebarIntro from './components/SidebarIntro.jsx';
import AllTab from './components/tabs/AllTab.jsx';
import AboutTab from './components/tabs/AboutTab.jsx';
import ExperienceTab from './components/tabs/ExperienceTab.jsx';
import SkillsTab from './components/tabs/SkillsTab.jsx';
import CertificationsTab from './components/tabs/CertificationsTab.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <div className="app-container">
      <main className="profile-shell">
        {/* Facebook Profile Header Card (Cover, Avatar, Meta, Tabs) */}
        <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Page/Tab Content Layout */}
        <div className="profile-main-layout">
          {/* Left Column: Intro & Featured Tech */}
          <aside className="left-sidebar-col">
            <SidebarIntro setActiveTab={setActiveTab} />
          </aside>

          {/* Right Column: Tab View Content with Smooth Transition */}
          <section className="main-feed-col">
            <div key={activeTab} className="tab-content-anim">
              {activeTab === 'ALL' && <AllTab />}
              {activeTab === 'ABOUT' && <AboutTab />}
              {activeTab === 'EXPERIENCE' && <ExperienceTab />}
              {activeTab === 'SKILLS' && <SkillsTab />}
              {activeTab === 'CERTIFICATIONS' && <CertificationsTab />}
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}
