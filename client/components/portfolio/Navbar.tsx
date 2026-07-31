import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">Soumya</span>
          <span className="text-foreground">.dev</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.id
                    ? "bg-white/10 text-white"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleClick("contact")}
          className="btn-neon hidden !px-5 !py-2 text-sm lg:inline-flex"
        >
          Hire Me
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass container mb-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                active === link.id
                  ? "bg-white/10 text-white"
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
