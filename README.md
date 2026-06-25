# GitFolioAI

GitFolioAI is a dynamic, modern web application designed for developers to create, manage, and preview their portfolios. Built with Vanilla JavaScript, HTML, and CSS, and powered by Vite, this application delivers a sleek, responsive user interface complete with interactive 3D WebGL backgrounds.

## Features

- **Dynamic Routing:** A custom vanilla JavaScript router for seamless single-page application (SPA) navigation.
- **Stunning 3D Backgrounds:** Incorporates GLSL shaders and Three.js-style 3D effects (`auth3d.js`, `rings.js`, `shader.js`) to provide an immersive visual experience.
- **Developer Dashboard:** Centralized view to track profile strength, portfolio completion, and analytics.
- **Project Management:** Showcase and manage your completed and in-progress projects with links to GitHub and live demos.
- **Skills Showcase:** Organize your technical skills across categories like Frontend, Backend, Database, Cloud & DevOps, and AI.
- **GitHub Integration (Mocked):** View a summary of your GitHub profile including followers, contributions, top languages, and recent activity.
- **Portfolio Preview:** Get a sneak peek of your generated portfolio before making it live.

## Tech Stack

- **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tool / Dev Server:** Vite
- **Visuals:** WebGL / Custom Shaders

## Project Structure

The project is thoughtfully structured to promote reusability and maintainability without the overhead of heavy frameworks:

- `src/views/` - Page-level components such as `Landing.js`, `Dashboard.js`, `Projects.js`, `Skills.js`, `GitHubProfile.js`, and `Auth.js`.
- `src/components/` - Reusable UI elements including `Button.js`, `Card.js`, `Sidebar.js`, and `TopNav.js`.
- `src/services/` - Contains the `api.js` file for mock data fetching (user info, projects, skills, github stats).
- `src/utils/` - Contains utility scripts specifically for rendering 3D and GLSL canvas backgrounds.
- `src/styles/` - Shared global styles.
- `src/main.js` - The entry point that initializes the app, backgrounds, and routing logic.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd GitFolioAI
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the Vite development server with hot-module replacement (HMR), run:

```bash
npm run dev
```

### Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License

This project is licensed under the MIT License.
