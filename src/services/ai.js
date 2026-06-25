const THEMES = [
    {
        name: 'Warm Cream',
        bg: '#fffbf5', surface: '#fff7ed', cardBg: '#ffffff',
        accent: '#f97316', accentDark: '#c2410c',
        text: '#1c0a00', muted: '#78716c',
        border: '#fed7aa', shadow: 'rgba(249,115,22,0.15)',
        font: 'Plus Jakarta Sans',
    },
    {
        name: 'Slate Indigo',
        bg: '#f8fafc', surface: '#f1f5f9', cardBg: '#ffffff',
        accent: '#6366f1', accentDark: '#4338ca',
        text: '#0f172a', muted: '#64748b',
        border: '#c7d2fe', shadow: 'rgba(99,102,241,0.15)',
        font: 'Inter',
    },
    {
        name: 'Rose Editorial',
        bg: '#fff1f2', surface: '#ffe4e6', cardBg: '#ffffff',
        accent: '#f43f5e', accentDark: '#be123c',
        text: '#1c0010', muted: '#9f7281',
        border: '#fecdd3', shadow: 'rgba(244,63,94,0.15)',
        font: 'Plus Jakarta Sans',
    },
    {
        name: 'Forest Sage',
        bg: '#f0fdf4', surface: '#dcfce7', cardBg: '#ffffff',
        accent: '#22c55e', accentDark: '#15803d',
        text: '#052e16', muted: '#4b7a5c',
        border: '#bbf7d0', shadow: 'rgba(34,197,94,0.15)',
        font: 'Inter',
    },
];

function buildHTML(data, t) {
    const { user, projects, githubData, skills } = data;
    const name = user?.name || githubData?.username || 'Developer';
    const role = user?.role || 'Software Engineer';
    const bio = user?.bio || 'Passionate about crafting exceptional software experiences.';
    const location = user?.location || '';
    const email = user?.email || '';
    const linkedin = user?.linkedin_url || '';
    const githubUrl = `https://github.com/${githubData?.username || ''}`;
    const avatar = user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&bold=true&background=${t.accent.replace('#','')}&color=fff`;

    const displayProjects = (projects && projects.length > 0 ? projects : []).slice(0, 6);
    const displaySkills = (skills || []).flatMap(s => s.items || []).slice(0, 24);

    const skillPills = displaySkills.length > 0
        ? displaySkills.map(s => `<span class="skill-pill">${s}</span>`).join('')
        : '<span class="skill-pill">JavaScript</span><span class="skill-pill">React</span><span class="skill-pill">Node.js</span>';

    const projectCards = displayProjects.map(p => `
    <div class="card reveal">
        <div class="card-accent-bar"></div>
        <h3 class="card-title">${p.title || 'Project'}</h3>
        <p class="card-desc">${p.description || 'A great project built with modern technology.'}</p>
        <div class="card-tags">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-links">
            ${p.live_url ? `<a href="${p.live_url}" target="_blank" class="btn-card-live">Live ↗</a>` : ''}
            ${p.github_url ? `<a href="${p.github_url}" target="_blank" class="btn-card-code">Code</a>` : ''}
        </div>
    </div>`).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name} · Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=${t.font.replace(/ /g,'+')}:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'${t.font}',sans-serif;background:${t.bg};color:${t.text};overflow-x:hidden;line-height:1.6}

/* --- ANIMATIONS --- */
@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeInLeft{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}
@keyframes floatAvatar{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes spinRing{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes shimmerBtn{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes blobMove{0%,100%{border-radius:60% 40% 55% 45%/55% 45% 60% 40%}50%{border-radius:40% 60% 45% 55%/45% 55% 40% 60%}}

/* --- HERO --- */
.hero{
  min-height:100vh;background:${t.bg};
  display:flex;align-items:center;
  padding:4rem 2rem;position:relative;overflow:hidden;
}
.hero-blob{
  position:absolute;border-radius:60% 40% 55% 45%/55% 45% 60% 40%;
  background:${t.accent};opacity:0.1;
  animation:blobMove 8s ease-in-out infinite;
  pointer-events:none;
}
.hero-blob-1{width:400px;height:400px;top:-100px;right:-80px;animation-delay:0s}
.hero-blob-2{width:280px;height:280px;bottom:-60px;left:-60px;animation-delay:4s}
.hero-inner{
  max-width:1100px;margin:0 auto;width:100%;
  display:grid;grid-template-columns:1fr auto;align-items:center;gap:3rem;
  position:relative;z-index:1;
}
.hero-text{animation:fadeInLeft 0.8s ease both}
.badge{
  display:inline-flex;align-items:center;gap:6px;
  padding:6px 14px;border-radius:50px;
  border:1.5px solid ${t.accent};color:${t.accent};
  font-size:0.8rem;font-weight:600;margin-bottom:1.5rem;
  background:${t.surface};
}
.badge-dot{width:7px;height:7px;border-radius:50%;background:#22c55e;animation:pulse-dot 1.5s ease-in-out infinite}
@keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.3)}}
.hero-name{
  font-size:clamp(3rem,7vw,5rem);font-weight:800;line-height:1.05;
  color:${t.text};margin-bottom:0.5rem;letter-spacing:-0.03em;
}
.hero-role{
  font-size:1.25rem;font-weight:600;color:${t.accent};margin-bottom:1rem;
}
.hero-bio{color:${t.muted};font-size:1rem;max-width:480px;margin-bottom:1.75rem;line-height:1.75}
.hero-btns{display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem}

.btn-primary{
  display:inline-flex;align-items:center;gap:6px;
  padding:12px 28px;border-radius:50px;font-weight:700;font-size:0.9rem;
  text-decoration:none;border:none;cursor:pointer;
  background:linear-gradient(135deg,${t.accent},${t.accentDark},${t.accent});
  background-size:200% 200%;color:#fff;
  animation:shimmerBtn 3s ease infinite;
  box-shadow:0 4px 18px ${t.shadow};
  transition:transform 0.25s,box-shadow 0.25s;
}
.btn-primary:hover{transform:translateY(-3px);box-shadow:0 10px 30px ${t.shadow}}

.btn-secondary{
  display:inline-flex;align-items:center;gap:6px;
  padding:11px 28px;border-radius:50px;font-weight:700;font-size:0.9rem;
  text-decoration:none;color:${t.text};
  border:2px solid ${t.text};background:transparent;cursor:pointer;
  transition:all 0.25s ease;
}
.btn-secondary:hover{background:${t.text};color:#fff;transform:translateY(-3px)}

.hero-location{font-size:0.85rem;color:${t.muted};margin-top:0.25rem}

.hero-avatar-wrap{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  flex-shrink:0;animation:fadeInUp 0.8s ease 0.2s both;
}
.avatar-ring-outer{
  width:230px;height:230px;border-radius:50%;
  border:2px dashed ${t.accent};opacity:0.6;
  display:flex;align-items:center;justify-content:center;
  animation:spinRing 18s linear infinite;
}
.avatar-ring-inner{
  width:198px;height:198px;border-radius:50%;
  background:linear-gradient(135deg,${t.accent},${t.accentDark});
  padding:3px;animation:floatAvatar 4s ease-in-out infinite;
}
.avatar-ring-inner img{
  width:100%;height:100%;border-radius:50%;
  object-fit:cover;border:3px solid ${t.bg};display:block;
}

/* --- SECTION COMMON --- */
.section{padding:5rem 2rem}
.section-inner{max-width:1100px;margin:0 auto}
.section-label{
  display:inline-block;font-size:0.75rem;font-weight:700;
  letter-spacing:0.12em;text-transform:uppercase;color:${t.accent};
  margin-bottom:0.5rem;
}
.section-title{
  font-size:clamp(1.75rem,4vw,2.5rem);font-weight:800;
  color:${t.text};margin-bottom:0.5rem;letter-spacing:-0.02em;
}
.section-sub{color:${t.muted};margin-bottom:2.5rem;font-size:0.95rem}

/* --- SKILLS --- */
.skills-section{background:${t.surface}}
.skills-grid{display:flex;flex-wrap:wrap;gap:0.6rem}
.skill-pill{
  padding:8px 18px;border-radius:50px;
  border:1.5px solid ${t.border};
  background:${t.cardBg};color:${t.text};
  font-size:0.85rem;font-weight:600;
  cursor:default;transition:all 0.22s ease;
  white-space:nowrap;
}
.skill-pill:hover{
  background:${t.accent};color:#fff;
  border-color:${t.accent};transform:translateY(-2px);
  box-shadow:0 6px 16px ${t.shadow};
}

/* --- PROJECTS --- */
.projects-section{background:${t.bg}}
.projects-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
  gap:1.25rem;
}
.card{
  background:${t.cardBg};border-radius:20px;
  border:1.5px solid ${t.border};padding:1.75rem;
  transition:all 0.3s ease;
}
.card:hover{
  transform:translateY(-6px);
  box-shadow:0 20px 50px ${t.shadow};
  border-color:${t.accent};
}
.card-accent-bar{
  width:36px;height:4px;border-radius:2px;
  background:linear-gradient(90deg,${t.accent},${t.accentDark});
  margin-bottom:1rem;
}
.card-title{font-size:1.1rem;font-weight:800;color:${t.text};margin-bottom:0.4rem}
.card-desc{color:${t.muted};font-size:0.875rem;line-height:1.65;margin-bottom:1rem}
.card-tags{display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1.1rem}
.tag{
  font-size:0.72rem;padding:4px 12px;border-radius:50px;
  background:${t.surface};color:${t.accent};
  font-weight:600;border:1px solid ${t.border};
}
.card-links{display:flex;gap:0.6rem}
.btn-card-live{
  padding:7px 16px;border-radius:8px;font-size:0.8rem;font-weight:700;
  background:${t.accent};color:#fff;text-decoration:none;
  transition:opacity 0.2s,transform 0.2s;
}
.btn-card-live:hover{opacity:0.88;transform:translateY(-1px)}
.btn-card-code{
  padding:6px 16px;border-radius:8px;font-size:0.8rem;font-weight:700;
  border:1.5px solid ${t.border};color:${t.text};text-decoration:none;
  transition:all 0.2s;background:transparent;
}
.btn-card-code:hover{border-color:${t.accent};color:${t.accent};transform:translateY(-1px)}

/* --- CONTACT --- */
.contact-section{
  background:linear-gradient(135deg,${t.text} 0%,#0f172a 100%);
  padding:5rem 2rem;text-align:center;
}
.contact-title{
  font-size:clamp(2rem,4vw,3rem);font-weight:800;color:#fff;
  margin-bottom:0.75rem;letter-spacing:-0.02em;
}
.contact-sub{color:#94a3b8;margin-bottom:2.5rem;font-size:0.95rem}
.contact-links{display:flex;justify-content:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:3rem}
.contact-link{
  padding:10px 24px;border-radius:50px;
  border:1.5px solid rgba(255,255,255,0.2);color:#fff;
  text-decoration:none;font-weight:600;font-size:0.875rem;
  transition:all 0.25s;
}
.contact-link:hover{background:${t.accent};border-color:${t.accent};transform:translateY(-2px)}
.footer{color:#475569;font-size:0.78rem;margin-top:0.5rem}

/* --- REVEAL ANIMATION --- */
.reveal{opacity:0;transform:translateY(25px);transition:opacity 0.6s ease,transform 0.6s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

/* --- RESPONSIVE --- */
@media(max-width:768px){
  .hero-inner{grid-template-columns:1fr;text-align:center}
  .hero-btns{justify-content:center}
  .hero-blob-1{width:260px;height:260px;top:-60px;right:-40px}
  .hero-blob-2{width:180px;height:180px}
  .hero-avatar-wrap{order:-1}
  .avatar-ring-outer{width:160px;height:160px}
  .avatar-ring-inner{width:136px;height:136px}
  .hero-bio{margin-left:auto;margin-right:auto}
  .projects-grid{grid-template-columns:1fr}
}
</style>
</head>
<body>

<!-- HERO -->
<section class="hero">
  <div class="hero-blob hero-blob-1"></div>
  <div class="hero-blob hero-blob-2"></div>
  <div class="hero-inner">
    <div class="hero-text">
      <div class="badge"><span class="badge-dot"></span> Available for work</div>
      <h1 class="hero-name">${name}</h1>
      <div class="hero-role">${role}</div>
      <p class="hero-bio">${bio}</p>
      <div class="hero-btns">
        <a href="#projects" class="btn-primary">View Projects</a>
        <a href="#contact" class="btn-secondary">Say Hello</a>
      </div>
      ${location ? `<p class="hero-location">📍 ${location}</p>` : ''}
    </div>
    <div class="hero-avatar-wrap">
      <div class="avatar-ring-outer">
        <div class="avatar-ring-inner">
          <img src="${avatar}" alt="${name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&bold=true&background=f97316&color=fff'"/>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section class="section skills-section" id="skills">
  <div class="section-inner">
    <div class="section-label reveal">Expertise</div>
    <h2 class="section-title reveal">Tech Stack</h2>
    <p class="section-sub reveal">Technologies I work with every day</p>
    <div class="skills-grid reveal">${skillPills}</div>
  </div>
</section>

<!-- PROJECTS -->
<section class="section projects-section" id="projects">
  <div class="section-inner">
    <div class="section-label reveal">Work</div>
    <h2 class="section-title reveal">Featured Projects</h2>
    <p class="section-sub reveal">Things I've built and shipped</p>
    <div class="projects-grid">${projectCards}</div>
  </div>
</section>

<!-- CONTACT -->
<section class="contact-section" id="contact">
  <div class="section-inner">
    <h2 class="contact-title reveal">Let's build something great</h2>
    <p class="contact-sub reveal">Open to new opportunities and collaborations</p>
    <div class="contact-links reveal">
      ${email ? `<a href="mailto:${email}" class="contact-link">✉ Email</a>` : ''}
      ${linkedin ? `<a href="${linkedin}" target="_blank" class="contact-link">in LinkedIn</a>` : ''}
      <a href="${githubUrl}" target="_blank" class="contact-link">⌥ GitHub</a>
    </div>
    <p class="footer">© ${new Date().getFullYear()} ${name} · Built with GitFolio AI</p>
  </div>
</section>

<script>
// Staggered reveal on load (no scroll dependency)
window.addEventListener('load', function() {
  var els = document.querySelectorAll('.reveal');
  els.forEach(function(el, i) {
    setTimeout(function() { el.classList.add('visible'); }, 100 + i * 80);
  });
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
</script>
</body>
</html>`;
}

export const ai = {
    generatePortfolio: async (data) => {
        const apiKey = localStorage.getItem('github_ai_key');
        if (!apiKey) {
            throw new Error('GitHub Token is not configured. Please add it in the Settings tab.');
        }

        const t = THEMES[Math.floor(Math.random() * THEMES.length)];
        return buildHTML(data, t);
    }
};
