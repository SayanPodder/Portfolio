import { evHtml, eplHtml, churnHtml, sqlHtml } from './projectHtml.js'

export const projects = [
  {
    key: 'ev',
    html: evHtml,
    emoji: '🚗',
    bannerClass: 'banner-ev',
    title: 'VW Electric Vehicle Analysis',
    desc: 'Dissertation project analysing Volkswagen\'s EV portfolio and market positioning. Full Python pipeline with an interactive dashboard covering range, pricing, and market trends.',
    tags: [
      { label: 'Python',      cls: 'ptag-orange' },
      { label: 'Dissertation',cls: 'ptag-orange' },
      { label: 'EV Research', cls: 'ptag-orange' },
    ],
    meta: 'Dissertation · Python · Jupyter · Plotly',
  },
  {
    key: 'epl',
    html: eplHtml,
    emoji: '⚽',
    bannerClass: 'banner-epl',
    title: 'EPL 2025/26 Analytics',
    desc: 'Performance and referee analytics dashboard for the 2025/26 Premier League season. Includes player stats, team comparisons, and officiating patterns across the full season.',
    tags: [
      { label: 'Python',   cls: 'ptag-green' },
      { label: 'Pandas',   cls: 'ptag-green' },
      { label: 'Plotly',   cls: 'ptag-green' },
      { label: 'Sports DA',cls: 'ptag-green' },
    ],
    meta: 'EPL 2025/26 · Python · Interactive HTML',
  },
  {
    key: 'churn',
    html: churnHtml,
    emoji: '📉',
    bannerClass: 'banner-churn',
    title: 'Customer Churn Prediction',
    desc: 'End-to-end churn prediction system for a telecom business with a 29.3% monthly churn rate. Delivered a predictive XGBoost model and a full Power BI dashboard for the retention team.',
    tags: [
      { label: 'Python',  cls: 'ptag-purple' },
      { label: 'XGBoost', cls: 'ptag-purple' },
      { label: 'Power BI',cls: 'ptag-amber'  },
      { label: 'ML',      cls: 'ptag-purple' },
    ],
    meta: '7,043 customers · XGBoost · AUC 0.755',
  },
  {
    key: 'sql',
    html: sqlHtml,
    emoji: '🗄️',
    bannerClass: 'banner-sql',
    title: 'Retail SQL Analytics',
    desc: 'End-to-end SQL analytics project on a retail dataset. Covers sales trends, customer segmentation, product performance, and advanced window functions with a full interactive report.',
    tags: [
      { label: 'SQL',      cls: 'ptag-blue' },
      { label: 'Analytics',cls: 'ptag-blue' },
      { label: 'Retail',   cls: 'ptag-blue' },
    ],
    meta: 'SQL · CTEs · Window Functions',
  },
]

export const skills = [
  {
    title: 'Languages',
    tags: ['Python', 'SQL', 'DAX', 'Markdown'],
  },
  {
    title: 'Data & Analysis',
    tags: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'SciPy'],
  },
  {
    title: 'Visualisation',
    tags: ['Power BI', 'Plotly', 'Matplotlib', 'Seaborn', 'HTML/CSS'],
  },
  {
    title: 'Tools & Workflow',
    tags: ['Jupyter', 'VS Code', 'Git', 'Excel', 'Tableau'],
  },
  {
    title: 'Core Competencies',
    tags: ['EDA', 'Predictive Modelling', 'Feature Engineering', 'Business Reporting', 'Data Cleaning'],
  },
  {
    title: 'Soft Skills',
    tags: ['Storytelling', 'Problem Framing', 'Stakeholder Comms', 'Critical Thinking'],
  },
]
