import React from 'react'
import Link from 'next/link'


function Navigation() {
    return (
        <>
            <ul className="navbar">
                <li className="nav nav-logo">
                    TEN
                </li>
                <li className="nav-link">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li className="nav-link">
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation