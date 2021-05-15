import React from 'react'
import Link from 'next/link'
import Page from '../layouts/page'
import Container from '../components/container'
import config from '../config'
import getLessons from '../utils/lesson'

const Home = ({ lessons }) => (
  <Page>
    <div className="dots">
      <Container>
        <div className="py-30">
          <h1>{config.course}</h1>

          <p>{config.courseDescription}</p>
          <div>
            <h2>Lessons</h2>
            {lessons.map((lesson, i) => (
              <div key={lesson.slug}>
                <Link href={`/lesson/${lesson.slug}`}>
                  <a>{`${i + 1}. ${lesson.title}`}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
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
