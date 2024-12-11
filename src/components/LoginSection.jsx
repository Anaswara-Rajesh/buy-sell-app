import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginSection() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };
    return (
        <main className="flex-grow flex items-center">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row border border-gray-200 rounded-2xl overflow-hidden">
                    {/* Login Form Section */}
                    <div className="md:w-[57%] px-8 py-8 md:px-16 md:py-2 flex flex-col items-center justify-center">
                        <img src="/assets/logo.svg" alt="list-bnb-logo" className="h-9 mb-10" />
                        <p className="text-[#666666] mb-7 font-light md:px-28 px-0  flex justify-center text-center">
                            <sapn className="text-[#212121] font-semibold ">Listbnb</sapn> is a Largest Classified Listing Marketplace offers perfect Ads classifieds...
                        </p>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 md:px-64 px-0 flex justify-center text-center">
                            Login To Your Account
                        </h2>

                        <form className="w-full max-w-sm md:max-w-none px-4 md:px-14">
                            {/* Username Field */}
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Username <span className="text-[#F50963]">*</span>
                                </label>
                                <div className="flex items-center border border-[#E1E1E1] rounded-xl overflow-hidden">
                                    <input
                                        type="text"
                                        placeholder="Type here"
                                        className="w-full px-4 py-4 text-sm text-[#95999D] focus:outline-none"
                                    />
                                    <span className="px-4 text-gray-500">
                                        <img src="/assets/mail.svg" alt="Mail Icon" />
                                    </span>
                                </div>
                            </div>
                            {/* Password Field */}
                            <div className="mb-12">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password <span className="text-[#F50963]">*</span>
                                </label>
                                <div className="flex items-center border border-[#E1E1E1] rounded-xl overflow-hidden">
                                    <input
                                        type="password"
                                        placeholder="Type here"
                                        className="w-full px-4 py-4 text-sm text-[#95999D] focus:outline-none"
                                    />
                                    <span className="px-4 text-gray-500">
                                        <img src="/assets/key.svg" alt="Key Icon" />
                                    </span>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center bg-[#F50963] text-white py-3 px-4 rounded-full hover:bg-pink-600 transition-colors"
                            >
                                Login <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
                            </button>
                        </form>
                    </div>

                    {/* Register Section */}
                    <div className="md:w-[43%] bg-pink-50 p-8 md:p-10 flex flex-col items-center justify-center">
                        <img
                            src="/assets/thumb.svg"
                            alt="Illustration"
                            className="w-[75%] md:w-[65%] mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-4 text-center">
                            Don’t Have an Account<span className="text-pink-500 ml-1">?</span>
                        </h3>
                        <p className="text-[#666666] mb-6 font-light tracking-wide leading-relaxed text-center px-6">
                            To connect with us, please register for a new account if you do not have one already.
                        </p>
                        <button onClick={handleRegisterClick} className="flex items-center px-5 py-3 bg-[#F50963] text-white rounded-full hover:bg-pink-600 transition-colors">
                            Register <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginSection;
