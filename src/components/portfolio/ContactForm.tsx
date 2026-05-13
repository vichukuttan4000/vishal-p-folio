import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Loader2, Mail } from "lucide-react";
import { z } from "zod";

// Replace with your deployed Google Apps Script Web App URL
const GOOGLE_SHEETS_URL =
  (import.meta.env.VITE_CONTACT_FORM_URL as string | undefined) ?? "";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Subject is too short").max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
  website: z.string().max(0).optional(), // honeypot
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    if (parsed.data.website) return; // honeypot triggered
    setErrors({});

    if (!GOOGLE_SHEETS_URL) {
      toast.error(
        "Contact endpoint not configured. Set VITE_CONTACT_FORM_URL to your Apps Script URL.",
      );
      return;
    }

    setLoading(true);
    try {
      const body = new URLSearchParams({
        timestamp: new Date().toISOString(),
        name: parsed.data.name,
        email: parsed.data.email,
        subject: parsed.data.subject,
        message: parsed.data.message,
      });
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      toast.success("Message sent. I'll get back to you soon!");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const field = (name: string, error?: string) =>
    `w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 ${
      error ? "border-destructive" : "border-border"
    }`;

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-8"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Name
          </span>
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            className={field("name", errors.name)}
            required
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">{errors.name}</p>
          )}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Email
          </span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className={field("email", errors.email)}
            required
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email}</p>
          )}
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Subject
        </span>
        <input
          name="subject"
          type="text"
          placeholder="What's this about?"
          className={field("subject", errors.subject)}
          required
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-destructive">{errors.subject}</p>
        )}
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Message
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me a little about your project or opportunity..."
          className={field("message", errors.message)}
          required
        />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">{errors.message}</p>
        )}
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="mailto:ppsvishal4000@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <Mail className="h-4 w-4" /> ppsvishal4000@gmail.com
        </a>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:pointer-events-none disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send Message <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
