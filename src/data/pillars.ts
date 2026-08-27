export type Pillar = {
  number: string;
  title: string;
  description: string;
  body: string;
  shortLine: string;
};

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Knowledge",
    description:
      "Knowledge is the starting point of meaningful progress.",
    body: "We encourage learning, awareness, research, skill development, and the open exchange of ideas.",
    shortLine: "Learn. Share. Apply.",
  },
  {
    number: "02",
    title: "Connection",
    description:
      "Meaningful progress begins with meaningful connections.",
    body: "We connect individuals, communities, disciplines, organizations, ideas, and opportunities.",
    shortLine: "Connect people. Connect ideas. Create possibilities.",
  },
  {
    number: "03",
    title: "Empowerment",
    description: "Potential requires opportunity to become action.",
    body: "We aim to help people develop their capabilities, access opportunities, and participate meaningfully in the future.",
    shortLine: "Enable potential. Build capability. Create change.",
  },
  {
    number: "04",
    title: "Contribution",
    description: "Everyone has something to contribute.",
    body: "We encourage people to move beyond observing the future and become active participants in shaping it.",
    shortLine:
      "From potential to participation. From participation to progress.",
  },
];
