import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-heading mt-3">Let&apos;s build better software</h2>
          <p className="mt-4 text-muted-foreground">
            Have a role, project, or testing challenge in mind? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <a href={`mailto:${PROFILE.email}`} className="glass-card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-blue/15 text-neon-blue"><Mail className="h-5 w-5" /></span>
              <span><span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span><span className="text-sm font-medium">{PROFILE.email}</span></span>
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="glass-card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-purple/15 text-neon-purple"><Phone className="h-5 w-5" /></span>
              <span><span className="block text-xs uppercase tracking-wider text-muted-foreground">Phone</span><span className="text-sm font-medium">{PROFILE.phone}</span></span>
            </a>
            <div className="glass-card flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-pink/15 text-neon-pink"><MapPin className="h-5 w-5" /></span>
              <span><span className="block text-xs uppercase tracking-wider text-muted-foreground">Location</span><span className="text-sm font-medium">Bangalore · Open to opportunities</span></span>
            </div>
            <div className="flex gap-3 pt-2">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-outline-neon h-11 w-11 !p-0"><Linkedin className="h-4 w-4" /></a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-outline-neon h-11 w-11 !p-0"><Github className="h-4 w-4" /></a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium">Name<input required name="name" placeholder="Your name" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon-blue" /></label>
              <label className="space-y-2 text-sm font-medium">Email<input required type="email" name="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon-blue" /></label>
            </div>
            <label className="block space-y-2 text-sm font-medium">Subject<input required name="subject" placeholder="How can I help?" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon-blue" /></label>
            <label className="block space-y-2 text-sm font-medium">Message<textarea required name="message" rows={5} placeholder="Tell me about your opportunity..." className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-neon-blue" /></label>
            <button type="submit" className="btn-neon w-full sm:w-auto"><Send className="h-4 w-4" />{sent ? "Message ready to send" : "Send Message"}</button>
            {sent && <p className="text-sm text-neon-blue">Thanks — your message has been captured. I&apos;ll get back to you soon.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
