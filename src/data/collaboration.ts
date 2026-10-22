export const collaborationIntro =
  "Together2050 believes that meaningful progress is strengthened through collaboration. We welcome opportunities to work with individuals, communities, organizations, institutions, and initiatives that share a commitment to knowledge, connection, empowerment, innovation, and meaningful contribution.";

export const collaborationAreas = [
  "Learning and knowledge sharing",
  "Community building and engagement",
  "Innovation and technology",
  "Research and awareness initiatives",
  "Events, discussions, and collaborative programs",
  "Skills development and capacity building",
  "Social and community impact projects",
  "Strategic partnerships and joint initiatives",
] as const;

export const whyPartner = [
  "Together2050 brings together people, ideas, and opportunities to create meaningful progress. Through partnerships, we aim to create opportunities for shared learning, community engagement, knowledge exchange, innovation, and contribution.",
  "We believe the strongest partnerships are built on shared purpose, mutual respect, and a commitment to creating meaningful value.",
  "As Together2050 continues to grow, partnerships will play an important role in bringing together diverse perspectives, resources, expertise, and opportunities.",
] as const;

export type CollaborationStep = {
  number: string;
  title: string;
  description: string;
};

export const collaborationSteps: CollaborationStep[] = [
  {
    number: "01",
    title: "Initial Discussion",
    description: "Understand shared interests and objectives.",
  },
  {
    number: "02",
    title: "Explore",
    description: "Identify potential areas of collaboration.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Create a mutually agreed approach or plan.",
  },
  {
    number: "04",
    title: "Formalize",
    description: "Use an MoU or other agreement where appropriate.",
  },
  {
    number: "05",
    title: "Implement",
    description: "Coordinate, implement, communicate, and review.",
  },
];
