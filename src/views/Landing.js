import { Logo } from '../components/Logo.js';
export function Landing() {
  return `
    <!-- Top Navigation -->
    <nav class="relative z-50 w-full px-lg py-md flex justify-between items-center max-w-container-max mx-auto reveal active">
      <div class="flex items-center gap-sm cursor-pointer">
          ${Logo()}
      </div>
      <div class="hidden md:flex items-center gap-lg font-label-md text-label-md text-on-surface-variant">
          <a class="hover:text-primary transition-colors" href="#features">Features</a>
          <a class="hover:text-primary transition-colors" href="#how-it-works">How it Works</a>
          <a class="hover:text-primary transition-colors" href="#testimonials">Wall of Love</a>
      </div>
      <div class="flex items-center gap-md">
          <a href="#/login" class="hidden md:block font-label-md text-label-md text-on-surface hover:text-primary transition-colors">Log In</a>
          <a href="#/signup" class="glow-button bg-primary hover:bg-primary/90 text-white font-label-md text-label-md px-md py-sm rounded-lg transition-colors border border-transparent shadow-md">
              Get Started
          </a>
      </div>
    </nav>
    
    <!-- Hero Section -->
    <main class="relative z-10 w-full max-w-container-max mx-auto px-lg pt-24 pb-32 flex flex-col lg:flex-row items-center gap-xl min-h-[80vh]">

      
      <!-- Hero Text -->
      <div class="flex-1 flex flex-col items-start gap-lg z-10">
          <div class="inline-flex items-center gap-xs px-md py-sm rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/60 reveal active shadow-sm">
              <span class="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
              <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-semibold">v2.0 Beta Live</span>
          </div>
          <h1 class="font-display-lg text-display-lg font-bold text-on-surface leading-tight tracking-tight reveal active delay-100">
              Your Portfolio on <br/><span class="text-primary">Autopilot</span>
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl reveal active delay-200">
              Stop tweaking CSS and start shipping. Connect your GitHub, and our AI instantly curates your projects, categorizes your skills, and builds a premium showcase designed for top-tier engineers.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-md mt-sm w-full sm:w-auto reveal active delay-300">
              <a href="#/signup" class="glow-button w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-label-md text-label-md px-lg py-md rounded-lg transition-all shadow-lg flex items-center justify-center gap-sm group">
                  Get Started for Free
                  <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <button class="w-full sm:w-auto glass-panel hover:bg-surface-container-lowest transition-colors text-on-surface font-label-md text-label-md px-lg py-md rounded-lg flex items-center justify-center gap-sm font-semibold">
                  <span class="material-symbols-outlined text-[18px]">play_circle</span>
                  View Demo
              </button>
          </div>
          <p class="font-label-md text-label-md text-outline mt-sm reveal active delay-300">No credit card required. Free forever for open-source maintainers.</p>
      </div>
      
      <!-- Hero Visual (3D Code Snippet) -->
      <div class="flex-1 w-full relative h-[400px] lg:h-[500px] flex items-center justify-center reveal active delay-200">
          <div class="code-snippet-3d w-full max-w-md bg-surface-container-lowest rounded-xl border border-outline-variant/60 overflow-hidden z-10 relative">
              <div class="flex items-center px-4 py-3 bg-surface-container-low border-b border-outline-variant/40">
                  <div class="flex gap-2">
                      <div class="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                      <div class="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                      <div class="w-3 h-3 rounded-full bg-[#10b981]"></div>
                  </div>
                  <div class="mx-auto font-code-sm text-code-sm text-outline-variant font-medium">dev-portfolio.config.ts</div>
              </div>
              <div class="p-6 font-code-sm text-code-sm leading-relaxed text-on-surface-variant bg-surface-container-lowest overflow-hidden relative">
                  <pre class="m-0"><code class="language-typescript">
<span class="text-secondary">import</span> { definePortfolio } <span class="text-secondary">from</span> <span class="text-primary">'@gitfolio/core'</span>;

<span class="text-secondary">export default</span> definePortfolio({
  <span class="text-tertiary">source</span>: {
    github: <span class="text-primary">'@alexrivera'</span>,
    syncRules: [<span class="text-primary">'auto-categorize'</span>, <span class="text-primary">'extract-metrics'</span>]
  },
  <span class="text-tertiary">theme</span>: {
    preset: <span class="text-primary">'aurelian-minimal'</span>,
    font: <span class="text-primary">'Geist Mono'</span>
  },
  <span class="text-tertiary">aiFeatures</span>: {
    generateSummaries: <span class="text-secondary">true</span>,
    highlightImpact: <span class="text-secondary">true</span>
  }
});
                  </code></pre>
                  <div class="absolute bottom-4 right-4 bg-primary-container/80 border border-primary/20 rounded-md px-3 py-1.5 flex items-center gap-2 backdrop-blur-md shadow-sm">
                      <span class="material-symbols-outlined text-[14px] text-primary animate-spin">sync</span>
                      <span class="font-label-md text-[10px] text-primary uppercase font-bold">Syncing GitHub...</span>
                  </div>
              </div>
          </div>
          <!-- Floating Elements -->
          <div class="absolute -right-8 top-1/4 glass-panel p-3 rounded-lg z-20 flex items-center gap-3 transform translate-y-4 animate-[bounce_4s_ease-in-out_infinite]">
              <div class="w-8 h-8 rounded bg-primary-container flex items-center justify-center border border-primary/20">
                  <span class="material-symbols-outlined text-primary text-[18px]">psychology</span>
              </div>
              <div>
                  <div class="font-label-md text-[10px] text-outline uppercase font-bold">AI Analysis</div>
                  <div class="font-code-sm text-[12px] text-on-surface font-medium">React Mastery: 98%</div>
              </div>
          </div>
      </div>
    </main>
    
    <!-- Features Section -->
    <section class="relative z-10 w-full max-w-container-max mx-auto px-lg py-32" id="features">
      <div class="text-center mb-20 reveal">
          <div class="inline-flex items-center gap-xs px-md py-sm rounded-full bg-primary-container/20 border border-primary/20 mb-6">
              <span class="material-symbols-outlined text-[14px] text-primary">military_tech</span>
              <span class="font-label-md text-[12px] text-primary uppercase font-bold tracking-widest">Built for Engineers</span>
          </div>
          <h2 class="font-display-lg text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">Everything You Need to <br/><span class="text-primary italic">Stand Out</span></h2>
          <p class="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">We abstracted away the CSS and deployment pipelines so you can focus on what matters: showcasing your incredible engineering work.</p>
      </div>

      <!-- Feature 1: Alternating Layout -->
      <div class="flex flex-col lg:flex-row items-center gap-16 mb-32 reveal">
          <div class="flex-1 space-y-6">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-container to-surface-container-lowest border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10">
                  <span class="material-symbols-outlined text-primary text-3xl">psychology</span>
              </div>
              <h3 class="font-headline-lg text-3xl font-bold text-on-surface">Deep Code Analysis</h3>
              <p class="font-body-lg text-on-surface-variant leading-relaxed">Our AI doesn't just read your READMEs. It analyzes your commit history, architecture choices, and tech stack to generate profound insights about your engineering capabilities.</p>
              <ul class="space-y-4 mt-6">
                  <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary">check_circle</span>
                      <span class="font-body-md text-on-surface">Automatic skill extraction based on actual code.</span>
                  </li>
                  <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary">check_circle</span>
                      <span class="font-body-md text-on-surface">Generates compelling project summaries.</span>
                  </li>
                  <li class="flex items-center gap-3">
                      <span class="material-symbols-outlined text-primary">check_circle</span>
                      <span class="font-body-md text-on-surface">Identifies your architectural patterns.</span>
                  </li>
              </ul>
          </div>
          <div class="flex-1 w-full relative">
              <div class="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
              <div class="glass-panel p-6 rounded-2xl border border-outline-variant/50 relative z-10 transform transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 duration-500">
                  <div class="flex items-center gap-4 mb-6 border-b border-outline-variant/30 pb-4">
                      <div class="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center"><span class="material-symbols-outlined text-on-surface">memory</span></div>
                      <div>
                          <div class="font-bold text-on-surface text-sm">System Analysis Complete</div>
                          <div class="text-xs text-primary font-code-sm">1.4s parsing time</div>
                      </div>
                  </div>
                  <div class="space-y-3 font-code-sm text-sm text-outline">
                      <div class="flex justify-between items-center"><span class="text-tertiary">Found React Architecture</span> <span class="bg-surface-variant px-2 py-0.5 rounded text-xs text-on-surface">High Confidence</span></div>
                      <div class="flex justify-between items-center"><span class="text-secondary">Extracted CI/CD Pipelines</span> <span class="bg-surface-variant px-2 py-0.5 rounded text-xs text-on-surface">Verified</span></div>
                      <div class="flex justify-between items-center"><span class="text-primary">Generated Executive Summary</span> <span class="bg-surface-variant px-2 py-0.5 rounded text-xs text-on-surface">Ready</span></div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Feature 2: Alternating Layout -->
      <div class="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32 reveal delay-100">
          <div class="flex-1 space-y-6">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-container to-surface-container-lowest border border-secondary/20 flex items-center justify-center shadow-lg shadow-secondary/10">
                  <span class="material-symbols-outlined text-secondary text-3xl">palette</span>
              </div>
              <h3 class="font-headline-lg text-3xl font-bold text-on-surface">Premium Aesthetics</h3>
              <p class="font-body-lg text-on-surface-variant leading-relaxed">Stop wrestling with CSS grid. Choose from our highly curated, conversion-optimized themes. Each theme features micro-interactions, responsive fluid typography, and pixel-perfect glassmorphism.</p>
              <div class="max-w-xs mt-8">
                  <div class="p-4 rounded-xl border border-secondary bg-secondary-container/10 text-center cursor-pointer shadow-md shadow-secondary/5 relative">
                      <span class="absolute -top-2 -right-2 flex h-4 w-4">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-4 w-4 bg-secondary text-[8px] text-white items-center justify-center material-symbols-outlined">check</span>
                      </span>
                      <div class="w-full h-16 rounded-md bg-gradient-to-br from-[#f8f9ff] to-[#fdfbf7] mb-3 border border-outline-variant/30"></div>
                      <span class="font-label-md text-xs font-bold text-secondary">Aurelian Minimal</span>
                  </div>
              </div>
          </div>
          <div class="flex-1 w-full relative">
              <div class="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full"></div>
              <div class="relative z-10 w-full h-[300px] glass-panel border border-outline-variant/50 rounded-2xl overflow-hidden flex flex-col group">
                  <div class="h-8 bg-surface-container border-b border-outline-variant/30 flex items-center px-4 gap-2">
                      <div class="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                  </div>
                  <div class="flex-1 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
                      <div class="w-full h-full bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                         <div class="px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white font-bold tracking-widest text-sm">DESIGNED TO WOW</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Additional Grid Features -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal delay-200">
          <div class="glass-panel p-8 rounded-2xl border border-outline-variant/50 hover:border-tertiary/50 transition-all hover:shadow-xl hover:-translate-y-1">
              <span class="material-symbols-outlined text-tertiary text-4xl mb-6 block">rocket_launch</span>
              <h4 class="font-headline-md text-xl font-bold text-on-surface mb-3">Global Edge Deployment</h4>
              <p class="font-body-md text-on-surface-variant">We deploy your portfolio to a global CDN network instantly. 99.99% uptime, zero configuration required. Link your custom domain in seconds.</p>
          </div>
          <div class="glass-panel p-8 rounded-2xl border border-outline-variant/50 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
              <span class="material-symbols-outlined text-primary text-4xl mb-6 block">sync</span>
              <h4 class="font-headline-md text-xl font-bold text-on-surface mb-3">Continuous Sync</h4>
              <p class="font-body-md text-on-surface-variant">Your portfolio is a living document. We automatically sync your new GitHub repositories and commits, updating your skills and projects dynamically.</p>
          </div>
      </div>
    </section>
    
    <!-- How it Works (Bento Grid) -->
    <section class="relative z-10 w-full" id="how-it-works">
      <div class="max-w-container-max mx-auto px-lg py-32">
          <div class="text-center mb-20 reveal">
              <h2 class="font-display-lg text-4xl md:text-5xl font-bold text-on-surface mb-6">From Commits to Showcase in <span class="text-primary">30 Seconds</span></h2>
              <p class="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">No drag-and-drop builders. No writing copy. Just connect your code and let the AI do the heavy lifting.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Step 1 -->
              <div class="glass-panel p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group reveal shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div class="absolute top-0 right-0 w-48 h-48 bg-primary-container/40 rounded-full blur-3xl transition-colors group-hover:bg-primary-container/60"></div>
                  <div class="text-6xl font-display-lg font-bold text-primary/10 absolute -top-4 -left-2 select-none">1</div>
                  <div class="w-14 h-14 rounded-xl bg-surface border border-outline-variant/60 shadow-sm flex items-center justify-center mb-2 z-10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div class="z-10">
                      <h3 class="font-headline-md text-xl font-bold text-on-surface mb-3">Connect GitHub</h3>
                      <p class="font-body-md text-on-surface-variant">Secure, read-only access to your repositories. We instantly pull your public code, commit history, and technical metadata.</p>
                  </div>
              </div>
              
              <!-- Step 2 -->
              <div class="glass-panel p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group md:col-span-2 reveal delay-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-container/40 rounded-full blur-3xl transition-colors group-hover:bg-secondary-container/60"></div>
                  <div class="text-6xl font-display-lg font-bold text-secondary/10 absolute -top-4 -left-2 select-none">2</div>
                  <div class="w-14 h-14 rounded-xl bg-surface border border-outline-variant/60 shadow-sm flex items-center justify-center mb-2 z-10">
                      <span class="material-symbols-outlined text-secondary text-3xl">auto_awesome</span>
                  </div>
                  <div class="z-10 flex-1 flex flex-col">
                      <h3 class="font-headline-md text-xl font-bold text-on-surface mb-3">AI Curation & Synthesis</h3>
                      <p class="font-body-md text-on-surface-variant max-w-xl mb-6">Our engine analyzes your tech stack to identify your core competencies. It generates professional summaries for your complex projects, focusing on your specific engineering impact and architectural decisions.</p>
                      
                      <div class="mt-auto bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/50 rounded-xl p-4 flex flex-wrap gap-3 z-10 shadow-inner">
                          <span class="px-3 py-1.5 rounded-md bg-secondary-container/50 text-secondary border border-secondary/30 font-code-sm text-xs font-bold shadow-sm">Distributed Systems</span>
                          <span class="px-3 py-1.5 rounded-md bg-tertiary-container/50 text-tertiary border border-tertiary/30 font-code-sm text-xs font-bold shadow-sm">PostgreSQL</span>
                          <span class="px-3 py-1.5 rounded-md bg-primary-container/50 text-primary border border-primary/30 font-code-sm text-xs font-bold shadow-sm">Kubernetes</span>
                      </div>
                  </div>
              </div>
              
              <!-- Step 3 -->
              <div class="glass-panel p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group md:col-span-3 reveal delay-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div class="absolute inset-0 bg-gradient-to-r from-surface-container/20 via-transparent to-primary-container/20 z-0"></div>
                  <div class="text-6xl font-display-lg font-bold text-tertiary/10 absolute -top-4 -left-2 select-none">3</div>
                  
                  <div class="flex flex-col md:flex-row items-center gap-12 z-10">
                      <div class="flex-1 space-y-6">
                          <div class="flex items-center justify-between mb-2">
                              <div class="w-14 h-14 rounded-xl bg-surface border border-outline-variant/60 shadow-sm flex items-center justify-center">
                                  <span class="material-symbols-outlined text-tertiary text-3xl">public</span>
                              </div>
                              <span class="font-label-md text-xs text-tertiary bg-tertiary-container/50 border border-tertiary/30 px-4 py-1.5 rounded-full uppercase tracking-widest font-bold animate-pulse">Live</span>
                          </div>
                          <h3 class="font-headline-md text-2xl font-bold text-on-surface">Publish to the World</h3>
                          <p class="font-body-md text-on-surface-variant max-w-lg">Review your generated portfolio, customize the theme, and hit deploy. You'll get a professional, SEO-optimized showcase instantly hosted on our edge network.</p>
                          <a href="#/signup" class="glow-button inline-flex bg-primary hover:bg-primary/90 text-white font-label-md px-6 py-3 rounded-lg transition-all shadow-md items-center gap-2 mt-4">
                              Create My Portfolio <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </a>
                      </div>
                      
                      <!-- Visual mock of the output -->
                      <div class="flex-1 w-full bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-xl overflow-hidden p-6 relative">
                          <div class="absolute top-4 right-4 flex gap-1.5">
                              <div class="w-2.5 h-2.5 rounded-full bg-outline-variant/40"></div>
                              <div class="w-2.5 h-2.5 rounded-full bg-outline-variant/40"></div>
                          </div>
                          <div class="w-24 h-24 rounded-full bg-primary-container border-4 border-surface mb-4"></div>
                          <div class="w-1/2 h-6 bg-outline-variant/30 rounded-md mb-3"></div>
                          <div class="w-1/3 h-4 bg-outline-variant/20 rounded-md mb-8"></div>
                          <div class="grid grid-cols-2 gap-4">
                              <div class="h-20 rounded-lg bg-surface-container border border-outline-variant/20"></div>
                              <div class="h-20 rounded-lg bg-surface-container border border-outline-variant/20"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <!-- Wall of Love -->
    <section class="relative z-10 w-full max-w-container-max mx-auto px-lg py-32" id="testimonials">
      <div class="text-center mb-20 reveal">
          <div class="inline-flex items-center gap-xs px-md py-sm rounded-full bg-tertiary-container/20 border border-tertiary/20 mb-6">
              <span class="material-symbols-outlined text-[14px] text-tertiary">favorite</span>
              <span class="font-label-md text-[12px] text-tertiary uppercase font-bold tracking-widest">Wall of Love</span>
          </div>
          <h2 class="font-display-lg text-4xl md:text-5xl font-bold text-on-surface mb-6">Loved by Top Engineers</h2>
          <p class="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto">Join thousands of developers who stopped writing CSS and started shipping their portfolios.</p>
      </div>
      
      <!-- Masonry-style Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="glass-panel p-8 rounded-2xl border border-outline-variant/50 reveal shadow-sm hover:shadow-md transition-shadow">
              <div class="flex text-primary mb-6 gap-1">
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              </div>
              <p class="font-body-lg text-on-surface-variant italic mb-8">"It literally took me 30 seconds to generate a portfolio that looks better than the one I spent 3 weeks building from scratch. The AI summaries are surprisingly accurate."</p>
              <div class="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Sarah Jenkins" class="w-12 h-12 rounded-full border border-outline-variant object-cover" />
                  <div>
                      <div class="font-bold text-on-surface text-sm">Sarah Jenkins</div>
                      <div class="text-xs text-primary font-medium mt-0.5">Frontend Lead @ TechCorp</div>
                  </div>
              </div>
          </div>
          
          <div class="glass-panel p-8 rounded-2xl border border-outline-variant/50 reveal delay-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex text-primary mb-6 gap-1">
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              </div>
              <p class="font-body-lg text-on-surface-variant italic mb-8">"The AI accurately extracted my React, Node.js, and Terraform skills from my chaotic commit history. Absolute magic. Sent the link to a recruiter and got an interview the next day."</p>
              <div class="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=33" alt="David Chen" class="w-12 h-12 rounded-full border border-outline-variant object-cover" />
                  <div>
                      <div class="font-bold text-on-surface text-sm">David Chen</div>
                      <div class="text-xs text-primary font-medium mt-0.5">Fullstack Developer</div>
                  </div>
              </div>
          </div>
          
          <div class="glass-panel p-8 rounded-2xl border border-outline-variant/50 reveal delay-200 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex text-primary mb-6 gap-1">
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
              </div>
              <p class="font-body-lg text-on-surface-variant italic mb-8">"The glassmorphism theme looks incredibly premium. I finally have a portfolio I'm proud to share with the open-source community. Highly recommended for any maintainer."</p>
              <div class="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=47" alt="Elena Rodriguez" class="w-12 h-12 rounded-full border border-outline-variant object-cover" />
                  <div>
                      <div class="font-bold text-on-surface text-sm">Elena Rodriguez</div>
                      <div class="text-xs text-primary font-medium mt-0.5">Open Source Maintainer</div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative z-10 w-full px-lg pb-32 pt-16">
        <div class="max-w-container-max mx-auto glass-panel bg-surface-container-lowest/40 backdrop-blur-md border border-outline-variant/50 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden reveal shadow-2xl">
            <!-- Decorative blur -->
            <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
            
            <div class="relative z-10">
                <h2 class="font-display-lg text-4xl md:text-5xl font-bold text-on-surface mb-6">Stop tweaking. Start <span class="text-primary underline decoration-primary/30 underline-offset-8">shipping</span>.</h2>
                <p class="font-body-lg text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">Your next big opportunity is waiting. Build a premium developer portfolio in exactly 30 seconds.</p>
                <a href="#/signup" class="glow-button inline-flex bg-primary hover:bg-primary/90 text-white font-headline-md text-lg px-10 py-5 rounded-xl transition-all shadow-xl shadow-primary/20 items-center justify-center gap-3">
                    Claim Your Portfolio
                    <span class="material-symbols-outlined">rocket_launch</span>
                </a>
                <p class="font-label-md text-sm text-outline mt-6 uppercase tracking-widest font-bold">Free Forever. No Credit Card Needed.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 w-full px-lg py-12 border-t border-outline-variant/30 bg-surface-container-lowest/30 backdrop-blur-sm">
        <div class="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="flex items-center gap-sm">
                ${Logo()}
            </div>
            <div class="flex flex-wrap justify-center items-center gap-6 font-label-md text-sm text-on-surface-variant">
                <a href="#" class="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" class="hover:text-primary transition-colors">Contact</a>
            </div>
            <div class="font-label-md text-sm text-outline">
                &copy; 2026 GitFolio AI. All rights reserved.
            </div>
        </div>
    </footer>
  `;
}

export function initLanding() {
  // Initialize reveal logic for scroll animations
  function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 100;
          if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
          }
      }
  }
  window.addEventListener("scroll", reveal);
  setTimeout(reveal, 100);
}
