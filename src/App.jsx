import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader.jsx';
import SidebarIntro from './components/SidebarIntro.jsx';
import AllTab from './components/tabs/AllTab.jsx';
import AboutTab from './components/tabs/AboutTab.jsx';
import ExperienceTab from './components/tabs/ExperienceTab.jsx';
import SkillsTab from './components/tabs/SkillsTab.jsx';
import MessengerWidget from './components/MessengerWidget.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('ALL');

  return (
    <div className="app-container">
      {/* Main Profile Shell */}
      <main className="profile-shell">
        {/* Facebook Profile Header Card (Cover, Avatar, Meta, Tabs) */}
        <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Page/Tab Content Layout */}
        <div className="profile-main-layout">
          {/* Left Column: Intro & Featured Tech */}
          <aside className="left-sidebar-col">
            <SidebarIntro setActiveTab={setActiveTab} />
          </aside>

          {/* Right Column: Tab View Content */}
          <section className="main-feed-col">
            {activeTab === 'ALL' && <AllTab />}
            {activeTab === 'ABOUT' && <AboutTab />}
            {activeTab === 'EXPERIENCE' && <ExperienceTab />}
            {activeTab === 'SKILLS' && <SkillsTab />}
          </section>
        </div>
      </main>

      {/* Facebook Messenger Chat Popup */}
      <MessengerWidget />
    </div>
  );
}
