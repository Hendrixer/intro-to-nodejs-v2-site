import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Page from './page'

const LessonLayout = ({ lessons, content, frontMatter }) => {
  const router = useRouter()
  const index = lessons.findIndex(l => l.title === frontMatter.title)
  const prev = lessons[index - 1]
  const next = lessons[index + 1]

  return (
    <Page hasContainer={false}>
      <div
        className="absolute top-0 left-0 b-0 border-r border-gray-100 border-solid w-56 dark:border-gray-900 bg-gray-100 dark:bg-gray-900"
        style={{ height: `calc(100vh - ${60}px)`, marginTop: '60px', overflowY: 'auto' }}
      >
        <div>
          {lessons.map((l, i) => {
            const href = `/lesson/${l.slug}`
            const active = href === router.asPath

            return (
              <div
                key={l.slug}
                className={`p-3 transition ease-in-out duration-200 ${
                  active ? 'bg-green-500 text-white font-bold' : 'hover:text-green-500'
                }`}
              >
                <Link href={href}>
                  <a>
                    <div>
                      <p>{l.title}</p>
                    </div>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="ml-56 px-12 py-6" style={{ height: `calc(100vh - ${60}px)`, overflowY: 'auto' }}>
        <h2 className="text-4xl mb-7">{frontMatter.title}</h2>
        <div className="markdown-body dark:text-white ">{content}</div>
        <div
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderTop
          className="flex content-center mt-10 gap justify-between"
        >
          <div>
            {prev ? (
              <Link href={`/lesson/${prev.slug}`}>
                <a>
                  <button
                    type="button"
                    className="h-12 text-base ring-4 ring-green-200 px-4 py-2 rounded bg-green-500 text-white"
                  >
                    PREVIOUS
                  </button>
                </a>
              </Link>
            ) : null}
          </div>
          <div>
            {next ? (
              <Link href={`/lesson/${next.slug}`}>
                <a>
                  <button
                    type="button"
                    className="h-12 text-base ring-4 ring-green-200 px-4 py-2 rounded bg-green-500 text-white"
                  >
                    NEXT
                  </button>
                </a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default LessonLayout
