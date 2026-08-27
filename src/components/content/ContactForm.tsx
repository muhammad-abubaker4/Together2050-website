import { useState, type FormEvent } from "react";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

type Status = "idle" | "error" | "opened";

const subjects = [
  "Join the community",
  "Collaborate with us",
  "General enquiry",
] as const;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<(typeof subjects)[number]>(subjects[0]);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (!message.trim() || message.trim().length < 12) {
      return "Please share a little more in your message.";
    }
    return "";
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    if (honeypot) return;

    const nextError = validate();
    if (nextError) {
      setError(nextError);
      setStatus("error");
      return;
    }

    setSubmitting(true);
    setError("");
    setStatus("idle");

    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("opened");
    window.setTimeout(() => setSubmitting(false), 800);
  }

  const fieldClass =
    "w-full border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-red";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <p className="text-sm leading-relaxed text-muted">
        Submitting this form opens your email app with a message addressed to{" "}
        {SITE.email}. Together2050 does not send the message from this website.
      </p>

      <div className="hidden" aria-hidden>
        <label htmlFor="company-website">Website</label>
        <input
          id="company-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-2 block text-[0.7rem] tracking-[0.18em] uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-[0.7rem] tracking-[0.18em] uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-[0.7rem] tracking-[0.18em] uppercase">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={subject}
          onChange={(event) =>
            setSubject(event.target.value as (typeof subjects)[number])
          }
          className={cn(fieldClass, "appearance-none")}
        >
          {subjects.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.7rem] tracking-[0.18em] uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={cn(fieldClass, "resize-y")}
          required
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red">
          {error}
        </p>
      ) : null}

      {status === "opened" ? (
        <p role="status" className="text-sm text-muted">
          If your email app opened, send the message from there. If it did not,
          write to {SITE.email} directly. This website cannot confirm delivery.
        </p>
      ) : null}

      <Button type="submit" variant="primary" disabled={submitting}>
        {submitting ? "Opening email" : "Open in email"}
      </Button>
    </form>
  );
}
