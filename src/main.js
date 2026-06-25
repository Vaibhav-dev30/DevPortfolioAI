import { Landing, initLanding } from './views/Landing.js';
import { Dashboard, initDashboard } from './views/Dashboard.js';
import { Projects, initProjects } from './views/Projects.js';
import { Skills, initSkills } from './views/Skills.js';
import { GitHubProfile, initGitHub } from './views/GitHubProfile.js';
import { PortfolioPreview, initPreview } from './views/PortfolioPreview.js';
import { Settings, initSettings } from './views/Settings.js';
import { Auth, initAuthLogic } from './views/Auth.js';
import { initGLSLBackground } from './utils/shader.js';
import { initRingsBackground } from './utils/rings.js';
import { initAuth3D } from './utils/auth3d.js';

// Initialize global background
initGLSLBackground();
initRingsBackground();

const app = document.getElementById('app');

const routes = {
  '/': Landing,
  '/dashboard': Dashboard,
  '/projects': Projects,
  '/skills': Skills,
  '/github': GitHubProfile,
  '/preview': PortfolioPreview,
  '/settings': Settings,
  '/login': () => Auth(true),
  '/signup': () => Auth(false)
};

async function router() {
    let hash = window.location.hash;
    let isAnchor = hash && !hash.startsWith('#/');
    let path = isAnchor ? '/' : (hash.slice(1) || '/');
    
    const renderContent = routes[path];
    if (renderContent) {
        // Only re-render the DOM if the main route changed
        const currentPath = app.getAttribute('data-current-path');
        if (currentPath !== path) {
            // Cinematic fade-out effect
            app.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
            app.style.opacity = '0';
            app.style.transform = 'scale(0.98)';
            
            setTimeout(() => {
                app.innerHTML = renderContent();
                app.setAttribute('data-current-path', path);

                // Re-trigger scroll reveals
                const reveals = document.querySelectorAll('.reveal');
                reveals.forEach(el => {
                  el.classList.add('active');
                });

                // Animate progress bars
                setTimeout(() => {
                  const progressBars = document.querySelectorAll('.progress-bar-fill');
                  progressBars.forEach(bar => {
                      const targetWidth = bar.getAttribute('data-width') || bar.style.width;
                      if (targetWidth) {
                          bar.style.width = '0';
                          bar.offsetHeight; // force reflow
                          bar.style.width = targetWidth;
                      }
                  });
                }, 100);
                
                // Sidebar toggle logic
                const sidebar = document.getElementById('app-sidebar');
                const closeBtn = document.getElementById('close-sidebar-btn');
                const menuBtns = document.querySelectorAll('.menu-toggle-btn');
                
                if (sidebar) {
                    const toggleSidebar = () => {
                        sidebar.classList.toggle('-translate-x-full');
                    };
                    
                    closeBtn?.addEventListener('click', () => {
                        sidebar.classList.add('-translate-x-full');
                    });
                    
                    menuBtns.forEach(btn => {
                        btn.addEventListener('click', toggleSidebar);
                    });

                    // Close sidebar when clicking a link (mobile/overlay behavior)
                    const sidebarLinks = sidebar.querySelectorAll('a');
                    sidebarLinks.forEach(link => {
                        link.addEventListener('click', () => {
                            sidebar.classList.add('-translate-x-full');
                        });
                    });
                }

                const shaderCanvas = document.getElementById('shader-canvas');
                const ringsBg = document.getElementById('threejs-bg-container');

                if (path === '/') {
                   if(shaderCanvas) shaderCanvas.style.opacity = '1';
                   if(ringsBg) ringsBg.style.opacity = '1';
                   initLanding();
                } else if (path === '/login' || path === '/signup') {
                   if(shaderCanvas) shaderCanvas.style.opacity = '0';
                   if(ringsBg) ringsBg.style.opacity = '0';
                   initAuth3D();
                   initAuthLogic(path === '/login');
                } else {
                   if(shaderCanvas) shaderCanvas.style.opacity = '1'; // Enable shader for warm vibe
                   if(ringsBg) ringsBg.style.opacity = '0.5';

                   if (path === '/dashboard') {
                       if (initDashboard) initDashboard();
                   } else if (path === '/settings') {
                       if (initSettings) initSettings();
                   } else if (path === '/projects') {
                       if (initProjects) initProjects();
                   } else if (path === '/github') {
                       if (initGitHub) initGitHub();
                   } else if (path === '/preview') {
                       if (initPreview) initPreview();
                   } else if (path === '/skills') {
                       if (initSkills) initSkills();
                   }
                }
                
                // Handle scrolling back to top for new pages
                if (!isAnchor) {
                    window.scrollTo(0, 0);
                }

                // Cinematic fade-in effect
                void app.offsetWidth; // Force reflow
                app.style.opacity = '1';
                app.style.transform = 'scale(1)';
                
            }, 300); // Wait for fade-out to complete
        }

        // Handle anchor scrolling
        if (isAnchor) {
            setTimeout(() => {
                const el = document.getElementById(hash.slice(1));
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 350); // Wait for potential page swap fade-in
        }
    } else {
        app.innerHTML = '<div class="flex-1 flex items-center justify-center h-screen"><h1 class="font-headline-lg text-4xl text-on-surface">404 Not Found</h1></div>';
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
