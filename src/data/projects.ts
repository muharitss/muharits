export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
}

export const projectsData: Project[] = [
  {
    id: 'halaqah-id',
    title: 'Halaqah ID',
    description:
      'A tahfidz (Quran memorization) management platform that digitizes the workflow of Islamic schools running halaqah programs. Replaces paper-based tracking of student memorization, attendance, and progress with a structured digital system organized by role: Superadmin, Kepala Muhafidz, and Muhafiz.',
    image: '/halaqah-id.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    demoUrl: 'https://halaqah-id.vercel.app/',
  },
  {
    id: 'al-quran',
    title: 'Al-Quran',
    description:
      'A website for reading and listening to the Quran with a clean, accessible interface.',
    image: '/web-quran.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://al-quran-orpin.vercel.app/',
  },
  {
    id: 'ppdb-taud-abu-ayyub',
    title: 'PPDB Taud Abu Ayyub',
    description:
      'A school registration website for Tahfidz Anak Usia Dini featuring a landing page, registration form, and admin dashboard for managing registrations.',
    image: '/taud-abu-ayyub.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    demoUrl: 'https://ppdb-taud-abu-ayyub.vercel.app/',
  },
  {
    id: 'tokosedia',
    title: 'TokoSedia',
    description:
      'A simple e-commerce website integrated with the Platzi Fake Store public API (api.escuelajs.co) for catalog browsing and product details.',
    image: '/tokosedia.png',
    tags: ['React JS', 'Tailwind CSS', 'REST API'],
    demoUrl: 'https://product-web-bq4u.vercel.app/',
  },
]
