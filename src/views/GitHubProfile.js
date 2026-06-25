import { Logo } from '../components/Logo.js';
import { TopNav } from '../components/TopNav.js';
import { api } from '../services/api.js';
import { ConnectGithubUI, initConnectGithub } from '../components/ConnectGithub.js';

export function GitHubProfile() {
  return `
    <div class="flex-1 flex flex-col min-h-screen relative z-10">
      
      <!-- TopAppBar with Shader Background -->
      <header class="relative flex justify-between items-center px-lg h-24 w-full sticky top-0 z-40 overflow-hidden bg-background/60 backdrop-blur-md border-b border-outline-variant/30">
          <div class="absolute inset-0 z-[-1] opacity-70" id="shader-container"></div>
          <div class="flex items-center gap-md relative z-10 min-w-max">
              ${Logo()}
          </div>
          
          <div class="flex-1 flex justify-center relative z-10">
              ${TopNav()}
          </div>

          <div class="flex items-center gap-sm md:gap-md relative z-10 min-w-max">
              <a href="#/settings" class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-colors shrink-0">
                  <img id="github-avatar" src="https://ui-avatars.com/api/?name=User&background=random" class="w-full h-full object-cover"/>
              </a>
          </div>
      </header>

      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full relative">
        <div class="flex justify-between items-end mb-4 animate-entrance">
            <div>
              <h2 class="font-display-lg text-display-lg text-on-surface mb-xs flex items-center gap-3">
                 <span class="material-symbols-outlined text-[32px] text-primary">code_blocks</span>
                 GitHub Repositories
              </h2>
              <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Synced live from your GitHub account.</p>
            </div>
            <a id="github-profile-link" target="_blank" href="https://github.com" class="hidden sm:flex items-center gap-2 bg-surface hover:bg-surface-variant text-on-surface border border-outline-variant px-4 py-2 rounded-lg font-label-md text-sm transition-colors">
                View on GitHub <span class="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
        </div>

        <div id="github-repos-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            <div class="text-on-surface-variant animate-pulse col-span-full">Syncing repositories...</div>
        </div>
      </div>
    </div>
  `;
}

export async function initGitHub() {
    try {
        const [user, github] = await Promise.all([
            api.getUser(),
            api.getGithubData()
        ]);

        const avatarEl = document.getElementById('github-avatar');
        if (avatarEl && user) {
            if (user.avatar) avatarEl.src = user.avatar;
            else if (user.name) avatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`;
        }

        const linkEl = document.getElementById('github-profile-link');
        if (linkEl && github.username) {
            linkEl.href = `https://github.com/${github.username}`;
        }

        const grid = document.getElementById('github-repos-grid');
        if (!grid) return;

        if (github.isNotConnected) {
            grid.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
            grid.innerHTML = ConnectGithubUI();
            initConnectGithub(async () => {
                await initGitHub();
            });
            return;
        }

        // Restore grid classes if it was previously removed
        grid.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');

        if (!github.repositories || github.repositories.length === 0) {
            grid.innerHTML = '<div class="col-span-full py-12 text-center text-on-surface-variant bg-surface-container-lowest border border-outline-variant/50 rounded-xl">No public repositories found for this user. Make sure your GitHub Username is set in Settings!</div>';
            return;
        }

        // Sort by stars descending, then pushed_at
        const sortedRepos = [...github.repositories].sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
                return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.pushed_at) - new Date(a.pushed_at);
        });

        const colors = ['primary', 'secondary', 'tertiary'];

        grid.innerHTML = sortedRepos.map((repo, idx) => {
            const color = colors[idx % colors.length];
            const date = new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            return `
              <a href="${repo.html_url}" target="_blank" class="glass-panel rounded-xl p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden block">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${color} to-${color} opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div>
                      <h3 class="font-headline-md text-lg font-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-2">
                          <span class="material-symbols-outlined text-[20px] text-outline">book</span>
                          <span class="truncate">${repo.name}</span>
                      </h3>
                  </div>
                  
                  <p class="font-body-md text-sm text-on-surface-variant flex-1 line-clamp-3">${repo.description || 'No description provided.'}</p>
                  
                  <div class="flex justify-between items-center pt-4 border-t border-outline-variant/50 mt-auto">
                      <div class="flex items-center gap-3">
                          ${repo.language ? `
                          <div class="flex items-center gap-1.5 font-code-sm text-xs text-on-surface">
                              <span class="w-2.5 h-2.5 rounded-full bg-${color}"></span>
                              ${repo.language}
                          </div>
                          ` : ''}
                          <div class="flex items-center gap-1 font-label-md text-xs text-outline hover:text-on-surface transition-colors">
                              <span class="material-symbols-outlined text-[14px]">star</span>
                              ${repo.stargazers_count}
                          </div>
                          <div class="flex items-center gap-1 font-label-md text-xs text-outline hover:text-on-surface transition-colors">
                              <span class="material-symbols-outlined text-[14px]">fork_right</span>
                              ${repo.forks_count}
                          </div>
                      </div>
                      <div class="font-label-md text-xs text-outline-variant">
                          ${date}
                      </div>
                  </div>
              </a>
            `;
        }).join('');

    } catch (e) {
        console.error("Failed to render GitHub view", e);
        const grid = document.getElementById('github-repos-grid');
        if (grid) {
            grid.innerHTML = `<div class="col-span-full py-12 text-center text-red-500 bg-red-500/10 border border-red-500/30 rounded-xl">Error: ${e.message}</div>`;
        }
    }
}
