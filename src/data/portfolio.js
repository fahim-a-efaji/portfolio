// ─── Typed roles cycling in hero ────────────────────────────────────────────
export const ROLES = [
  'Analytics Engineer',
  'Data Pipeline Builder',
  'Azure & AI Specialist',
  'Power BI Developer',
  'ETL Architect',
]

// ─── Hero stats ──────────────────────────────────────────────────────────────
export const STATS = [
  { num: '2k+', label: 'Hours Automated' },
  { num: '60%', label: 'Audit Data Access ↑' },
  { num: '50%', label: 'Release Time ↓' },
  { num: '30%', label: 'Analysis Time ↓' },
]

// ─── Skills ──────────────────────────────────────────────────────────────────
export const SKILLS = [
  {
    icon: '🗄️',
    title: 'Data & Analytics',
    color: 'cyan',
    tags: ['SQL Server', 'Snowflake', 'Python', 'ETL/ELT', 'Data Modeling', 'Data Warehousing', 'SAP', 'Excel'],
  },
  {
    icon: '📊',
    title: 'BI & Visualization',
    color: 'amber',
    tags: ['Power BI', 'DAX', 'KPI Analysis', 'Dashboard Dev', 'Data Visualization'],
  },
  {
    icon: '☁️',
    title: 'Cloud & AI',
    color: 'violet',
    tags: ['Microsoft Azure', 'Azure SQL', 'Azure OpenAI', 'Generative AI', 'OpenShift'],
  },
  {
    icon: '🔁',
    title: 'DevOps & CI/CD',
    color: 'cyan',
    tags: ['GitHub Actions', 'Azure DevOps', 'CI/CD', 'OpenShift', 'GitHub'],
  },
  {
    icon: '⚙️',
    title: 'Automation',
    color: 'amber',
    tags: ['Power Platform', 'Nintex', 'SharePoint', 'OutSystems'],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    color: 'violet',
    tags: ['React', 'Node.js', 'TypeScript', 'HTML5', 'CSS', '.NET'],
  },
]

// ─── Work experience ─────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    company: 'ExxonMobil Hungary',
    role: 'Audit Analytics Advisor',
    period: 'Jul 2025 — Present',
    bullets: [
      'Built <strong>ETL data pipelines</strong> using Python and SQL across Snowflake, Azure SQL, and MS SQL Server — improving audit data access by 60% and reducing manual preparation by 40%.',
      'Developed <strong>data models and Power BI dashboards</strong> for anomaly detection and financial monitoring.',
      'Implemented <strong>Azure OpenAI "Chat with Your Data"</strong> for Global Audit — reducing analysis time by 30% with AI-assisted workflows.',
      'Managed deployment across Azure and OpenShift with <strong>GitHub Actions CI/CD</strong> — cutting release time by 50% and deployment errors by 35%.',
    ],
  },
  {
    company: 'ExxonMobil Hungary',
    role: 'IT System Analyst',
    period: 'Sep 2024 — Jun 2025',
    bullets: [
      'Built <strong>enterprise web applications</strong> with OutSystems and MS SQL Server supporting internal data tools and reporting.',
      'Developed <strong>data integrations and backend logic</strong> using JavaScript, .NET, and SQL for analytics workflows.',
      'Automated business processes with Power Platform, Nintex, and SharePoint — <strong>saving 2,000+ hours annually</strong> and reducing manual work by 40%.',
      'Created <strong>Power BI KPI dashboards</strong> and reporting tools improving operational visibility across teams.',
    ],
  },
]

// ─── Education ───────────────────────────────────────────────────────────────
export const EDUCATION = {
  degree: 'BSc in Electrical Engineering',
  school: 'Budapest University of Technology and Economics',
  period: 'Specialization: Information & Communication Systems · Sep 2019 — Jun 2024',
}

// ─── Projects ────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    icon: '⚙️',
    title: 'ETL Pipeline Monitor',
    metric: 'Live pipeline stages · Run log · 24h row charts · Terminal output',
    desc: 'A real-time ETL monitoring dashboard showing pipeline stages, row counts, run history, error tracking, and live log output — mirrors the Python+SQL+Snowflake pipelines built at ExxonMobil.',
    tags: ['Python', 'SQL Server', 'Snowflake', 'Azure', 'ETL/ELT'],
    color: 'cyan',
    file: 'projects/project1-etl-pipeline.html',
  },
  {
    icon: '🔍',
    title: 'Financial Anomaly Detection Dashboard',
    metric: 'Z-score detection · DAX measures · Power BI-style KPIs · 23 anomalies flagged',
    desc: 'Power BI-style dashboard with Z-score anomaly detection, flagged transaction table, DAX measure code, and Python detection logic — direct replica of ExxonMobil Global Audit work.',
    tags: ['Power BI', 'DAX', 'Python', 'Z-Score', 'Audit Analytics'],
    color: 'amber',
    file: 'projects/project2-anomaly-dashboard.html',
  },
  {
    icon: '🗃️',
    title: 'SQL Data Modeling Showcase',
    metric: 'Star schema · Window functions · Recursive CTEs · Index strategy',
    desc: 'Interactive SQL showcase with a full Snowflake star schema, 5 advanced query patterns (window functions, CTEs, dynamic PIVOT, anomaly detection), and index performance comparison.',
    tags: ['SQL Server', 'Snowflake', 'Star Schema', 'CTEs', 'Data Modeling'],
    color: 'violet',
    file: 'projects/project3-sql-modeling.html',
  },
  {
    icon: '🐍',
    title: 'Python Data Pipeline — Live Output',
    metric: 'Step-by-step execution · df.info() · df.head() · Live charts',
    desc: 'Full Python ETL pipeline with actual pandas/scipy code, step-by-step execution animation, live terminal output, DataFrame inspection, and automatic chart generation.',
    tags: ['Python', 'pandas', 'scipy', 'ETL', 'Data Cleaning'],
    color: 'cyan',
    file: 'projects/project4-python-pipeline.html',
  },
  {
    icon: '🚀',
    title: 'CI/CD Pipeline Visualizer',
    metric: 'Animated GitHub Actions · Stage-by-stage execution · Simulate success & failure',
    desc: 'Interactive animated CI/CD pipeline: checkout → lint → test → build → push → deploy. Simulate success or failure with live log streaming and job runner breakdown.',
    tags: ['GitHub Actions', 'Azure DevOps', 'OpenShift', 'CI/CD', 'DevOps'],
    color: 'amber',
    file: 'projects/project5-cicd-pipeline.html',
  },
  {
    icon: '🤖',
    title: 'Chat with Your Data — AI Assistant',
    metric: 'NL → SQL → Chart · Azure OpenAI · 30% faster analysis',
    desc: 'Natural language to SQL to chart pipeline — the exact system built at ExxonMobil for Global Audit using Azure OpenAI, reducing analysis time by 30% and improving audit coverage to 94.7%.',
    tags: ['Claude API', 'Azure OpenAI', 'RAG', 'NLP', 'Financial Audit'],
    color: 'violet',
    file: 'projects/project6-ai-chat.html',
  },
]

// ─── Contact info ─────────────────────────────────────────────────────────────
export const CONTACT = [
  { icon: '✉️', label: 'Email',    value: 'fahim.a.efaji@gmail.com',              href: 'mailto:fahim.a.efaji@gmail.com' },
  { icon: '📞', label: 'Phone',    value: '+36 70 407 7007',                       href: 'tel:+36704077007' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/fahim-al-efaji',        href: 'https://www.linkedin.com/in/fahim-al-efaji' },
  { icon: '📍', label: 'Location', value: 'Budapest, Hungary',                     href: null },
]
