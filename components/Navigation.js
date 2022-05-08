import React from 'react'
import Link from 'next/link'

function Navigation() {
    const topotip = () => {
        const btn = document.getElementById('menu-btn')
        btn.classList.toggle('open')

    }
    return (
        <>
            <nav className="navbar relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Link href="/">
                            <a className="font-bold text-3xl">TEN</a>
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
                    <div className="md:hidden block hamburger">
                        <button onClick={() => { topotip() }} className="btn border focus:outline-none" id="menu-btn">
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </div>
                <div className="md:hidden">
                    <div
                        id="menu"
                        className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                    >
                        <a href="#">Pricing</a>
                        <a href="#">Product</a>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Community</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation