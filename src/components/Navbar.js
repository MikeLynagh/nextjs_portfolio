import Link from "next/link"
import { useRouter } from "next/router"
import ThemeToggle from "./ThemeToggle"

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
]

export default function Navbar() {
  const router = useRouter()

  return (
    <header className="border-b border-line">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:py-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight transition-colors hover:text-accent"
          aria-label="Mike Lynagh, home"
        >
          Mike Lynagh
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1 sm:gap-2">
              {links.map(({ href, label }) => {
                const active = href === "/"
                  ? router.pathname === "/"
                  : router.pathname.startsWith(href)

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-md px-2 py-2 text-sm transition-colors sm:px-3 ${
                        active
                          ? "bg-surface text-ink"
                          : "text-muted hover:bg-surface hover:text-ink"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
