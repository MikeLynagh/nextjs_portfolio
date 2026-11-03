import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { parse, format, isValid } from "date-fns"

const postsDirectory = path.join(process.cwd(), "posts")

function createExcerpt(markdown) {
    const paragraph = markdown
        .split(/\n\s*\n/)
        .map((block) => block.trim())
        .find((block) => block && !block.startsWith('#') && !block.startsWith('-') && !block.startsWith('```'))

    if (!paragraph) return ""

    const plainText = paragraph
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/[>*_`#]/g, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

    return plainText.length > 180 ? `${plainText.slice(0, 177).trimEnd()}…` : plainText
}

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const matterResult = matter(fileContents)
        
        // Parse date from 'DD-MM-YYYY' format
        let date = null;
        if (matterResult.data.date) {
            try {
                date = parse(matterResult.data.date, 'dd-MM-yyyy', new Date());
                if (!isValid(date)) {
                    throw new Error('Invalid date');
                }
            } catch (error) {
                console.error(`Error parsing date for ${fileName}: ${error.message}`);
                console.error(`Date string: "${matterResult.data.date}"`);
                return {
                    id,
                    ...matterResult.data,
                    date: null // Set date to null if parsing fails
                }
            }
        }

        return {
            id,
            ...matterResult.data,
            date: date ? format(date, 'yyyy-MM-dd') : null,
            excerpt: matterResult.data.excerpt || createExcerpt(matterResult.content),
        }
    })
    return allPostsData.sort((a, b) => {
        if (a.date == null) return 1;
        if (b.date == null) return -1;
        return a.date < b.date ? 1 : -1;
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map((fileName) => ({
        params: {
            id: fileName.replace(/\.md$/, ''),
        },
    }))
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    // The article layout owns the single page-level heading. Preserve Markdown
    // source verbatim while keeping any body-level `#` headings subordinate.
    const contentHtml = processedContent
        .toString()
        .replace(/<h1>/g, '<h2>')
        .replace(/<\/h1>/g, '</h2>')

    // Parse date from 'DD-MM-YYYY' format
    let date = null;
    if (matterResult.data.date) {
        try {
            date = parse(matterResult.data.date, 'dd-MM-yyyy', new Date());
            if (!isValid(date)) {
                throw new Error('Invalid date');
            }
        } catch (error) {
            console.error(`Error parsing date for ${id}: ${error.message}`);
            console.error(`Date string: "${matterResult.data.date}"`);
        }
    }

    return {
        id,
        contentHtml,
        ...matterResult.data,
        date: date ? format(date, 'yyyy-MM-dd') : null,
        excerpt: matterResult.data.excerpt || createExcerpt(matterResult.content),
    }
}
