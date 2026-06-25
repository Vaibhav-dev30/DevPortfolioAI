export const PALETTES = [
    { bg: 'bg-slate-950', card: 'bg-slate-900/50', border: 'border-slate-800', primary: 'text-cyan-400', secondary: 'text-slate-400', accent: 'cyan' },
    { bg: 'bg-[#0f172a]', card: 'bg-[#1e293b]/60', border: 'border-[#334155]', primary: 'text-rose-400', secondary: 'text-slate-300', accent: 'rose' },
    { bg: 'bg-[#000000]', card: 'bg-[#111111]/80', border: 'border-[#222222]', primary: 'text-emerald-400', secondary: 'text-gray-400', accent: 'emerald' },
    { bg: 'bg-[#0a0a0a]', card: 'bg-[#171717]/80', border: 'border-[#262626]', primary: 'text-amber-400', secondary: 'text-neutral-300', accent: 'amber' },
    { bg: 'bg-indigo-950', card: 'bg-indigo-900/40', border: 'border-indigo-800', primary: 'text-fuchsia-400', secondary: 'text-indigo-200', accent: 'fuchsia' }
];

export const FONTS = [
    { sans: 'font-sans', header: 'font-sans tracking-tight' },
    { sans: 'font-serif', header: 'font-serif tracking-tight' },
    { sans: 'font-mono', header: 'font-mono tracking-tight' }
];

const INJECT_CSS = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600&family=Syne:wght@600;700;800&display=swap');

.font-syne { font-family: 'Syne', sans-serif; }
.font-space { font-family: 'Space Grotesk', sans-serif; }
.font-inter { font-family: 'Inter', sans-serif; }

@keyframes slideUpFade {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
}

.animate-stagger-1 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
.animate-stagger-2 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
.animate-stagger-3 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
.animate-stagger-4 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }

.glass-card {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

.hover-lift {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
}
.hover-lift:hover {
    transform: translateY(-8px);
}
</style>
`;

export function generateTemplate(data, paletteIdx = 0, fontIdx = 0) {
    const p = PALETTES[paletteIdx % PALETTES.length];
    const f = FONTS[fontIdx % FONTS.length];
    
    const { user, projects, githubData, skills } = data;

    const name = user?.name || githubData?.username || 'Developer';
    const role = user?.role || 'Software Engineer';
    const bio = user?.bio || 'Building awesome things for the web.';
    const avatar = user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=200`;
    const location = user?.location || 'Planet Earth';
    const github_username = githubData?.username;

    let displayProjects = projects && projects.length > 0 ? projects : [];
    
    // Fallback logic for skills
    let displaySkills = [];
    if (skills && skills.length > 0) {
        displaySkills = skills.flatMap(s => s.items || []);
    } else if (githubData && githubData.repositories) {
        const langs = new Set();
        githubData.repositories.forEach(repo => {
            if (repo.language) langs.add(repo.language);
            if (repo.topics) repo.topics.forEach(t => langs.add(t));
        });
        displaySkills = Array.from(langs).slice(0, 12);
    }

    return `
        ${INJECT_CSS}
        <div class="min-h-full ${p.bg} ${f.sans} text-white selection:bg-${p.accent}-500/30 overflow-x-hidden relative">
            
            <!-- Ambient Glow Effects -->
            <div class="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-${p.accent}-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div class="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div class="max-w-6xl mx-auto px-6 py-24 relative z-10">
                
                <!-- Hero -->
                <header class="flex flex-col md:flex-row items-start md:items-center gap-12 animate-stagger-1 mb-32">
                    <div class="relative w-40 h-40 md:w-56 md:h-56 shrink-0 group">
                        <div class="absolute inset-0 bg-gradient-to-tr from-${p.accent}-400 to-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
                        <img src="${avatar}" class="relative w-full h-full object-cover rounded-full border-2 ${p.border} grayscale group-hover:grayscale-0 transition duration-700 shadow-2xl" alt="${name}" />
                    </div>
                    <div>
                        <div class="inline-block px-4 py-1.5 rounded-full ${p.card} ${p.border} border text-sm font-medium ${p.primary} mb-6 shadow-lg shadow-black/50">
                            <span class="mr-2">📍</span>${location}
                        </div>
                        <h1 class="text-5xl md:text-7xl font-bold font-syne tracking-tight mb-4 leading-tight text-white drop-shadow-lg">
                            ${name}.
                        </h1>
                        <h2 class="text-2xl md:text-3xl font-space text-slate-400 mb-6 font-medium">
                            ${role}
                        </h2>
                        <p class="text-lg md:text-xl ${p.secondary} max-w-2xl leading-relaxed">
                            ${bio}
                        </p>
                        ${github_username ? `
                            <div class="mt-10">
                                <a href="https://github.com/${github_username}" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition duration-300">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    View GitHub
                                </a>
                            </div>
                        ` : ''}
                    </div>
                </header>

                <!-- Skills -->
                ${displaySkills.length > 0 ? `
                    <section class="mb-32 animate-stagger-2">
                        <h3 class="text-3xl font-syne font-bold mb-10 text-white">Tech Stack</h3>
                        <div class="flex flex-wrap gap-4">
                            ${displaySkills.map(skill => `
                                <span class="px-6 py-3 rounded-xl ${p.card} ${p.border} border text-sm font-medium ${p.secondary} hover:text-white hover:border-${p.accent}-400 hover:shadow-lg hover:shadow-${p.accent}-500/20 glass-card transition duration-300 cursor-default">
                                    ${skill}
                                </span>
                            `).join('')}
                        </div>
                    </section>
                ` : ''}

                <!-- Projects -->
                <section class="animate-stagger-3">
                    <h3 class="text-3xl font-syne font-bold mb-10 text-white">Featured Work</h3>
                    ${displayProjects.length === 0 ? `
                        <div class="${p.card} border ${p.border} rounded-3xl p-12 text-center ${p.secondary} glass-card">
                            No projects featured yet. Add some to build your portfolio!
                        </div>
                    ` : `
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            ${displayProjects.map(proj => `
                                <div class="${p.card} border ${p.border} rounded-3xl p-8 glass-card hover-lift hover:border-${p.accent}-400/50 flex flex-col group relative overflow-hidden shadow-xl shadow-black/40">
                                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-${p.accent}-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <div class="relative z-10 flex flex-col h-full">
                                        <div class="flex justify-between items-start mb-6">
                                            <h4 class="text-2xl font-space font-bold text-white">${proj.title}</h4>
                                            ${proj.status === 'Live' ? `
                                                <span class="flex h-3 w-3 relative mt-2 shrink-0">
                                                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                  <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                                </span>
                                            ` : ''}
                                        </div>
                                        <p class="${p.secondary} mb-8 flex-1 leading-relaxed">${proj.description || ''}</p>
                                        <div class="flex flex-wrap gap-2 mb-8">
                                            ${proj.tags ? (Array.isArray(proj.tags) ? proj.tags : proj.tags.split(',')).slice(0,3).map(tag => `
                                                <span class="text-xs font-mono px-3 py-1 bg-black/40 rounded border ${p.border} ${p.primary}">${tag.trim()}</span>
                                            `).join('') : ''}
                                        </div>
                                        <div class="flex gap-6 pt-6 border-t ${p.border}">
                                            ${proj.live_url ? `
                                                <a href="${proj.live_url}" target="_blank" class="text-white font-medium flex items-center gap-2 hover:${p.primary} transition">
                                                    Live Demo <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                                </a>
                                            ` : ''}
                                            ${proj.github_url ? `
                                                <a href="${proj.github_url}" target="_blank" class="${p.secondary} font-medium flex items-center gap-2 hover:text-white transition">
                                                    Source Code
                                                </a>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </section>

                <footer class="mt-32 pt-12 border-t ${p.border} text-center ${p.secondary} text-sm animate-stagger-4">
                    <p>&copy; ${new Date().getFullYear()} ${name}. Designed by DevPortfolio Engine.</p>
                </footer>
            </div>
        </div>
    `;
}
