import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import toast from 'react-hot-toast';
import api from '../services/api';

function LoginSection() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        identifier: '',
        password: '',
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.identifier) {
            newErrors.identifier = 'Username or Email is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }
        try {
            const response = await api.post('/api/auth/local', {
                identifier: formData.identifier,
                password: formData.password,
            });
            localStorage.setItem('jwt', response.data.jwt);
            toast.success('Login successful!');
            navigate('/my-account');
        } catch (error) {
            console.error('Error logging in:', error.response || error);
            toast.error('Login failed. Invalid credentials.');
        }

    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <main className="flex-grow flex items-center">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row border border-[#DFDFDF] rounded-2xl overflow-hidden">
                    {/* Login Form Section */}
                    <div className="md:w-[57%] px-8 py-8 md:px-16 md:py-2 flex flex-col items-center justify-center">
                        <img src="/assets/logo.svg" alt="list-bnb-logo" className="h-9 mb-10" />
                        <p className="text-[#666666] mb-7 font-light md:px-28 px-0 flex justify-center text-center">
                            <span className="text-[#212121] font-semibold">Listbnb</span> is a Largest Classified Listing Marketplace offers perfect Ads classifieds...
                        </p>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 md:px-64 px-0 flex justify-center text-center">
                            Login To Your Account
                        </h2>

                        <form className="w-full max-w-sm md:max-w-none px-4 md:px-14" onSubmit={handleSubmit}>
                            {/* Username or Email Field */}
                            <InputField
                                label="Username"
                                margin="mb-8"
                                type="text"
                                placeholder="Username or Email"
                                iconSrc="/assets/mail.svg"
                                altText="Mail Icon"
                                name="identifier"
                                value={formData.identifier}
                                handleChange={handleChange}
                            />
                            {errors.identifier && <p className="text-red-500 text-sm">{errors.identifier}</p>}

                            {/* Password Field */}
                            <InputField
                                label="Password"
                                margin="mb-12"
                                type="password"
                                placeholder="Password"
                                iconSrc="/assets/key.svg"
                                altText="Key Icon"
                                name="password"
                                value={formData.password}
                                handleChange={handleChange}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

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
                            className="w-[75%] md:w-[65%] mb-8"
                        />
                        <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-4 text-center">
                            Don’t Have an Account<span className="text-pink-500 ml-1">?</span>
                        </h3>
                        <p className="text-[#666666] mb-8 font-light tracking-wide leading-relaxed text-center px-6 md:px-24">
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
