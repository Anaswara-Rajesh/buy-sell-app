import React from 'react'
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';

function RegisterSection() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };
  return (
    <main className="flex-grow flex items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row border border-[#DFDFDF] rounded-2xl overflow-hidden">
          {/* Register Form Section */}
          <div className="md:w-[57%] px-8 py-8 md:px-16 md:py-2 flex flex-col items-center justify-center">
            <img src="/assets/logo.svg" alt="list-bnb-logo" className="h-9 mb-6 mt-10" />
            <p className="text-[#666666] mb-7 font-light md:px-28 px-0  flex justify-center text-center">
              <sapn className="text-[#212121] font-semibold ">Listbnb</sapn>is a Largest Classified Listing Marketplace offers perfect Ads classifieds...
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 md:px-64 px-0 flex justify-center text-center">
              Create Your Account
            </h2>

            <form className="w-full max-w-sm md:max-w-none px-4 md:px-14">
              {/* Email Field */}
              <InputField margin="mb-7" label="Email" type="email" placeholder="Type here" iconSrc="/assets/mail.svg" />
              {/* Username Field */}
              <InputField margin="mb-7" label="Username" type="text" placeholder="Type here" iconSrc="/assets/mail.svg" />
              {/* Password Field */}
              <InputField margin="mb-7" label="Password" type="password" placeholder="Type here" iconSrc="/assets/key.svg" />
              {/* Confirm Password Field */}
              <InputField margin="mb-10" label="Confirm Password" type="password" placeholder="Type here" iconSrc="/assets/key.svg" />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center mb-9 items-center bg-[#F50963] text-white py-3 px-4 rounded-full hover:bg-pink-600 transition-colors"
              >
                Register <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>

          {/* Login Section */}
          <div className="md:w-[43%] bg-pink-50 p-8 md:p-10 flex flex-col items-center justify-center">
            <img
              src="/assets/thumb.svg"
              alt="Illustration"
              className="w-[75%] md:w-[65%] mb-8"
            />
            <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-4 text-center">
              Don’t Have an Account<span className="text-pink-500 ml-1">?</span>
            </h3>
            <p className="text-[#666666] mb-8 font-light tracking-wide leading-relaxed text-center px-6 md:px-24">
              To connect with us please login to our
              account if you are  having one already.
            </p>
            <button onClick={handleLoginClick} className="flex items-center px-5 py-3 bg-[#F50963] text-white rounded-full hover:bg-pink-600 transition-colors">
              Login <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );

}

export default RegisterSection