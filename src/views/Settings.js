import { Logo } from '../components/Logo.js';
import { TopNav } from '../components/TopNav.js';
import { api } from '../services/api.js';

export function Settings() {
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
          
          <div class="flex items-center gap-md min-w-max">
              <button id="btn-logout" class="bg-surface border border-outline-variant/50 hover:bg-surface-variant text-on-surface font-label-md text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                  <span class="material-symbols-outlined text-[18px]">logout</span> Logout
              </button>
          </div>
      </header>

      <div class="p-md md:p-lg flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full">
        <div class="glass-panel border border-outline-variant/50 animate-entrance delay-100 p-8 rounded-xl max-w-3xl mx-auto w-full">
            <h3 class="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline-variant/50 pb-2">Profile Management</h3>
            
            <form id="profile-form" class="flex flex-col gap-6">
                <div id="settings-error" class="hidden text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20"></div>
                <div id="settings-success" class="hidden text-green-600 text-sm font-bold bg-green-500/10 p-3 rounded-lg border border-green-500/20"></div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                        <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Full Name</label>
                        <input id="prof-name" type="text" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" placeholder="Alex Developer" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Role</label>
                        <input id="prof-role" type="text" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" placeholder="Full Stack Engineer" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                        <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">GitHub Username</label>
                        <input id="prof-github" type="text" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" placeholder="your-username" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Location</label>
                        <input id="prof-location" type="text" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" placeholder="San Francisco, CA" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                        <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Email (For Contact)</label>
                        <input id="prof-email" type="email" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" placeholder="hello@example.com" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">LinkedIn URL</label>
                        <input id="prof-linkedin" type="text" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" placeholder="https://linkedin.com/in/username" />
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Bio</label>
                    <textarea id="prof-bio" rows="3" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" placeholder="Building digital products..."></textarea>
                </div>
                
                <div class="mt-4 pt-6 border-t border-outline-variant/50 flex justify-end">
                    <button type="submit" id="btn-save-profile" class="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2">
                        Save Profile
                    </button>
                </div>
            </form>
        </div>

        <div class="glass-panel border border-outline-variant/50 animate-entrance delay-200 p-8 rounded-xl max-w-3xl mx-auto w-full">
            <h3 class="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline-variant/50 pb-2 flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">smart_toy</span> AI Engine Configuration
            </h3>
            
            <div class="flex flex-col gap-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="flex-1">
                        <div class="font-label-md text-label-md text-on-surface font-bold">GitHub Token (AI Generation)</div>
                        <div class="font-body-md text-[13px] text-on-surface-variant mt-1 max-w-md">Use your GitHub personal access token to power AI portfolio generation via <strong>GitHub Models (GPT-4o-mini)</strong>. Create one at <a href="https://github.com/settings/tokens" target="_blank" class="text-primary hover:underline">github.com/settings/tokens</a>. Stored locally only.</div>
                    </div>
                    <div class="flex-1 w-full md:w-auto flex gap-2">
                        <input id="settings-grok-key" type="password" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" placeholder="ghp_..." />
                        <button id="btn-save-key" class="bg-surface-variant hover:bg-surface-container-highest border border-outline-variant/60 text-on-surface font-label-md text-sm px-4 py-2 rounded-xl transition-colors shadow-sm">Save</button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  `;
}

export async function initSettings() {
    try {
        const user = await api.getUser();
        
        // Populate inputs
        if (user) {
            document.getElementById('prof-name').value = user.name || '';
            document.getElementById('prof-role').value = user.role || '';
            document.getElementById('prof-github').value = user.github_username || '';
            document.getElementById('prof-location').value = user.location || '';
            document.getElementById('prof-bio').value = user.bio || '';
            document.getElementById('prof-email').value = user.email || '';
            document.getElementById('prof-linkedin').value = user.linkedin_url || '';
        }
        
        // Load API Key
        const savedKey = localStorage.getItem('github_ai_key');
        if (savedKey) {
            document.getElementById('settings-grok-key').value = savedKey;
        }

        // Handle Form Submission
        const form = document.getElementById('profile-form');
        const errBox = document.getElementById('settings-error');
        const successBox = document.getElementById('settings-success');
        const saveBtn = document.getElementById('btn-save-profile');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            errBox.classList.add('hidden');
            successBox.classList.add('hidden');
            saveBtn.innerHTML = 'Saving...';
            saveBtn.disabled = true;

            const newProfile = {
                name: document.getElementById('prof-name').value.trim(),
                role: document.getElementById('prof-role').value.trim(),
                github_username: document.getElementById('prof-github').value.trim(),
                location: document.getElementById('prof-location').value.trim(),
                bio: document.getElementById('prof-bio').value.trim(),
                email: document.getElementById('prof-email').value.trim(),
                linkedin_url: document.getElementById('prof-linkedin').value.trim()
            };

            try {
                await api.updateUser(newProfile);
                successBox.innerText = "Profile updated successfully!";
                successBox.classList.remove('hidden');
            } catch (err) {
                console.error(err);
                errBox.innerText = err.message || "Failed to update profile.";
                errBox.classList.remove('hidden');
            } finally {
                saveBtn.innerHTML = 'Save Profile';
                saveBtn.disabled = false;
                setTimeout(() => { successBox.classList.add('hidden'); errBox.classList.add('hidden'); }, 3000);
            }
        });

        // Handle API Key Save
        document.getElementById('btn-save-key').addEventListener('click', (e) => {
            const btn = e.target;
            const key = document.getElementById('settings-grok-key').value.trim();
            localStorage.setItem('github_ai_key', key);
            btn.innerHTML = 'Saved!';
            btn.classList.add('bg-green-500/20', 'text-green-600', 'border-green-500/50');
            setTimeout(() => {
                btn.innerHTML = 'Save';
                btn.classList.remove('bg-green-500/20', 'text-green-600', 'border-green-500/50');
            }, 2000);
        });

        // Handle Logout
        const logoutBtn = document.getElementById('btn-logout');
        logoutBtn.addEventListener('click', async () => {
            try {
                await api.logout();
                window.location.hash = '#/login';
            } catch (err) {
                alert("Logout failed: " + err.message);
            }
        });

    } catch (e) {
        console.error("Settings Init Error", e);
    }
}
