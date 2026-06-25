import { TopNav } from '../components/TopNav.js';
import { api } from '../services/api.js';
import { ConnectGithubUI, initConnectGithub } from '../components/ConnectGithub.js';

export function PortfolioPreview() {
  return `
    <div class="flex-1 flex flex-col min-h-screen relative z-10">
      
      <!-- TopAppBar with Shader Background -->
      <header class="relative flex justify-between items-center px-lg h-24 w-full sticky top-0 z-40 overflow-hidden bg-background/60 backdrop-blur-md border-b border-outline-variant/30">
          <div class="absolute inset-0 z-[-1] opacity-70" id="shader-container"></div>
          <div class="flex items-center gap-md relative z-10 min-w-max">
              <img src="/logo.png" alt="DevPortfolio Logo" class="w-8 h-8 rounded-md shadow-sm" />
              <span class="font-headline-md text-headline-md text-primary">DevPortfolio</span>
          </div>
          
          <div class="flex-1 flex justify-center relative z-10">
              ${TopNav()}
          </div>
          
          <div class="flex items-center gap-md relative z-10 min-w-max">
              <button class="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center gap-2 pulse-amber">
                 <span class="material-symbols-outlined text-[18px]">rocket_launch</span> Deploy
              </button>
          </div>
      </header>

      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full h-full">
        <div class="glass-panel border border-outline-variant/50 flex-1 flex flex-col overflow-hidden rounded-xl h-[calc(100vh-12rem)] shadow-2xl relative">
            
            <!-- Browser Header Mock -->
            <div class="bg-surface-container-lowest border-b border-outline-variant/50 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
                <div class="flex gap-1.5 w-20">
                    <div class="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#10b981]"></div>
                </div>
                <div id="preview-url-bar" class="flex-1 text-center font-code-sm text-[12px] text-outline-variant bg-surface-variant/30 mx-4 py-1.5 rounded-md max-w-md truncate">
                    loading.devportfolio.ai
                </div>
                <div class="w-20 flex justify-end">
                    <span class="material-symbols-outlined text-outline-variant text-[16px]">menu</span>
                </div>
            </div>
            
            <!-- Live Preview Content Container -->
            <div id="live-preview-content" class="flex-1 overflow-y-auto bg-surface/50 w-full relative">
                <!-- Loading State -->
                <div class="absolute inset-0 flex justify-center items-center p-8 text-center bg-surface">
                    <div>
                        <span class="material-symbols-outlined text-primary text-[64px] mb-4 block animate-pulse">magic_button</span>
                        <h3 class="font-headline-md text-headline-md text-on-surface mb-2">Generating your live portfolio...</h3>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  `;
}

export async function initPreview() {
    try {
        const [user, projects, github] = await Promise.all([
            api.getUser(),
            api.getProjects(),
            api.getGithubData()
        ]);

        const urlBar = document.getElementById('preview-url-bar');
        if (urlBar && user) {
            const sanitizedName = (user.name || user.github_username || 'dev').toLowerCase().replace(/[^a-z0-9]/g, '');
            urlBar.innerText = `https://${sanitizedName}.devportfolio.ai`;
        }

        const previewContainer = document.getElementById('live-preview-content');
        if (!previewContainer) return;

        // Empty State: Connect GitHub
        if (github.isNotConnected) {
            previewContainer.innerHTML = ConnectGithubUI();
            initConnectGithub(async () => {
                await initPreview();
            });
            return;
        }

        // Render the generated mini-portfolio HTML
        const name = user?.name || github?.username || 'Developer';
        const role = user?.role || 'Software Engineer';
        const bio = user?.bio || 'Building awesome things for the web.';
        const avatar = user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=200`;
        const location = user?.location || 'Planet Earth';

        // Filter projects
        let displayProjects = projects && projects.length > 0 ? projects : [];

        // Smart Fallback: Auto-Extract from GitHub if no manual projects exist
        if (displayProjects.length === 0 && github && !github.isNotConnected) {
            displayProjects = api.extractBestProjects(github);
        }

        // Simple Tailwind based mini-portfolio injected directly into the container
        previewContainer.innerHTML = `
            <div class="min-h-full bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
                
                <!-- Hero Section -->
                <div class="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
                    <img src="${avatar}" alt="${name}" class="w-32 h-32 rounded-full shadow-xl mb-6 border-4 border-white object-cover" />
                    <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Hi, I'm ${name}.
                    </h1>
                    <h2 class="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                        ${role}
                    </h2>
                    <p class="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                        ${bio}
                    </p>
                    <div class="flex items-center gap-2 text-slate-500 mb-8">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>${location}</span>
                    </div>
                    <div class="flex gap-4">
                        <a href="#projects" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">View Projects</a>
                        ${github?.username ? `<a href="https://github.com/${github.username}" target="_blank" class="px-6 py-3 bg-slate-200 text-slate-800 font-medium rounded-lg hover:bg-slate-300 transition">GitHub</a>` : ''}
                    </div>
                </div>

                <!-- Projects Section -->
                <div id="projects" class="bg-white py-20 border-t border-slate-200">
                    <div class="max-w-5xl mx-auto px-6">
                        <h3 class="text-3xl font-bold text-slate-900 mb-12 text-center">Selected Work</h3>
                        
                        ${displayProjects.length > 0 ? `
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                ${displayProjects.map(p => `
                                    <div class="border border-slate-200 rounded-xl p-6 hover:shadow-xl transition duration-300 bg-slate-50">
                                        <h4 class="text-xl font-bold text-slate-900 mb-2">${p.title}</h4>
                                        <p class="text-slate-600 mb-6 flex-1">${p.description || 'No description provided.'}</p>
                                        <div class="flex gap-3 mt-auto">
                                            ${p.live_url ? `<a href="${p.live_url}" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium text-sm">Live Demo &rarr;</a>` : ''}
                                            ${p.github_url ? `<a href="${p.github_url}" target="_blank" class="text-slate-600 hover:text-slate-800 font-medium text-sm">Source Code &rarr;</a>` : ''}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `
                            <div class="text-center text-slate-500 py-12 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
                                <p>No projects added yet.</p>
                                <p class="text-sm mt-2">Go to the Projects tab to add some work to your portfolio!</p>
                            </div>
                        `}
                    </div>
                </div>

                <!-- Footer Section -->
                <div class="bg-slate-900 text-slate-400 py-12 text-center">
                    <p>&copy; ${new Date().getFullYear()} ${name}. Built with DevPortfolio AI.</p>
                </div>
            </div>
        `;

    } catch (e) {
        console.error("Failed to render preview", e);
    }
}
