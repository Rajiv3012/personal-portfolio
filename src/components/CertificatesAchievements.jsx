import React, { useState } from 'react';

const CertificatesAchievements = () => {
  const [previewCert, setPreviewCert] = useState(null);

  const CERTS = [
    {i:'📜',n:'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',by:'Infosys',d:'Jul 2025 – Aug 2025',col:'#38bdf8',desc:'Prompt engineering, ChatGPT, Generative AI and LLM concepts.',url:'https://drive.google.com/file/d/1LsLtCR6eCK_4d3WYdBSt0c5PZrayezcb/view?pli=1', grad: 'linear-gradient(135deg,#0c2233 0%,#05111a 100%)', bgImage: '/chatgpt_cert.png'},
    {i:'📚',n:'Data Structures & Algorithms Certification (Java)',by:'W3 Grads',d:'Jun 2025 – Jul 2025',col:'#f43f5e',desc:'Intensive training on DSA and logic building in Java. Practiced core topics like arrays, sorting, trees.',url:'https://drive.google.com/file/d/1JNkrAMpIQFHOVlTMJneR3Smo4idHiyO8/view', grad: 'linear-gradient(135deg,#2e0c15 0%,#17050a 100%)', bgImage: '/dsa_cert.png'},
    {i:'☕',n:'Java Programming Certification',by:'NeoColab',d:'Jan 2025 – May 2025',col:'#f59e0b',desc:'Core Java and advanced programming practices.',url:'https://drive.google.com/file/d/1ynONRsFrKZjTal1-x8x9rVMYmJu49jfi/view', grad: 'linear-gradient(135deg,#2e1a05 0%,#170c02 100%)', bgImage: '/java_cert.png'},
    {i:'🛡️',n:'Privacy and Security in Online Social Media',by:'NPTEL',d:'Jul 2025 – Oct 2025',col:'#22c55e',desc:'Detailed academic coursework on digital privacy and security on social media platforms.',url:'https://drive.google.com/file/d/1TvvHlA1HX7a9S2R1kvnY7qDcHPzR_gGz/view', grad: 'linear-gradient(135deg,#0d2b18 0%,#06170d 100%)', bgImage: '/privacy_cert.png'},
  ];

  const ACHIEVEMENTS = [
    {m:'🏆',t:'1500+ Rating LeetCode',pl:'LeetCode',d:'Recent',col:'#f59e0b',desc:'1500+ contest rating on competitive programming platforms.'},
    {m:'🥇',t:'100-Day Problem-Solving Badge',pl:'LeetCode',d:'Recent',col:'#a855f7',desc:'Earned a 100-Day LeetCode Problem-Solving Badge for consistent coding.'},
  ];

  const CONTRIBUTIONS = [
    {n:'1500+',l:'LeetCode Rating',i:'🟡'},{n:'100-Day',l:'LeetCode Tag',i:'🔥'},
    {n:'4+',l:'Certifications',i:'🏅'},{n:'3+',l:'Projects Shipped',i:'🚀'},{n:'2+',l:'Active Platforms',i:'💻'},
  ];

  const PLATS = [
    {n:'LeetCode',sub:'Problem Solver',i:'🟡',href:'https://leetcode.com/u/Rajiv_146/',col:'#f59e0b'},
    {n:'GitHub',sub:'Open Source Projects',i:'🐙',href:'https://github.com/Rajiv3012',col:'#d8eaf8'},
    {n:'GeeksforGeeks',sub:'DSA Practice',i:'🟢',href:'https://www.geeksforgeeks.org/profile/rajivsinghrajput',col:'#22c55e'},
    {n:'CodeChef',sub:'Contests',i:'👨‍🍳',href:'https://www.codechef.com/users/rajiv_146',col:'#cd7f32'},
  ];

  return (
    <>
      {/* Contributions Split */}
      <section id="contributions" className="contributions-section">
        <div className="section-intro rv">
          <div className="section-eyebrow">Contributions</div>
          <h2 className="section-title">Community & Platforms</h2>
          <p className="section-subtitle">Active participation in competitive programming communities and open source development.</p>
        </div>

        <div className="stats-row rv">
          {CONTRIBUTIONS.map((c, i) => (
            <div key={i} className="stat-card glass-card">
              <div className="stat-icon">{c.i}</div>
              <div className="stat-val">#{c.n}</div>
              <div className="stat-label">{c.l}</div>
            </div>
          ))}
        </div>

        <div className="platform-grid rv">
          {PLATS.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noreferrer" className="platform-tag glass-card" style={{ '--accent': p.col }}>
              <span className="platform-icon">{p.i}</span>
              <div className="platform-info">
                <div className="platform-name">{p.n}</div>
                <div className="platform-sub">{p.sub}</div>
              </div>
              <span className="platform-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <div className="section-intro rv">
          <div className="section-eyebrow">Certifications</div>
          <h2 className="section-title">Credentials & Learning</h2>
          <p className="section-subtitle">Continuous learning validated through industry-recognized certifications and online courses.</p>
        </div>
        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <div key={i} className="cert-card glass-card rv" style={{ '--accent': c.col }}>
              
              {/* Project-style background visual block for Certificates */}
              <div className="cert-visual">
                <div 
                  className="visual-bg" 
                  style={{ background: c.bgImage ? `url(${c.bgImage}) center/cover no-repeat` : c.grad }} 
                />
                <div className="visual-overlay" />
                <div className="visual-grid" />
                <span className={`cert-emoji ${c.bgImage ? 'hidden' : ''}`}>{c.i}</span>
              </div>

              <div className="cert-content">
                <div className="cert-details">
                  <div className="cert-title">{c.n}</div>
                  <div className="cert-issuer" style={{ color: c.col }}>{c.by} · {c.d}</div>
                  <p className="cert-desc">{c.desc}</p>
                </div>
                <div className="cert-actions">
                  <a href={c.url} target="_blank" rel="noreferrer" className="cert-btn cert-btn-view" style={{ '--btn-col': c.col }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    View Certificate
                  </a>
                  <a href={c.url} download className="cert-btn cert-btn-download" style={{ '--btn-col': c.col }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section">
        <div className="section-intro rv">
          <div className="section-eyebrow">Achievements</div>
          <h2 className="section-title">Milestones & Wins</h2>
          <p className="section-subtitle">Recognition earned through competitive programming and consistent dedication to excellence.</p>
        </div>
        <div className="achieve-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="achieve-card glass-card rv" style={{ '--accent': a.col }}>
              <div className="achieve-icon-box" style={{ background: `${a.col}12`, border: `1px solid ${a.col}28` }}>{a.m}</div>
              <div className="achieve-info">
                <div className="achieve-title">{a.t}</div>
                <div className="achieve-meta" style={{ color: a.col }}>{a.pl} · {a.d}</div>
                <p className="achieve-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Preview Modal */}
      {previewCert && (
        <div className="cert-modal-overlay" onClick={() => setPreviewCert(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setPreviewCert(null)}>✕</button>
            <iframe src={previewCert} title="Certificate Preview" className="cert-modal-frame" />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .contributions-section, .certificates-section, .achievements-section { padding: 88px 6%; }
        .certificates-section { background: var(--bg2); }

        .stats-row { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin-bottom: 34px; }
        .stat-card { padding: 22px 26px; text-align: center; min-width: 136px; }
        .stat-icon { font-size: 1.3rem; margin-bottom: 6px; }
        .stat-val { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--a1); line-height: 1; }
        .stat-label { font-size: .74rem; color: var(--text-dim); margin-top: 4px; }

        .platform-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; }
        .platform-tag { display: flex; align-items: center; gap: 14px; padding: 17px 20px; text-decoration: none; }
        .platform-tag:hover { border-color: var(--accent); }
        .platform-icon { font-size: 1.7rem; }
        .platform-name { font-family: 'Syne', sans-serif; font-weight: 700; font-size: .93rem; color: var(--text-primary); }
        .platform-sub { font-size: .76rem; color: var(--text-dim); }
        .platform-arrow { margin-left: auto; color: var(--text-dim); font-size: .8rem; }

        /* Modified Certificate Grid & Cards to match Projects */
        .certs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 26px; }
        
        .cert-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all .3s;
          cursor: default;
        }
        .cert-card:hover { border-color: var(--accent); box-shadow: 0 24px 60px rgba(0,0,0,.4); transform: translateY(-5px); }

        .cert-visual {
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .visual-bg {
          position: absolute;
          inset: 0;
          transition: transform .5s ease;
          z-index: 1;
        }
        .cert-card:hover .visual-bg { transform: scale(1.1); }
        
        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(4, 7, 15, 0.7) 100%);
          z-index: 2;
        }

        .visual-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);
          background-size: 22px 22px;
          opacity: 0.15;
          z-index: 3;
          transition: opacity .3s;
        }
        .cert-card:hover .visual-grid { opacity: 0.3; }

        .cert-emoji {
          font-size: 3.5rem;
          position: relative;
          z-index: 4;
          transition: transform .3s;
        }
        .cert-card:hover .cert-emoji { transform: scale(1.15) rotate(5deg); }

        .cert-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          z-index: 6;
          background: var(--card);
        }

        .cert-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-bottom: 4px; }
        .cert-issuer { font-family: 'JetBrains Mono', monospace; font-size: .75rem; font-weight: 600; margin-bottom: 12px; }
        .cert-desc { font-size: .85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px; flex: 1; }
        
        .cert-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .cert-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
          border-radius: 8px;
          font-family: 'Syne', sans-serif;
          font-size: .82rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
          flex: 1;
        }
        .cert-btn-view {
          background: color-mix(in srgb, var(--btn-col) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--btn-col) 25%, transparent);
          color: var(--btn-col);
        }
        .cert-btn-view:hover {
          background: color-mix(in srgb, var(--btn-col) 22%, transparent);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px color-mix(in srgb, var(--btn-col) 20%, transparent);
        }
        .cert-btn-download {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--text-secondary);
        }
        .cert-btn-download:hover {
          background: color-mix(in srgb, var(--btn-col) 15%, transparent);
          border-color: color-mix(in srgb, var(--btn-col) 30%, transparent);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        .achieve-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px; }
        .achieve-card { display: flex; align-items: flex-start; gap: 16px; padding: 24px; cursor: default; }
        .achieve-card:hover { border-color: var(--accent); }
        .achieve-icon-box { width: 52px; height: 52px; border-radius: 13px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; }
        .achieve-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: .97rem; color: var(--text-primary); margin-bottom: 3px; }
        .achieve-meta { font-family: 'JetBrains Mono', monospace; font-size: .72rem; font-weight: 600; margin-bottom: 8px; }
        .achieve-desc { font-size: .82rem; color: var(--text-secondary); line-height: 1.58; }

        /* Certificate Modal */
        .cert-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }
        .cert-modal {
          width: 90vw;
          max-width: 900px;
          height: 80vh;
          background: var(--card);
          border: 1px solid rgba(0,220,255,0.15);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
        }
        .cert-modal-close {
          position: absolute;
          top: 14px;
          right: 16px;
          background: var(--bg2);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .cert-modal-close:hover { background: var(--a1); color: var(--bg); }
        .cert-modal-frame {
          width: 100%;
          height: 100%;
          border: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hidden { display: none !important; }

        @media (max-width: 600px) {
          .certs-grid { grid-template-columns: 1fr; }
          .cert-actions { flex-direction: column; }
          .cert-btn { justify-content: center; }
        }
      `}} />
    </>
  );
};

export default CertificatesAchievements;
