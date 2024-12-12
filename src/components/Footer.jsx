import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-9 text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Left Section */}
                <div className="flex items-center md:px-64 px-0">
                    <img
                        src="/assets/divider.svg"
                        alt="Divider"
                        className="h-6 mr-4"
                    />
                    <p>Copyright © 2024</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6">
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
                                className="h-4"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
