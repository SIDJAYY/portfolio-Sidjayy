import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Award, ExternalLink, Calendar, CheckCircle2, BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';

const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Google Data Analytics',
    issuer: 'Google / Coursera',
    issuerLogo: null,
    date: 'March 21, 2025',
    category: 'Data & Analytics',
    verifyUrl: 'https://coursera.org/verify/professional-cert/55XT357QQON6',
    image: '/certificates/GDA.png',
    badge: '8 Courses',
  },
  {
    id: 2,
    title: 'Data Analytics and Visualization Job Simulation',
    issuer: 'Job Simulation by Forage',
    issuerLogo: null,
    date: 'April 1, 2025',
    category: 'Data & Analytics',
    verifyUrl: '',
    image: '/certificates/ACN.png',
    badge: '4 Modules',
  },
  {
    id: 3,
    title: 'Google Business Intelligence',
    issuer: 'Google / Coursera',
    issuerLogo: null,
    date: 'March 23, 2025',
    category: 'Data & Analytics',
    verifyUrl: 'https://coursera.org/verify/professional-cert/93CFFHJX7X1I',
    image: '/certificates/GBA.png',
    badge: '3 Courses',
  },
];

const CATEGORIES = ['All', ...new Set(CERTIFICATIONS.map(c => c.category))];

export default function CertificationsTab() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxCert, setLightboxCert] = useState(null);

  // Lock body scroll when certificate lightbox modal is active
  useEffect(() => {
    if (lightboxCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxCert]);

  const visible = CERTIFICATIONS.filter(
    c => activeCategory === 'All' || c.category === activeCategory
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* Header Card */}
      <div className="cert-header-card">
        <h2 className="cert-header-title">
          <Award color="#FCA311" size={24} />
          Licenses &amp; Certifications
        </h2>
        <p className="cert-header-sub">
          Verified credentials, professional certificates, and completed programs.
        </p>

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
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
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p style={{ fontSize: '13px', color: '#64748b', paddingLeft: '2px' }}>
        Showing <strong style={{ color: '#14213D' }}>{visible.length}</strong> certificate{visible.length !== 1 ? 's' : ''}
      </p>

      {/* Certificate Cards */}
      {visible.map(cert => (
        <div key={cert.id} className="cert-card">

          {/* Certificate Preview Image */}
          <div className="cert-image-wrap" onClick={() => setLightboxCert(cert)}>
            <img
              src={cert.image}
              alt={`${cert.title} certificate`}
              className="cert-preview-img"
            />
            <div className="cert-image-overlay">
              <span className="cert-view-label">
                <ExternalLink size={14} /> View Certificate
              </span>
            </div>
            {cert.badge && (
              <span className="cert-badge-pill">{cert.badge}</span>
            )}
          </div>

          {/* Certificate Details */}
          <div className="cert-details">
            {/* Top row */}
            <div className="cert-top-row">
              <div className="cert-issuer-icon">
                <BookOpen size={20} color="#FCA311" />
              </div>
              <div>
                <p className="cert-issuer-name">{cert.issuer}</p>
                <div className="cert-date-row">
                  <Calendar size={12} />
                  <span>Issued {cert.date}</span>
                </div>
              </div>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-description">{cert.description}</p>

            {/* Courses list */}
            {cert.courses && (
              <div className="cert-courses-wrap">
                <p className="cert-courses-label">Courses Completed</p>
                <div className="cert-courses-grid">
                  {cert.courses.map(course => (
                    <div key={course} className="cert-course-item">
                      <CheckCircle2 size={13} color="#FCA311" style={{ flexShrink: 0 }} />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="cert-actions-row">
            </div>
          </div>
        </div>
      ))}

      {/* Lightbox Modal */}
      {lightboxCert && createPortal(
        <div className="cert-lightbox-overlay" onClick={() => setLightboxCert(null)}>
          <div className="cert-lightbox-box" onClick={e => e.stopPropagation()}>
            <div className="cert-lightbox-header">
              <span className="cert-lightbox-title">{lightboxCert.title}</span>
              <button className="cert-lightbox-close" onClick={() => setLightboxCert(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="cert-lightbox-body">
              <img
                src={lightboxCert.image}
                alt={lightboxCert.title}
                className="cert-lightbox-img"
              />
            </div>
            <div className="cert-lightbox-footer">
              <a
                href={lightboxCert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="cert-verify-btn"
              >
                <CheckCircle2 size={14} />
                Verify on Coursera
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
