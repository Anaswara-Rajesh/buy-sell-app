import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-6 text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                <div className="flex flex-col md:flex-row items-center md:space-x-4 lg:px-64 px-0">
                    <img
                        src="/assets/divider.svg"
                        alt="Divider"
                        className="h-6 mb-2 md:mb-0"
                    />
                    <p className="text-center md:text-left">Copyright © 2024</p>
                </div>

                <div className="flex justify-center md:justify-end space-x-6">
                    {["fb", "twitter", "be", "ytb"].map((icon) => (
                        <a
                            key={icon}
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={icon.charAt(0).toUpperCase() + icon.slice(1)}
                        >
                            <img
                                src={`/assets/${icon}.svg`}
                                alt={icon.charAt(0).toUpperCase() + icon.slice(1)}
                                className="h-5 w-5 transition-transform transform hover:scale-110"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
