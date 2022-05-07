import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navigation() {
    return (
        <>
            <nav className="navbar relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Link href="/">
                            <a className="font-bold">TEN</a>
                        </Link>
                    </div>
                    <div className="menu hidden md:flex space-x-9">
                        <Link href="/">
                            <a className="hover:text-darkGrayishBlue">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="hover:text-darkGrayishBlue">About Us</a>
                        </Link>
                        <Link href="/contact">
                            <a className="hover:text-darkGrayishBlue">Browse</a>
                        </Link>
                    </div>
                    <div className="menu hidden md:flex">
                        <Link href="/contact">
                            <a className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Contact Us</a>
                        </Link>
                    </div>
                    <div className="md:hidden ">
                        <button className="btn border">
                            <a>mob</a>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation