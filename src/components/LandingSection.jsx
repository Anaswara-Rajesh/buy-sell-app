import React from 'react';

function LandingSection() {
    return (
        <section className="flex flex-col lg:flex-row justify-around px-4 lg:px-16">

            <div className="flex flex-col justify-center items-center text-center tracking-wider px-4 lg:px-28 mb-8 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-semibold pb-3">
                    Get daily thing
                </h1>
                <h1 className="text-4xl lg:text-6xl font-semibold">
                    in same <span className="text-[#d3d3d3]">platform</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-32 gap-2">
                <div className="relative flex justify-center">
                    <img
                        src="/assets/hero.svg"
                        alt="Woman"
                        className="w-full max-h-[50vh] object-cover"
                    />
                    <img
                        src="/assets/signature.svg"
                        alt="Top Right"
                        className="absolute top-24 right-[-0rem] lg:right-[-4rem]"
                    />
                </div>

                <div className="flex flex-col  ">
                    <div className="bg-[#f83a83] mb-2 text-white flex flex-col justify-center items-center text-3xl lg:text-4xl text-center px-6 py-8 lg:px-10 lg:py-16">
                        5000+ <br /> <span className="text-base pt-1">Daily Ads Listing</span>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="/assets/hero-2.svg"
                            alt="Mobile Image"
                            className="w-full max-h-[30vh] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingSection;
