import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav, ScrollProgress, BackToTop } from "@/components/portfolio/Nav";
import {
  Hero,
  About,
  Education,
  Skills,
  Projects,
  Experience,
  Certifications,
  Achievements,
  Leadership,
  ResumeCTA,
  Footer,
} from "@/components/portfolio/Sections";
import { ContactForm } from "@/components/portfolio/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishal P | Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Vishal P, ECE student specializing in IoT, embedded systems, RF design, and signal processing. Projects, experience, and contact.",
      },
      {
        property: "og:title",
        content: "Vishal P — IoT & Embedded Systems Portfolio",
      },
      {
        property: "og:description",
        content:
          "Building intelligent systems at the intersection of hardware, software, and communication technologies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Leadership />
        <ResumeCTA />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-muted/40 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something together
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Have a project, opportunity, or question? Drop a message — I'll
            respond within 1–2 days.
          </p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
}
