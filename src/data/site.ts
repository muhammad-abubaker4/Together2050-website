export const SITE = {
  name: "Together2050",
  tagline: "Together, We Create What Matters.",
  description:
    "A platform that brings people, ideas, and opportunities together to learn, collaborate, contribute, and create meaningful progress toward 2050 and beyond.",
  email: "info@together2050.com",
  secondaryEmail: "officialtogether2050@gmail.com",
  phones: ["+92 343 3729053"] as const,
  whatsappChannel: "https://whatsapp.com/channel/0029VbCzuJBG8l5AlECIi803",
  url: "https://together2050.com",
  established: "10 August 2026",
  launch: "2 September 2026",
  foundingDate: "2026-08-10",
} as const;

export const FORMS = {
  membership: "https://forms.gle/mh665nL992axAhz86",
  ambassador: "https://forms.gle/d2bpooFtVWKDegJMA",
  collaboration: "https://forms.gle/wZHoFjajShq6E9iA9",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about/" },
  { label: "Vision", to: "/vision/" },
  { label: "Our Work", to: "/what-we-do/" },
  { label: "Team", to: "/team/" },
  { label: "Advisory Council", to: "/team/advisory-council/" },
  { label: "Collaborate", to: "/collaborate/" },
  { label: "Get Involved", to: "/get-involved/" },
] as const;

export const FOOTER_LINKS = [
  { label: "About", to: "/about/" },
  { label: "Vision", to: "/vision/" },
  { label: "Our Work", to: "/what-we-do/" },
  { label: "Team", to: "/team/" },
  { label: "Advisory Council", to: "/team/advisory-council/" },
] as const;

export const PARTICIPATION_LINKS = [
  { label: "Join the community", href: FORMS.membership },
  { label: "Collaborate", href: FORMS.collaboration },
  { label: "Get Involved", to: "/get-involved/" },
  { label: "Contact", to: "/get-involved/#contact" },
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
  {
    label: "YouTube",
    href: "https://www.youtube.com/@together2050",
  },
  {
    label: "WhatsApp",
    href: SITE.whatsappChannel,
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
    path: "/about/",
  },
  vision: {
    title: "Vision & Mission | Together2050",
    description:
      "We envision a future where people come together through shared possibilities, where knowledge is accessible, ideas are exchanged openly, and collective potential is transformed into meaningful action.",
    path: "/vision/",
  },
  whatWeDo: {
    title: "Our Work | Together2050",
    description:
      "Programs, sessions, and the areas of work where Together2050 creates space to learn, connect, collaborate, and contribute.",
    path: "/what-we-do/",
  },
  getInvolved: {
    title: "Get Involved | Together2050",
    description:
      "Join the Together2050 community, become an ambassador, propose a collaboration, or send an enquiry.",
    path: "/get-involved/",
  },
  costOfPerfection: {
    title: "The Cost of Perfection | Together2050",
    description:
      "An online speaker series on 24 and 25 October 2026, with Taskeen Idrees, Zain Ul Islam, Sama Zaidi, and Nageen Malik.",
    path: "/events/the-cost-of-perfection/",
  },
  team: {
    title: "Team | Together2050",
    description:
      "Meet the Together2050 team: the founder, co-founder, executive leadership, directors, and team members.",
    path: "/team/",
  },
  advisory: {
    title: "Advisory Council | Together2050",
    description:
      "The Advisory Council of Together2050 brings together experienced professionals, educators, researchers, and youth leaders who contribute diverse perspectives and expertise.",
    path: "/team/advisory-council/",
  },
  collaborate: {
    title: "Let's Build Together | Together2050",
    description:
      "Together2050 welcomes opportunities to work with individuals, communities, organizations, institutions, and initiatives that share a commitment to knowledge, connection, empowerment, innovation, and meaningful contribution.",
    path: "/collaborate/",
  },
  notFound: {
    title: "Page not found | Together2050",
    description: SITE.description,
    path: "",
    noindex: true,
  },
} as const;
