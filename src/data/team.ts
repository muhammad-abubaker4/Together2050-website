export type TeamGroup = "founder" | "cofounder" | "core";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  group: TeamGroup;
  initials: string;
};

export const founder: TeamMember = {
  id: "muhammad-abubaker",
  name: "Muhammad Abubaker",
  role: "Founder & CEO, Together2050",
  initials: "MA",
  group: "founder",
  bio: "Muhammad Abubaker is the Founder & CEO of Together2050 and leads its long-term vision, organizational direction, and development. He is responsible for shaping the platform's overall direction, building its organizational structure, developing its initiatives, and working with the founding and core team to turn its vision into action. He is committed to building Together2050 as an enduring platform that brings people, ideas, and opportunities together and continues to create value beyond any single individual.",
};

export const cofounder: TeamMember = {
  id: "raja-zeeshan-majeed",
  name: "Raja Zeeshan Majeed",
  role: "Co-Founder & President, Together2050",
  initials: "RZ",
  group: "cofounder",
  bio: "Raja Zeeshan Majeed is the Co-Founder & President of Together2050 and supports its strategy, operations, community development, initiatives, and organizational growth. He focuses on strengthening the platform's internal structure, developing initiatives, supporting partnerships, and helping turn Together2050's vision into action.",
};

/* Shown when the core team is complete.
export const coreTeam: TeamMember[] = [
  {
    id: "saira-gulzar",
    name: "Saira Gulzar",
    role: "Director of Programs & Research",
    initials: "SG",
    group: "core",
    bio: "Saira Gulzar is the Director of Programs & Research at Together2050 and supports the development, planning, and coordination of programs and research initiatives. She contributes to developing meaningful initiatives, exploring areas of research, and helping ensure that Together2050's programs are relevant, practical, and aligned with its purpose.",
  },
  {
    id: "nayyab-mansoor",
    name: "Nayyab Mansoor",
    role: "Director of Community & Outreach",
    initials: "NM",
    group: "core",
    bio: "Nayyab Mansoor is the Director of Community & Outreach at Together2050 and supports the development and growth of its community. She contributes to member engagement, onboarding, and community activities while helping build connections with universities, societies, organizations, and other communities. She also supports outreach, campaigns, events, and initiatives, helping Together2050 build meaningful connections and expand its community.",
  },
];
*/

export const teamIntro =
  "Together2050 is built by people who believe that meaningful progress is a collective effort. Our team brings together different skills, perspectives, experiences, and ambitions, united by a shared commitment to learning, collaboration, and contribution.";
