import React from 'react';
import { User, Mail, Phone, MapPin, Globe, GraduationCap, Award, Heart, ShieldCheck, Terminal } from 'lucide-react';

export default function AboutTab() {
  return (
    <div className="about-card">
      <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#14213D', marginBottom: '8px' }}>
        About Me & Background
      </h2>
      <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6 }}>
        Information Technology graduate with hands-on experience in hardware and software troubleshooting, web development, and AI integration. Skilled in diagnosing technical issues, system maintenance, and developing web-based solutions. Detail-oriented, adaptable, and eager to contribute technical expertise in an entry-level Technical Support, IT Specialist, IT Officer, Network Support role.
      </p>

      <div className="about-grid">
        {/* Contact Info */}
        <div className="about-box">
          <div className="about-box-title">
            <Mail size={18} color="#FCA311" />
            <span>Contact Information</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <strong>Email:</strong>
              <a
                href="mailto:bacolodcarl00@gmail.com"
                className="contact-link-item"
                title="Send an email to Carl"
              >
                bacolodcarl00@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <strong>Viber / Phone:</strong>
              <a
                href="tel:09625581195"
                className="contact-link-item"
                title="Call or Viber 09625581195"
              >
                09625581195
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <strong>LinkedIn:</strong>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="contact-link-item"
                title="Visit LinkedIn Profile"
              >
                Carl Janus Bacolod
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <strong>Location:</strong>
              <a
                href="https://maps.google.com/?q=Quezon+City,+Philippines"
                target="_blank"
                rel="noreferrer"
                className="contact-link-item"
                title="View location on Google Maps"
              >
                Quezon City, Philippines
              </a>
            </div>
          </div>
        </div>

        {/* Education & Degrees */}
        <div className="about-box">
          <div className="about-box-title">
            <GraduationCap size={18} color="#FCA311" />
            <span>Education</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/profile_picture/cscqc.png" alt="CSCQC" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              <div>
                <strong>College of St. Catherine Quezon City</strong>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Secondary / High School Education</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/profile_picture/BCP.png" alt="BCP" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              <div>
                <strong>Bestlink College of the Philippines</strong>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Bachelor of Science in Information Technology</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        {/* <div className="about-box">
          <div className="about-box-title">
            <ShieldCheck size={18} color="#FCA311" />
            <span>Engineering Principles</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#334155' }}>
            <div>• Clean Code & Scalable Architecture</div>
            <div>• Pixel-Perfect UI Design System</div>
            <div>• Performance & SEO Best Practices</div>
            <div>• Continuous Integration & Automated Tests</div>
          </div>
        </div> */}

        {/* Interests & Hobbies */}
        {/* <div className="about-box">
          <div className="about-box-title">
            <Heart size={18} color="#FCA311" />
            <span>Interests & Hobbies</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#334155' }}>
            <div>• Open Source Development</div>
            <div>• Cyberpunk & Futuristic Web Design</div>
            <div>• Mechanical Keyboards & Setup Aesthetic</div>
            <div>• Anime & Indie Gaming</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
