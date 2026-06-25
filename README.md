<div align="center">

  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="GitFolio AI Logo" width="100" />

  <h1 align="center">🚀 GitFolio AI</h1>

  <p align="center">
    <strong>An AI-Powered, Premium Developer Portfolio Generator</strong><br/>
    <em>Turn your GitHub profile into a breathtaking $5000+ agency-quality portfolio in seconds.</em>
    <br />
    <br />
    <a href="https://git-folio-ai.vercel.app/"><strong>🔥 View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/yourusername/DevPortfolioAI/issues">Report Bug</a>
    ·
    <a href="https://github.com/yourusername/DevPortfolioAI/issues">Request Feature</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  </p>

  <!-- Replace this with a real screenshot/GIF of the app later -->
  <img src="https://via.placeholder.com/1000x500/121d33/ffffff?text=Add+A+GIF+of+GitFolioAI+Here" alt="Project Demo" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);" />

</div>

---

## 🌟 About The Project

Building a high-quality portfolio takes time that developers would rather spend coding. **GitFolio AI** solves this by instantly fetching your real GitHub data (repositories, languages, commits) and passing it through a deterministic AI engine to generate a stunning, responsive, and animated portfolio.

No more boring templates. Choose from **14 premium color palettes** and **6 unique layouts** to create over **80+ unique design permutations**, all completely deployment-ready without writing a single line of CSS.

### ✨ Key Features

- 🤖 **AI-Assisted Engine:** Integrates with GitHub Models (`gpt-4o-mini`) to seamlessly write your bio, summarize your projects, and clean up your data.
- 🎨 **Hybrid Template Engine:** Guaranteed pixel-perfect layouts! The AI acts as the brain, while our deterministic CSS engine ensures the interface looks like a $5000 agency built it.
- ⚡ **Zero Backend Required:** Fully serverless architecture. Connects directly to GitHub and AI Inference endpoints straight from the client.
- 🌌 **Immersive 3D Environments:** Features buttery-smooth WebGL shaders, Three.js rings, and cinematic page transitions.
- 📱 **100% Responsive:** Bento grids, magazine layouts, and terminal themes that look gorgeous on any screen.
- ☁️ **Supabase Integration:** Includes an optional graceful fallback database for storing users, projects, and skills persistently.

---

## 🚀 Live Demo

Experience the app right now in your browser:
👉 **[git-folio-ai.vercel.app](https://git-folio-ai.vercel.app/)**

---

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need `npm` or `yarn` installed on your machine.
```bash
npm install npm@latest -g
```

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/DevPortfolioAI.git
   cd DevPortfolioAI
   ```

2. **Install NPM packages**
   ```bash
   npm install
   ```

3. **Set up Environment Variables (Optional but recommended for database)**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
   VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
   ```
   *Note: You can run the provided `supabase-setup.sql` in your Supabase SQL editor to instantly create the required database tables.*

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Generate a Portfolio!**
   Go to the "Settings" tab in the app, plug in a **GitHub Personal Access Token** and a **GitHub Models AI Token**, and click *Engine Generation* to watch the magic happen.

---

## 📚 Architectural Overview

- **`src/main.js`**: Core SPA vanilla router and dynamic route handling.
- **`src/components/TemplateEngine.js`**: The CSS/HTML brain containing 14 Palettes & 6 Layout Functions (Hero, Split, Bento, Magazine, Terminal, Minimal).
- **`src/services/ai.js`**: The bridge connecting the GitHub API data to the LLM model to spit out perfectly formatted UI context.
- **`src/utils/`**: Heavy lifting for animations (`shader.js`, `auth3d.js`, `rings.js`).

---

## 🤝 Connect With Me

<div align="center">
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUR-GITHUB-USERNAME)
  [![Portfolio](https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=Globe&logoColor=white)](https://git-folio-ai.vercel.app/)

  **Built with ❤️ by [Your Name]**

</div>

---

<p align="center">
  <em>If you like this project, please consider giving it a ⭐ on GitHub!</em>
</p>
