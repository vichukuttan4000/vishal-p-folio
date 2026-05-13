import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  GraduationCap,
  Cpu,
  Code2,
  Globe2,
  Wrench,
  Radio,
  Sparkles,
  Briefcase,
  Award,
  Trophy,
  Users,
  ExternalLink,
  MapPin,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}

function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-20 sm:py-28 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for internships & collaborations
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient-emerald">Vishal P</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-foreground/90">
            Electronics &amp; Communication Engineering Student
            <span className="text-muted-foreground"> · </span>
            IoT &amp; Embedded Systems Enthusiast
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Building intelligent systems at the intersection of hardware,
            software, communication technologies, and real-time embedded
            systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialIcon
              href="https://www.linkedin.com/in/vishal-pps/"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon
              href="https://github.com/vichukuttan4000"
              label="GitHub"
            >
              <Github className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon
              href="mailto:ppsvishal4000@gmail.com"
              label="Email"
            >
              <Mail className="h-4 w-4" />
            </SocialIcon>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-elevated">
            <img
              src={profileImg}
              alt="Vishal P — ECE Student"
              width={768}
              height={768}
              className="aspect-square w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/15 bg-black/35 p-3 text-white backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider opacity-75">
                    Currently
                  </p>
                  <p className="text-sm font-semibold">B.E. ECE · IoT Hons.</p>
                </div>
                <span className="rounded-md bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                  CGPA 8.53
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-soft"
    >
      {children}
    </a>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const stats = [
    { label: "CGPA", value: "8.53" },
    { label: "Projects", value: "6+" },
    { label: "Internships", value: "2" },
    { label: "Certifications", value: "5+" },
  ];
  return (
    <Section id="about">
      <SectionHeader eyebrow="About Me" title="Engineering with intent" />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <motion.p
          {...fadeUp}
          className="text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Electronics and Communication Engineering student specializing in
          <span className="text-foreground"> Internet of Things (IoT)</span>,
          with strong foundations in embedded systems, RF design, communication
          technologies, and software development. Hands-on experience in
          antenna design, signal processing, real-time systems, and machine
          learning applications. Passionate about building practical
          engineering solutions and continuously expanding technical expertise.
        </motion.p>
        <motion.div {...fadeUp} className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-surface p-5 shadow-soft"
            >
              <div className="text-3xl font-bold text-gradient-emerald">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- EDUCATION ---------------- */
export function Education() {
  return (
    <Section id="education">
      <SectionHeader eyebrow="Education" title="Academic Background" />
      <motion.div
        {...fadeUp}
        className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-8"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent text-primary">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">
                  KPR Institute of Engineering and Technology
                </h3>
                <p className="text-sm text-muted-foreground">
                  Coimbatore, Tamil Nadu
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
                <Calendar className="h-3 w-3" /> 2023 – 2027
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-foreground">
              Bachelor of Engineering — Electronics &amp; Communication
              Engineering
            </p>
            <p className="text-sm text-muted-foreground">
              Honours with Specialization in Internet of Things (IoT)
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                CGPA: 8.53 / 10
              </span>
              <span className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                Honours Program
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* ---------------- SKILLS ---------------- */
const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: Code2,
    items: ["C", "Embedded C", "Java", "Python", "SQL", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: Globe2,
    items: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Communication Protocols",
    icon: Radio,
    items: ["SPI", "I2C", "CAN", "UART", "USART", "USB"],
  },
  {
    title: "Embedded Systems & IoT",
    icon: Cpu,
    items: [
      "Microcontroller Programming",
      "Sensor Interfacing",
      "Real-Time Systems",
      "ESP32",
      "ESP8266",
      "Raspberry Pi",
      "Silicon Labs BRD2605A",
      "SiWx917 SoC",
    ],
  },
  {
    title: "Tools & Software",
    icon: Wrench,
    items: [
      "GitHub",
      "VS Code",
      "Arduino IDE",
      "MATLAB",
      "CST Studio Suite",
      "Proteus",
      "Altium Designer",
    ],
  },
  {
    title: "Soft Skills",
    icon: Sparkles,
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Leadership",
      "Adaptability",
      "Communication",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/40">
      <SectionHeader
        eyebrow="Technical Skills"
        title="Tools, languages & systems"
        description="A toolkit shaped by hands-on hardware work and modern software practices."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="group rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary transition-transform group-hover:scale-110">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROJECTS ---------------- */
const PROJECTS = [
  {
    title: "Gesture Driven Presentation System",
    description:
      "Hands-free presentation control using OpenCV-based hand gesture recognition for slide navigation, drawing, and pointer control.",
    tags: ["Python", "OpenCV", "Computer Vision", "MediaPipe"],
  },
  {
    title: "Voice-Controlled Smart Home (SiWx917 SoC)",
    description:
      "End-to-end smart home prototype on Silicon Labs SiWx917 SoC integrating speech recognition, Wi-Fi connectivity, and appliance control.",
    tags: ["SiWx917", "Embedded C", "IoT", "Wi-Fi"],
    status: "Ongoing",
  },
  {
    title: "Adaptive Noise Cancellation (LMS)",
    description:
      "Real-time adaptive noise cancellation using the Least Mean Squares algorithm for speech signal enhancement.",
    tags: ["MATLAB", "DSP", "LMS", "Signal Processing"],
  },
  {
    title: "Cattle Breed Detection System",
    description:
      "Machine learning model to identify cattle breeds from images, supporting livestock management and agricultural workflows.",
    tags: ["Python", "ML", "TensorFlow", "Image Classification"],
  },
  {
    title: "Raspberry Pi GPIO Control via WebIOPi",
    description:
      "Web-based monitoring and control of Raspberry Pi GPIO pins for remote IoT device management and automation.",
    tags: ["Raspberry Pi", "WebIOPi", "Python", "IoT"],
  },
  {
    title: "RF Energy Harvesting System",
    description:
      "Designed and simulated an RF energy harvesting circuit to capture ambient electromagnetic energy for low-power applications.",
    tags: ["RF Design", "Antenna", "CST Studio", "Hardware"],
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Selected work"
        description="A blend of embedded systems, signal processing, and applied ML."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              {p.status && (
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  {p.status}
                </span>
              )}
            </div>
            <h3 className="mt-4 text-base font-semibold leading-snug">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-foreground/70"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/vichukuttan4000"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-transform hover:translate-x-0.5"
            >
              View on GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
const EXPERIENCE = [
  {
    role: "Antenna Design Intern",
    org: "Centre for Smart Antenna Systems and Measurements, KPRIET",
    bullets: [
      "Designed and simulated antennas using CST Studio Suite.",
      "Analyzed radiation patterns, gain, and impedance matching.",
      "Generated Gerber files for antenna prototype fabrication.",
    ],
  },
  {
    role: "Embedded Systems Intern",
    org: "Caliber Embedded, Salem",
    bullets: [
      "Developed embedded applications using Arduino-based platforms.",
      "Implemented sensor interfacing and real-time testing routines.",
      "Worked on hardware-software integration for IoT systems.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-muted/40">
      <SectionHeader eyebrow="Internship Experience" title="Where I've worked" />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" />
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.org}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative mb-8 pl-12 last:mb-0 sm:pl-16"
          >
            <div className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-primary shadow-soft sm:left-1.5">
              <Briefcase className="h-4 w-4" />
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
              <h3 className="text-base font-semibold">{e.role}</h3>
              <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {e.org}
              </p>
              <ul className="mt-3 space-y-2">
                {e.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CERTIFICATIONS ---------------- */
const CERTS = [
  {
    name: "Introduction to Industry 4.0 and IIoT",
    issuer: "NPTEL",
    badge: "Elite + Silver",
  },
  {
    name: "Microsensors and Nanosensors",
    issuer: "NPTEL",
    badge: "Elite + Silver",
  },
  { name: "Blockchain and its Applications", issuer: "NPTEL", badge: "Elite" },
  {
    name: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    badge: "Certified",
  },
  {
    name: "Python · Problem Solving · SQL",
    issuer: "HackerRank",
    badge: "Certified",
  },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader eyebrow="Certifications" title="Continuous learning" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-primary">
              <Award className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold leading-snug">{c.name}</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">{c.issuer}</p>
              <span className="mt-2 inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                {c.badge}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
const ACHIEVEMENTS = [
  "1st Prize — Paper Presentation, Elexsiya'26",
  "Top 1% Performer — NPTEL Examination",
  "1st Prize — IEEE Day Prompt Craft",
  "1st Prize — Mathematics Week Paper Presentation",
  "International Conference Participant, KPRIET (2026)",
];

export function Achievements() {
  return (
    <Section id="achievements" className="bg-muted/40">
      <SectionHeader
        eyebrow="Achievements & Awards"
        title="Recognition & milestones"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface p-5 shadow-soft"
          >
            <Trophy className="h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm font-medium">{a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- LEADERSHIP ---------------- */
const LEADERSHIP = [
  {
    role: "Joint Secretary",
    org: "IETE Students Forum",
    period: "2024 – 2025",
  },
  {
    role: "Executive Member",
    org: "Spartranz Association of ECE",
    period: "2025 – 2026",
  },
  {
    role: "Cadet Under Officer",
    org: "6 (TN) Medical Company NCC",
    period: "2025 – 2026",
  },
];

export function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeader
        eyebrow="Leadership"
        title="Positions of Responsibility"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {LEADERSHIP.map((l, i) => (
          <motion.div
            key={l.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-surface p-6 shadow-soft"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{l.role}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{l.org}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wider text-primary">
              {l.period}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- RESUME CTA ---------------- */
export function ResumeCTA() {
  return (
    <Section id="resume">
      <motion.div
        {...fadeUp}
        className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground shadow-elevated sm:p-12"
      >
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Want the full resume?
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-90">
              Get a one-page snapshot of education, skills, projects, and
              experience.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-secondary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted/30 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} Vishal P. Crafted with care.
        </p>
        <div className="flex items-center gap-2">
          <SocialIcon
            href="https://www.linkedin.com/in/vishal-pps/"
            label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon
            href="https://github.com/vichukuttan4000"
            label="GitHub"
          >
            <Github className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="mailto:ppsvishal4000@gmail.com" label="Email">
            <Mail className="h-4 w-4" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}
