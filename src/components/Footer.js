const links = [
  { href: "mailto:mikelynagh@yahoo.com", label: "Email" },
  { href: "https://www.linkedin.com/in/michael-lynagh/", label: "LinkedIn" },
  { href: "https://github.com/MikeLynagh", label: "GitHub" },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line sm:mt-28">
      <div className="site-container flex flex-col gap-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mike Lynagh. Built in Galway.</p>
        <nav aria-label="Contact links">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="transition-colors hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
