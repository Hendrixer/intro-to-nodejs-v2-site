import Link from 'next/link'
import React from 'react'
import NodeLogo from '../svgs/node.svg'
import config from '../config'

const Navbar = () => (
  <nav
    className="px-6 w-screen dark:bg-gray-700 border-gray-200 border-solid border-0 border-b dark:border-gray-900"
    style={{ height: '60px' }}
  >
    <div className="flex content-center h-full space-x-6">
      <Link href="/">
        <a>
          <NodeLogo style={{ width: '60px' }} className="h-full" />
        </a>
      </Link>
      <h3 style={{ lineHeight: '60px' }}>{config.course}</h3>
    </div>
  </nav>
)

export default Navbar
