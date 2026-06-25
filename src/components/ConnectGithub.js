import { api } from '../services/api.js';

export function ConnectGithubUI() {
    return `
        <div class="glass-panel border border-outline-variant/50 animate-entrance p-12 text-center rounded-xl col-span-full max-w-3xl mx-auto w-full">
            <span class="material-symbols-outlined text-primary text-[64px] mb-4 block">terminal</span>
            <h3 class="font-headline-md text-headline-md text-on-surface mb-4">Connect GitHub</h3>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-8">Authorize DevPortfolio AI to read your repositories by providing your GitHub username. We will automatically generate your portfolio and extract your skills.</p>
            
            <form id="shared-github-connect-form" class="max-w-sm mx-auto flex flex-col gap-4">
                <div id="shared-github-connect-err" class="hidden text-red-500 text-sm font-bold bg-red-500/10 p-2 rounded-lg border border-red-500/20"></div>
                <input id="shared-github-connect-input" required type="text" class="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3 font-body-md text-center text-on-surface focus:outline-none focus:border-primary transition-all shadow-inner" placeholder="Your GitHub Username (e.g. torvalds)" />
                <button type="submit" id="shared-btn-github-connect" class="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mx-auto pulse-amber w-full">
                    <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    Connect Account
                </button>
            </form>
        </div>
    `;
}

export function initConnectGithub(onSuccessCallback) {
    const form = document.getElementById('shared-github-connect-form');
    const btn = document.getElementById('shared-btn-github-connect');
    const errBox = document.getElementById('shared-github-connect-err');
    
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('shared-github-connect-input').value.trim();
        if (!username) return;

        btn.innerHTML = 'Connecting...';
        btn.disabled = true;
        errBox.classList.add('hidden');

        try {
            await api.updateUser({ github_username: username });
            if (onSuccessCallback) {
                await onSuccessCallback();
            }
        } catch (err) {
            errBox.innerText = err.message || "Failed to save username.";
            errBox.classList.remove('hidden');
            btn.innerHTML = 'Connect Account';
            btn.disabled = false;
        }
    });
}
