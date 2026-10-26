import posterNageen from "../assets/events/nageen-malik.webp";
import posterSama from "../assets/events/sama-zaidi.webp";
import posterTaskeen from "../assets/events/taskeen-idrees.webp";
import posterZain from "../assets/events/zain-ul-islam.webp";

export type EventPhase = "upcoming" | "in-progress" | "completed";

export type SpeakerSession = {
  id: string;
  speaker: string;
  role: string;
  title: string;
  subtitle: string;
  summary: string;
  dateLabel: string;
  timeLabel: string;
  startsAt: string;
  poster: string;
  /** Printed poster title, when it differs from the approved session title. */
  posterText?: string;
  width: number;
  height: number;
};

/** Pakistan Standard Time. Poster files are not edited by the site. */
const STATUS_ZONE_OFFSET = "+05:00";

export const speakerSeries = {
  slug: "the-cost-of-perfection",
  path: "/events/the-cost-of-perfection/",
  title: "The Cost of Perfection",
  theme:
    "Behind the pressure to succeed, there is a generation struggling to be heard.",
  summary:
    "Four online sessions on 24 and 25 October 2026.",
  attendance: "Online",
  registrationUrl: "https://forms.gle/oppPmpj8zvJi5hxr5",
} as const;

export const speakerSessions: SpeakerSession[] = [
  {
    id: "taskeen-idrees",
    speaker: "Taskeen Idrees",
    role: "Clinical Psychologist",
    title: "The Pressure No One Sees",
    subtitle: "Mental Health in the Digital Age",
    summary:
      "Explore the effects of social comparison, online validation, and the pressure to appear successful.",
    dateLabel: "Saturday, 24 October 2026",
    timeLabel: "8:00 PM PKT",
    startsAt: `2026-10-24T20:00:00${STATUS_ZONE_OFFSET}`,
    poster: posterTaskeen,
    width: 880,
    height: 1100,
  },
  {
    id: "zain-ul-islam",
    speaker: "Zain Ul Islam",
    role: "Corporate Trainer",
    title: "Taking Ownership",
    subtitle: "Accountability and Decisions Under Pressure",
    summary:
      "A session on taking ownership, accountability, and decisions under pressure.",
    posterText: "Beyond the Pressure: Building a Healthier Definition of Success",
    dateLabel: "Saturday, 24 October 2026",
    timeLabel: "9:00 PM PKT",
    startsAt: `2026-10-24T21:00:00${STATUS_ZONE_OFFSET}`,
    poster: posterZain,
    width: 880,
    height: 1100,
  },
  {
    id: "sama-zaidi",
    speaker: "Sama Zaidi",
    role: "Career Coach",
    title: "Beyond the Hype",
    subtitle: "Building a Sustainable Career",
    summary:
      "Explore career uncertainty, recognize misleading quick-money promises, and make informed career decisions.",
    dateLabel: "Sunday, 25 October 2026",
    timeLabel: "8:00 PM PKT",
    startsAt: `2026-10-25T20:00:00${STATUS_ZONE_OFFSET}`,
    poster: posterSama,
    width: 880,
    height: 1100,
  },
  {
    id: "nageen-malik",
    speaker: "Nageen Malik",
    role: "Lawyer",
    title: "Behind the Screen",
    subtitle: "Digital Scams, Safety, and Your Rights",
    summary:
      "Understand common online risks, protecting your digital identity, and the legal options available when things go wrong.",
    dateLabel: "Sunday, 25 October 2026",
    timeLabel: "9:00 PM PKT",
    startsAt: `2026-10-25T21:00:00${STATUS_ZONE_OFFSET}`,
    poster: posterNageen,
    width: 819,
    height: 1024,
  },
];

const PHASE_LABEL: Record<EventPhase, string> = {
  upcoming: "Upcoming",
  "in-progress": "In progress",
  completed: "Completed",
};

export function eventPhase(now = new Date()): EventPhase {
  const start = new Date(speakerSessions[0].startsAt);
  const end = new Date(`2026-10-25T23:59:00${STATUS_ZONE_OFFSET}`);
  if (now < start) return "upcoming";
  if (now <= end) return "in-progress";
  return "completed";
}

export function eventPhaseLabel(now = new Date()) {
  return PHASE_LABEL[eventPhase(now)];
}

export function sessionTopic(session: SpeakerSession) {
  return `${session.title}: ${session.subtitle}`;
}

export function sessionImageAlt(session: SpeakerSession) {
  const printed = session.posterText ?? sessionTopic(session);
  return `${session.speaker}, ${session.role}. ${printed}. ${session.dateLabel}, ${session.timeLabel}, online.`;
}

export function sessionsByDate() {
  const days: { date: string; sessions: SpeakerSession[] }[] = [];
  for (const session of speakerSessions) {
    const current = days[days.length - 1];
    if (current?.date === session.dateLabel) current.sessions.push(session);
    else days.push({ date: session.dateLabel, sessions: [session] });
  }
  return days;
}
