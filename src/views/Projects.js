import { Logo } from '../components/Logo.js';
import { TopNav } from '../components/TopNav.js';
import { api } from '../services/api.js';

export function Projects() {
  return `
    <div class="flex-1 flex flex-col min-h-screen relative z-10">
      
      <!-- TopAppBar with Shader Background -->
      <header class="relative flex justify-between items-center px-lg h-24 w-full sticky top-0 z-40 overflow-hidden bg-background/60 backdrop-blur-md border-b border-outline-variant/30">
          <div class="absolute inset-0 z-[-1] opacity-70" id="shader-container"></div>
          <div class="flex items-center gap-md relative z-10 min-w-max">
              ${Logo()}
          </div>
          
          <div class="flex-1 flex justify-center relative z-10 overflow-hidden mx-4">
              ${TopNav()}
          </div>
          
          <div class="flex items-center gap-sm md:gap-md relative z-10">
              <div class="relative group hidden sm:block">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">search</span>
                  <input class="bg-surface/80 backdrop-blur-sm border border-outline-variant rounded-lg py-2 pl-10 pr-4 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-32 md:w-48 lg:w-64" placeholder="Search projects..." type="text"/>
              </div>
              <a href="#/settings" class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden border border-outline-variant cursor-pointer hover:border-primary transition-colors shrink-0">
                  <img id="projects-avatar" src="https://ui-avatars.com/api/?name=User&background=random" class="w-full h-full object-cover"/>
              </a>
          </div>
      </header>
      
      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full relative">
          <!-- Actions & Filters -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
              <div class="flex flex-wrap gap-sm">
                  <button class="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary-fixed transition-colors">All</button>
                  <button class="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-sm">Web</button>
                  <button class="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-sm">Mobile</button>
                  <button class="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-sm">Open Source</button>
              </div>
              <div class="flex items-center gap-3">
                  <button id="btn-auto-import" class="flex items-center gap-sm bg-surface-container-lowest border border-outline-variant hover:border-primary text-on-surface hover:text-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors shadow-sm">
                      <span class="material-symbols-outlined text-sm text-secondary">auto_awesome</span>
                      Auto-Import from GitHub
                  </button>
                  <button id="btn-open-modal" class="flex items-center gap-sm bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20 pulse-amber">
                      <span class="material-symbols-outlined text-sm">add</span>
                      Add Project
                  </button>
              </div>
          </div>
          
          <!-- Projects Grid -->
          <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg relative z-10">
              <div class="text-on-surface-variant animate-pulse">Loading projects...</div>
          </div>
      </div>

      <!-- Add Project Modal -->
      <div id="add-project-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300">
          <div class="glass-panel w-full max-w-2xl mx-4 rounded-xl shadow-2xl border border-outline-variant/50 flex flex-col max-h-[90vh]">
              <div class="p-6 border-b border-outline-variant/50 flex justify-between items-center">
                  <h2 class="font-headline-md text-xl text-on-surface">Add New Project</h2>
                  <button id="btn-close-modal" class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">close</span></button>
              </div>
              
              <div class="p-6 overflow-y-auto flex-1">
                  <form id="add-project-form" class="flex flex-col gap-5">
                      <div id="project-error" class="hidden text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20"></div>
                      
                      <div class="flex flex-col gap-2">
                          <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Project Title *</label>
                          <input id="proj-title" required type="text" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all" placeholder="E.g., Nexus Dashboard" />
                      </div>
                      
                      <div class="flex flex-col gap-2">
                          <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Description</label>
                          <textarea id="proj-desc" rows="3" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all" placeholder="Briefly describe what this project does..."></textarea>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div class="flex flex-col gap-2">
                              <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Status</label>
                              <select id="proj-status" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all">
                                  <option value="Live">Live</option>
                                  <option value="WIP">WIP</option>
                                  <option value="Archived">Archived</option>
                              </select>
                          </div>
                          <div class="flex flex-col gap-2">
                              <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Tags (comma separated)</label>
                              <input id="proj-tags" type="text" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all" placeholder="React, Node, Tailwind" />
                          </div>
                      </div>

                      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div class="flex flex-col gap-2">
                              <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">GitHub URL</label>
                              <input id="proj-github" type="url" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all" placeholder="https://github.com/..." />
                          </div>
                          <div class="flex flex-col gap-2">
                              <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Live URL</label>
                              <input id="proj-live" type="url" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all" placeholder="https://..." />
                          </div>
                      </div>
                  </form>
              </div>
              
              <div class="p-6 border-t border-outline-variant/50 flex justify-end gap-3 bg-surface/30">
                  <button id="btn-cancel-modal" class="px-5 py-2.5 rounded-lg font-label-md text-sm text-on-surface-variant hover:bg-surface transition-colors border border-transparent hover:border-outline-variant">Cancel</button>
                  <button id="btn-submit-project" class="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-sm px-6 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2">Create Project</button>
              </div>
          </div>
      </div>
      
    </div>
  `;
}

export async function initProjects() {
    const renderGrid = async () => {
        try {
            const [user, projects] = await Promise.all([
                api.getUser(),
                api.getProjects()
            ]);

            // Avatar
            const avatarEl = document.getElementById('projects-avatar');
            if (avatarEl && user) {
                if (user.avatar) avatarEl.src = user.avatar;
                else if (user.name) avatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`;
            }

            const grid = document.getElementById('projects-grid');
            if (!grid) return;

            if (!projects || projects.length === 0) {
                grid.innerHTML = '<div class="col-span-full py-12 text-center text-on-surface-variant bg-surface-container-lowest border border-outline-variant/50 rounded-xl">No projects found. Click "Add Project" to get started!</div>';
                return;
            }

            const colors = ['primary', 'secondary', 'tertiary'];

            grid.innerHTML = projects.map((p, idx) => {
                const color = colors[idx % colors.length];
                const isWip = p.status === 'WIP';
                const pulseClass = isWip ? 'animate-pulse' : '';
                const tags = Array.isArray(p.tags) ? p.tags : (typeof p.tags === 'string' ? p.tags.split(',') : []);

                return `
                  <div class="glass-panel rounded-xl p-lg flex flex-col gap-md group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${color} to-${color} opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div class="flex justify-between items-start">
                          <div>
                              <h3 class="font-headline-md text-body-lg font-bold text-on-surface">${p.title}</h3>
                              <p class="font-label-md text-label-md text-${color} mt-1 flex items-center gap-1">
                                  <span class="w-2 h-2 rounded-full bg-${color} ${pulseClass}"></span> ${p.status || 'Live'}
                              </p>
                          </div>
                          <button class="btn-delete-project p-1 rounded-full hover:bg-red-500/10 text-outline hover:text-red-500 transition-colors group-hover:opacity-100 md:opacity-0" data-id="${p.id}" title="Delete Project">
                              <span class="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                      </div>
                      <p class="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">${p.description || ''}</p>
                      <div class="flex flex-col gap-md mt-auto">
                          <div class="flex flex-wrap gap-xs">
                              ${tags.map(t => `<span class="px-2 py-1 bg-surface-container-high rounded font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/50">${t.trim()}</span>`).join('')}
                          </div>
                          <div class="flex justify-between items-center pt-md border-t border-outline-variant">
                              <span class="font-label-md text-label-md text-outline">Custom Project</span>
                              <div class="flex gap-2">
                                  ${p.github_url ? `<a href="${p.github_url}" target="_blank" class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">code</span></a>` : ''}
                                  ${p.live_url ? `<a href="${p.live_url}" target="_blank" class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined">open_in_new</span></a>` : ''}
                              </div>
                          </div>
                      </div>
                  </div>
                `;
            }).join('');

            // Attach delete listeners
            const deleteBtns = grid.querySelectorAll('.btn-delete-project');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!confirm('Are you sure you want to delete this project?')) return;
                    
                    const id = btn.getAttribute('data-id');
                    const originalHtml = btn.innerHTML;
                    
                    try {
                        btn.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">sync</span>';
                        btn.disabled = true;
                        await api.deleteProject(id);
                        await renderGrid();
                    } catch (err) {
                        console.error(err);
                        alert('Failed to delete project.');
                        btn.innerHTML = originalHtml;
                        btn.disabled = false;
                    }
                });
            });

        } catch (e) {
            console.error("Failed to render projects", e);
        }
    };

    await renderGrid();

    // Modal Logic
    const modal = document.getElementById('add-project-modal');
    const btnOpen = document.getElementById('btn-open-modal');
    const btnClose = document.getElementById('btn-close-modal');
    const btnCancel = document.getElementById('btn-cancel-modal');
    const btnSubmit = document.getElementById('btn-submit-project');
    const form = document.getElementById('add-project-form');
    const errBox = document.getElementById('project-error');

    const openModal = () => {
        modal.classList.remove('hidden');
        // trigger reflow
        void modal.offsetWidth;
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
    };

    const closeModal = () => {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            form.reset();
            errBox.classList.add('hidden');
        }, 300);
    };

    if (btnOpen) btnOpen.addEventListener('click', openModal);
    if (btnClose) btnClose.addEventListener('click', closeModal);
    if (btnCancel) btnCancel.addEventListener('click', closeModal);

    if (btnSubmit) {
        btnSubmit.addEventListener('click', async (e) => {
            e.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            btnSubmit.innerHTML = 'Creating...';
            btnSubmit.disabled = true;
            errBox.classList.add('hidden');

            const projectData = {
                title: document.getElementById('proj-title').value,
                description: document.getElementById('proj-desc').value,
                status: document.getElementById('proj-status').value,
                tags: document.getElementById('proj-tags').value.split(',').map(s => s.trim()).filter(Boolean),
                github_url: document.getElementById('proj-github').value,
                live_url: document.getElementById('proj-live').value
            };

            try {
                await api.createProject(projectData);
                closeModal();
                await renderGrid(); // refresh
            } catch (err) {
                errBox.innerText = err.message || "Failed to create project.";
                errBox.classList.remove('hidden');
            } finally {
                btnSubmit.innerHTML = 'Create Project';
                btnSubmit.disabled = false;
            }
        });
    }

    const btnAutoImport = document.getElementById('btn-auto-import');
    if (btnAutoImport) {
        btnAutoImport.addEventListener('click', async () => {
            const originalHtml = btnAutoImport.innerHTML;
            btnAutoImport.innerHTML = '<span class="material-symbols-outlined text-sm text-secondary animate-spin">sync</span> Extracting...';
            btnAutoImport.disabled = true;

            try {
                const githubData = await api.getGithubData();
                if (githubData && githubData.isNotConnected) {
                    alert('Please connect your GitHub account first via the Dashboard or Skills tab!');
                    return;
                }
                
                const bestProjects = api.extractBestProjects(githubData);
                if (bestProjects.length === 0) {
                    alert('No suitable repositories found to import.');
                    return;
                }

                // Import each
                let imported = 0;
                for (const proj of bestProjects) {
                    try {
                        await api.createProject(proj);
                        imported++;
                    } catch(e) {
                        console.error('Failed to import project:', proj.title, e);
                    }
                }
                
                alert(`Successfully imported ${imported} projects from GitHub!`);
                await renderGrid();
            } catch (err) {
                console.error(err);
                alert('Failed to auto-import from GitHub.');
            } finally {
                btnAutoImport.innerHTML = originalHtml;
                btnAutoImport.disabled = false;
            }
        });
    }
}
