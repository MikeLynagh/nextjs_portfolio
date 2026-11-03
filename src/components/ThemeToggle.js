import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const stored = window.localStorage.getItem("theme")
    const initialTheme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    window.localStorage.setItem("theme", nextTheme)
    setTheme(nextTheme)
  }

  const dark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-ink"
      aria-label={dark ? "Use light theme" : "Use dark theme"}
      title={dark ? "Use light theme" : "Use dark theme"}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          <path d="M20.5 15.3A9 9 0 0 1 8.7 3.5 9 9 0 1 0 20.5 15.3Z" />
        )}
      </svg>
    </button>
  )
}
