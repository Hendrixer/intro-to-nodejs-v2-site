import React from 'react'
import path from 'path'
import fs from 'fs'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import getLessons from '../../utils/lesson'
import LessonLayout from '../../layouts/lesson'

const linker = require('remark-autolink-headings')
const slug = require('remark-slug')
const titles = require('remark-code-titles')
const prism = require('mdx-prism-2')

const Lesson = ({ lessons, source, frontMatter }) => {
  const content = hydrate(source)
  return <LessonLayout lessons={lessons} content={content} frontMatter={frontMatter} />
}

export default Lesson

export function getStaticPaths() {
  const lessons = getLessons()
  return {
    fallback: false,
    paths: lessons.map(lesson => ({ params: { lesson: lesson.slug } })),
  }
}

export async function getStaticProps({ params }) {
  const lessons = getLessons()
  const postPath = path.join(process.cwd(), 'lessons', `${params.lesson}.mdx`)
  const postFile = fs.readFileSync(postPath, 'utf-8')
  const { content, data } = matter(postFile)
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [prism],
      remarkPlugins: [linker, slug, titles],
    },
    scope: data,
  })

  return {
    props: { frontMatter: data, lessons, source: mdxSource },
  }
}
