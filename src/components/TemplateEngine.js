export const PALETTES = [
    // --- DARK THEMES ---
    { mode: 'dark', bg: 'bg-slate-950', card: 'bg-slate-900/50', border: 'border-slate-800', primary: 'text-cyan-400', secondary: 'text-slate-400', accent: 'cyan', textBody: 'text-slate-300', textHead: 'text-white' },
    { mode: 'dark', bg: 'bg-[#0f172a]', card: 'bg-[#1e293b]/60', border: 'border-[#334155]', primary: 'text-rose-400', secondary: 'text-slate-300', accent: 'rose', textBody: 'text-slate-300', textHead: 'text-white' },
    { mode: 'dark', bg: 'bg-[#000000]', card: 'bg-[#111111]/80', border: 'border-[#222222]', primary: 'text-emerald-400', secondary: 'text-gray-400', accent: 'emerald', textBody: 'text-gray-300', textHead: 'text-white' },
    { mode: 'dark', bg: 'bg-[#0a000f]', card: 'bg-[#16002a]/60', border: 'border-[#3b0764]', primary: 'text-violet-400', secondary: 'text-violet-300/60', accent: 'violet', textBody: 'text-violet-100/70', textHead: 'text-white' },
    { mode: 'dark', bg: 'bg-[#020f06]', card: 'bg-[#0a2010]/70', border: 'border-[#14532d]', primary: 'text-green-400', secondary: 'text-green-300/60', accent: 'green', textBody: 'text-green-100/70', textHead: 'text-white' },
    { mode: 'dark', bg: 'bg-[#00051a]', card: 'bg-[#001845]/60', border: 'border-[#1e3a8a]', primary: 'text-blue-400', secondary: 'text-blue-300/60', accent: 'blue', textBody: 'text-blue-100/70', textHead: 'text-white' },
    { mode: 'dark', bg: 'bg-[#1a0f00]', card: 'bg-[#2d1a00]/60', border: 'border-[#78350f]', primary: 'text-amber-400', secondary: 'text-amber-300/60', accent: 'amber', textBody: 'text-amber-100/80', textHead: 'text-white' },
    // --- LIGHT THEMES ---
    { mode: 'light', bg: 'bg-slate-50', card: 'bg-white/70', border: 'border-slate-200', primary: 'text-blue-600', secondary: 'text-slate-500', accent: 'blue', textBody: 'text-slate-700', textHead: 'text-slate-900' },
    { mode: 'light', bg: 'bg-[#fcfcfc]', card: 'bg-white/80', border: 'border-gray-200', primary: 'text-rose-500', secondary: 'text-gray-500', accent: 'rose', textBody: 'text-gray-700', textHead: 'text-gray-900' },
    { mode: 'light', bg: 'bg-orange-50/50', card: 'bg-white/60', border: 'border-orange-200/50', primary: 'text-amber-600', secondary: 'text-orange-900/60', accent: 'amber', textBody: 'text-orange-900/80', textHead: 'text-orange-950' },
    { mode: 'light', bg: 'bg-[#f5f3ff]', card: 'bg-white/70', border: 'border-violet-200', primary: 'text-violet-600', secondary: 'text-violet-400', accent: 'violet', textBody: 'text-violet-900/70', textHead: 'text-violet-950' },
    { mode: 'light', bg: 'bg-[#f0fff4]', card: 'bg-white/70', border: 'border-green-200', primary: 'text-green-600', secondary: 'text-green-500/70', accent: 'green', textBody: 'text-green-900/70', textHead: 'text-green-950' },
    { mode: 'light', bg: 'bg-[#eff6ff]', card: 'bg-white/70', border: 'border-blue-200', primary: 'text-indigo-600', secondary: 'text-indigo-400', accent: 'indigo', textBody: 'text-indigo-900/70', textHead: 'text-indigo-950' },
    { mode: 'light', bg: 'bg-[#fff1f2]', card: 'bg-white/70', border: 'border-pink-200', primary: 'text-pink-600', secondary: 'text-pink-400', accent: 'pink', textBody: 'text-pink-900/70', textHead: 'text-pink-950' },
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

.bento-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-rows: 280px;
    gap: 1.5rem;
}
.bento-item {
    display: flex;
    flex-direction: column;
}
@media (min-width: 768px) {
    .bento-wide { grid-column: span 2; }
    .bento-tall { grid-row: span 2; }
}

/* Custom Scrollbar for inner view */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(150, 150, 150, 0.3); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(150, 150, 150, 0.5); }
</style>
`;

function renderContactSection(p, data) {
    const { email, linkedin_url, githubData } = data;
    const github_username = githubData?.username;
    
    return `
        <div class="${p.card} border ${p.border} rounded-3xl p-10 glass-card">
            <h3 class="text-3xl font-syne font-bold mb-4 ${p.textHead}">Let's Build Something</h3>
            <p class="${p.secondary} mb-8 max-w-lg">I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <form class="flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" class="w-full bg-transparent border ${p.border} rounded-xl px-4 py-3 focus:outline-none focus:border-${p.accent}-500 transition-colors ${p.textHead}" />
                    <input type="email" placeholder="Your Email" class="w-full bg-transparent border ${p.border} rounded-xl px-4 py-3 focus:outline-none focus:border-${p.accent}-500 transition-colors ${p.textHead}" />
                    <textarea rows="4" placeholder="Your Message" class="w-full bg-transparent border ${p.border} rounded-xl px-4 py-3 focus:outline-none focus:border-${p.accent}-500 transition-colors ${p.textHead} resize-none"></textarea>
                    <button type="button" onclick="alert('Contact form functionality coming soon!')" class="bg-${p.accent}-500 hover:bg-${p.accent}-600 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-${p.accent}-500/30">Send Message</button>
                </form>
                
                <div class="flex flex-col gap-4">
                    ${email ? `
                        <a href="mailto:${email}" class="flex items-center gap-4 p-4 rounded-xl border ${p.border} hover:bg-${p.accent}-500/10 transition-colors group">
                            <div class="w-12 h-12 rounded-full bg-${p.accent}-500/20 flex items-center justify-center ${p.primary}">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <div class="text-sm ${p.secondary}">Email</div>
                                <div class="font-medium ${p.textHead}">${email}</div>
                            </div>
                        </a>
                    ` : ''}
                    
                    ${linkedin_url ? `
                        <a href="${linkedin_url}" target="_blank" class="flex items-center gap-4 p-4 rounded-xl border ${p.border} hover:bg-${p.accent}-500/10 transition-colors group">
                            <div class="w-12 h-12 rounded-full bg-${p.accent}-500/20 flex items-center justify-center ${p.primary}">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </div>
                            <div>
                                <div class="text-sm ${p.secondary}">LinkedIn</div>
                                <div class="font-medium ${p.textHead}">Connect with me</div>
                            </div>
                        </a>
                    ` : ''}
                    
                    ${github_username ? `
                        <a href="https://github.com/${github_username}" target="_blank" class="flex items-center gap-4 p-4 rounded-xl border ${p.border} hover:bg-${p.accent}-500/10 transition-colors group">
                            <div class="w-12 h-12 rounded-full bg-${p.accent}-500/20 flex items-center justify-center ${p.primary}">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </div>
                            <div>
                                <div class="text-sm ${p.secondary}">GitHub</div>
                                <div class="font-medium ${p.textHead}">@${github_username}</div>
                            </div>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Layout 0: Hero Glass (Centralized)
function renderLayout0(p, f, data, displaySkills, displayProjects) {
    return `
        <div class="max-w-6xl mx-auto px-6 py-24 relative z-10">
            <!-- Hero -->
            <header class="flex flex-col md:flex-row items-start md:items-center gap-12 animate-stagger-1 mb-32">
                <div class="relative w-40 h-40 md:w-56 md:h-56 shrink-0 group">
                    <div class="absolute inset-0 bg-gradient-to-tr from-${p.accent}-400 to-${p.accent}-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
                    <img src="${data.avatar}" class="relative w-full h-full object-cover rounded-full border-4 ${p.border} shadow-2xl" alt="${data.name}" />
                </div>
                <div>
                    <div class="inline-block px-4 py-1.5 rounded-full ${p.card} ${p.border} border text-sm font-medium ${p.primary} mb-6 shadow-sm">
                        <span class="mr-2">📍</span>${data.location}
                    </div>
                    <h1 class="text-5xl md:text-7xl font-bold font-syne tracking-tight mb-4 leading-tight ${p.textHead}">
                        ${data.name}.
                    </h1>
                    <h2 class="text-2xl md:text-3xl font-space ${p.textBody} mb-6 font-medium">
                        ${data.role}
                    </h2>
                    <p class="text-lg md:text-xl ${p.secondary} max-w-2xl leading-relaxed">
                        ${data.bio}
                    </p>
                </div>
            </header>

            <!-- Skills -->
            ${displaySkills.length > 0 ? `
                <section class="mb-32 animate-stagger-2">
                    <h3 class="text-3xl font-syne font-bold mb-10 ${p.textHead}">Tech Stack</h3>
                    <div class="flex flex-wrap gap-4">
                        ${displaySkills.map(skill => `
                            <span class="px-6 py-3 rounded-xl ${p.card} ${p.border} border text-sm font-medium ${p.secondary} hover:${p.textHead} hover:border-${p.accent}-400 hover:shadow-lg hover:shadow-${p.accent}-500/20 glass-card transition duration-300">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            <!-- Projects -->
            <section class="mb-32 animate-stagger-3">
                <h3 class="text-3xl font-syne font-bold mb-10 ${p.textHead}">Featured Work</h3>
                ${displayProjects.length === 0 ? `
                    <div class="${p.card} border ${p.border} rounded-3xl p-12 text-center ${p.secondary} glass-card">No projects featured yet.</div>
                ` : `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${displayProjects.map(proj => `
                            <div class="${p.card} border ${p.border} rounded-3xl p-8 glass-card hover-lift hover:border-${p.accent}-400/50 flex flex-col group relative overflow-hidden shadow-xl shadow-black/5">
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-${p.accent}-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div class="relative z-10 flex flex-col h-full">
                                    <div class="flex justify-between items-start mb-4">
                                        <h4 class="text-2xl font-space font-bold ${p.textHead}">${proj.title}</h4>
                                    </div>
                                    <p class="${p.secondary} mb-6 flex-1 leading-relaxed text-sm">${proj.description || ''}</p>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        ${proj.tags ? (Array.isArray(proj.tags) ? proj.tags : proj.tags.split(',')).slice(0,3).map(tag => `
                                            <span class="text-xs font-mono px-3 py-1 bg-${p.accent}-500/10 rounded border ${p.border} ${p.primary}">${tag.trim()}</span>
                                        `).join('') : ''}
                                    </div>
                                    <div class="flex gap-4 pt-6 border-t ${p.border}">
                                        ${proj.live_url ? `<a href="${proj.live_url}" target="_blank" class="${p.textHead} font-medium flex items-center gap-2 hover:${p.primary} transition text-sm">Live Demo &rarr;</a>` : ''}
                                        ${proj.github_url ? `<a href="${proj.github_url}" target="_blank" class="${p.secondary} font-medium flex items-center gap-2 hover:${p.textHead} transition text-sm">Source</a>` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </section>

            <!-- Contact -->
            <section class="animate-stagger-4 mb-32">
                ${renderContactSection(p, data)}
            </section>
        </div>
    `;
}

// Layout 1: Split Dimensional
function renderLayout1(p, f, data, displaySkills, displayProjects) {
    return `
        <div class="max-w-[1400px] mx-auto min-h-screen flex flex-col lg:flex-row relative z-10">
            <!-- Left Fixed Column -->
            <div class="w-full lg:w-[400px] xl:w-[500px] lg:fixed lg:h-screen p-8 lg:p-12 xl:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${p.border} ${p.bg}">
                <div class="animate-stagger-1">
                    <img src="${data.avatar}" class="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-2xl mb-8 shadow-xl" alt="${data.name}" />
                    <h1 class="text-4xl lg:text-5xl font-bold font-syne tracking-tight mb-4 ${p.textHead}">${data.name}</h1>
                    <h2 class="text-xl font-space ${p.textBody} mb-6">${data.role}</h2>
                    <p class="text-base ${p.secondary} leading-relaxed mb-8">${data.bio}</p>
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg ${p.card} border ${p.border} text-sm font-medium ${p.primary}">
                        📍 ${data.location}
                    </div>
                </div>
            </div>

            <!-- Right Scroll Column -->
            <div class="w-full lg:w-[calc(100%-400px)] xl:w-[calc(100%-500px)] lg:ml-auto p-8 lg:p-12 xl:p-16">
                <!-- Skills -->
                ${displaySkills.length > 0 ? `
                    <section class="mb-24 animate-stagger-2">
                        <h3 class="text-sm tracking-widest uppercase ${p.secondary} font-bold mb-8">Tech Stack</h3>
                        <div class="flex flex-wrap gap-3">
                            ${displaySkills.map(skill => `
                                <span class="px-5 py-2 rounded border ${p.border} text-sm font-medium ${p.textBody} hover:bg-${p.accent}-500 hover:text-white hover:border-${p.accent}-500 transition-colors cursor-default shadow-sm bg-white/5">
                                    ${skill}
                                </span>
                            `).join('')}
                        </div>
                    </section>
                ` : ''}

                <!-- Projects -->
                <section class="mb-24 animate-stagger-3">
                    <h3 class="text-sm tracking-widest uppercase ${p.secondary} font-bold mb-8">Selected Projects</h3>
                    <div class="flex flex-col gap-8">
                        ${displayProjects.map(proj => `
                            <div class="${p.card} border ${p.border} rounded-2xl p-8 hover-lift hover:border-${p.accent}-400/50 group shadow-lg">
                                <h4 class="text-3xl font-syne font-bold ${p.textHead} mb-4">${proj.title}</h4>
                                <p class="${p.textBody} mb-6 text-lg leading-relaxed">${proj.description || ''}</p>
                                <div class="flex flex-wrap gap-2 mb-8">
                                    ${proj.tags ? (Array.isArray(proj.tags) ? proj.tags : proj.tags.split(',')).map(tag => `
                                        <span class="text-xs font-mono px-2 py-1 bg-${p.accent}-500/10 rounded ${p.primary}">${tag.trim()}</span>
                                    `).join('') : ''}
                                </div>
                                <div class="flex gap-6">
                                    ${proj.live_url ? `<a href="${proj.live_url}" target="_blank" class="px-6 py-3 bg-${p.accent}-500 hover:bg-${p.accent}-600 text-white rounded-lg font-medium transition-colors shadow-md text-sm">Live Demo</a>` : ''}
                                    ${proj.github_url ? `<a href="${proj.github_url}" target="_blank" class="px-6 py-3 border ${p.border} hover:bg-${p.accent}-500/10 rounded-lg ${p.textHead} font-medium transition-colors text-sm">Source Code</a>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="animate-stagger-4">
                    ${renderContactSection(p, data)}
                </section>
            </div>
        </div>
    `;
}

// Layout 2: Bento Box
function renderLayout2(p, f, data, displaySkills, displayProjects) {
    return `
        <div class="max-w-[1400px] mx-auto p-6 md:p-12 relative z-10 animate-stagger-1">
            <div class="bento-grid">
                
                <!-- Hero Bento -->
                <div class="bento-item bento-wide bento-tall ${p.card} border ${p.border} rounded-[2rem] p-10 glass-card relative overflow-hidden group shadow-xl">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-${p.accent}-500/20 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div class="flex flex-col h-full justify-between relative z-10">
                        <div>
                            <img src="${data.avatar}" class="w-20 h-20 object-cover rounded-2xl mb-6 shadow-md" alt="${data.name}" />
                            <h1 class="text-4xl md:text-5xl font-bold font-syne tracking-tight mb-4 ${p.textHead}">${data.name}</h1>
                            <h2 class="text-xl font-space ${p.primary} font-medium">${data.role}</h2>
                        </div>
                        <div>
                            <p class="${p.textBody} text-lg leading-relaxed max-w-md">${data.bio}</p>
                            <div class="mt-6 flex items-center gap-2 text-sm font-medium ${p.secondary}">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Based in ${data.location}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Skills Bento -->
                <div class="bento-item bento-wide ${p.card} border ${p.border} rounded-[2rem] p-10 glass-card shadow-lg">
                    <h3 class="text-xl font-syne font-bold mb-6 ${p.textHead}">Toolkit</h3>
                    <div class="flex flex-wrap gap-2">
                        ${displaySkills.map(skill => `
                            <span class="px-4 py-2 rounded-xl bg-white/5 border ${p.border} text-sm font-medium ${p.textBody}">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Contact Mini Bento -->
                <div class="bento-item ${p.card} border ${p.border} rounded-[2rem] p-10 glass-card flex flex-col justify-center items-center text-center hover:bg-${p.accent}-500/10 transition-colors group cursor-pointer shadow-lg" onclick="alert('Contact Form Demo!')">
                    <div class="w-16 h-16 rounded-full bg-${p.accent}-500/20 flex items-center justify-center ${p.primary} mb-6 group-hover:scale-110 transition-transform">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold ${p.textHead}">Get in touch</h3>
                    <p class="${p.secondary} mt-2 text-sm">Let's work together</p>
                </div>

                <!-- Projects Bento -->
                ${displayProjects.map(proj => `
                    <div class="bento-item ${p.card} border ${p.border} rounded-[2rem] p-8 glass-card hover-lift group shadow-lg">
                        <div class="flex flex-col h-full">
                            <h4 class="text-2xl font-space font-bold ${p.textHead} mb-3">${proj.title}</h4>
                            <p class="${p.secondary} text-sm mb-6 flex-1 line-clamp-3">${proj.description || ''}</p>
                            <div class="flex gap-3 mt-auto">
                                ${proj.live_url ? `<a href="${proj.live_url}" target="_blank" class="flex-1 text-center py-2 bg-${p.accent}-500 hover:bg-${p.accent}-600 text-white rounded-xl text-sm font-medium transition-colors">Live</a>` : ''}
                                ${proj.github_url ? `<a href="${proj.github_url}" target="_blank" class="flex-1 text-center py-2 border ${p.border} hover:bg-white/5 ${p.textHead} rounded-xl text-sm font-medium transition-colors">Code</a>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
                
            </div>
            
            <!-- Full Contact Section appended at bottom of Bento Grid -->
            <div class="mt-12">
                ${renderContactSection(p, data)}
            </div>
        </div>
    `;
}

export function generateTemplate(data, paletteIdx = 0, fontIdx = 0, layoutIdx = 0) {
    const p = PALETTES[paletteIdx % PALETTES.length];
    const f = FONTS[fontIdx % FONTS.length];
    
    const { user, projects, githubData, skills } = data;

    const templateData = {
        name: user?.name || githubData?.username || 'Developer',
        role: user?.role || 'Software Engineer',
        bio: user?.bio || 'Building awesome things for the web.',
        avatar: user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'dev')}&background=random&size=200`,
        location: user?.location || 'Planet Earth',
        email: user?.email || '',
        linkedin_url: user?.linkedin_url || '',
        githubData: githubData
    };

    let displayProjects = projects && projects.length > 0 ? projects : [];
    
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

    let layoutHtml = '';
    if (layoutIdx === 0) layoutHtml = renderLayout0(p, f, templateData, displaySkills, displayProjects);
    else if (layoutIdx === 1) layoutHtml = renderLayout1(p, f, templateData, displaySkills, displayProjects);
    else layoutHtml = renderLayout2(p, f, templateData, displaySkills, displayProjects);

    return `
        ${INJECT_CSS}
        <div class="min-h-full ${p.bg} ${f.sans} text-white selection:bg-${p.accent}-500/30 overflow-x-hidden relative transition-colors duration-500">
            <!-- Ambient Glow -->
            <div class="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-${p.accent}-500/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-1000"></div>
            
            ${layoutHtml}

            <!-- Footer -->
            <footer class="py-12 border-t ${p.border} text-center ${p.secondary} text-sm mt-auto relative z-10">
                <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; ${new Date().getFullYear()} ${templateData.name}. All rights reserved.</p>
                    <p>Designed by GitFolio AI Engine.</p>
                </div>
            </footer>
        </div>
    `;
}
