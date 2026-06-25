export function Logo() {
    return `
        <div class="flex items-center gap-2 relative group cursor-default">
            <!-- Animated Node Logo (Git Commit / Atom reference) -->
            <div class="relative w-8 h-8 flex items-center justify-center shrink-0">
                <!-- Center Node -->
                <div class="w-2 h-2 bg-primary rounded-full z-10 shadow-[0_0_8px_currentColor] text-primary"></div>
                <!-- Orbital Ring 1 -->
                <div class="absolute inset-0 border-[1.5px] border-primary/40 rounded-full animate-[spin_3s_linear_infinite]">
                    <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_6px_currentColor] text-primary"></div>
                </div>
                <!-- Orbital Ring 2 -->
                <div class="absolute inset-1 border border-primary/30 rounded-full animate-[spin_4s_linear_infinite_reverse]">
                    <div class="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/80 rounded-full"></div>
                </div>
            </div>
            
            <!-- GitFolio Text -->
            <div class="font-headline-md text-[22px] font-extrabold tracking-tighter flex items-center">
                <span class="text-on-surface">Git</span><span class="text-primary">Folio</span>
                <span class="text-primary text-[9px] font-bold tracking-widest uppercase ml-1 translate-y-[-8px] opacity-80 animate-pulse">AI</span>
            </div>
        </div>
    `;
}
