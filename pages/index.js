import React from 'react'
import Link from 'next/link'
import Page from '../layouts/page'
import config from '../config'
import getLessons from '../utils/lesson'

const Home = ({ lessons }) => (
  <Page>
    <div className="py-30">
      <div className="mb-5">
        <h1 className="text-4xl my-2">{config.course}</h1>
        <p className="text-lg font-thin">{config.courseDescription}</p>
      </div>
      <div>
        <h2 className="text-2xl mb-3">Lessons</h2>
        <div className="pl-3">
          {lessons.map((lesson, i) => (
            <div key={lesson.slug} className="my-2">
              <Link href={`/lesson/${lesson.slug}`}>
                <a className="text-lg">{`${i + 1}. ${lesson.title}`}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Page>
)

Home.defaultProps = {
  lessons: [],
}

export function getStaticProps() {
  return { props: { lessons: getLessons() } }
}

export default Home
