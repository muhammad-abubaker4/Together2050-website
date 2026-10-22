export type Offering = {
  number: string;
  title: string;
  description: string;
};

export const offerings: Offering[] = [
  {
    number: "01",
    title: "Learning & Knowledge",
    description:
      "Discussions, workshops, research, and mentoring through which people share knowledge and develop skills.",
  },
  {
    number: "02",
    title: "Connection & Community",
    description:
      "Conversations that bring people from different communities, disciplines, and organizations together.",
  },
  {
    number: "03",
    title: "Projects & Collaboration",
    description:
      "Shared projects in which people turn an idea into work on a real need.",
  },
  {
    number: "04",
    title: "Empowerment & Opportunity",
    description:
      "Pathways for building ability, finding opportunities, and using individual strengths.",
  },
  {
    number: "05",
    title: "Community Contribution",
    description:
      "Efforts in which skills, ideas, and collective work create value for a community.",
  },
];
