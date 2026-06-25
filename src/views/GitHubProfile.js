import { TopNav } from '../components/TopNav.js';
import { api } from '../services/api.js';

export function GitHubProfile() {
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

        if (github.isNotConnected) {
            grid.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
            grid.innerHTML = `
                <div class="glass-panel border border-outline-variant/50 animate-entrance p-12 text-center rounded-xl col-span-full max-w-3xl mx-auto w-full mt-8">
                  <span class="material-symbols-outlined text-primary text-[64px] mb-4 block">terminal</span>
                  <h3 class="font-headline-md text-headline-md text-on-surface mb-4">Connect GitHub</h3>
                  <p class="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-8">Authorize DevPortfolio AI to read your repositories by providing your GitHub username.</p>
                  
                  <form id="github-connect-form" class="max-w-sm mx-auto flex flex-col gap-4">
                      <div id="github-connect-err" class="hidden text-red-500 text-sm font-bold bg-red-500/10 p-2 rounded-lg border border-red-500/20"></div>
                      <input id="github-connect-input" required type="text" class="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 font-body-md text-center text-on-surface focus:outline-none focus:border-primary transition-all shadow-inner" placeholder="Your GitHub Username (e.g. torvalds)" />
                      <button type="submit" id="btn-github-connect" class="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mx-auto pulse-amber w-full">
                         <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                         Connect Account
                      </button>
                  </form>
                </div>
            `;

            // Wire up the form
            const form = document.getElementById('github-connect-form');
            const btn = document.getElementById('btn-github-connect');
            const errBox = document.getElementById('github-connect-err');
            
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const username = document.getElementById('github-connect-input').value.trim();
                if (!username) return;

                btn.innerHTML = 'Connecting...';
                btn.disabled = true;
                errBox.classList.add('hidden');

                try {
                    await api.updateUser({ github_username: username });
                    // Re-render
                    await initGitHub();
                } catch (err) {
                    errBox.innerText = err.message || "Failed to save username.";
                    errBox.classList.remove('hidden');
                    btn.innerHTML = 'Connect Account';
                    btn.disabled = false;
                }
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
    }
}
