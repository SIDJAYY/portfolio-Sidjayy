import React, { useState, useMemo } from 'react';
import { Cpu, Layout, Server, Wrench, Zap, Globe, GitBranch, Box, Database, Cloud, Code2, Layers, TestTube, Settings, Paintbrush, Monitor, Search, X, CpuIcon, ComputerIcon, Calendar, Book, MailCheck, Video, HardDrive, NotebookIcon, AppWindowIcon } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    category: 'Hardware Skills',
    icon: ComputerIcon,
    skills: [
      { name: 'System Debloating', icon: CpuIcon },
      { name: 'Hardware Upgrade(SSD, HDD, RAM)', icon: Cpu },
      { name: 'PC Assembly & Repair', icon: Settings },
      { name: 'Hardware Troubleshooting', icon: Code2 },
      { name: 'Cellphone System Recovery', icon: Monitor },
      { name: 'PC Optimization', icon: Paintbrush },
      { name: 'Router Configuration', icon: Settings },
      { name: 'Basic Networking', icon: Settings },
      { name: 'Internet Connection Troubleshooting', icon: Layers },
      { name: 'Antivirus Installation & Usage', icon: Paintbrush },
      { name: 'Basic Security Configuration', icon: Settings },
    ]
  },
  {
    category: 'Digital Skills',
    icon: Book,
    skills: [
      { name: 'Microsoft Windows', icon: Server },
      { name: 'Microsoft Office', icon: Server },
      { name: 'Microsoft Word', icon: Globe },
      { name: 'Microsoft Excel', icon: Wrench },
      { name: 'Google Calendar', icon: Calendar },
      { name: 'Gmail', icon: MailCheck },
      { name: 'Google Meet', icon: Video },
      { name: 'Google Drive', icon: HardDrive },
      { name: 'Google Keep', icon: NotebookIcon },
      { name: 'GIT & GitHub', icon: GitBranch },
      { name: 'Make.com', icon: AppWindowIcon },
    ]
  },
  // {
  //   category: 'T',
  //   icon: Wrench,
  //   skills: [
  //     { name: 'Git & GitHub', icon: GitBranch },
  //     { name: 'Figma to Code', icon: Paintbrush },
  //     { name: 'CI/CD Pipelines', icon: Settings },
  //     { name: 'Jest', icon: TestTube },
  //     { name: 'Cypress', icon: TestTube },
  //     { name: 'Web Performance', icon: Zap },
  //     { name: 'SEO Optimization', icon: Globe },
  //     { name: 'Web Accessibility', icon: Monitor },
  //     { name: 'Microservices', icon: Box },
  //     { name: 'MySQL', icon: Database },
  //   ]
  // }
];

const ALL_CATS = ['ALL', ...SKILL_CATEGORIES.map(c => c.category)];

function HighlightMatch({ text, query }) {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: '#FCA311', color: '#14213D', borderRadius: '2px', padding: '0 1px' }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SkillsTab() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const isSearching = searchQuery.trim().length > 0;

  const visibleCats = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return SKILL_CATEGORIES
      .filter(c => isSearching || activeCategory === 'ALL' || activeCategory === c.category)
      .map(cat => ({
        ...cat,
        skills: isSearching
          ? cat.skills.filter(s => s.name.toLowerCase().includes(q))
          : cat.skills,
      }))
      .filter(cat => cat.skills.length > 0);
  }, [activeCategory, searchQuery, isSearching]);

  const totalResults = visibleCats.reduce((acc, c) => acc + c.skills.length, 0);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setSearchQuery('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Header card */}
      <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #E5E5E5' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#14213D', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Cpu color="#FCA311" size={24} />
          Technical Skills &amp; Soft Skills
        </h2>
        <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
          Core competencies, languages and engineering tooling.
        </p>

        {/* Search Bar */}
        <div className="skill-search-wrap">
          <Search size={16} className="skill-search-icon" />
          <input
            type="text"
            className="skill-search-input"
            placeholder="Search a skill — e.g. React, Docker, GraphQL…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {isSearching && (
            <button
              className="skill-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter buttons — hidden when searching */}
        {!isSearching && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
            {ALL_CATS.map(cat => (
              <button
                key={cat}
                className="tag-badge"
                style={{
                  background: activeCategory === cat ? '#14213D' : '#f1f5f9',
                  color: activeCategory === cat ? '#FCA311' : '#14213D',
                  border: activeCategory === cat ? '1px solid #FCA311' : '1px solid #E5E5E5',
                  cursor: 'pointer',
                  padding: '6px 16px',
                }}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat === 'ALL' ? 'All Skills' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Search result count */}
        {isSearching && (
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#64748b' }}>
            {totalResults > 0
              ? <><span style={{ fontWeight: 800, color: '#14213D' }}>{totalResults}</span> skill{totalResults !== 1 ? 's' : ''} matching <span style={{ fontWeight: 700, color: '#FCA311' }}>"{searchQuery}"</span></>
              : <>No skills matched <span style={{ fontWeight: 700, color: '#FCA311' }}>"{searchQuery}"</span></>
            }
          </p>
        )}
      </div>

      {/* No results state */}
      {isSearching && totalResults === 0 && (
        <div className="skill-no-results">
          <Search size={32} color="#CBD5E1" />
          <p style={{ fontWeight: 700, color: '#94a3b8', fontSize: '15px', marginTop: '10px' }}>No matching skills found</p>
          <p style={{ color: '#CBD5E1', fontSize: '13px' }}>Try a different keyword</p>
        </div>
      )}

      {/* Skill category blocks */}
      {visibleCats.map(cat => {
        const IconComponent = cat.icon;
        return (
          <div key={cat.category} className="skills-category-group">
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#14213D', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{
                background: '#14213D',
                borderRadius: '8px',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <IconComponent size={16} color="#FCA311" />
              </span>
              {cat.category}
            </h3>

            <div className="skill-chips-grid">
              {cat.skills.map(skill => {
                const SkillIcon = skill.icon;
                return (
                  <div key={skill.name} className={`skill-chip${isSearching ? ' skill-chip--highlight' : ''}`}>
                    <span className="skill-chip-icon-wrap">
                      <SkillIcon size={14} />
                    </span>
                    <span className="skill-chip-label">
                      <HighlightMatch text={skill.name} query={isSearching ? searchQuery : ''} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
