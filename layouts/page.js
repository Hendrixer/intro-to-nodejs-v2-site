import React from 'react'
import Navbar from '../components/navbar'

const Page = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default Page
