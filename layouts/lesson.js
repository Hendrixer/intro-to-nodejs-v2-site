import React from 'react'
import Link from 'next/link'
import Container from '../components/container'
import Page from './page'

const LessonLayout = ({ lessons, content, frontMatter }) => {
  const index = lessons.findIndex(l => l.title === frontMatter.title)
  const prev = lessons[index - 1]
  const next = lessons[index + 1]

  return (
    <Page>
      <div>
        <div
          position="absolute"
          top={0}
          left={0}
          width={300}
          height={`calc(100vh - ${60}px)`}
          background="tint1"
          borderRight
        >
          <div>
            {lessons.map((l, i) => (
              <div key={l.slug}>
                <Link href={`/lesson/${l.slug}`}>
                  <a>
                    <div>
                      <p>{`${i + 1}. ${l.title}`}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div marginLeft={300}>
          <Container>
            <div>
              <h2>{frontMatter.title}</h2>
              <div className="markdown-body">{content}</div>
              <div display="flex" justifyContent="space-between" alignItems="center" borderTop>
                <div>
                  {prev ? (
                    <Link href={`/lesson/${prev.slug}`}>
                      <a>
                        <button type="button" intent="success" appearance="minimal" fontSize={20} height={48}>
                          Previous
                        </button>
                      </a>
                    </Link>
                  ) : null}
                </div>
                <div>
                  {next ? (
                    <Link href={`/lesson/${next.slug}`}>
                      <a>
                        <button type="button" intent="success" appearance="minimal" fontSize={20} height={48}>
                          Next
                        </button>
                      </a>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Page>
  )
}

export default LessonLayout
