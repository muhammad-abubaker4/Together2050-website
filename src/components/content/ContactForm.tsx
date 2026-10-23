import { useEffect, useRef, useState, type FormEvent } from "react";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

type Status = "idle" | "error" | "sent";
type Field = "name" | "email" | "subject" | "message";

const subjects = [
  "General Inquiry",
  "General Questions",
  "Website Feedback",
  "Technical Issues",
  "Other",
] as const;
const MIN_MESSAGE_LENGTH = 12;

const messages = {
  name: "Please enter your full name.",
  email: "Please enter a valid email address.",
  subject: "Please select a subject.",
  messageEmpty: "Please enter your message.",
  messageShort:
    "Please provide a little more detail so we can understand your enquiry.",
  sending: "Sending your message...",
  success: "Thank you. Your message has been submitted successfully.",
  failure: `We couldn't submit your message. Please try again. If the problem continues, contact ${SITE.email}.`,
} as const;

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isSubject(value: string): value is (typeof subjects)[number] {
  return subjects.some((item) => item === value);
}

function validate(values: FormValues): { field: Field; message: string } | null {
  if (!values.name.trim()) {
    return { field: "name", message: messages.name };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    return { field: "email", message: messages.email };
  }
  if (!isSubject(values.subject)) {
    return { field: "subject", message: messages.subject };
  }
  const message = values.message.trim();
  if (!message) {
    return { field: "message", message: messages.messageEmpty };
  }
  if (message.length < MIN_MESSAGE_LENGTH) {
    return { field: "message", message: messages.messageShort };
  }
  return null;
}

/**
 * Netlify accepts a recognized form with HTTP 200 and returns the form action
 * document. An unknown form name returns 404 and the not-found page.
 * A resolved fetch, or a 200 that is the not-found page, is not acceptance.
 */
async function netlifyAccepted(response: Response) {
  if (!response.ok) return false;
  const body = await response.text();
  return !/<title>\s*Page not found/i.test(body);
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [invalidField, setInvalidField] = useState<Field | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);

  useEffect(() => {
    if (status === "sent") {
      document.getElementById("contact-status")?.focus();
    }
  }, [status]);

  function values(): FormValues {
    return { name, email, subject, message };
  }

  function showError(next: { field: Field; message: string }) {
    setError(next.message);
    setInvalidField(next.field);
    setStatus("error");
    document.getElementById(next.field)?.focus();
  }

  function clearFieldError(field: Field, nextValues: FormValues) {
    if (invalidField !== field) return;
    const problem = validate(nextValues);
    if (!problem || problem.field !== field) {
      setInvalidField(null);
      setError("");
      setStatus("idle");
      return;
    }
    setError(problem.message);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const submitted: FormValues = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const nextError = validate(submitted);
    if (nextError) {
      showError(nextError);
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    setError("");
    setInvalidField(null);
    setStatus("idle");

    const body = new URLSearchParams();
    for (const [key, value] of data) {
      body.append(key, String(value));
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!(await netlifyAccepted(response))) {
        throw new Error("Netlify did not accept the form");
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setHoneypot("");
      setError("");
      setInvalidField(null);
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(messages.failure);
      setInvalidField(null);
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  const fieldClass =
    "w-full border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-red";

  return (
    <form
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
      aria-busy={submitting}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="hidden" aria-hidden>
        <label htmlFor="bot-field">Do not fill this in</label>
        <input
          id="bot-field"
          name="bot-field"
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
          onChange={(event) => {
            const next = event.target.value;
            setName(next);
            clearFieldError("name", { ...values(), name: next });
          }}
          className={fieldClass}
          required
          aria-invalid={invalidField === "name"}
          aria-describedby={invalidField === "name" ? "contact-error" : undefined}
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
          onChange={(event) => {
            const next = event.target.value;
            setEmail(next);
            clearFieldError("email", { ...values(), email: next });
          }}
          className={fieldClass}
          required
          aria-invalid={invalidField === "email"}
          aria-describedby={invalidField === "email" ? "contact-error" : undefined}
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
          onChange={(event) => {
            const next = event.target.value;
            setSubject(next);
            clearFieldError("subject", { ...values(), subject: next });
          }}
          className={fieldClass}
          required
          aria-invalid={invalidField === "subject"}
          aria-describedby={invalidField === "subject" ? "contact-error" : undefined}
        >
          <option value="">Select a topic</option>
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
          onChange={(event) => {
            const next = event.target.value;
            setMessage(next);
            clearFieldError("message", { ...values(), message: next });
          }}
          className={cn(fieldClass, "resize-y")}
          required
          aria-invalid={invalidField === "message"}
          aria-describedby={invalidField === "message" ? "contact-error" : undefined}
        />
      </div>

      {status === "error" ? (
        <p id="contact-error" role="alert" className="text-sm text-red-deep">
          {error}
        </p>
      ) : null}

      {status === "sent" ? (
        <p
          id="contact-status"
          role="status"
          tabIndex={-1}
          className="text-sm text-muted outline-none"
        >
          {messages.success}
        </p>
      ) : null}

      <Button type="submit" variant="primary" disabled={submitting}>
        {submitting ? messages.sending : "Submit"}
      </Button>
    </form>
  );
}
