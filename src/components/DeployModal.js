export function DeployModalUI() {
    return `
        <div id="deploy-modal-backdrop" class="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-surface border border-outline-variant/50 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative transform scale-95 transition-transform duration-300" id="deploy-modal-content">
                
                <button id="btn-close-deploy" class="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
                
                <div class="text-center mb-8">
                    <div class="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="material-symbols-outlined text-[32px]">check_circle</span>
                    </div>
                    <h2 class="text-2xl font-bold font-headline-md text-on-surface mb-2">Your Portfolio is Ready!</h2>
                    <p class="text-on-surface-variant font-body-md">We've compiled your exact design, colors, and data into a standalone HTML file.</p>
                </div>
                
                <div class="space-y-6">
                    <div class="p-6 bg-surface-variant/30 border border-outline-variant/50 rounded-xl">
                        <h3 class="font-bold text-on-surface mb-4 flex items-center gap-2">
                            <span class="w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center text-xs">1</span> 
                            Download Source Code
                        </h3>
                        <button id="btn-download-html" class="w-full bg-primary hover:bg-primary/90 text-on-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined">download</span> Download index.html
                        </button>
                    </div>
                    
                    <div class="p-6 bg-surface-variant/30 border border-outline-variant/50 rounded-xl">
                        <h3 class="font-bold text-on-surface mb-4 flex items-center gap-2">
                            <span class="w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center text-xs">2</span> 
                            Host for Free
                        </h3>
                        <p class="text-sm text-on-surface-variant mb-4">Drag and drop your downloaded file directly into Netlify Drop for instant, free hosting.</p>
                        <a href="https://app.netlify.com/drop" target="_blank" class="w-full border border-outline-variant hover:bg-surface-variant text-on-surface font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                            <span class="material-symbols-outlined">open_in_new</span> Open Netlify Drop
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function initDeployModal(getHtmlCallback) {
    // Append modal to body if not exists
    if (!document.getElementById('deploy-modal-backdrop')) {
        const div = document.createElement('div');
        div.innerHTML = DeployModalUI();
        document.body.appendChild(div.firstElementChild);
    }
    
    const backdrop = document.getElementById('deploy-modal-backdrop');
    const content = document.getElementById('deploy-modal-content');
    const closeBtn = document.getElementById('btn-close-deploy');
    const downloadBtn = document.getElementById('btn-download-html');
    
    // Open modal
    window.openDeployModal = () => {
        backdrop.classList.remove('hidden');
        // trigger reflow
        void backdrop.offsetWidth;
        backdrop.classList.remove('opacity-0');
        content.classList.remove('scale-95');
    };
    
    // Close modal
    const close = () => {
        backdrop.classList.add('opacity-0');
        content.classList.add('scale-95');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
    };
    
    closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) close();
    });
    
    // Handle Download
    downloadBtn.addEventListener('click', () => {
        const rawHtml = getHtmlCallback();
        
        // Wrap in full HTML document with Tailwind CDN
        const fullDoc = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {}
            }
        }
    </script>
</head>
<body class="antialiased">
    ${rawHtml}
</body>
</html>`;
        
        const blob = new Blob([fullDoc], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'portfolio.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}
