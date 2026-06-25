import { TopNav } from '../components/TopNav.js';
import { api } from '../services/api.js';
import { ConnectGithubUI, initConnectGithub } from '../components/ConnectGithub.js';

export function Dashboard() {
  return `
    <div class="flex-1 flex flex-col min-h-screen relative overflow-hidden">
      
      <!-- TopAppBar -->
      <header class="w-full sticky top-0 z-40 glass-panel flex justify-between items-center px-lg h-16 border-b border-outline-variant/30 animate-entrance">
          <div class="flex items-center gap-md text-primary font-bold min-w-max">
              <img src="/logo.png" alt="DevPortfolio Logo" class="w-8 h-8 rounded-md shadow-sm" />
              <span class="font-headline-md text-headline-md text-primary">DevPortfolio</span>
          </div>
          
          <div class="flex-1 flex justify-center">
              ${TopNav()}
          </div>
          
          <div class="flex items-center gap-md min-w-max">
              <a href="#/settings">
                  <img id="dash-avatar" class="w-9 h-9 rounded-full border border-outline-variant shadow-sm object-cover hover:opacity-80 transition-opacity" alt="Avatar" src="https://ui-avatars.com/api/?name=User&background=random"/>
              </a>
          </div>
      </header>
      
      <div class="p-lg lg:p-xl flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full relative z-10">
          <!-- Hero Stats Bento -->
          <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md relative z-10">
              <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-100">
                  <div class="flex justify-between items-start mb-md">
                      <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Projects</span>
                      <span class="material-symbols-outlined text-primary">folder</span>
                  </div>
                  <div id="dash-total-projects" class="font-display-lg text-display-lg text-on-surface">...</div>
                  <div class="mt-sm font-label-md text-label-md text-primary flex items-center gap-xs">
                      <span class="material-symbols-outlined text-[16px]">trending_up</span> All time
                  </div>
              </div>
              <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-200">
                  <div class="flex justify-between items-start mb-md">
                      <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Skills Count</span>
                      <span class="material-symbols-outlined text-secondary">bolt</span>
                  </div>
                  <div id="dash-skills-count" class="font-display-lg text-display-lg text-on-surface">...</div>
                  <div class="mt-sm font-label-md text-label-md text-outline">Verified technologies</div>
              </div>
              <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-300">
                  <div class="flex justify-between items-start mb-md">
                      <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Repositories</span>
                      <span class="material-symbols-outlined text-tertiary">code</span>
                  </div>
                  <div id="dash-repos-count" class="font-display-lg text-display-lg text-on-surface">...</div>
                  <div class="mt-sm font-label-md text-label-md text-tertiary flex items-center gap-xs">
                      <span class="material-symbols-outlined text-[16px]">sync</span> Synced via GitHub
                  </div>
              </div>
              <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-400">
                  <div class="flex justify-between items-start mb-md">
                      <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Followers</span>
                      <span class="material-symbols-outlined text-primary">group</span>
                  </div>
                  <div id="dash-followers" class="font-display-lg text-display-lg text-on-surface">...</div>
                  <div class="mt-sm font-label-md text-label-md text-outline">GitHub Network</div>
              </div>
          </section>
          
          <!-- Main Content Grid -->
          <section id="dash-bottom-section" class="grid grid-cols-1 lg:grid-cols-3 gap-md h-full relative z-10">
              <!-- Left Column: Activity & Focus -->
              <div class="lg:col-span-2 flex flex-col gap-md">
                  <div class="glass-panel interactive-glow rounded-xl p-lg flex-1 animate-entrance delay-200">
                      <h3 class="font-headline-md text-headline-md text-on-surface mb-lg">Recent GitHub Activity</h3>
                      <div id="dash-recent-activity" class="space-y-md relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-outline-variant/50">
                          <div class="text-on-surface-variant text-sm">Loading activity...</div>
                      </div>
                  </div>
              </div>
              
              <!-- Right Column: Tech Focus & Profile -->
              <div class="flex flex-col gap-md">
                  <div class="glass-panel interactive-glow rounded-xl p-lg animate-entrance delay-300">
                      <h3 class="font-headline-md text-headline-md text-on-surface mb-lg">Top Languages</h3>
                      <div id="dash-tech-focus" class="space-y-sm">
                          <div class="text-on-surface-variant text-sm">Loading languages...</div>
                      </div>
                  </div>
                  
                  <div class="glass-panel interactive-glow rounded-xl p-lg flex-1 flex flex-col items-center justify-center animate-entrance delay-400 text-center">
                      <div class="relative w-32 h-32 mb-md">
                          <svg class="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
                              <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(217, 119, 6, 0.2)" stroke-width="8"></circle>
                              <circle id="dash-completion-svg" class="transition-all duration-1000 ease-out" cx="50" cy="50" fill="none" r="45" stroke="#d97706" stroke-dasharray="282.7" stroke-dashoffset="282.7" stroke-width="8"></circle>
                          </svg>
                          <div class="absolute inset-0 flex items-center justify-center flex-col">
                              <span id="dash-completion-text" class="font-display-lg text-display-lg text-on-surface text-[24px] leading-none">0%</span>
                          </div>
                      </div>
                      <h4 class="font-body-lg text-body-lg text-on-surface font-semibold mb-xs">Profile Completion</h4>
                      <p class="font-body-md text-body-md text-outline mb-md">Update your bio and settings.</p>
                      <button onclick="window.location.hash='#/settings'" class="bg-primary text-on-primary font-label-md text-label-md px-md py-sm rounded-lg hover:bg-secondary transition-all w-full shadow-md hover:shadow-lg">Edit Profile</button>
                  </div>
              </div>
          </section>
      </div>
    </div>
  `;
}

export async function initDashboard() {
    try {
        const [user, github, projects, skills] = await Promise.all([
            api.getUser(),
            api.getGithubData(),
            api.getProjects(),
            api.getSkills()
        ]);

        // Populate Top Nav Avatar
        const avatarEl = document.getElementById('dash-avatar');
        if (avatarEl && user.avatar) avatarEl.src = user.avatar;
        else if (avatarEl && user.name) avatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`;

        // Populate Stats
        document.getElementById('dash-total-projects').innerText = projects.length || 0;
        
        // Skills Count dynamically derived from GitHub repositories (unique languages)
        let totalSkills = 0;
        if (github && github.repositories && !github.isNotConnected) {
            const langs = new Set();
            github.repositories.forEach(r => {
                if (r.language) langs.add(r.language);
            });
            totalSkills = langs.size;
        }
        document.getElementById('dash-skills-count').innerText = totalSkills;
        
        document.getElementById('dash-repos-count').innerText = github.publicRepos || 0;
        document.getElementById('dash-followers').innerText = github.followers || 0;

        // Profile Completion Calc
        let completion = 20; // base
        if (user.name) completion += 20;
        if (user.bio) completion += 20;
        if (user.role) completion += 20;
        if (user.github_username) completion += 20;

        document.getElementById('dash-completion-text').innerText = `${completion}%`;
        const circle = document.getElementById('dash-completion-svg');
        if (circle) {
            const circumference = 282.7;
            const offset = circumference - (completion / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }

        // Empty State: Connect GitHub
        const bottomSection = document.getElementById('dash-bottom-section');
        if (github.isNotConnected && bottomSection) {
            bottomSection.classList.remove('grid', 'grid-cols-1', 'lg:grid-cols-3');
            bottomSection.innerHTML = ConnectGithubUI();
            initConnectGithub(async () => {
                // Refresh dashboard automatically on success
                await initDashboard();
            });
            return;
        }
        // If connected, restore layout in case it was removed
        if (bottomSection) bottomSection.classList.add('grid', 'grid-cols-1', 'lg:grid-cols-3');

        // Recent Activity
        const activityContainer = document.getElementById('dash-recent-activity');
        if (activityContainer) {
            if (github.recentActivity && github.recentActivity.length > 0) {
                const colors = ['primary', 'secondary', 'tertiary'];
                activityContainer.innerHTML = github.recentActivity.map((act, idx) => {
                    const color = colors[idx % colors.length];
                    return `
                        <div class="relative pl-xl">
                            <div class="absolute left-0 top-1 w-[24px] h-[24px] rounded-full bg-surface border-2 border-${color} flex items-center justify-center">
                                <div class="w-2 h-2 bg-${color} rounded-full"></div>
                            </div>
                            <div class="font-body-md text-body-md text-on-surface">${act.type.replace('Event', '')} in <span class="text-${color} font-mono text-code-sm bg-${color}/10 px-xs rounded">${act.repo}</span></div>
                            <div class="font-label-md text-label-md text-outline mt-xs">${act.date}</div>
                        </div>
                    `;
                }).join('');
            } else {
                activityContainer.innerHTML = '<div class="text-on-surface-variant text-sm">No recent activity found.</div>';
            }
        }

        // Tech Focus / Top Languages
        const techContainer = document.getElementById('dash-tech-focus');
        if (techContainer) {
            if (github.topLanguages && github.topLanguages.length > 0) {
                const colors = ['primary', 'secondary', 'tertiary', 'primary'];
                techContainer.innerHTML = github.topLanguages.map((lang, idx) => {
                    const color = colors[idx % colors.length];
                    return `
                        <div>
                            <div class="flex justify-between font-label-md text-label-md mb-xs">
                                <span class="text-on-surface">${lang.name}</span>
                                <span class="text-${color}">${lang.percentage}%</span>
                            </div>
                            <div class="w-full bg-surface-variant/50 h-2 rounded-full overflow-hidden">
                                <div class="bg-${color} h-full rounded-full" style="width: ${lang.percentage}%"></div>
                            </div>
                        </div>
                    `;
                }).join('');
            } else {
                techContainer.innerHTML = '<div class="text-on-surface-variant text-sm">No language data available.</div>';
            }
        }

    } catch (e) {
        console.error("Dashboard Init Error", e);
    }
}
