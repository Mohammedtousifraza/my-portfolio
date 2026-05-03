import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];

const CERT_DRIVE_LINK = "https://drive.google.com/file/d/1ZWznM64KaM-yXOGT-9tRPefvcjSraOwu/view?usp=sharing";

const SKILLS = {
  "Programming": [
    { name: "Python", icon: "🐍" },
  ],
  "Web Development": [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "React", icon: "⚛️" },
  ],
  "AI / ML": [
    { name: "Machine Learning", icon: "🧠" },
    { name: "Computer Vision", icon: "👁️" },
  ],
  "Cloud": [
    { name: "AWS", icon: "☁️" },
  ],
  "Soft Skills": [
    { name: "Communication", icon: "💬" },
    { name: "Problem-Solving", icon: "🔧" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Adaptability", icon: "🔄" },
  ],
};

const PROJECTS = [
  {
    title: "Real-Time Marine Plastic Identification",
    subtitle: "Deep Learning · Computer Vision · Environmental AI",
    description: "Developed a computer vision model to detect and classify marine plastic waste in real-time using deep learning, contributing to environmental monitoring and pollution control.",
    icon: "🌊",
    accent: "#00c9a7",
  },
  {
    title: "Voice Distress System",
    subtitle: "AI · Voice Recognition · Safety Tech",
    description: "Built an AI-based voice recognition system that detects distress signals and triggers alerts, enhancing safety and emergency response systems.",
    icon: "🎙️",
    accent: "#f7971e",
  },
  {
    title: "AI Traffic Detection System",
    subtitle: "Computer Vision · Real-Time · Traffic Analytics",
    description: "Designed a real-time traffic monitoring system using computer vision to detect vehicles, analyze traffic flow, and identify violations.",
    icon: "🚦",
    accent: "#a259ff",
  },
];

const CERTIFICATIONS = [
  {
    title: "Youth Employment Program",
    subtitle: "Certificate of Accomplishment",
    issuer: "TCS Empowers · TATA",
    date: "03/06/2026",
    icon: "🏆",
    accent: "#00c9a7",
    link: CERT_DRIVE_LINK,
  },
];

function useScrollSpy() {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
}

function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy();
  const heroRef = useRef(null);

  const theme = dark
    ? {
        bg: "#0a0a0f", surface: "#111118", card: "#15151e",
        border: "rgba(255,255,255,0.07)", text: "#f0f0fa", muted: "#7b7b99",
        accent: "#7c6aff", accentSoft: "rgba(124,106,255,0.12)",
        accentGlow: "rgba(124,106,255,0.3)", navBg: "rgba(10,10,15,0.85)",
      }
    : {
        bg: "#f5f5fa", surface: "#ffffff", card: "#ffffff",
        border: "rgba(0,0,0,0.08)", text: "#111118", muted: "#6b6b88",
        accent: "#5b4df0", accentSoft: "rgba(91,77,240,0.08)",
        accentGlow: "rgba(91,77,240,0.2)", navBg: "rgba(245,245,250,0.85)",
      };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'DM Sans', sans-serif; background: ${theme.bg}; color: ${theme.text}; transition: background 0.4s, color 0.4s; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: ${theme.bg}; }
    ::-webkit-scrollbar-thumb { background: ${theme.accent}; border-radius: 2px; }

    @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
    @keyframes pulse { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }

    .fade-up   { animation: fadeUp 0.7s ease both; }
    .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
    .fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }
    .fade-up-3 { animation: fadeUp 0.7s 0.35s ease both; }
    .fade-up-4 { animation: fadeUp 0.7s 0.5s ease both; }

    .hero-title {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.8rem, 7vw, 6rem);
      font-weight: 800; line-height: 1.05;
      background: linear-gradient(135deg, ${theme.text} 30%, ${theme.accent} 80%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800; letter-spacing: -0.02em;
    }
    .accent-dot { color: ${theme.accent}; }
    .nav-link {
      font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 500;
      letter-spacing: 0.04em; color: ${theme.muted}; cursor: pointer;
      padding: 0.4rem 0.75rem; border-radius: 20px;
      transition: color 0.2s, background 0.2s; border: none; background: transparent;
    }
    .nav-link:hover, .nav-link.active { color: ${theme.text}; background: ${theme.accentSoft}; }
    .nav-link.active { color: ${theme.accent}; }

    .cta-btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.95rem;
      padding: 0.85rem 2rem; border-radius: 50px; background: ${theme.accent};
      color: #fff; border: none; cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 24px ${theme.accentGlow}; text-decoration: none;
    }
    .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px ${theme.accentGlow}; }
    .cta-btn.ghost {
      background: transparent; border: 1.5px solid ${theme.border};
      color: ${theme.text}; box-shadow: none;
    }
    .cta-btn.ghost:hover { border-color: ${theme.accent}; color: ${theme.accent}; background: ${theme.accentSoft}; }

    .card {
      background: ${theme.card}; border: 1px solid ${theme.border}; border-radius: 20px;
      transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    }
    .card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.15); border-color: ${theme.accent}44; }

    .skill-pill {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0.5rem 1rem; background: ${theme.accentSoft};
      border: 1px solid ${theme.border}; border-radius: 50px;
      font-size: 0.85rem; font-weight: 500; color: ${theme.text};
      transition: transform 0.2s, border-color 0.2s;
    }
    .skill-pill:hover { transform: translateY(-2px) scale(1.03); border-color: ${theme.accent}66; }

    .contact-link {
      display: flex; align-items: center; gap: 0.8rem;
      padding: 1rem 1.25rem; border-radius: 14px;
      background: ${theme.accentSoft}; border: 1px solid ${theme.border};
      color: ${theme.text}; text-decoration: none; font-weight: 500;
      transition: background 0.2s, border-color 0.2s, transform 0.2s;
    }
    .contact-link:hover { background: ${theme.accent}22; border-color: ${theme.accent}66; transform: translateX(4px); }

    .cert-card {
      background: ${theme.card}; border: 1px solid ${theme.border}; border-radius: 20px;
      padding: 1.8rem;
      transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
      position: relative; overflow: hidden;
    }
    .cert-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.2); border-color: ${theme.accent}66; }
    .cert-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, ${theme.accent}, #00c9a7);
    }

    .view-cert-btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      margin-top: 1.4rem; padding: 0.65rem 1.4rem;
      border-radius: 50px;
      background: ${theme.accent};
      color: #fff;
      font-size: 0.85rem; font-weight: 700;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 16px ${theme.accentGlow};
      cursor: pointer; border: none;
      font-family: 'Syne', sans-serif;
    }
    .view-cert-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px ${theme.accentGlow}; }

    .glow-orb {
      position: absolute; border-radius: 50%;
      filter: blur(80px); pointer-events: none; z-index: 0;
      animation: pulse 6s ease-in-out infinite;
    }
    .project-icon {
      font-size: 2.2rem; width: 56px; height: 56px;
      border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .tag {
      font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em;
      padding: 0.25rem 0.65rem; border-radius: 20px;
      background: ${theme.accentSoft}; color: ${theme.muted}; border: 1px solid ${theme.border};
    }
    .divider { width: 48px; height: 4px; background: ${theme.accent}; border-radius: 2px; margin: 0.9rem 0 1.8rem; }
    .floating-badge {
      position: absolute; font-family: 'Syne', sans-serif;
      font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em;
      padding: 0.4rem 0.9rem; border-radius: 20px;
      border: 1px solid ${theme.border}; background: ${theme.surface};
      color: ${theme.muted}; backdrop-filter: blur(10px);
      animation: float 4s ease-in-out infinite;
    }
    .toggle-btn {
      width: 44px; height: 24px; border-radius: 12px;
      border: 1.5px solid ${theme.border}; background: ${theme.accentSoft};
      cursor: pointer; position: relative; display: flex; align-items: center; padding: 2px;
    }
    .toggle-thumb {
      width: 18px; height: 18px; border-radius: 50%;
      background: ${theme.accent}; transition: transform 0.3s;
      transform: translateX(${dark ? "0" : "20px"});
    }
    @media(max-width:768px){ .desktop-nav{display:none!important} #hamburger{display:flex!important} }
  `;

  return (
    <>
      <style>{css}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(1rem, 6vw, 5rem)",
        background: theme.navBg, backdropFilter: "blur(18px)",
        borderBottom: `1px solid ${theme.border}`, transition: "background 0.4s",
      }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem" }}>
          <span style={{ color: theme.accent }}>M</span>TR
        </div>
        <div className="desktop-nav" style={{ display: "flex", gap: "0.2rem" }}>
          {NAV_LINKS.map((n) => (
            <button key={n} className={`nav-link${active === n ? " active" : ""}`} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button className="toggle-btn" onClick={() => setDark(!dark)}>
            <div className="toggle-thumb" />
          </button>
          <button id="hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: theme.text, fontSize: "1.4rem", display: "none" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, top: 64, background: theme.navBg,
          backdropFilter: "blur(20px)", display: "flex", flexDirection: "column",
          alignItems: "center", padding: "2rem", gap: "1rem", zIndex: 998,
        }} onClick={() => setMenuOpen(false)}>
          {NAV_LINKS.map((n) => (
            <button key={n} className={`nav-link${active === n ? " active" : ""}`}
              style={{ fontSize: "1.1rem", width: "100%", textAlign: "center", padding: "0.8rem" }}
              onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" ref={heroRef} style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "80px clamp(1.5rem, 8vw, 8rem) 5rem", overflow: "hidden", position: "relative",
      }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: theme.accent + "22", top: -100, right: -150 }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: "#00c9a733", bottom: 50, left: -80, animationDelay: "2s" }} />
        <div className="floating-badge" style={{ top: "20%", right: "8%", animationDelay: "0s" }}>🤖 AI Engineer</div>
        <div className="floating-badge" style={{ top: "60%", right: "5%", animationDelay: "1.5s" }}>☁️ Cloud Learner</div>

        <div style={{ maxWidth: 760, position: "relative", zIndex: 1 }}>
          <div className="fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.38rem 1rem", borderRadius: 20,
            background: theme.accentSoft, border: `1px solid ${theme.border}`,
            fontSize: "0.78rem", fontWeight: 600, color: theme.accent,
            marginBottom: "1.5rem", letterSpacing: "0.06em",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: theme.accent, display: "inline-block", animation: "pulse 2s infinite" }} />
            Available for Opportunities
          </div>
          <h1 className="hero-title fade-up-1">Mohammed<br />Tousif Raza</h1>
          <p className="fade-up-2" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: theme.muted, margin: "1.5rem 0 2.5rem", lineHeight: 1.7, maxWidth: 520 }}>
            Computer Science Student &nbsp;·&nbsp; Web Developer &nbsp;·&nbsp; AI Enthusiast
          </p>
          <div className="fade-up-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => scrollTo("Projects")}>View Projects →</button>
            <button className="cta-btn ghost" onClick={() => scrollTo("Contact")}>Get In Touch</button>
          </div>
          <div className="fade-up-4" style={{ marginTop: "3.5rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[["3", "Projects Built"], ["1", "Certification"], ["5+", "Tech Skills"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.8rem", fontWeight: 800, color: theme.accent }}>{n}</div>
                <div style={{ fontSize: "0.8rem", color: theme.muted, fontWeight: 500 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "6rem clamp(1.5rem, 8vw, 8rem)", background: theme.surface, transition: "background 0.4s" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: theme.accent, fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.8rem", marginBottom: "0.5rem" }}>WHO I AM</p>
          <h2 className="section-title">About <span className="accent-dot">Me</span></h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="about-grid">
            <style>{`@media(max-width:640px){.about-grid{grid-template-columns:1fr!important}}`}</style>
            <div>
              <p style={{ color: theme.muted, lineHeight: 1.85, fontSize: "1.05rem" }}>
                Computer Science student passionate about web development and AI, focused on building <strong style={{ color: theme.text }}>clean, efficient, and user-centric applications</strong> that solve real-world problems.
              </p>
              <p style={{ color: theme.muted, lineHeight: 1.85, fontSize: "1.05rem", marginTop: "1rem" }}>
                I enjoy turning ideas into functional products, combining strong problem-solving skills with modern technologies. Currently exploring <strong style={{ color: theme.text }}>full-stack development, machine learning, and scalable system design</strong>.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <button className="cta-btn" onClick={() => scrollTo("Contact")}>Let's Connect →</button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                ["🎓", "CS Student", "Studying Computer Science with focus on AI & Web"],
                ["🤖", "AI Builder", "Creating real-world AI solutions for meaningful problems"],
                ["🌐", "Web Dev", "Crafting responsive, modern web experiences"],
              ].map(([icon, title, desc]) => (
                <div key={title} className="card" style={{ padding: "1.2rem 1.5rem", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, marginBottom: "0.2rem" }}>{title}</div>
                    <div style={{ color: theme.muted, fontSize: "0.9rem" }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "6rem clamp(1.5rem, 8vw, 8rem)" }}>
        <div className="glow-orb" style={{ width: 400, height: 400, background: theme.accent + "15", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ color: theme.accent, fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.8rem", marginBottom: "0.5rem" }}>WHAT I KNOW</p>
          <h2 className="section-title">Technical <span className="accent-dot">Skills</span></h2>
          <div className="divider" />
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", color: theme.muted, marginBottom: "0.8rem", textTransform: "uppercase" }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {items.map(({ name, icon }) => (
                    <div key={name} className="skill-pill"><span>{icon}</span> {name}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "6rem clamp(1.5rem, 8vw, 8rem)", background: theme.surface, transition: "background 0.4s" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ color: theme.accent, fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.8rem", marginBottom: "0.5rem" }}>WHAT I'VE BUILT</p>
          <h2 className="section-title">Featured <span className="accent-dot">Projects</span></h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {PROJECTS.map((p) => (
              <div key={p.title} className="card" style={{ padding: "1.8rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.2rem" }}>
                  <div className="project-icon" style={{ background: p.accent + "18" }}>{p.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3, marginBottom: "0.4rem" }}>{p.title}</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {p.subtitle.split(" · ").map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
                <p style={{ color: theme.muted, fontSize: "0.9rem", lineHeight: 1.75 }}>{p.description}</p>
                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: `1px solid ${theme.border}`, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.accent }} />
                  <span style={{ color: p.accent, fontSize: "0.8rem", fontWeight: 600 }}>AI-Powered</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" style={{ padding: "6rem clamp(1.5rem, 8vw, 8rem)" }}>
        <div className="glow-orb" style={{ width: 350, height: 350, background: "#00c9a722", top: "30%", right: "-5%" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ color: theme.accent, fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.8rem", marginBottom: "0.5rem" }}>MY ACHIEVEMENTS</p>
          <h2 className="section-title">Certifi<span className="accent-dot">cations</span></h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className="cert-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.2rem" }}>
                  <div style={{
                    width: 60, height: 60, borderRadius: "16px", flexShrink: 0,
                    background: c.accent + "18", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "2rem",
                  }}>{c.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}>{c.title}</h3>
                    <p style={{ color: theme.muted, fontSize: "0.85rem", marginTop: "0.3rem" }}>{c.subtitle}</p>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem 0", borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: theme.muted, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>Issued by</div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: c.accent, marginTop: "0.2rem" }}>{c.issuer}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.72rem", color: theme.muted, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>Date</div>
                    <div style={{ fontWeight: 600, fontSize: "0.85rem", marginTop: "0.2rem" }}>{c.date}</div>
                  </div>
                </div>
                <a href={c.link} target="_blank" rel="noreferrer" className="view-cert-btn">
                  🏆 View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "6rem clamp(1.5rem, 8vw, 8rem)", background: theme.surface, transition: "background 0.4s" }}>
        <div className="glow-orb" style={{ width: 450, height: 450, background: theme.accent + "18", bottom: -100, right: -100 }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ color: theme.accent, fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.8rem", marginBottom: "0.5rem" }}>LET'S WORK TOGETHER</p>
          <h2 className="section-title">Get In <span className="accent-dot">Touch</span></h2>
          <div className="divider" />
          <p style={{ color: theme.muted, lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: 480 }}>
            I'm open to collaborations, internships, and interesting projects. Feel free to reach out — I'd love to connect!
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a href="mailto:itztousif077@gmail.com" className="contact-link">
              <span style={{ fontSize: "1.3rem" }}>📧</span>
              <div>
                <div style={{ fontSize: "0.75rem", color: theme.muted, fontWeight: 500 }}>Email</div>
                <div style={{ fontWeight: 600 }}>itztousif077@gmail.com</div>
              </div>
            </a>
            <a href="tel:8660600964" className="contact-link">
              <span style={{ fontSize: "1.3rem" }}>📱</span>
              <div>
                <div style={{ fontSize: "0.75rem", color: theme.muted, fontWeight: 500 }}>Phone</div>
                <div style={{ fontWeight: 600 }}>+91 8660600964</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/mohammed-tousif-085083379" target="_blank" rel="noreferrer" className="contact-link">
              <span style={{ fontSize: "1.3rem" }}>💼</span>
              <div>
                <div style={{ fontSize: "0.75rem", color: theme.muted, fontWeight: 500 }}>LinkedIn</div>
                <div style={{ fontWeight: 600 }}>mohammed-tousif-085083379</div>
              </div>
            </a>
            <a href="https://github.com/Mohammedtousifraza" target="_blank" rel="noreferrer" className="contact-link">
              <span style={{ fontSize: "1.3rem" }}>🐙</span>
              <div>
                <div style={{ fontSize: "0.75rem", color: theme.muted, fontWeight: 500 }}>GitHub</div>
                <div style={{ fontWeight: 600 }}>Mohammedtousifraza</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${theme.border}`,
        padding: "1.5rem clamp(1.5rem, 8vw, 8rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "0.5rem",
        background: theme.surface, transition: "background 0.4s",
      }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: theme.accent }}>MTR</span>
        <span style={{ color: theme.muted, fontSize: "0.85rem" }}>© 2026 Mohammed Tousif Raza · Built with ❤️ & React</span>
        <button className="cta-btn ghost" style={{ padding: "0.5rem 1.2rem", fontSize: "0.8rem" }} onClick={() => scrollTo("Home")}>
          ↑ Back to top
        </button>
      </footer>
    </>
  );
}
