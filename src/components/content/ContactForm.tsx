import { useEffect, useState, type FormEvent } from "react";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

type Status = "idle" | "error" | "sent";
type Field = "name" | "email" | "message";

const subjects = ["General enquiry", "Question", "Idea"] as const;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<(typeof subjects)[number]>(subjects[0]);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [invalidField, setInvalidField] = useState<Field | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (status === "sent") {
      document.getElementById("contact-status")?.focus();
    }
  }, [status]);

  function validate(): { field: Field; message: string } | null {
    if (!name.trim()) {
      return { field: "name", message: "Please enter your name." };
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { field: "email", message: "Please enter a valid email address." };
    }
    if (!message.trim() || message.trim().length < 12) {
      return {
        field: "message",
        message: "Please share a little more in your message.",
      };
    }
    return null;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const nextError = validate();
    if (nextError) {
      setError(nextError.message);
      setInvalidField(nextError.field);
      setStatus("error");
      document.getElementById(nextError.field)?.focus();
      return;
    }

    setSubmitting(true);
    setError("");
    setInvalidField(null);

    const body = new URLSearchParams();
    for (const [key, value] of new FormData(event.currentTarget)) {
      body.append(key, String(value));
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) {
        throw new Error(`Form submission failed (${response.status})`);
      }

      setName("");
      setEmail("");
      setSubject(subjects[0]);
      setMessage("");
      setHoneypot("");
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(
        `Your message could not be sent. Please try again, or write to ${SITE.email}.`,
      );
    } finally {
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
          onChange={(event) => setName(event.target.value)}
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
          onChange={(event) => setEmail(event.target.value)}
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
          onChange={(event) =>
            setSubject(event.target.value as (typeof subjects)[number])
          }
          className={fieldClass}
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
          Thank you. Your message has been sent. Together2050 will reply to the
          email address you entered.
        </p>
      ) : null}

      <Button type="submit" variant="primary" disabled={submitting}>
        {submitting ? "Sending" : "Submit"}
      </Button>
    </form>
  );
}
