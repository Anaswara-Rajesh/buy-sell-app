import React from 'react';

function LandingSection() {
    return (
        <section className="flex justify-around items-center px-16">
            <div className='px-28 flex justify-center text-center flex-col tracking-wider'>
                <h1 className="text-6xl font-semibold pb-3">
                    Get daily thing
                </h1>
                <h1 className="text-6xl font-semibold">
                    in same <span className="text-[#d3d3d3]">platform</span>
                </h1>
            </div>

            <div className="grid grid-cols-2 px-32">
                <div className="relative flex justify-center">
                    <img
                        src="/assets/hero.svg"
                        alt="Woman"
                        className="w-full max-h-[50vh] object-cover"
                    />
                    <img
                        src="/assets/signature.svg"
                        alt="Top Right"
                        className="absolute top-24 right-[-4rem] "
                    />
                </div>

                <div className="ps-2">
                    <div className="bg-[#f83a83] mb-2 text-white flex flex-col justify-center items-center text-4xl text-center px-10 py-16">
                        5000+ <br /> <span className='text-base pt-1'>Daily Ads Listing</span>
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
