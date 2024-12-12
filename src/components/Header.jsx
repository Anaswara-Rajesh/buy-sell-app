import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';


function Header() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/home');
    };

    const handleSignInClick = () => {
        navigate('/login');
    };

    const handlePostAdClick = () => {
        if (isLoggedIn()) {
            navigate('/add-post');
        } else {
            navigate('/login');
        }
    };

    return (
        <header className="bg-white shadow-lg shadow-[#ededed] fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center flex-wrap">
                {/* Logo */}
                <img src="/assets/logo.svg" alt="Listbnb Logo" className="h-9" onClick={handleLogoClick}/>

                <div className="flex items-center gap-4">
                    {/* Sign In Button */}
                    <button
                        onClick={handleSignInClick}
                        className="hidden sm:flex items-center text-black font-semibold hover:text-pink-500"
                        aria-label="Sign In"
                    >
                        <img src="/assets/user.svg" alt="User Icon" className="w-4 h-4 mr-2" />
                        Sign In
                    </button>

                    {/* Post Your Ad Button */}
                    <button
                        onClick={handlePostAdClick}
                        className="text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-3 bg-[#F50963] text-white rounded-full hover:bg-pink-600 flex items-center"
                        aria-label="Post Your Ad"
                    >
                        Post Your Ad
                        <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
