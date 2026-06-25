import { TopNav } from '../components/TopNav.js';
import { api } from '../services/api.js';
import { ConnectGithubUI, initConnectGithub } from '../components/ConnectGithub.js';

export function Skills() {
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
              <a href="#/settings" class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-colors shrink-0">
                  <img id="skills-avatar" src="https://ui-avatars.com/api/?name=User&background=random" class="w-full h-full object-cover"/>
              </a>
          </div>
      </header>

      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full relative">
          <div class="flex justify-between items-end mb-4">
              <div>
                  <h2 class="font-display-lg text-display-lg text-on-surface mb-xs flex items-center gap-3">
                     <span class="material-symbols-outlined text-[32px] text-secondary">bolt</span>
                     Technical Skills
                  </h2>
                  <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Automatically extracted from your GitHub repositories.</p>
              </div>
          </div>
          
          <div id="skills-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md relative z-10">
              <div class="text-on-surface-variant animate-pulse col-span-full">Analyzing repositories...</div>
          </div>
      </div>
    </div>
  `;
}

export async function initSkills() {
    try {
        const [user, github] = await Promise.all([
            api.getUser(),
            api.getGithubData()
        ]);

        const avatarEl = document.getElementById('skills-avatar');
        if (avatarEl && user) {
            if (user.avatar) avatarEl.src = user.avatar;
            else if (user.name) avatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`;
        }

        const container = document.getElementById('skills-container');
        if (!container) return;

        // Empty State: Connect GitHub
        if (github.isNotConnected) {
            container.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4');
            container.innerHTML = ConnectGithubUI();
            initConnectGithub(async () => {
                await initSkills();
            });
            return;
        }

        // Restore grid classes
        container.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4');

        if (!github.repositories || github.repositories.length === 0) {
            container.innerHTML = '<div class="col-span-full py-12 text-center text-on-surface-variant bg-surface-container-lowest border border-outline-variant/50 rounded-xl">No public repositories found to extract skills from.</div>';
            return;
        }

        // Extract Languages from Repositories
        const langCounts = {};
        github.repositories.forEach(repo => {
            if (repo.language) {
                langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            }
        });

        const languages = Object.entries(langCounts)
            .sort((a, b) => b[1] - a[1]) // Sort by frequency
            .map(([lang]) => lang);

        if (languages.length === 0) {
             container.innerHTML = '<div class="col-span-full py-12 text-center text-on-surface-variant bg-surface-container-lowest border border-outline-variant/50 rounded-xl">No primary languages detected in your repositories.</div>';
             return;
        }

        const colors = ['primary', 'secondary', 'tertiary'];
        const iconMap = {
            'JavaScript': 'javascript',
            'TypeScript': 'javascript', // using same icon for simplicity
            'Python': 'terminal',
            'Java': 'terminal',
            'HTML': 'html',
            'CSS': 'css',
            'C++': 'terminal',
            'C#': 'terminal',
            'Go': 'terminal',
            'Ruby': 'terminal'
        };

        container.innerHTML = languages.map((lang, idx) => {
            const color = colors[idx % colors.length];
            const count = langCounts[lang];
            const icon = iconMap[lang] || 'code';
            
            return `
              <div class="glass-panel border border-outline-variant/50 rounded-xl p-md flex items-center gap-md group hover:border-${color}/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center border border-outline-variant group-hover:border-${color}/30 transition-colors relative z-10">
                      <span class="material-symbols-outlined text-${color} text-[24px]">${icon}</span>
                  </div>
                  <div class="relative z-10 flex-1">
                      <h4 class="font-headline-md text-body-lg font-bold text-on-surface group-hover:text-${color} transition-colors">${lang}</h4>
                      <p class="font-label-md text-label-md text-outline">Used in ${count} repo${count > 1 ? 's' : ''}</p>
                  </div>
              </div>
            `;
        }).join('');

    } catch (e) {
        console.error("Failed to render skills view", e);
        const container = document.getElementById('skills-container');
        if (container) {
            container.innerHTML = \`<div class="col-span-full py-12 text-center text-red-500 bg-red-500/10 border border-red-500/30 rounded-xl">Error: \${e.message}</div>\`;
        }
    }
}
