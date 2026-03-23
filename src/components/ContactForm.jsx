import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    
    try {
      // TODO: Replace YOUR_FORMSPREE_ID_HERE with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/maqprwry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        
        // Party bomber animation
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
          confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#00DCFF', '#ffffff', '#ff007f']
          });
          confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#00DCFF', '#ffffff', '#ff007f']
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        }());

        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const CONTACT_INFO = [
    {i:'📧', l:'Email', v:'rajivsinghrajput146@gmail.com', h:'mailto:rajivsinghrajput146@gmail.com'},
    {i:'📱', l:'Phone', v:'+91 9939389500', h:'tel:+919939389500'},
    {i:'📍', l:'Location', v:'Punjab, India', h:null},
    {i:'💼', l:'LinkedIn', v:'in/01rajiv', h:'https://www.linkedin.com/in/01rajiv/'},
    {i:'🐙', l:'GitHub', v:'Rajiv3012', h:'https://github.com/Rajiv3012'}
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-intro rv">
        <div className="section-eyebrow">Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have an opportunity or want to connect? I respond within 24 hours.</p>
      </div>

      <div className="contact-grid rv">
        <div className="contact-info-col rv-l">
          <h3 className="contact-heading">Let's Build Something Great</h3>
          <p className="contact-subtext">Currently open to full-time roles, internships, and interesting freelance projects. If you have a problem worth solving — let's talk.</p>
          
          <div className="info-list">
            {CONTACT_INFO.map((d, i) => (
              <div key={i} className="info-box">
                <div className="info-icon-wrapper">{d.i}</div>
                <div className="info-text">
                  <div className="info-label">{d.l}</div>
                  <div className="info-val">
                    {d.h ? <a href={d.h} target={d.h.startsWith('http')?'_blank':undefined} rel="noreferrer">{d.v}</a> : d.v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-col glass-card rv-r">
          {status === 'success' ? (
            <div className="success-state">
              <div className="success-emoji">🎉</div>
              <h4 className="success-title">Thank You! Message Sent.</h4>
              <p>Thanks for reaching out. I have received your message and will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="actual-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Collaboration / Hello" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or role…" required />
              </div>
              {status === 'error' && <p className="error-msg">⚠ Could not send. Please email directly.</p>}
              <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                {status === 'loading' ? '⟳ Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-section { padding: 88px 6%; background: var(--bg2); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.55fr; gap: 42px; alignItems: start; }
        
        .contact-heading { fontFamily: 'Syne', sans-serif; fontWeight: 700; fontSize: 1.1rem; color: var(--text-primary); marginBottom: 12px; }
        .contact-subtext { color: var(--text-secondary); fontSize: .9rem; lineHeight: 1.75; marginBottom: 26px; }
        
        .info-list { display: flex; flex-direction: column; gap: 8px; }
        .info-box { display: flex; alignItems: center; gap: 14px; padding: 13px 0; borderBottom: 1px solid rgba(255,255,255,.055); }
        .info-box:last-child { border-bottom: none; }
        .info-icon-wrapper { width: 40px; height: 40px; borderRadius: 10px; flexShrink: 0; background: rgba(0,220,255,.07); border: 1px solid rgba(0,220,255,.14); display: flex; alignItems: center; justifyContent: center; fontSize: 1.1rem; }
        .info-label { fontSize: .68rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-dim); marginBottom: 2px; }
        .info-val { fontSize: .88rem; color: var(--text-primary); fontWeight: 500; }
        .info-val a { color: inherit; text-decoration: none; transition: color .2s; }
        .info-val a:hover { color: var(--a1); }

        .contact-form-col { padding: 28px; }
        .actual-form { display: flex; flex-direction: column; gap: 13px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
        .form-group label { display: block; fontSize: .73rem; fontWeight: 600; color: var(--text-dim); text-transform: uppercase; letter-spacing: .8px; marginBottom: 7px; }
        .form-group input, .form-group textarea {
          width: 100%; background: var(--bg); border: 1px solid rgba(255,255,255,.055); borderRadius: 8px;
          padding: 11px 14px; color: var(--text-primary); fontSize: .9rem; font-family: inherit; outline: none; transition: border-color .2s;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--a1); }
        .form-group textarea { minHeight: 120px; resize: vertical; }
        
        .submit-btn {
          width: 100%; padding: 13px; border: none; borderRadius: 9px; background: var(--a1); color: var(--bg);
          cursor: pointer; fontFamily: 'Syne', sans-serif; fontWeight: 800; fontSize: .95rem; transition: all .22s; margin-top: 2px;
        }
        .submit-btn:hover:not(:disabled) { background: #3decff; transform: translateY(-2px); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        
        .success-state { textAlign: center; padding: 36px 20px; }
        .success-emoji { fontSize: 3rem; marginBottom: 12px; }
        .success-title { fontFamily: 'Syne', sans-serif; fontWeight: 700; fontSize: 1.1rem; color: var(--a3); marginBottom: 8px; }
        .error-msg { color: #f87171; fontSize: .84rem; }

        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default ContactForm;
