import React from 'react'
import Link from 'next/link'


function Hero() {
    return (
        <section id="hero" className="container  mb-32 flex flex-col-reverse md:flex-row mx-auto items-center px-6 mt-10 space-between-2 md:space-between-0">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h1 className="max-w-lg text-4xl font-bold text-center md:text-5xl md:text-left">
                    We help you build your online presence!
                </h1>
                <p className="text-base max-w-sm text-center md:text-left text-darkGrayishBlue">
                    From your website, to your app and social media presence,
                    let us make your life simpler while you focus on your business.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Link href="/contact">
                        <a className="p-3 px-6 pt-2 max-w-sm text-white bg-brightRed text-center rounded-full baseline hover:bg-brightRedLight">Contact Us</a>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 xl:w-1/3 xl:mx-auto align-center mb-4">
                {/* <Image
                            alt="Mountains"
                            src='/illustration-intro.svg'
                            layout="fixed"
                            width={400}
                            height={400}
                        /> */}
                <img src="/online.svg" alt="" />
            </div>
        </section>
    )
}

export default Hero