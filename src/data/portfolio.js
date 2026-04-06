// ─── Typed roles cycling in hero ────────────────────────────────────────────
export const ROLES = [
  'Data Analyst',
  'Analytics Engineer',
  'Power BI Developer',
  'BI & Analytics Specialist',
  'Data Pipeline Builder',
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
    proficiency: 'Expert',
    tags: ['SQL Server', 'Snowflake', 'Python', 'ETL/ELT', 'Data Modeling', 'Data Warehousing', 'SAP', 'Excel'],
  },
  {
    icon: '📊',
    title: 'BI & Visualization',
    color: 'amber',
    proficiency: 'Expert',
    tags: ['Power BI', 'DAX', 'KPI Analysis', 'Dashboard Dev', 'Data Visualization'],
  },
  {
    icon: '☁️',
    title: 'Cloud & AI',
    color: 'violet',
    proficiency: 'Proficient',
    tags: ['Microsoft Azure', 'Azure SQL', 'Azure OpenAI', 'Generative AI', 'OpenShift'],
  },
  {
    icon: '🔁',
    title: 'DevOps & CI/CD',
    color: 'cyan',
    proficiency: 'Proficient',
    tags: ['GitHub Actions', 'Azure DevOps', 'CI/CD', 'OpenShift', 'GitHub'],
  },
  {
    icon: '⚙️',
    title: 'Automation',
    color: 'amber',
    proficiency: 'Proficient',
    tags: ['Power Platform', 'Nintex', 'SharePoint', 'OutSystems'],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    color: 'violet',
    proficiency: 'Familiar',
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
export const PROJECTS_NOTE = `My day-to-day work at ExxonMobil runs on proprietary enterprise systems and confidential data I cannot share publicly. Each demo below is a faithful recreation of the real architectures, techniques, and business problems I work with daily — built on synthetic data to protect confidentiality. The domain knowledge, analytical approach, and technical design are entirely mine.`

export const PROJECTS = [
  {
    icon: '⚙️',
    title: 'ETL Pipeline Monitor',
    metric: 'Live pipeline stages · Run log · 24h row charts · Terminal output',
    desc: 'Audit data was scattered across Snowflake, Azure SQL, and MS SQL Server with no unified view. Built a real-time ETL monitoring dashboard tracking pipeline stages, row counts, run history, and errors — improving audit data access by 60% and cutting manual prep by 40%.',
    tags: ['Python', 'SQL Server', 'Snowflake', 'Azure', 'ETL/ELT'],
    color: 'cyan',
    file: 'projects/project1-etl-pipeline.html',
  },
  {
    icon: '🔍',
    title: 'Financial Anomaly Detection Dashboard',
    metric: 'Z-score detection · DAX measures · Power BI-style KPIs · 23 anomalies flagged',
    desc: 'Audit teams manually reviewed thousands of transactions to find irregularities. Built a Power BI dashboard with Z-score anomaly detection, flagged transaction drill-through, and DAX measures — automating financial monitoring and reducing analyst review time significantly.',
    tags: ['Power BI', 'DAX', 'Python', 'Z-Score', 'Audit Analytics'],
    color: 'amber',
    file: 'projects/project2-anomaly-dashboard.html',
  },
  {
    icon: '🗃️',
    title: 'SQL Data Modeling Showcase',
    metric: 'Star schema · Window functions · Recursive CTEs · Index strategy',
    desc: 'Raw transactional data needed to be queryable for financial reporting and audit. Designed a Snowflake star schema with 5 advanced query patterns — window functions, recursive CTEs, dynamic PIVOT, and index strategy — making analytics-ready data available for downstream BI tools.',
    tags: ['SQL Server', 'Snowflake', 'Star Schema', 'CTEs', 'Data Modeling'],
    color: 'violet',
    file: 'projects/project3-sql-modeling.html',
  },
  {
    icon: '🐍',
    title: 'Python Data Pipeline — Live Output',
    metric: 'Step-by-step execution · df.info() · df.head() · Live charts',
    desc: 'Source data arrived dirty — nulls, outliers, and inconsistent formats blocking downstream reports. Built a Python ETL pipeline using pandas and scipy with step-by-step execution, DataFrame inspection, and auto-generated quality charts — the same pattern used across ExxonMobil audit pipelines.',
    tags: ['Python', 'pandas', 'scipy', 'ETL', 'Data Cleaning'],
    color: 'cyan',
    file: 'projects/project4-python-pipeline.html',
  },
  {
    icon: '🚀',
    title: 'CI/CD Pipeline Visualizer',
    metric: 'Animated GitHub Actions · Stage-by-stage execution · Simulate success & failure',
    desc: 'Manual deployments were slow and error-prone across Azure and OpenShift environments. Implemented GitHub Actions CI/CD automating checkout → lint → test → build → push → deploy — reducing release time by 50% and deployment errors by 35%.',
    tags: ['GitHub Actions', 'Azure DevOps', 'OpenShift', 'CI/CD', 'DevOps'],
    color: 'amber',
    file: 'projects/project5-cicd-pipeline.html',
  },
  {
    icon: '🤖',
    title: 'Chat with Your Data — AI Assistant',
    metric: 'NL → SQL → Chart · Azure OpenAI · 30% faster analysis',
    desc: 'Audit analysts needed to query financial data without writing SQL. Implemented an Azure OpenAI "Chat with Your Data" system translating natural language to SQL to chart — reducing analysis time by 30% and enabling broader audit coverage across global datasets.',
    tags: ['Azure OpenAI', 'RAG', 'NLP', 'Financial Audit', 'AI Analytics'],
    color: 'violet',
    file: 'projects/project6-ai-chat.html',
  },
]

// ─── Contact info ─────────────────────────────────────────────────────────────
export const CONTACT = [
  { icon: '✉️', label: 'Email',    value: 'fahim007alefaji@gmail.com',            href: 'mailto:fahim007alefaji@gmail.com' },
  { icon: '📞', label: 'Phone',    value: '+36 70 407 7007',                       href: 'tel:+36704077007' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/fahim-al-efaji',        href: 'https://www.linkedin.com/in/fahim-al-efaji' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/fahim-a-efaji',             href: 'https://github.com/fahim-a-efaji' },
  { icon: '📍', label: 'Location', value: 'Budapest, Hungary',                     href: null },
]
