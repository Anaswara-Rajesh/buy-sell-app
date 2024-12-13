import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import { toast } from 'react-toastify';
import api from '../services/api';

function RegisterSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.post('/api/auth/local/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow flex items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row border border-[#DFDFDF] rounded-2xl overflow-hidden">
          <div className="lg:w-[57%] px-8 py-8 lg:px-16 lg:py-2 flex flex-col items-center justify-center">
            <img src="/assets/logo.svg" alt="list-bnb-logo" className="h-9 mb-6 mt-10" />
            <p className="text-[#666666] mb-7 font-light lg:px-28 px-0 flex justify-center text-center">
              <span>
                <span className="text-[#212121] font-semibold">Listbnb</span> is the largest Classified Listing Marketplace offering perfect Ads classifieds...
              </span>
            </p>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6 lg:px-64 px-0 flex justify-center text-center">
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit} className="w-full max-w-sm lg:max-w-none px-4 lg:px-14">
              <InputField
                value={formData.email}
                handleChange={handleChange}
                margin={`${errors.email ? 'mb-3' : 'mb-7'}`}
                label="Email"
                type="email"
                placeholder="Type here"
                iconSrc="/assets/mail.svg"
                name="email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

              <InputField
                value={formData.username}
                handleChange={handleChange}
                margin={`${errors.username ? 'mb-3' : 'mb-7'}`}
                label="Username"
                type="text"
                placeholder="Type here"
                iconSrc="/assets/mail.svg"
                name="username"
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}

              <InputField
                value={formData.password}
                handleChange={handleChange}
                margin={`${errors.password ? 'mb-3' : 'mb-7'}`}
                label="Password"
                type="password"
                placeholder="Type here"
                iconSrc="/assets/key.svg"
                name="password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

              <InputField
                value={formData.confirmPassword}
                handleChange={handleChange}
                margin={`${errors.confirmPassword ? 'mb-3' : 'mb-10'}`}
                label="Confirm Password"
                type="password"
                placeholder="Type here"
                iconSrc="/assets/key.svg"
                name="confirmPassword"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-4">{errors.confirmPassword}</p>
              )}

              <button
                type="submit"
                className={`w-full flex justify-center mb-9 items-center py-3 px-4 rounded-full transition-colors ${isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#F50963] text-white hover:bg-pink-600'
                  }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border mr-2" role="status"></span> Registering...
                  </>
                ) : (
                  <>
                    Register <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:w-[43%] bg-pink-50 p-8 lg:p-10 flex flex-col items-center justify-center">
            <img
              src="/assets/thumb.svg"
              alt="thumb-img"
              className="w-[75%] lg:w-[65%] mb-8"
            />
            <h3 className="text-lg lg:text-xl font-bold text-gray-700 mb-4 text-center">
              Don’t Have an Account<span className="text-pink-500 ml-1">?</span>
            </h3>
            <p className="text-[#666666] mb-8 font-light tracking-wide leading-relaxed text-center px-6 lg:px-24">
              To connect with us please login to your account if you already have one.
            </p>
            <button
              onClick={handleLoginClick}
              className="flex items-center px-5 py-3 bg-[#F50963] text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              Login <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegisterSection;
