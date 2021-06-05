import React from 'react'
import Link from 'next/link'
import Page from './page'

const LessonLayout = ({ lessons, content, frontMatter }) => {
  const index = lessons.findIndex(l => l.title === frontMatter.title)
  const prev = lessons[index - 1]
  const next = lessons[index + 1]

  return (
    <Page hasContainer={false}>
      <div>
        <div
          className="absolute top-0 left-0 b-0 border-r border-gray-100 border-solid w-56 dark:border-gray-900"
          style={{ height: `calc(100vh - ${60}px)`, marginTop: '60px' }}
        >
          <div className="p-6">
            {lessons.map((l, i) => (
              <div key={l.slug} className="my-2">
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
        <div className="ml-56 p-6" style={{ height: `calc(100vh - ${60}px)`, overflowY: 'auto' }}>
          <h2 className="text-4xl mb-7">{frontMatter.title}</h2>
          <div className="markdown-body dark:text-white dark:border-gray-900">{content}</div>
          <div
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderTop
            className="flex content-center mt-10"
          >
            <div>
              {prev ? (
                <Link href={`/lesson/${prev.slug}`}>
                  <a>
                    <button type="button" className="h-12 text-base ring-2 px-4 py-2 rounded bg-green-500">
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
                    <button type="button" className="h-12 text-base ring-2 px-4 py-2 rounded bg-green-500">
                      Next
                    </button>
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default LessonLayout
