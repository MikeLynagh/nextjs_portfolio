import fs from "node:fs"
import path from "node:path"

const title = process.argv.slice(2).join(" ").trim()

if (!title) {
  console.error('Usage: npm run new:article -- "Article title"')
  process.exit(1)
}

const slug = title
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "")

if (!slug) {
  console.error("The title must contain at least one letter or number.")
  process.exit(1)
}

const now = new Date()
const date = [
  String(now.getDate()).padStart(2, "0"),
  String(now.getMonth() + 1).padStart(2, "0"),
  now.getFullYear(),
].join("-")
const filePath = path.join(process.cwd(), "posts", `${slug}.md`)

if (fs.existsSync(filePath)) {
  console.error(`An article already exists at posts/${slug}.md`)
  process.exit(1)
}

const article = `---
title: "${title.replaceAll('"', '\\"')}"
date: "${date}"
tags: []
---

Start writing here.
`

fs.writeFileSync(filePath, article, "utf8")
console.log(`Created posts/${slug}.md`)
console.log(`Article URL: /posts/${slug}`)
