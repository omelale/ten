import React from 'react'
import Link from 'next/link'


function Footer() {
    return (
        <>
            <footer className='bg-veryDarkBlue'>
                <div
                    className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
                >

                    <div
                        className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
                    >
                        <div className="mx-auto my-6 text-center text-white md:hidden">
                            Copyright &copy; TEN 2022, All Rights Reserved
                        </div>

                        <div>
                            <img src="img/logo-white.svg" className="h-8" alt="" />
                        </div>

                        <div className="flex justify-center space-x-4">

                            <a href="#">
                                <img src="img/icon-facebook.svg" alt="" className="h-8" />
                            </a>

                            <a href="#">
                                <img src="img/icon-youtube.svg" alt="" className="h-8" />
                            </a>

                            <a href="#">
                                <img src="img/icon-twitter.svg" alt="" className="h-8" />
                            </a>

                            <a href="#">
                                <img src="img/icon-pinterest.svg" alt="" className="h-8" />
                            </a>

                            <a href="#">
                                <img src="img/icon-instagram.svg" alt="" className="h-8" />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3 text-white">
                            <a href="#" className="hover:text-brightRed">Home</a>
                            <a href="#" className="hover:text-brightRed">Pricing</a>
                            <a href="#" className="hover:text-brightRed">Products</a>
                            <a href="#" className="hover:text-brightRed">About</a>
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            <a href="#" className="hover:text-brightRed">Careers</a>
                            <a href="#" className="hover:text-brightRed">Community</a>
                            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
                        </div>
                    </div>


                    <div className="flex flex-col justify-between">
                        <form>
                            <div className="flex space-x-3">
                                <Link href="/contact">
                                    <a className="p-3 px-6 pt-2 max-w-sm text-white bg-brightRed text-center rounded-full baseline hover:bg-brightRedLight">Contact Us</a>
                                </Link>
                            </div>
                        </form>
                        <div className="hidden text-white md:block">
                            Copyright &copy; Ten 2022, All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer