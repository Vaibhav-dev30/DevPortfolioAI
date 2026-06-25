import { Logo } from './Logo.js';
export function Sidebar() {
    return `
      <!-- NavigationDrawer (Desktop/Mobile Toggleable) -->
      <nav id="app-sidebar" class="flex flex-col h-full py-lg px-md bg-surface/95 backdrop-blur-md text-primary h-screen w-64 fixed left-0 top-0 border-r border-outline-variant z-50 transform -translate-x-full transition-transform duration-300">
          <button id="close-sidebar-btn" class="absolute top-4 right-4 text-on-surface-variant hover:text-primary p-1">
              <span class="material-symbols-outlined">close</span>
          </button>
          <div class="mb-xl mt-2">
              ${Logo()}
          </div>
          
          <div class="flex items-center gap-md mb-xl">
              <div class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCufQPHT6IYkkfu1dLHxl0zqTMDk7f6AgbmDFtTYMGJ-wf0QErO_UiybuAU8k-EXJj0lqmOz6gRO8eW_5FRjdkvppZuhmlk3hpVjC2g1a4NC2mpYurenTnPKkU4rSEpYwUM9ljmDQpxhkTj9SKBdCHTX2FrewtdsI2bUpBZUFihKnzP_Rg21U3WaXEWtutbXCJ-kIEv917rvq1m-RHyjUy4U-hav1o6FdP0WhohAKN174M716yTlgOamGjttI8N9VVikw18OOGgT8I" alt="Developer Profile Avatar" class="w-full h-full object-cover">
              </div>
              <div>
                  <div class="font-headline-md text-headline-md text-sm">Alex Rivera</div>
                  <div class="font-body-md text-body-md text-on-surface-variant text-xs">Senior Engineer</div>
              </div>
          </div>
          
          <ul class="space-y-sm flex-1">
              <li>
                  <a href="#/dashboard" class="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-variant transition-colors duration-150 rounded-xl">
                      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">dashboard</span>
                      <span class="font-label-md text-label-md">Dashboard</span>
                  </a>
              </li>
              <li>
                  <a href="#/projects" class="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-variant transition-colors duration-150 rounded-xl">
                      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">folder_special</span>
                      <span class="font-label-md text-label-md">Projects</span>
                  </a>
              </li>
              <li>
                  <a href="#/skills" class="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-variant transition-colors duration-150 rounded-xl">
                      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">psychology</span>
                      <span class="font-label-md text-label-md">Skills</span>
                  </a>
              </li>
              <li>
                  <a href="#/github" class="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-variant transition-colors duration-150 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span class="font-label-md text-label-md">GitHub</span>
                  </a>
              </li>
              <li>
                  <a href="#/preview" class="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-variant transition-colors duration-150 rounded-xl">
                      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">visibility</span>
                      <span class="font-label-md text-label-md">Preview</span>
                  </a>
              </li>
              <li>
                  <a href="#/settings" class="flex items-center gap-md text-on-surface-variant px-md py-sm hover:bg-surface-variant transition-colors duration-150 rounded-xl">
                      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">settings</span>
                      <span class="font-label-md text-label-md">Settings</span>
                  </a>
              </li>
          </ul>
          
          <div class="mt-auto font-label-md text-label-md text-outline">v2.4.0</div>
      </nav>
      
      <!-- BottomNavBar (Mobile) -->
      <nav class="lg:hidden flex justify-around items-center h-16 px-4 pb-safe bg-surface-container-highest/90 backdrop-blur-md text-primary font-label-md text-label-md font-bold fixed bottom-0 w-full z-50 rounded-t-xl border-t border-outline-variant shadow-xl">
          <a href="#/dashboard" class="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-variant tap:scale-90 transition-all rounded-full px-4 py-1">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">home</span>
              <span>Home</span>
          </a>
          <a href="#/projects" class="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-variant tap:scale-90 transition-all rounded-full px-4 py-1">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">folder_copy</span>
              <span>Projects</span>
          </a>
          <a href="#/skills" class="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-variant tap:scale-90 transition-all rounded-full px-4 py-1">
              <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">psychology</span>
              <span>Skills</span>
          </a>
      </nav>
    `;
}
