export interface ExperienceEntry {
  role: string
  org: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Web Developer',
    org: 'ARIES',
    location: 'Toronto, ON',
    period: 'Jan. 2026 – Present',
    current: true,
    bullets: [
      'Develop a scalable React and Node.js web application to automate workflow tracking for a manufacturing client, writing unit tests to validate core logic before deployment.',
      'Integrate Firebase backend services and deploy to Vercel using version-controlled Git workflows.',
    ],
  },
  {
    role: 'Content Developer Intern (Media Developer Co-op)',
    org: 'Pearson',
    location: 'Toronto, ON',
    period: 'May 2026 – Aug. 2026',
    bullets: [
      "Built and validated AI-powered learning modules for Pearson's enterprise-wide AI initiatives, applying structured QA/QC test cases to catch defects before release.",
      'Translated content and compliance requirements from stakeholders into functional course components and coordinated testing and sign-off across learning platforms.',
    ],
  },
  {
    role: 'Business and IT Architecture Analyst (Co-op)',
    org: 'Centennial College',
    location: 'Toronto, ON · rehired',
    period: 'Jan. 2025 – Dec. 2025',
    bullets: [
      'Documented enterprise workflows through business process mapping and conducted gap analyses to recommend IT process improvements, escalating complex issues to senior stakeholders.',
    ],
  },
  {
    role: 'Frontend Developer',
    org: 'WIMTACH, Centennial College',
    location: 'Toronto, ON',
    period: 'May 2025 – Aug. 2025',
    bullets: [
      'Built and deployed AWS-based front-end applications, debugging defects using structured, log-driven techniques.',
    ],
  },
]
