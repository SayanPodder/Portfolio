import { evHtml, eplHtml, dqHtml, nhsHtml } from './projectHtml.js'

export const projects = [
  {
    key: 'ev',
    html: evHtml,
    emoji: '🚗',
    bannerClass: 'banner-ev',
    title: 'VW Electric Vehicle Analysis',
    desc: "VW's petrol and diesel sales had been falling for years. This project asked: where is the opportunity in EVs, who is buying them, and what does VW need to do to catch Tesla? The answer came from 8 years of UK registration data.",
    tags: [
      { label: 'Python',          cls: 'ptag-orange' },
      { label: 'Market Analysis', cls: 'ptag-orange' },
      { label: 'Dashboard',       cls: 'ptag-orange' },
    ],
    meta: 'Dissertation · Python · Plotly · Interactive Dashboard',
  },
  {
    key: 'epl',
    html: eplHtml,
    emoji: '⚽',
    bannerClass: 'banner-epl',
    title: 'EPL 2025/26 Analytics',
    desc: 'Six analyses across 291 Premier League matches: which teams are actually in form right now, whether referee decisions are statistically biased, and whether match stats alone can predict results better than the bookmakers.',
    tags: [
      { label: 'Python',           cls: 'ptag-green' },
      { label: 'Dashboard',        cls: 'ptag-green' },
      { label: 'Sports Analytics', cls: 'ptag-green' },
    ],
    meta: 'EPL 2025/26 · Python · Interactive Dashboard',
  },
  {
    key: 'dq',
    html: dqHtml,
    emoji: '🔍',
    bannerClass: 'banner-dq',
    title: 'Enterprise Data Quality Framework',
    desc: 'Bad data leads to bad decisions. This project built an automated health-check system that scans 25,000 records across 5 quality dimensions and produces an executive-ready score with clear actions for the team.',
    tags: [
      { label: 'Python',          cls: 'ptag-purple' },
      { label: 'SQL',             cls: 'ptag-blue'   },
      { label: 'Power BI',        cls: 'ptag-amber'  },
      { label: 'Data Governance', cls: 'ptag-purple' },
    ],
    meta: '25,000 records · 19 Quality Rules · Health Score 97.1/100',
  },
  {
    key: 'nhs',
    html: nhsHtml,
    emoji: '🏥',
    bannerClass: 'banner-nhs',
    title: 'NHS Waiting Time Analysis',
    desc: 'The NHS is supposed to treat 92% of patients within 18 weeks. The actual figure is 50.6%. This project mapped where the gaps are worst, which specialties are most overloaded, and what targeted investment would have the biggest impact.',
    tags: [
      { label: 'Python',        cls: 'ptag-blue'  },
      { label: 'Power BI',      cls: 'ptag-amber' },
      { label: 'Healthcare',    cls: 'ptag-blue'  },
      { label: 'Public Sector', cls: 'ptag-green' },
    ],
    meta: '~392,000 patients · 7 regions · 12-month forecast',
  },
]

export const skills = [
  {
    title: 'Query & Analysis',
    tags: ['Python', 'SQL', 'DAX', 'Pandas', 'Excel'],
  },
  {
    title: 'BI & Dashboards',
    tags: ['Power BI', 'Tableau', 'Plotly', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Business Analysis',
    tags: ['Requirements Gathering', 'Process Mapping', 'KPI Design', 'Stakeholder Comms'],
  },
  {
    title: 'Reporting & Insights',
    tags: ['Data Storytelling', 'Executive Summaries', 'Data Cleaning', 'ETL'],
  },
  {
    title: 'Tools & Workflow',
    tags: ['Jupyter', 'VS Code', 'Git', 'AI Tools', 'PostgreSQL'],
  },
  {
    title: 'Soft Skills',
    tags: ['Problem Framing', 'Critical Thinking', 'Presentation', 'Attention to Detail'],
  },
]
