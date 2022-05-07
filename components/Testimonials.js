import React from 'react'
import Link from 'next/link'


function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container flex flex-col max-w-6xl px-5 mx-auto mt-32 text-center">
                <div className="text-4xl font-bold text-center">
                    What's Different About Manage?
                </div>
                <div className="flex flex-col md:flex-row mt-24 md:space-x-6">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <img src="avatar-anisha.png" alt="" className="w-16 -mt-14" />
                        <h5 className="text-lg font-bold">Anisha Li</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “Manage has supercharged our team’s workflow. The ability to
                            maintain visibility on larger milestones at all times keeps
                            everyone motivated.”
                        </p>
                    </div>
                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
                        <img src="avatar-ali.png" alt="" className="w-16 -mt-14" />
                        <h5 className="text-lg font-bold">Ali Bravo</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “We have been able to cancel so many other subscriptions since
                            using Manage. There is no more cross-channel confusion and
                            everyone is much more focused.”
                        </p>
                    </div>
                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
                        <img src="avatar-richard.png" alt="" className="w-16 -mt-14" />
                        <h5 className="text-lg font-bold">Richard Watts</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “Manage has supercharged our team’s workflow. The ability to
                            maintain visibility on larger milestones at all times keeps
                            everyone motivated.”
                        </p>
                    </div>
                </div>
                <div className="my-16">
                    <div className="flex justify-center ">
                        <Link href="/contact">
                            <a className="p-3 px-6 pt-2 max-w-sm text-white bg-brightRed text-center rounded-full baseline hover:bg-brightRedLight">Contact Us</a>
                        </Link>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Testimonials