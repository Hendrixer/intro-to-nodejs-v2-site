import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default () => {
  const lessonDir = path.join(process.cwd(), 'lessons')
  const filenames = fs.readdirSync(lessonDir).sort()
  const lessons = filenames.map(filename => {
    const filePath = path.join(lessonDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return { ...data, slug: filename.replace('.mdx', '') }
  })

  return lessons
}
