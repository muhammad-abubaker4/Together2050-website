export const SITE = {
  name: "Together2050",
  tagline: "Together, We Create What Matters.",
  description:
    "A platform that brings people, ideas, and opportunities together to learn, collaborate, contribute, and create meaningful progress toward 2050 and beyond.",
  email: "info@together2050.com",
  url: "https://together2050.com",
  established: "14 August 2026",
  launch: "2 September 2026",
  foundingDate: "2026-08-14",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Vision", to: "/vision" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Team", to: "/team" },
  { label: "Collaborate", to: "/collaborate" },
  { label: "Contact", to: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Vision & Mission", to: "/vision" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Team", to: "/team" },
  { label: "Collaborate", to: "/collaborate" },
  { label: "Contact", to: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/together_2050",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/officialtogether2050",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/together2050",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@together_2050",
  },
] as const;

export const PAGE_SEO = {
  home: {
    title: "Together2050 — Together, We Create What Matters.",
    description: SITE.description,
    path: "/",
  },
  about: {
    title: "About Together2050",
    description:
      "Together2050 is a platform focused on the future, built on the belief that meaningful progress begins when people, ideas, and opportunities come together.",
    path: "/about",
  },
  vision: {
    title: "Vision & Mission | Together2050",
    description:
      "We envision a future where people come together through shared possibilities, where knowledge is accessible, ideas are exchanged openly, and collective potential is transformed into meaningful action.",
    path: "/vision",
  },
  whatWeDo: {
    title: "What We Do | Together2050",
    description:
      "Together2050 creates spaces and opportunities for people to learn, connect, collaborate, and contribute.",
    path: "/what-we-do",
  },
  team: {
    title: "Our Team | Together2050",
    description:
      "Together2050 is built by people who believe that meaningful progress is a collective effort.",
    path: "/team",
  },
  collaborate: {
    title: "Let's Build Together | Together2050",
    description:
      "Together2050 welcomes opportunities to work with individuals, communities, organizations, institutions, and initiatives that share a commitment to knowledge, connection, empowerment, innovation, and meaningful contribution.",
    path: "/collaborate",
  },
  contact: {
    title: "Contact | Together2050",
    description:
      "A conversation can become an opportunity. An idea can become action. Let's create what matters together.",
    path: "/contact",
  },
  notFound: {
    title: "Page not found | Together2050",
    description: SITE.description,
    path: "",
    noindex: true,
  },
} as const;
