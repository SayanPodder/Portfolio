import { evHtml, eplHtml, dqHtml, nhsHtml } from './projectHtml.js'

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
    key: 'dq',
    html: dqHtml,
    emoji: '🔍',
    bannerClass: 'banner-dq',
    title: 'Enterprise Data Quality Framework',
    desc: 'Production-grade data quality framework implementing automated validation across 5 dimensions — completeness, validity, uniqueness, consistency, timeliness — with health scoring, SLA governance, and executive PDF reporting. Aligned to DAMA-DMBOK v2.',
    tags: [
      { label: 'Python',      cls: 'ptag-purple' },
      { label: 'PostgreSQL',  cls: 'ptag-blue'   },
      { label: 'Power BI',    cls: 'ptag-amber'  },
      { label: 'DAMA-DMBOK',  cls: 'ptag-purple' },
    ],
    meta: '25,000 records · 19 DQ Rules · Health Score 97.1/100',
  },
  {
    key: 'nhs',
    html: nhsHtml,
    emoji: '🏥',
    bannerClass: 'banner-nhs',
    title: 'NHS Waiting Time Analysis',
    desc: 'End-to-end public sector analytics project analysing NHS England RTT waiting time data across 7 regions and 10 specialties. Includes EDA, regional disparity analysis, ARIMA demand forecasting, resource allocation modelling, and a policy-style PDF report.',
    tags: [
      { label: 'Python',    cls: 'ptag-blue'  },
      { label: 'ARIMA',     cls: 'ptag-blue'  },
      { label: 'Power BI',  cls: 'ptag-amber' },
      { label: 'Public Sector', cls: 'ptag-green' },
    ],
    meta: '~392,000 patients · 7 regions · 12-month forecast',
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