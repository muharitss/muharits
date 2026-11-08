export interface TechCategory {
  title: string
  description: string
  skills: string[]
}

export interface Profile {
  name: string
  greeting: string
  role: string
  eyebrow: string
  heroHeading: string
  heroDescription: string
  location: string
  availability: string
  aboutHeading: string
  aboutSubheading: string
  aboutStory: string[]
  techCategories: TechCategory[]
  contactHeading: string
  contactDescription: string
  footerText: string
  email?: string
  github?: string
}

export const profileData: Profile = {
  name: 'MUHAMMAD HARITS',
  greeting: "Hello, I'am",
  role: 'frontend web developer',
  eyebrow: 'PORTFOLIO',
  heroHeading: 'MUHAMMAD HARITS',
  heroDescription:
    'A frontend web developer crafting clean, responsive, and thoughtfully engineered web applications with modern technologies and a focus on intuitive user experiences.',
  location: 'Yogyakarta',
  availability: 'Available for projects',
  aboutHeading: 'About Me',
  aboutSubheading:
    'Web developer based in Yogyakarta, specializing in frontend development with solid backend capabilities.',
  aboutStory: [
    "Hello! I'm Muhammad Harits, a web developer based in Yogyakarta, Indonesia. I'm a developer whose main focus is frontend, with the capability to work on the backend as well.",
    'On the frontend, I focus on building clean, responsive, and functional web applications using React, Next.js, TypeScript, and Tailwind CSS. I turn ideas and interfaces into well-structured, maintainable code without unnecessary complexity.',
    'Beyond the client side, I can also handle backend development. With experience in Node.js, Express.js, NestJS, and PostgreSQL, I can build APIs, manage database workflows, and connect systems end-to-end.',
  ],
  techCategories: [
    {
      title: 'Frontend & Frameworks',
      description: 'Building interactive, scalable, and type-safe client-side interfaces.',
      skills: ['React', 'Next.js', 'TypeScript'],
    },
    {
      title: 'Styling & Design Systems',
      description: 'Pixel-perfect, mobile-first styling and micro-interactions.',
      skills: ['Tailwind CSS'],
    },
    {
      title: 'Backend & Data Flow',
      description: 'Understanding full-stack data flow and API integration.',
      skills: ['Node.js', 'Express.js', 'NestJS', 'PostgreSQL'],
    },
    {
      title: 'Workflow & Tooling',
      description: 'Fast modern toolchain for productive and reliable development.',
      skills: ['GitHub'],
    },
  ],
  contactHeading: 'Get in touch',
  contactDescription:
    'Have a project in mind, an opportunity, or want to collaborate? Send me a message below.',
  footerText: '© 2026 Muhammad Harits. Built with care.',
  github: 'https://github.com/muharitss',
  // Email is omitted intentionally until actual address is provided
}
