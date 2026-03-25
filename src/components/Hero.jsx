import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const ROLES = ['Full Stack Web Developer', 'MERN Stack Developer', 'Competitive Programmer', 'DSA Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let typingTimer;

    if (!isDeleting && charIndex < currentRole.length) {
      typingTimer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 62);
    } else if (!isDeleting && charIndex === currentRole.length) {
      typingTimer = setTimeout(() => setIsDeleting(true), 1900);
    } else if (isDeleting && charIndex > 0) {
      typingTimer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 34);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, roleIndex]);

  const PARTICLES = [...Array(14)].map((_, i) => ({
    w: 2 + (i % 4),
    l: `${6 + i * 6.8}%`,
    t: `${14 + (i * 33) % 65}%`,
    dur: `${3 + i * 0.35}s`,
    delay: `${i * 0.22}s`,
    col: i % 3 === 0 ? '#00dcff' : (i % 3 === 1 ? '#7b5ff5' : '#00ffb3'),
  }));

  return (
    <section id="home" className="hero-section">
      {/* Background Decor */}
      <div className="hero-bg-grid" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-orb orb-3" />

      {/* Floating Particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{ width: p.w, height: p.w, background: p.col, left: p.l, top: p.t, animationDuration: p.dur, animationDelay: p.delay }}
        />
      ))}

      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-name slide-in d2">
            Rajiv Kumar Singh
          </h1>

          <div className="hero-typing slide-in d3">
            <span>{displayText}</span>
            <span className="cursor-blink" />
          </div>

          <div className="hero-bio slide-in d4">
            <p>
              CSE undergrad at LPU crafting scalable, user-centric MERN applications.
              I bridge clean architecture with thoughtful design to ship experiences that actually matter.
            </p>
            <p>
              Competitive programmer turned product builder — algorithmic precision meets user-first thinking in every line I write.
            </p>
          </div>

          <div className="hero-goal slide-in d5">
            <p>🎯 Seeking a role where I can engineer impactful solutions, grow with a strong team, and build products that scale and create real-world value.</p>
          </div>

          <div className="hero-socials slide-in d5">
            <a href="https://www.linkedin.com/in/01rajiv/" target="_blank" rel="noreferrer" className="social-tag linkedin">
              <b>in</b> LinkedIn
            </a>
            <a href="https://github.com/Rajiv3012" target="_blank" rel="noreferrer" className="social-tag github">
              🐙 GitHub
            </a>
          </div>

          <div className="hero-actions slide-in d6">
            <Link to="projects" smooth={true} className="btn-primary">View My Work →</Link>
            <Link to="contact" smooth={true} className="btn-secondary">Contact Me</Link>
          </div>
        </div>

        <div className="hero-right">
          {/* Avatar */}
          <div className="avatar-wrapper slide-in d1">
            <div className="avatar-ring">
              <div className="avatar-image-container">
                <img src="/profile picture.jpg" alt="Rajiv Kumar Singh" className="avatar-img" />
              </div>
            </div>
            <div className="availability-badge">
              <span className="availability-dot" />open to work
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 106px 6% 70px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.012) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(255,255,255,.012) 1px,transparent 1px);
          background-size: 62px 62px;
          pointer-events: none;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: .1;
          pointer-events: none;
        }
        .orb-1 { width: 500px; height: 500px; background: var(--a1); top: -10%; left: 25%; }
        .orb-2 { width: 380px; height: 380px; background: var(--a2); bottom: 5%; right: -5%; }
        .orb-3 { width: 280px; height: 280px; background: var(--a3); bottom: 20%; left: -4%; }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatP ease-in-out infinite;
        }

        .hero-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1250px;
          gap: 60px;
        }

        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 680px;
        }

        .hero-right {
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar-wrapper { position: relative; margin-bottom: 0px; }
        .avatar-ring {
          width: 320px; height: 320px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
          padding: 6px;
          box-shadow: 0 0 70px rgba(0,220,255,.32), 0 0 140px rgba(123,95,245,.15), 0 0 30px rgba(0,255,179,.1);
          animation: floatA 5s ease-in-out infinite;
          position: relative;
        }
        .avatar-ring::before {
          content: '';
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 2px solid rgba(0,220,255,.12);
          animation: floatA 5s ease-in-out infinite reverse;
        }
        .avatar-ring::after {
          content: '';
          position: absolute;
          inset: -24px;
          border-radius: 50%;
          border: 1px solid rgba(123,95,245,.08);
          animation: floatA 7s ease-in-out infinite;
        }
        .avatar-image-container {
          width: 100%; height: 100%;
          border-radius: 50%;
          background: var(--bg2);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform .6s cubic-bezier(.22,1,.36,1), filter .4s;
          filter: contrast(1.05) saturate(1.1);
          transform: scale(1.1);
        }
        .avatar-ring:hover .avatar-img {
          transform: scale(1.18);
          filter: contrast(1.1) saturate(1.15) brightness(1.05);
        }
        .avatar-ring:hover {
          box-shadow: 0 0 80px rgba(0,220,255,.4), 0 0 160px rgba(123,95,245,.2), 0 0 30px rgba(0,255,179,.15);
        }
        .availability-badge {
          position: absolute;
          bottom: 6px; right: 4px;
          background: var(--bg2);
          border: 2.5px solid var(--bg);
          border-radius: 100px;
          padding: 3px 10px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem;
          color: var(--a3);
          animation: badgeP 2.5s ease infinite;
        }
        .availability-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--a3);
          display: inline-block;
          animation: dotP 2s infinite;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          letter-spacing: -2.5px;
          line-height: 1.02;
          margin-bottom: 12px;
          background: linear-gradient(125deg, #d8eaf8 0%, var(--a1) 45%, var(--a2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-typing {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(.95rem, 2.2vw, 1.2rem);
          color: var(--a1);
          margin-bottom: 18px;
          height: 2em;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .cursor-blink {
          border-right: 2px solid var(--a1);
          height: 1.1em;
          animation: blink .7s step-end infinite;
        }

        .hero-bio {
          color: var(--text-secondary);
          font-size: .95rem;
          line-height: 1.78;
          max-width: 560px;
          margin-bottom: 8px;
        }
        .hero-goal {
          border-left: 2px solid var(--a3);
          padding-left: 14px;
          margin-bottom: 28px;
          text-align: left;
          max-width: 530px;
        }
        .hero-goal p {
          font-size: .88rem;
          color: var(--a3);
          font-style: italic;
          line-height: 1.6;
        }

        .hero-socials { display: flex; gap: 11px; margin-bottom: 32px; flexWrap: wrap; justify-content: flex-start; }
        .social-tag {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 21px; border-radius: 9px;
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: .86rem; text-decoration: none;
          transition: all .25s;
        }
        .social-tag.linkedin { background: rgba(10,102,194,.12); border: 1px solid rgba(10,102,194,.3); color: #6ba8f5; }
        .social-tag.github { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07); color: var(--text-primary); }
        .social-tag:hover { transform: translateY(-2px); filter: brightness(1.2); }

        .btn-primary {
          padding: 12px 28px; background: var(--a1); color: var(--bg);
          border: none; border-radius: 10px; cursor: pointer;
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .9rem;
          transition: all .25s; text-decoration: none;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,220,255,.28); }
        .btn-secondary {
          padding: 12px 28px; background: transparent; color: var(--text-primary);
          border: 1px solid rgba(255,255,255,.07); border-radius: 10px; cursor: pointer;
          font-family: 'Syne', sans-serif; font-weight: 600; font-size: .9rem;
          transition: all .25s; text-decoration: none;
        }
        .btn-secondary:hover { border-color: var(--a1); color: var(--a1); transform: translateY(-2px); }

        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }

        .hero-scroll { marginTop: 58px; display: flex; flexDirection: column; alignItems: center; gap: 6px; }
        .scroll-text { fontFamily: 'JetBrains Mono', monospace; fontSize: .68rem; letterSpacing: 3px; textTransform: uppercase; color: var(--text-dim); }
        .scroll-line { width: 1.5px; height: 30px; background: linear-gradient(var(--a1), transparent); borderRadius: 2px; animation: scrollDrop 1.6s ease-in-out infinite; }

        @media (max-width: 968px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 50px;
            padding-top: 30px;
          }
          .hero-left {
            align-items: center;
            text-align: center;
          }
          .hero-goal {
            text-align: center;
            border-left: none;
            padding-left: 0;
            border-top: 2px solid rgba(0,255,179,0.15);
            border-bottom: 2px solid rgba(0,255,179,0.15);
            padding: 14px 0;
          }
          .hero-socials {
            justify-content: center;
          }
          .hero-actions {
            justify-content: center;
          }
        }

        .d1 { animation-delay: .15s } .d2 { animation-delay: .28s } .d3 { animation-delay: .4s }
        .d4 { animation-delay: .52s } .d5 { animation-delay: .64s } .d6 { animation-delay: .76s } .d7 { animation-delay: .88s }
      `}} />
    </section>
  );
};

export default Hero;
