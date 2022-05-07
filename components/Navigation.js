import React from 'react'
import Link from 'next/link'


function Navigation() {
  return (
      <ul>
          <li>
              <Link href="/">
                  <a>Home</a>
              </Link>
          </li>
          <li>
              <Link href="/about">
                  <a>About Us</a>
              </Link>
          </li>
          <li>
              <Link href="/contact">
                  <a>Contact</a>
              </Link>
          </li>
      </ul>
  )
}

export default Navigation