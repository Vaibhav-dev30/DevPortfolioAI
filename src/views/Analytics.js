import { Logo } from '../components/Logo.js';
import './Analytics.css';
import { api } from '../services/api';
import { Button } from '../components/Button';

export async function Analytics() {
  const analytics = await api.getAnalytics();

  return `
    <div class="analytics-view fade-in">
      <div class="analytics-header">
        <div>
          <h1>Analytics & Insights</h1>
          <p>Track your portfolio performance and profile readiness.</p>
        </div>
        ${Button({ text: 'Export Report', variant: 'secondary', icon: '📥' })}
      </div>
      
      <div class="analytics-grid">
        <div class="analytics-card">
          <div class="analytics-value">${analytics.monthlyViews}</div>
          <div class="analytics-label">Portfolio Views (Last 30 Days)</div>
        </div>
        <div class="analytics-card">
          <div class="analytics-value" style="color: var(--color-success);">${analytics.portfolioCompletion}%</div>
          <div class="analytics-label">Portfolio Completion</div>
        </div>
        <div class="analytics-card">
          <div class="analytics-value">${analytics.recentUpdates}</div>
          <div class="analytics-label">Updates This Month</div>
        </div>
        
        <div class="analytics-chart-placeholder">
          <h3 style="margin-bottom: 1rem; color: var(--text-primary);">View Traffic Over Time</h3>
          <div style="width: 100%; height: 200px; background: repeating-linear-gradient(45deg, var(--bg-secondary), var(--bg-secondary) 10px, var(--bg-primary) 10px, var(--bg-primary) 20px); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center;">
             <span>Interactive chart will be implemented in Phase 4</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
