import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    role: 'IT SPECIALIST',
    company: 'Primetech Oil Incorporated',
    period: 'October 2025 - April 2026 (6 months)',
    location: '35 Sto. Nino, Quezon City, Metro Manila',
    logo: '/profile_picture/PRIMETECH.png',
    logoText: 'POI',
    highlights: [
      'Resolved technical issues for 20+ employees, reducing downtime through hardware and software support.',
      'Performed printer maintenance, hardware/software setup for new PC builds, and router configurations.',
      'Collaborated with supervisors to implement cost-effective technical solutions through analytical problem-solving.',
      'Developed a web-based ID and calling card automation system with QR code integration, reducing manual ID processing and enabling real-time access to employee profiles and company information.'
    ]
  },
  {
    id: 2,
    role: 'Computer Technician',
    company: 'Freelance',
    period: '2023 - present (3 yrs)',
    location: 'METRO MANILA',
    logoText: 'FL',
    highlights: [
      'Managed computer maintenance and technical support for a local computer shop, performing system setup, hardware upgrades, troubleshooting, and preventive maintenance.',
      'Troubleshoot client PC issues and perform system reformatting using hardware-level techniques and tools like WinNTSetup, sergei strelec, RUFUS etc.',
      'Provide technical support to students for academic activities, including debugging and network troubleshooting.'
    ]
  },
  {
    id: 3,
    role: 'Full Stack Web Developer',
    company: 'freelance',
    period: '2023 - present',
    location: 'METRO MANILA',
    logoText: 'FL',
    highlights: [
      'Develop professional website portfolios for clients to enhance their career applications.',
      'Designed and developed a web-based Government Service Management System integrating AI-powered assistance using Dialogflow to automate scholarship inquiries.',
    ]
  },

  // {
  //   id: 4,
  //   role: 'Frontend Software Engineer',
  //   company: 'Hyperion Tech Labs',
  //   period: '2019 - 2021 (2 yrs)',
  //   location: 'Singapore',
  //   logoText: 'HT',
  //   highlights: [
  //     'Developed interactive dashboard modules with D3.js and React.',
  //     'Migrated legacy codebase to TypeScript, reducing runtime production bugs by 35%.',
  //     'Engineered automated CI/CD deployment pipelines.'
  //   ]
  // }
];

export default function ExperienceTab() {
  return (
    <div className="timeline-list">
      <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #E5E5E5', marginBottom: '8px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#14213D', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Briefcase color="#FCA311" size={24} />
          Work Experience Timeline
        </h2>
        <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
          A chronological journey of technical roles, achievements, and impact.
        </p>
      </div>

      {EXPERIENCES.map(exp => (
        <div key={exp.id} className="timeline-card">
          {exp.logo ? (
            <img
              src={exp.logo}
              alt={exp.company}
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
                borderRadius: '8px',
                background: '#FFFFFF',
                padding: '4px',
                border: '1px solid #E5E5E5',
                flexShrink: 0
              }}
            />
          ) : (
            <div className="company-logo-placeholder">
              {exp.logoText}
            </div>
          )}

          <div style={{ flex: 1 }}>
            <h3 className="timeline-role-title">{exp.role}</h3>
            <div className="timeline-company-name">{exp.company}</div>

            <div className="timeline-period" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '4px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={13} color="#FCA311" /> {exp.period}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={13} color="#64748b" /> {exp.location}
              </span>
            </div>

            <ul style={{ marginTop: '12px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {exp.highlights.map((item, idx) => (
                <li key={idx} style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
