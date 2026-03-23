import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
import AboutLayout from './components/AboutLayout';
import EducationRoad from './components/EducationRoad';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CertificatesAchievements from './components/CertificatesAchievements';
import CodingProfiles from './components/CodingProfiles';
import ContactForm from './components/ContactForm';
import Cursor from './components/Cursor';
import ScrollBar from './components/ScrollBar';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.rv, .rv-l, .rv-r');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      
      reveals.forEach(el => observer.observe(el));
      
      // Handle dynamic updates
      const mutationObserver = new MutationObserver(() => {
        const currentReveals = document.querySelectorAll('.rv:not(.in), .rv-l:not(.in), .rv-r:not(.in)');
        currentReveals.forEach(el => observer.observe(el));
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
      
      return () => {
        observer.disconnect();
        mutationObserver.disconnect();
      };
    };
    handleReveal();
  }, []);

  return (
    <div className="app-container">
      <Cursor />
      <ScrollBar />
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <AboutLayout />
        <EducationRoad />
        <Skills />
        <Projects />
        <CertificatesAchievements />
        <CodingProfiles />
        <ContactForm />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">r.dev</div>
          <p>© 2026 Rajiv Kumar Singh · React · Node.js · Express · MongoDB</p>
          <p>Made with <span style={{color: '#f87171'}}>♥</span> in Punjab, India</p>
        </div>
      </footer>
      <BackToTop />

      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          border-top: 1px solid rgba(255, 255, 255, .055);
          padding: 28px 6%;
        }
        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--a1);
          letter-spacing: -1px;
        }
        .footer p {
          fontSize: .81rem;
          color: var(--text-dim);
          textAlign: center;
        }
        @media (max-width: 600px) {
          .footer-content { flex-direction: column; text-align: center; }
        }
      `}} />
    </div>
  );
}

export default App;
