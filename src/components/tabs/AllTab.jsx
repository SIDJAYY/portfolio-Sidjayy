import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ThumbsUp, MessageCircle, Share2, Globe, Github, SlidersHorizontal,
  X, ChevronDown, Check, ChevronLeft, ChevronRight, FileText, Send, Smile, Image as ImageIcon
} from 'lucide-react';

// Splits caption on \n and inserts real <br /> line breaks
function CaptionText({ text }) {
  if (!text) return null;
  return (
    <>
      {text.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}{i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

const CATEGORIES = [
  'Certificates',
  'Hardware & Software',
  'Data Analysis',
  'Web Development',
  'Networking'
];

const ALL_POSTS = [
  {
    id: 3,
    year: 2026,
    category: '',
    author: 'Carl Janus Bacolod',
    avatar: '/profile_picture/profilepicture.jpg',
    time: 'August 8, 2026 · 🌐',
    caption: '🚀 My portfolio website is now live!\n\nWhile the site is fully accessible, it is still under active development as I continue adding new projects and enhancing the overall user experience. Major updates are expected to be completed by August 20, 2026.\n\nThank you for visiting my portfolio!.',
    image: 'https://plus.unsplash.com/premium_photo-1722069799821-860b3129d252?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['under development', 'portfolio'],
    likes: 219,
    comments: [
      { id: 201, author: 'David Kim', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80', text: 'The dark theme palette looks top tier!', time: '2h ago' }
    ],
    shares: 19,
    isLiked: true,
    github: 'https://github.com',
  },
  {
    id: 8,
    year: 2026,
    category: 'Web Development',
    author: 'Carl Janus Bacolod',
    avatar: '/profile_picture/profilepicture.jpg',
    time: 'January 12, 2026 · 🌐',
    caption: 'Developed a web-based automation system for generating Sales Representative calling cards and identification cards, streamlining the creation process and improving operational efficiency. Successfully presented the solution to stakeholders, demonstrating its functionality, benefits, and business impact.',
    images: [
      '/projects_picture/presentation.png',
      '/projects_picture/web.jpg',
      '/projects_picture/web1.jpg',
      '/projects_picture/web2.jpg',
      '/projects_picture/web3.jpg',
    ],
    tags: ['webdevelopment', 'website', 'automation'],
    likes: 195,
    comments: [],
    shares: 18,
    isLiked: false,
  },
  {
    id: 1,
    year: 2026,
    category: 'Hardware & Software',
    author: 'Carl Janus Bacolod',
    avatar: '/profile_picture/profilepicture.jpg',
    time: 'January 24, 2026 · 🌐',
    caption: 'Another day, another laptop on the repair bench. I enjoy the challenge of finding the problem and bringing technology back to life. 🔧💻',
    image: [
      '/projects_picture/PERTUA_IMG.JPG',
      '/projects_picture/pertuapc.jpg',
    ],
    tags: ['Hardware', 'repair', 'laptops', 'keyboard', 'IT Specialization'],
    likes: 142,
    comments: [
      { id: 101, author: 'Carl Janus Bacolod', avatar: '/profile_picture/profilepicture.jpg', text: 'Laptop motherboard repair!!', time: '1h ago' },
      { id: 102, author: 'Carl Janus Bacolod', avatar: '/profile_picture/profilepicture.jpg', text: 'Laptop repair & Cleaning!!', time: '45m ago' }
    ],
    shares: 12,
    isLiked: false,
    github: 'https://github.com',
  },
  {
    id: 2,
    year: 2026,
    category: 'Hardware & Software',
    author: 'Carl Janus Bacolod',
    avatar: '/profile_picture/profilepicture.jpg',
    time: 'January 20, 2026 · 🌐',
    caption: 'Not every printer problem needs a replacement sometimes it just needs the right troubleshooting. Cleared the clogged printhead by carefully drawing ink through with a syringe to bring the colors back. 💉🖨️!',
    images: [
      '/projects_picture/printer2.png',
      '/projects_picture/printer3.png',
      '/projects_picture/printer5.png',
      '/projects_picture/printer6.png',
    ],
    tags: ['printer', 'repair', 'ink', 'ITSpecialist'],
    likes: 312,
    comments: [],
    shares: 26,
    isLiked: false,
    github: 'https://github.com',
  },

  {
    id: 4,
    year: 2025,
    category: 'Hardware & Software',
    author: 'Carl Janus Bacolod',
    avatar: '/profile_picture/profilepicture.jpg',
    time: 'November 15, 2025 · 🌐',
    caption: 'Building a pc from srcatch and setting up windows BIOS!! 🖥️ ',
    images: [
      '/projects_picture/bios1.png',
      '/projects_picture/bios2.png',
      '/projects_picture/bios3.png',
    ],
    tags: ['IT Specialist'],
    likes: 380,
    comments: [
      { id: 201, author: 'Carl Janus Bacolod', avatar: '/profile_picture/profilepicture.jpg', text: 'ready for deployment!! 🖥️', time: '2h ago' }
    ],
    shares: 34,
    isLiked: false,
    github: 'https://github.com',
  },
  // {
  //   id: 5,
  //   year: 2024,
  //   category: 'Data Analysis',
  //   author: 'Carl Janus Bacolod',
  //   avatar: '/profile_picture/profilepicture.jpg',
  //   time: 'November 10, 2024 · 🌐',
  //   caption: '💡 Completed a full-stack database management system for our thesis. Built with PostgreSQL, Express, and React. Engineered for data analytics and real-time report visualization! 📊',
  //   image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
  //   tags: ['PostgreSQL', 'Express', 'React', 'Thesis', 'Full-Stack'],
  //   likes: 201,
  //   comments: [],
  //   shares: 14,
  //   isLiked: false,
  //   github: 'https://github.com',
  // },
  {
    id: 6,
    year: 2026,
    category: '',
    author: 'Carl Janus Bacolod',
    avatar: '/profile_picture/profilepicture.jpg',
    time: 'August 5, 2026 · 🌐',
    caption: '',
    image: '/profile_picture/bgpost.png',
    tags: [],
    likes: 88,
    comments: [],
    shares: 7,
    isLiked: false,
    github: 'https://github.com',
  },
  {
    id: 7,
    year: 2026,
    category: '',
    author: 'Carl Janus Bacolod',
    avatar: '/profile_picture/profilepicture.jpg',
    time: 'August 5, 2026 · 🌐',
    caption: 'graduation milestone! 🎓📜',
    image: '/profile_picture/profilepicture.jpg',
    tags: ['Graduation', 'ITSpecialist'],
    likes: 672,
    comments: [
      { id: 601, author: 'Carl Janus Bacolod', avatar: '/profile_picture/profilepicture.jpg', text: 'GRADUATION PIC!! 🔥', time: '2h ago' }
    ],
    shares: 7,
    isLiked: false,
  },

  // {
  //   id: 9,
  //   year: 2026,
  //   category: 'Data Analysis',
  //   author: 'Carl Janus Bacolod',
  //   avatar: '/profile_picture/profilepicture.jpg',
  //   time: 'February 2, 2026 · 🌐',
  //   caption: '📊 Engineered an automated Python & SQL data analytics dashboard for processing system logs, tracking server resource usage, and generating real-time uptime reports. 📈💻',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  //   tags: ['DataAnalysis', 'Python', 'SQL', 'Dashboard', 'Metrics'],
  //   likes: 240,
  //   comments: [],
  //   shares: 22,
  //   isLiked: false,
  //   github: 'https://github.com',
  // }
];

// Helper function to extract array of images from a post (handles image: [], images: [], image: '', images: '')
function getPostImages(post) {
  if (!post) return [];
  if (Array.isArray(post.images) && post.images.length > 0) return post.images;
  if (Array.isArray(post.image) && post.image.length > 0) return post.image;
  if (typeof post.image === 'string' && post.image.trim()) return [post.image.trim()];
  if (typeof post.images === 'string' && post.images.trim()) return [post.images.trim()];
  return [];
}

// Helper component for multi-photo post grid
function PostMediaGrid({ post, onOpenPhoto }) {
  const images = getPostImages(post);
  if (!images || images.length === 0) return null;

  // Single photo
  if (images.length === 1) {
    return (
      <div className="fb-post-media" onClick={() => onOpenPhoto(post, 0)}>
        <img src={images[0]} alt="Post Media" className="fb-post-image clickable-photo" />
      </div>
    );
  }

  // 2 photos side by side
  if (images.length === 2) {
    return (
      <div className="fb-post-media-grid grid-2">
        {images.map((img, idx) => (
          <div key={idx} className="grid-photo-wrap" onClick={() => onOpenPhoto(post, idx)}>
            <img src={img} alt={`Media ${idx}`} className="grid-photo" />
          </div>
        ))}
      </div>
    );
  }

  // 3 photos (1 large left, 2 stacked right)
  if (images.length === 3) {
    return (
      <div className="fb-post-media-grid grid-3">
        <div className="grid-photo-wrap main-photo" onClick={() => onOpenPhoto(post, 0)}>
          <img src={images[0]} alt="Media 0" className="grid-photo" />
        </div>
        <div className="grid-stacked">
          {images.slice(1, 3).map((img, idx) => (
            <div key={idx + 1} className="grid-photo-wrap" onClick={() => onOpenPhoto(post, idx + 1)}>
              <img src={img} alt={`Media ${idx + 1}`} className="grid-photo" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 4 or 5+ photos collage (2 top, 3 bottom with +N overlay)
  const displayImages = images.slice(0, 5);
  const extraCount = images.length - 5;

  return (
    <div className={`fb-post-media-grid ${images.length >= 5 ? 'grid-5' : 'grid-4'}`}>
      {displayImages.map((img, idx) => {
        const isLastTile = idx === 4 && extraCount > 0;
        return (
          <div key={idx} className="grid-photo-wrap" onClick={() => onOpenPhoto(post, idx)}>
            <img src={img} alt={`Media ${idx}`} className="grid-photo" />
            {isLastTile && (
              <div className="more-photos-overlay">
                <span>+{extraCount + 1}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function AllTab() {
  const [posts, setPosts] = useState(ALL_POSTS);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Photo Viewer Modal State
  const [viewerState, setViewerState] = useState(null); // { post, photoIndex, comments: [] }

  // Close filter dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
    }
    if (isFilterOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isFilterOpen]);

  // Keyboard navigation for photo viewer modal
  useEffect(() => {
    function handleKeyDown(e) {
      if (!viewerState) return;
      if (e.key === 'Escape') setViewerState(null);
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewerState]);

  // Lock body scroll when photo viewer modal is open
  useEffect(() => {
    if (viewerState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [viewerState]);

  const toggleLike = (id) => {
    setPosts(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 };
      }
      return p;
    }));
  };

  const handleClear = () => {
    setFilteredCategory(null);
    setIsFilterOpen(false);
  };

  const handleOpenPhoto = (post, index) => {
    setViewerState({
      post,
      photoIndex: index,
      comments: post.comments || []
    });
  };

  const handleNextPhoto = () => {
    if (!viewerState) return;
    const images = getPostImages(viewerState.post);
    setViewerState(prev => ({
      ...prev,
      photoIndex: (prev.photoIndex + 1) % images.length
    }));
  };

  const handlePrevPhoto = () => {
    if (!viewerState) return;
    const images = getPostImages(viewerState.post);
    setViewerState(prev => ({
      ...prev,
      photoIndex: (prev.photoIndex - 1 + images.length) % images.length
    }));
  };

  // Comments are hardcoded/read-only — no user input

  const displayedPosts = posts.filter(p => {
    if (filteredCategory && p.category !== filteredCategory) return false;
    return true;
  });

  return (
    <div className="feed-content-area" style={{ position: 'relative' }}>

      {/* ── Post Filter Bar ── */}
      <div className="post-filter-bar">
        <span className="post-filter-label">
          Posts
          {filteredCategory && (
            <span className="post-filter-active-badge category-badge">{filteredCategory}</span>
          )}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {filteredCategory && (
            <button className="post-filter-clear-btn" onClick={handleClear} title="Clear filter">
              <X size={14} /> Clear
            </button>
          )}

          {/* Direct Category Dropdown */}
          <div className="post-filter-dropdown-container" ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              className={`post-filter-btn ${isFilterOpen || filteredCategory ? 'active' : ''}`}
              onClick={() => setIsFilterOpen(o => !o)}
            >
              <SlidersHorizontal size={16} />
              <span>{filteredCategory ? filteredCategory : 'Filters'}</span>
              <ChevronDown size={14} style={{ transform: isFilterOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {isFilterOpen && (
              <div className="post-filter-direct-dropdown">
                <button
                  className={`filter-dropdown-item ${!filteredCategory ? 'active' : ''}`}
                  onClick={() => {
                    setFilteredCategory(null);
                    setIsFilterOpen(false);
                  }}
                >
                  <span>All Categories</span>
                  {!filteredCategory && <Check size={14} />}
                </button>
                <div className="dropdown-divider" />
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    className={`filter-dropdown-item ${filteredCategory === cat ? 'active' : ''}`}
                    onClick={() => {
                      setFilteredCategory(cat);
                      setIsFilterOpen(false);
                    }}
                  >
                    <span>{cat}</span>
                    {filteredCategory === cat && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Feed Posts ── */}
      {displayedPosts.length === 0 && (
        <div className="filter-no-posts">
          <SlidersHorizontal size={32} style={{ opacity: 0.4, marginBottom: '12px' }} />
          <p>No posts found matching the selected filter.</p>
          <button className="post-filter-clear-btn" onClick={handleClear}>Show all posts</button>
        </div>
      )}
      {displayedPosts.map(post => {
        const commentCount = Array.isArray(post.comments) ? post.comments.length : (post.comments || 0);
        return (
          <div key={post.id} className="fb-post-card">
            {/* Post Header */}
            <div className="fb-post-header">
              <div className="post-author-info">
                <img src={post.avatar} alt={post.author} className="mini-avatar" />
                <div>
                  <div className="author-name">{post.author}</div>
                  <div className="post-meta">
                    <span>{post.time}</span>
                    {post.category && (
                      <span className="post-category-tag">{post.category}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Post Caption */}
            <div className="fb-post-caption">
              <p><CaptionText text={post.caption} /></p>
              <div className="post-tags-row">
                {post.tags.map(tag => (
                  <span key={tag} className="tag-badge">#{tag}</span>
                ))}
              </div>
            </div>

            {/* Post Media (Single or Multi-Photo Collage) */}
            <PostMediaGrid post={post} onOpenPhoto={handleOpenPhoto} />

            {/* Reaction Stats */}
            <div className="fb-post-stats">
              <div className="reactions-count">
                <div className="reaction-icon-circle">
                  <ThumbsUp size={12} fill="#14213D" />
                </div>
                <span>{post.likes} reactions</span>
              </div>
              <div>
                <span>{commentCount} comments • {post.shares} shares</span>
              </div>
            </div>

            {/* Interactive Footer Actions */}
            <div className="fb-post-footer-actions">
              <button
                className={`btn-post-interact ${post.isLiked ? 'liked' : ''}`}
                onClick={() => toggleLike(post.id)}
              >
                <ThumbsUp size={18} fill={post.isLiked ? "#FCA311" : "none"} />
                <span>{post.isLiked ? 'Liked' : 'Like'}</span>
              </button>

              <button className="btn-post-interact" onClick={() => handleOpenPhoto(post, 0)}>
                <MessageCircle size={18} />
                <span>Comment</span>
              </button>

              <button className="btn-post-interact">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
        );
      })}

      {viewerState && (() => {
        const { post, photoIndex, comments } = viewerState;
        const images = getPostImages(post);
        const currentImage = images[photoIndex] || images[0];
        const isMulti = images.length > 1;

        const modalJSX = (
          <div className="fb-photo-viewer-modal">
            {/* Left Black Stage */}
            <div className="viewer-stage-left">
              {/* Close Button Top Left */}
              <button
                className="viewer-close-btn"
                onClick={() => setViewerState(null)}
                title="Close viewer (Esc)"
              >
                <X size={22} />
              </button>

              {/* Photo Index Indicator */}
              {isMulti && (
                <div className="viewer-index-indicator">
                  Photo {photoIndex + 1} of {images.length}
                </div>
              )}

              {/* Prev / Next Arrows */}
              {isMulti && (
                <>
                  <button className="viewer-nav-btn prev" onClick={handlePrevPhoto} title="Previous photo">
                    <ChevronLeft size={28} />
                  </button>
                  <button className="viewer-nav-btn next" onClick={handleNextPhoto} title="Next photo">
                    <ChevronRight size={28} />
                  </button>
                </>
              )}

              {/* Center Main Image */}
              <div className="viewer-img-container">
                <img src={currentImage} alt="Fullscreen View" className="viewer-main-img" />
              </div>
            </div>

            {/* Right Dark Panel (Matching Facebook Post Viewer) */}
            <div className="viewer-panel-right">
              {/* Top Banner Notice */}
              <div className="viewer-top-notice">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FileText size={14} color="#94a3b8" />
                  This photo is from a post.
                </span>
                <span className="viewer-view-post-link" onClick={() => setViewerState(null)}>View post</span>
              </div>

              {/* Author Header */}
              <div className="viewer-author-header">
                <img src={post.avatar} alt={post.author} className="mini-avatar" />
                <div style={{ flex: 1 }}>
                  <div className="author-name">{post.author}</div>
                  <div className="post-meta">
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>

              {/* Caption Text & Tags */}
              <div className="viewer-caption-area">
                <p><CaptionText text={post.caption} /></p>
                <div className="post-tags-row" style={{ marginTop: '8px' }}>
                  {post.tags.map(tag => (
                    <span key={tag} className="tag-badge dark">#{tag}</span>
                  ))}
                </div>
              </div>

              {/* Reactions & Stats Row */}
              <div className="viewer-stats-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div className="reaction-icon-circle" style={{ background: '#1877f2' }}>
                    <ThumbsUp size={11} fill="#ffffff" color="#ffffff" />
                  </div>
                  <span>{post.likes}</span>
                </div>
                <div>
                  <span>{comments.length} comments • {post.shares} shares</span>
                </div>
              </div>

              {/* Interaction Buttons Bar */}
              <div className="viewer-action-bar">
                <button
                  className={`btn-viewer-action ${post.isLiked ? 'liked' : ''}`}
                  onClick={() => toggleLike(post.id)}
                >
                  <ThumbsUp size={16} fill={post.isLiked ? "#FCA311" : "none"} />
                  <span>Like</span>
                </button>
                <button className="btn-viewer-action">
                  <MessageCircle size={16} />
                  <span>Comment</span>
                </button>
                <button className="btn-viewer-action">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>

              {/* Comments Scrollable Area */}
              <div className="viewer-comments-body">
                {comments.length === 0 ? (
                  <div className="viewer-empty-comments">
                    <FileText size={44} style={{ opacity: 0.3, marginBottom: '12px' }} />
                    <p className="no-comments-title">No comments yet</p>
                    <p className="no-comments-sub">Be the first to comment.</p>
                  </div>
                ) : (
                  comments.map(c => {
                    const isAuthor = c.isAuthor || c.author === post.author || c.author === 'Carl Janus Bacolod';
                    return (
                      <div key={c.id} className="viewer-comment-item">
                        <img src={c.avatar} alt={c.author} className="mini-avatar" style={{ width: '32px', height: '32px' }} />
                        <div className="comment-bubble">
                          <div className="comment-author-row">
                            <span className="comment-author">{c.author}</span>
                            {isAuthor && <span className="comment-author-badge">Author</span>}
                          </div>
                          <div className="comment-text">{c.text}</div>
                          <span className="comment-time">{c.time}</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        );

        return createPortal(modalJSX, document.body);
      })()}
    </div>
  );
}
