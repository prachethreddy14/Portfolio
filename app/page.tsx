import React from "react";

const sections = {
  featuredProjects: [
    {
      title: "AI-Powered Notification & Risk Detection Platform",
      tag: "Featured · Backend · ML · Cloud",
      tech: ["Java", "Spring Boot", "React", "Python", "PostgreSQL", "MongoDB", "AWS"],
      description:
        "Full-stack risk monitoring system with 92% alert accuracy, 87% anomaly precision, and dashboards that cut analyst review time by 35%.",
      link: "#", // TODO: add GitHub link
    },
  ],
  backendSystems: [
    {
      title: "Cinema Booking Management System",
      tag: "Backend · Real-time",
      tech: ["Node.js", "React", "MongoDB", "WebSockets", "Tailwind"],
      description:
        "API-first booking platform supporting 500+ concurrent users with 37% faster MongoDB queries and real-time seat maps.",
      link: "#",
    },
    {
      title: "Smart Insurance Suggestion System",
      tag: "Data · ML",
      tech: ["Python", "Flask", "Pandas", "Scikit-learn"],
      description:
        "Decision-tree based engine that recommends auto insurance premiums, reducing pricing error by 18%.",
      link: "#",
    },
  ],
  internships: [
    {
      title: "Prudential Insurance · Software Developer Intern",
      tag: "May 2024 – Aug 2024 · Newark, NJ",
      description:
        "Built reusable React + Material UI components (50% reuse), integrated REST/WebSocket APIs (40% lower latency), and improved SPA load time by 0.8s using code-splitting and React.lazy.",
    },
    {
      title: "Northern Trust · Software Developer Intern",
      tag: "Jan 2023 – May 2023 · Chicago, IL",
      description:
        "Developed multithreaded Spring Boot microservices (25% higher throughput, 15% lower memory), migrated REST to GraphQL (35% fewer redundant calls), and improved deployment success from 83% to 98% via CI/CD.",
    },
  ],
};

function Row({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    tag: string;
    tech?: string[];
    description: string;
    link?: string;
  }[];
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 px-4 md:px-12">
        {title}
      </h2>
      <div className="flex gap-4 overflow-x-auto px-4 md:px-12 pb-2 hide-scrollbar">
        {items.map((item) => (
          <div
            key={item.title}
            className="min-w-[260px] max-w-xs bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl shadow-lg p-4 flex flex-col justify-between border border-slate-700"
          >
            <div>
              <p className="text-xs text-slate-400 mb-1">{item.tag}</p>
              <h3 className="text-sm md:text-base font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 mb-3">
                {item.description}
              </p>
              {item.tech && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] md:text-[11px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {item.link && item.link !== "#" && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-xs md:text-sm font-medium text-sky-400 hover:underline"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-slate-100">
      {/* Top gradient overlay like Netflix */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black/60 to-black" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-sm bg-red-600 flex items-center justify-center text-xs font-extrabold tracking-tight">
            PB
          </div>
          <span className="font-semibold text-sm md:text-base">
            PRACHETH BACHOLLA
          </span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-4 md:px-12 pt-10 pb-8 md:pb-14">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-3">
            Now Streaming
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Software Engineer{" "}
            <span className="text-red-500">building scalable systems.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-200 mb-4">
            I design and build microservices, real-time applications, and
            risk-detection platforms using{" "}
            <span className="font-semibold">
              Java, Spring Boot, React, Node.js, Python, PostgreSQL, MongoDB,
              and AWS
            </span>
            . Internships at <b>Prudential</b> and <b>Northern Trust</b> have
            given me experience shipping production-ready features in enterprise
            environments.
          </p>
          <p className="text-xs md:text-sm text-slate-400 mb-6">
            B.S. Computer Science, Rutgers University–Newark · Minor in
            Mathematics · Expected Dec 2025
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-md bg-slate-50 text-black text-sm md:text-base font-semibold px-4 py-2 hover:bg-slate-100 transition-colors"
            >
              ▶ View Projects
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1ok5WdPPH7mLArtojNzCYayG2gQ0amnq1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md bg-slate-700/80 text-slate-50 text-xs md:text-sm font-medium px-4 py-2 hover:bg-slate-700 transition-colors"
            >
              📄 Resume
            </a>
            <a
              href="https://www.linkedin.com/in/prachethbacholla"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-slate-600 text-slate-100 text-xs md:text-sm font-medium px-4 py-2 hover:border-slate-500 transition-colors"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Content rows */}
      <div className="relative z-10 pb-16">
        <div id="projects">
          <Row title="Featured Project" items={sections.featuredProjects} />
          <Row title="Backend & Distributed Systems" items={sections.backendSystems} />
        </div>

        <div id="experience">
          <Row title="Internships & Experience" items={sections.internships} />
        </div>

        {/* Skills */}
        <section id="skills" className="mt-12 px-4 md:px-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Skills & Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-1">Languages</h3>
              <p className="text-slate-300">Java, Python, JavaScript, C</p>
              <h3 className="font-semibold mt-4 mb-1">Backend</h3>
              <p className="text-slate-300">
                Spring Boot, Node.js, REST, GraphQL, WebSockets
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Frontend</h3>
              <p className="text-slate-300">
                React.js, Redux, Material UI, Tailwind CSS
              </p>
              <h3 className="font-semibold mt-4 mb-1">Databases</h3>
              <p className="text-slate-300">MySQL, PostgreSQL, MongoDB</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">DevOps & Cloud</h3>
              <p className="text-slate-300">
                Docker, Git, Jenkins, GitHub Actions, AWS (EC2, S3)
              </p>
              <h3 className="font-semibold mt-4 mb-1">Foundations</h3>
              <p className="text-slate-300">
                Data Structures & Algorithms, Concurrency, System Design
              </p>
            </div>
          </div>
        </section>

        {/* Education + Contact */}
        <section
          id="contact"
          className="mt-12 px-4 md:px-12 text-sm md:text-base"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Education & Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-1">
                Rutgers University–Newark, NJ
              </h3>
              <p className="text-slate-300">
                B.S. in Computer Science · Minor in Mathematics
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Expected Graduation: December 2025
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Get in touch</h3>
              <p className="text-slate-300">
                📍 Jersey City, NJ
                <br />
                ✉️{" "}
                <a
                  href="mailto:prachethreddy14@gmail.com"
                  className="underline hover:text-sky-400 transition-colors"
                >
                  prachethreddy14@gmail.com
                </a>
                <br />
                GitHub · LinkedIn links here
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

