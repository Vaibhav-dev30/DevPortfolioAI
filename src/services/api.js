// Mock API Service for Phase 1
import { supabase } from './supabase.js';


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const mockUser = {
  name: "Alex Developer",
  role: "Full Stack Engineer",
  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  bio: "Building digital products and exploring AI. Open source contributor.",
  location: "San Francisco, CA"
};

const mockProjects = [
  {
    id: 1,
    title: "EcoTrack",
    description: "A carbon footprint monitoring dashboard built with React and D3.js. Helps companies track and reduce their emissions.",
    status: "Completed",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80"
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    description: "Automated PR review bot that uses LLMs to suggest improvements and catch bugs before merging.",
    status: "In Progress",
    tags: ["Python", "OpenAI", "GitHub Actions"],
    githubUrl: "#",
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80"
  },
  {
    id: 3,
    title: "FinTech UI Kit",
    description: "A comprehensive design system and component library specifically tailored for financial applications.",
    status: "Completed",
    tags: ["Figma", "React", "Storybook", "TailwindCSS"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=500&q=80"
  }
];

const mockSkills = [
  { category: "Frontend", items: ["React", "Vue", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"], level: 90 },
  { category: "Backend", items: ["Node.js", "Python", "Go", "Express", "GraphQL"], level: 85 },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"], level: 75 },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions", "Vercel"], level: 70 },
  { category: "AI & ML", items: ["OpenAI API", "LangChain", "TensorFlow basics"], level: 60 }
];

const mockGithubData = {
  username: "alexdev",
  followers: 1240,
  following: 45,
  publicRepos: 42,
  contributionsLastYear: 1845,
  topLanguages: [
    { name: "JavaScript", percentage: 45 },
    { name: "TypeScript", percentage: 30 },
    { name: "Python", percentage: 15 },
    { name: "CSS", percentage: 10 }
  ],
  recentActivity: [
    { type: "PushEvent", repo: "alexdev/ai-reviewer", date: "2 hours ago" },
    { type: "PullRequestEvent", repo: "facebook/react", date: "1 day ago" },
    { type: "CreateEvent", repo: "alexdev/fintech-kit", date: "3 days ago" }
  ]
};

const mockAnalytics = {
  profileStrength: 85,
  portfolioCompletion: 90,
  totalProjects: 12,
  totalSkills: 24,
  monthlyViews: 1245,
  recentUpdates: 5
};

export const api = {
  getUser: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not logged in");
      const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      if (error || !data) throw error;
      return data;
    } catch (err) {
      console.warn("Using mock user", err.message);
      await delay(300);
      return mockUser;
    }
  },
  getProjects: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not logged in");
      const { data, error } = await supabase.from('projects').select('*').eq('user_id', user.id);
      if (error) throw error;
      return data || [];
    } catch (err) {
      console.warn("Using mock projects", err.message);
      await delay(500);
      return mockProjects;
    }
  },
  getSkills: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not logged in");
      const { data, error } = await supabase.from('skills').select('*').eq('user_id', user.id);
      if (error) throw error;
      return data && data.length > 0 ? data : mockSkills;
    } catch (err) {
      console.warn("Using mock skills", err.message);
      await delay(400);
      return mockSkills;
    }
  },
  getGithubData: async () => {
    try {
      // Fetch dynamic username from profile
      let username = 'Vaibhav-dev30'; // fallback
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
           const { data: profile } = await supabase.from('profiles').select('github_username').eq('id', user.id).single();
           if (profile && profile.github_username) {
               username = profile.github_username;
           }
        }
      } catch(e) { /* ignore */ }

      const [userRes, reposRes, eventsRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        fetch(`https://api.github.com/users/${username}/events/public?per_page=5`)
      ]);

      const user = await userRes.json();
      const repos = await reposRes.json();
      const events = await eventsRes.json();

      // Calculate Top Languages
      const languageCounts = {};
      let totalCount = 0;
      if (Array.isArray(repos)) {
        repos.forEach(repo => {
          if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
            totalCount++;
          }
        });
      }

      const topLanguages = Object.entries(languageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([name, count]) => ({
          name,
          percentage: Math.round((count / totalCount) * 100)
        }));

      // Format Recent Activity
      const recentActivity = Array.isArray(events) ? events.slice(0, 3).map(event => {
        const date = new Date(event.created_at);
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        let dateStr = diffDays > 0 ? `${diffDays} days ago` : `${diffHours} hours ago`;
        if (diffHours === 0) dateStr = 'Just now';

        return {
          type: event.type,
          repo: event.repo ? event.repo.name : 'Unknown',
          date: dateStr
        };
      }) : [];

      return {
        username: user.login || username,
        followers: user.followers || 0,
        following: user.following || 0,
        publicRepos: user.public_repos || 0,
        contributionsLastYear: 0, // GitHub API doesn't expose this directly without GraphQL
        topLanguages: topLanguages.length > 0 ? topLanguages : mockGithubData.topLanguages,
        recentActivity: recentActivity.length > 0 ? recentActivity : mockGithubData.recentActivity
      };
    } catch (err) {
      console.error('Failed to fetch real GitHub data, falling back to mock.', err);
      return mockGithubData;
    }
  },
  getAnalytics: async () => {
    await delay(300);
    return mockAnalytics;
  },
  updateUser: async (profileData) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not logged in");
    
    // Check if profile exists
    const { data: existing } = await supabase.from('profiles').select('id').eq('id', user.id).single();
    
    if (existing) {
       const { error } = await supabase.from('profiles').update(profileData).eq('id', user.id);
       if (error) throw error;
    } else {
       const { error } = await supabase.from('profiles').insert({ id: user.id, ...profileData });
       if (error) throw error;
    }
    return true;
  },
  createProject: async (projectData) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not logged in");
    const { error } = await supabase.from('projects').insert({ user_id: user.id, ...projectData });
    if (error) throw error;
    return true;
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return true;
  }
};
