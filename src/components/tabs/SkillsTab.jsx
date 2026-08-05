import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Wrench, Sparkles } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    category: 'Frontend Engineering',
    icon: Layout,
    skills: [
      { name: 'React.js / Next.js', percent: 95 },
      { name: 'JavaScript (ES6+) / TypeScript', percent: 92 },
      { name: 'HTML5 & Vanilla CSS3 Architecture', percent: 98 },
      { name: 'Vite / Webpack / Build Tools', percent: 90 },
      { name: 'Tailwind CSS / Glassmorphism UI', percent: 94 },
      { name: 'State Management (Redux / Zustand)', percent: 88 }
    ]
  },
  {
    category: 'Backend & Cloud',
    icon: Server,
    skills: [
      { name: 'Node.js / Express', percent: 90 },
      { name: 'RESTful APIs & GraphQL', percent: 88 },
      { name: 'PostgreSQL / MySQL', percent: 85 },
      { name: 'MongoDB / Redis Caching', percent: 84 },
      { name: 'AWS (S3, EC2, Lambda)', percent: 80 },
      { name: 'Docker & Microservices', percent: 82 }
    ]
  },
  {
    category: 'Tools & Workflows',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub Workflows', percent: 96 },
      { name: 'UI/UX Design (Figma to Code)', percent: 90 },
      { name: 'CI/CD Pipelines', percent: 85 },
      { name: 'Jest / Cypress Testing', percent: 82 },
      { name: 'Web Performance Optimization', percent: 92 },
      { name: 'SEO & Web Accessibility (a11y)', percent: 94 }
    ]
  }
];

export default function SkillsTab() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #E5E5E5' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#14213D', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Cpu color="#FCA311" size={24} />
          Technical Stack & Skill Matrix
        </h2>
        <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
          Core competencies, languages, frameworks, and engineering tooling.
        </p>

        {/* Filter buttons */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
          <button 
            className="tag-badge" 
            style={{ 
              background: activeCategory === 'ALL' ? '#14213D' : '#f1f5f9',
              color: activeCategory === 'ALL' ? '#FCA311' : '#14213D',
              border: activeCategory === 'ALL' ? '1px solid #FCA311' : '1px solid #E5E5E5',
              cursor: 'pointer',
              padding: '6px 16px'
            }}
            onClick={() => setActiveCategory('ALL')}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map(cat => (
            <button 
              key={cat.category}
              className="tag-badge" 
              style={{ 
                background: activeCategory === cat.category ? '#14213D' : '#f1f5f9',
                color: activeCategory === cat.category ? '#FCA311' : '#14213D',
                border: activeCategory === cat.category ? '1px solid #FCA311' : '1px solid #E5E5E5',
                cursor: 'pointer',
                padding: '6px 16px'
              }}
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {SKILL_CATEGORIES.filter(c => activeCategory === 'ALL' || activeCategory === c.category).map(cat => {
        const IconComponent = cat.icon;
        return (
          <div key={cat.category} className="skills-category-group">
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#14213D', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconComponent size={20} color="#FCA311" />
              {cat.category}
            </h3>

            <div className="skills-grid">
              {cat.skills.map(skill => (
                <div key={skill.name} className="skill-card-item">
                  <div className="skill-header-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
