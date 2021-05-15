import Link from 'next/link'
import React from 'react'
import NodeLogo from '../svgs/node.svg'
import config from '../config'

const Navbar = () => (
  <div>
    <Link href="/">
      <a>
        <figure>
          <NodeLogo style={{ width: '80px' }} />
        </figure>
      </a>
    </Link>
    <p>{config.course}</p>
  </div>
)

export default Navbar
