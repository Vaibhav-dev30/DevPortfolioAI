import { Logo } from '../components/Logo.js';
export function Auth(isLogin = true) {
    return `
      <style>
      @keyframes buttonEscape {
          0% { transform: translate(0, 0); opacity: 1; }
          25% { transform: translate(30px, 0); opacity: 1; } /* Right */
          50% { transform: translate(30px, -40px); opacity: 0.9; } /* Up */
          75% { transform: translate(-30px, -40px); opacity: 0.6; } /* Left */
          100% { transform: translate(-30px, 150vh) scale(0.5); opacity: 0; } /* Down escaping */
      }
      </style>
      <div class="flex flex-col lg:flex-row h-screen bg-surface relative overflow-hidden">
         
         <!-- Left Side: 3D Animation (Hidden on mobile) -->
         <div class="hidden lg:flex flex-1 relative bg-surface items-center justify-center overflow-hidden border-r border-outline-variant/30">
            <div class="absolute inset-0 z-0 bg-gradient-to-br from-surface via-primary/5 to-secondary/5"></div>
            <div id="auth-threejs-container" class="absolute inset-0 z-10 w-full h-full pointer-events-none"></div>
            
            <!-- Optional subtle marketing text overlaid on the 3D -->
            <div class="absolute bottom-12 left-12 right-12 z-20 pointer-events-none">
                <h2 class="font-display-lg text-5xl font-bold text-on-surface mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">Your Engineering<br/>Legacy.</h2>
                <p class="font-body-lg text-on-surface-variant text-lg max-w-md bg-surface/40 backdrop-blur-md p-4 rounded-xl border border-white/30 shadow-lg">The AI-powered portfolio designed specifically for top-tier developers. Connect GitHub and deploy.</p>
            </div>
         </div>

         <!-- Right Side: Clean Form -->
         <div class="flex-1 flex flex-col items-center justify-center relative p-8 sm:p-12 z-20 bg-surface-container-lowest overflow-y-auto">
            
             <!-- Back button -->
             <div class="w-full max-w-[420px] mx-auto mb-4 sm:mb-6 flex justify-start">
                 <a href="#/" class="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group px-4 py-2 rounded-full border border-outline-variant/30 hover:border-primary/50 shadow-sm bg-surface">
                     <span class="material-symbols-outlined transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
                     <span class="font-label-md text-sm font-bold">Back to Home</span>
                 </a>
             </div>

             <div class="w-full max-w-[420px] animate-entrance mx-auto pb-4">
                <div class="text-center mb-6">
                    <div class="flex justify-center mb-6 scale-125">${Logo()}</div>
                    <h1 class="font-display-lg text-4xl font-bold text-on-surface mb-3">${isLogin ? 'Welcome back' : 'Create account'}</h1>
                    <p class="font-body-lg text-on-surface-variant text-lg">
                       ${isLogin ? "Don't have an account?" : "Already have an account?"} 
                       <a href="${isLogin ? '#/signup' : '#/login'}" class="text-primary hover:text-primary/80 font-bold transition-colors hover:underline underline-offset-4">
                          ${isLogin ? 'Sign up' : 'Log in'}
                       </a>
                    </p>
                </div>

                <div class="flex gap-4 mb-5">
                    <button class="w-full flex items-center justify-center gap-2 bg-surface hover:bg-surface-container-highest border border-outline-variant/50 transition-colors rounded-xl py-2.5 font-label-md text-sm font-bold text-on-surface shadow-sm hover:shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                    </button>
                    <button class="w-full flex items-center justify-center gap-2 bg-surface hover:bg-surface-container-highest border border-outline-variant/50 transition-colors rounded-xl py-2.5 font-label-md text-sm font-bold text-on-surface shadow-sm hover:shadow">
                        <img src="https://www.google.com/favicon.ico" alt="Google" class="w-4 h-4" />
                        Google
                    </button>
                </div>

                <div class="relative flex items-center justify-center mb-5">
                    <div class="absolute inset-x-0 h-[1px] bg-outline-variant/40"></div>
                    <span class="relative bg-surface-container-lowest px-4 font-label-md text-xs text-on-surface-variant font-bold uppercase tracking-widest">Or continue with email</span>
                </div>

                <form id="auth-form" class="flex flex-col gap-4">
                    <div id="auth-error" class="hidden text-red-500 text-sm font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20"></div>
                    ${!isLogin ? `
                    <div class="flex flex-col gap-1.5">
                        <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Full Name</label>
                        <input type="text" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm placeholder:text-on-surface-variant/40" placeholder="John Doe" required />
                    </div>
                    ` : ''}
                    
                    <div class="flex flex-col gap-1.5">
                        <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Email Address</label>
                        <input id="auth-email" type="email" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm placeholder:text-on-surface-variant/40" placeholder="you@company.com" required />
                    </div>

                    <div class="flex flex-col gap-1.5 relative">
                        <div class="flex justify-between items-center">
                            <label class="font-label-md text-xs font-bold text-on-surface uppercase tracking-wider">Password</label>
                            ${isLogin ? '<a href="#" class="font-label-md text-xs text-primary hover:underline hover:text-primary/80 transition-colors">Forgot?</a>' : ''}
                        </div>
                        <input id="auth-password" type="password" class="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm placeholder:text-on-surface-variant/40" placeholder="••••••••" required />
                    </div>

                    <!-- Unique Premium Button with CSS glow -->
                    <div id="auth-submit-wrapper" class="mt-4 relative group cursor-pointer w-full">
                        <div class="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500 animate-pulse bg-[length:200%_auto] hover:bg-[right_center]"></div>
                        <button type="submit" class="relative w-full bg-primary border border-primary-container rounded-xl py-3 font-label-md text-sm font-bold text-on-primary flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_40px_rgba(217,119,6,0.5)] hover:-translate-y-0.5">
                            <span class="relative z-10 flex items-center gap-2">
                                ${isLogin ? 'Log In to Dashboard' : 'Create Free Account'}
                                <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                    </div>
                </form>
             </div>
         </div>
      </div>
    `;
}

import { supabase } from '../services/supabase.js';

export function initAuthLogic(isLogin) {
    const form = document.getElementById('auth-form');
    const errorBox = document.getElementById('auth-error');
    const emailInput = document.getElementById('auth-email');
    const passwordInput = document.getElementById('auth-password');
    const btnWrapper = document.getElementById('auth-submit-wrapper');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorBox.classList.add('hidden');
        errorBox.innerText = '';

        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            let result;
            if (isLogin) {
                result = await supabase.auth.signInWithPassword({ email, password });
            } else {
                result = await supabase.auth.signUp({ email, password });
            }

            if (result.error) throw result.error;

            // Success animation and redirect
            if (btnWrapper) {
                btnWrapper.style.animation = 'buttonEscape 1.2s cubic-bezier(0.5, 0, 0.2, 1) forwards';
            }
            setTimeout(() => {
                window.location.hash = '#/dashboard';
            }, 1100);

        } catch (err) {
            errorBox.innerText = err.message || 'Authentication failed.';
            errorBox.classList.remove('hidden');
        }
    });
}
