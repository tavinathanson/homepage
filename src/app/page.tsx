import Image from "next/image";
import Link from "next/link";
import { InjeraTagline } from "./injera-modal";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="GitHub"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    name: "Sequence Software",
    url: "https://sequencesoftware.io",
    screenshot: "/screenshots/sequence.png",
    description: "Software and data science consulting for healthcare and biotech companies.",
  },
  {
    name: "Tavi Comedy Lab",
    url: "https://tavicomedy.com",
    screenshot: "/screenshots/comedy.png",
    description: "Standup shows and open mics I run in central New Jersey.",
  },
  {
    name: "Purple Computer",
    url: "https://purplecomputer.org",
    github: "https://github.com/purplecomputerorg/purplecomputer",
    screenshot: "/screenshots/purple.png",
    description: "A distraction-free computer for kids, built from your old laptop.",
  },
  {
    name: "Bimah",
    url: "https://bimah.org",
    github: "https://github.com/tavinathanson/bimah-bc",
    screenshot: "/screenshots/bimah.png",
    description: "Analytics for synagogues that runs entirely in the browser.",
  },
  {
    name: "AlwaysBlock",
    url: "https://github.com/tavinathanson/alwaysblock",
    screenshot: "/screenshots/alwaysblock.png",
    description: "A site blocker that flips the script: always on, with temporary unblock windows.",
    showGitHubInline: true,
  },
];

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/tavinathanson",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tavinathanson",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/tavinathanson",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/tavinathanson",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-14">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Tavi Nathanson
          </h1>
          <p className="mt-4 text-muted">
            Software and comedy and stuff. <InjeraTagline />
          </p>
        </header>

        {/* Projects */}
        <section className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex gap-5 items-start"
            >
              <Link
                href={project.url || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 overflow-hidden rounded-md border border-card-border bg-card-bg shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
              >
                <Image
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  width={1200}
                  height={750}
                  className="w-28 h-auto"
                />
              </Link>
              <div className="pt-1">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover flex items-center gap-2"
                    >
                      {project.name}
                      {project.showGitHubInline && <GitHubIcon className="w-4 h-4" />}
                    </Link>
                  ) : (
                    <span>{project.name}</span>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </Link>
                  )}
                </h2>
                <p className="mt-1 text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Footer / Socials */}
        <footer className="mt-16 pt-8 border-t border-card-border">
          <p className="mb-6 text-muted">
            Proud husband of{" "}
            <a
              href="https://rabbirebecca.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover"
            >
              this rabbi
            </a>{" "}
            and dad to two other silly humans.
          </p>
          <nav className="flex items-center gap-5">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </nav>
        </footer>
      </div>
    </main>
  );
}
