import { Logo } from '../components/Logo.js';
import { TopNav } from '../components/TopNav.js';
import { api } from '../services/api.js';
import { ai } from '../services/ai.js';
import { ConnectGithubUI, initConnectGithub } from '../components/ConnectGithub.js';
import { generateTemplate } from '../components/TemplateEngine.js';
import { initDeployModal } from '../components/DeployModal.js';

let currentPaletteIdx = 0;
let currentFontIdx = 0;
let currentLayoutIdx = 0;

export function PortfolioPreview() {
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
          
          <div class="flex items-center gap-md relative z-10 min-w-max">
              <button id="btn-deploy" class="bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center gap-2 pulse-amber">
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
                    loading.gitfolio.ai
                </div>
                <div class="flex justify-end">
                    <button id="btn-generate-ai" class="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 border border-indigo-500/30 px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5 whitespace-nowrap">
                        <span class="material-symbols-outlined text-[14px]">smart_toy</span> AI Generation
                    </button>
                    <button id="btn-new-look" class="bg-surface-variant hover:bg-surface-container-highest border border-outline-variant px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5 whitespace-nowrap">
                        <span class="material-symbols-outlined text-[14px]">magic_button</span> Engine Generation
                    </button>
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
        const [user, projects, github, skills] = await Promise.all([
            api.getUser(),
            api.getProjects(),
            api.getGithubData(),
            api.getSkills()
        ]);

        const urlBar = document.getElementById('preview-url-bar');
        if (urlBar && user) {
            const sanitizedName = (user.name || user.github_username || 'dev').toLowerCase().replace(/[^a-z0-9]/g, '');
            urlBar.innerText = `https://${sanitizedName}.gitfolio.ai`;
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

        const renderTemplate = () => {
            const templateHtml = generateTemplate({
                user: user,
                projects: displayProjects,
                githubData: github,
                skills: skills
            }, currentPaletteIdx, currentFontIdx, currentLayoutIdx);
            
            previewContainer.innerHTML = templateHtml;
        };

        renderTemplate();

        // Setup Engine Generation Button
        const btnNewLook = document.getElementById('btn-new-look');
        if (btnNewLook) {
            const newBtn = btnNewLook.cloneNode(true);
            btnNewLook.parentNode.replaceChild(newBtn, btnNewLook);
            
            newBtn.addEventListener('click', () => {
                // Randomize palette, font, and layout
                const oldPalette = currentPaletteIdx;
                while (currentPaletteIdx === oldPalette) {
                    currentPaletteIdx = Math.floor(Math.random() * 14); // 14 palettes
                }
                currentFontIdx = Math.floor(Math.random() * 3);
                
                const oldLayout = currentLayoutIdx;
                while (currentLayoutIdx === oldLayout) {
                    currentLayoutIdx = Math.floor(Math.random() * 6); // 6 layouts
                }
                renderTemplate();
            });
        }

        // Setup AI Generation Button
        const btnAiGen = document.getElementById('btn-generate-ai');
        if (btnAiGen) {
            const newAiBtn = btnAiGen.cloneNode(true);
            btnAiGen.parentNode.replaceChild(newAiBtn, btnAiGen);
            
            newAiBtn.addEventListener('click', async () => {
                try {
                    newAiBtn.innerHTML = '<span class="material-symbols-outlined text-[14px] animate-spin">refresh</span> Generating...';
                    newAiBtn.disabled = true;

                    previewContainer.innerHTML = `
                        <div class="h-full w-full flex flex-col items-center justify-center">
                            <div class="relative mb-8">
                                <div class="w-20 h-20 border-[3px] border-indigo-500/20 border-t-indigo-400 rounded-full animate-spin"></div>
                                <div class="w-14 h-14 border-[3px] border-purple-500/20 border-b-purple-400 rounded-full animate-spin absolute top-3 left-3" style="animation-direction:reverse;animation-duration:0.8s"></div>
                            </div>
                            <h2 class="text-2xl font-bold text-on-surface mb-2 tracking-tight">AI is working...</h2>
                            <p class="text-on-surface-variant font-mono text-xs max-w-xs text-center leading-relaxed animate-pulse">Crafting layout · Styling animations · Writing components</p>
                        </div>
                    `;

                    const [user, projects, github, skills] = await Promise.all([
                        api.getUser(),
                        api.getProjects(),
                        api.getGithubData(),
                        api.getSkills()
                    ]);

                    let displayProjects = projects && projects.length > 0 ? projects : [];
                    if (displayProjects.length === 0 && github && github.repositories) {
                        displayProjects = api.extractBestProjects(github);
                    }

                    const html = await ai.generatePortfolio({
                        user,
                        projects: displayProjects,
                        githubData: github,
                        skills
                    });
                    
                    // Render AI HTML in an iframe so <style>/<script> work correctly
                    previewContainer.innerHTML = '';
                    previewContainer.style.overflow = 'hidden';
                    const iframe = document.createElement('iframe');
                    iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;';
                    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
                    previewContainer.appendChild(iframe);

                    iframe.addEventListener('load', () => {
                        try {
                            const doc = iframe.contentDocument || iframe.contentWindow.document;
                            // Force all reveal elements visible
                            doc.querySelectorAll('.reveal').forEach((el, i) => {
                                setTimeout(() => el.classList.add('visible'), i * 60);
                            });
                            // Expand iframe to full content height so previewContainer scrolls it
                            const expand = () => {
                                const h = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight, 600);
                                iframe.style.height = h + 'px';
                                previewContainer.style.overflow = 'auto';
                            };
                            // Measure after animations settle
                            setTimeout(expand, 800);
                        } catch (e) {
                            iframe.style.height = '3000px';
                            previewContainer.style.overflow = 'auto';
                        }
                    });

                    await new Promise(r => setTimeout(r, 50));
                    iframe.srcdoc = html;

                } catch (err) {
                    console.error('AI Generation failed', err);
                    alert(err.message || 'Failed to generate via AI.');
                    previewContainer.style.overflow = '';
                    renderTemplate(); // fallback to engine
                } finally {
                    newAiBtn.innerHTML = '<span class="material-symbols-outlined text-[14px]">smart_toy</span> AI Generation';
                    newAiBtn.disabled = false;
                }
            });
        }


        // Setup Deploy Modal
        initDeployModal(() => previewContainer.innerHTML);
        
        const deployBtn = document.getElementById('btn-deploy');
        if (deployBtn) {
            deployBtn.addEventListener('click', () => {
                window.openDeployModal();
            });
        }

    } catch (e) {
        console.error("Failed to render preview", e);
    }
}
