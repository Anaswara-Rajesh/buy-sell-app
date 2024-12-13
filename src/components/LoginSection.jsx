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
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
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
            setFormData({
                identifier: '',
                password: '',
            })
            toast.error('Login failed. Invalid credentials.');
        } finally {
            setLoading(false);
        }
    }

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <main className="flex-grow flex items-center">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row border border-[#DFDFDF] rounded-2xl overflow-hidden">

                    <div className="lg:w-[57%] w-full px-8 py-8 lg:px-16 lg:py-2 flex flex-col items-center justify-center">
                        <img src="/assets/logo.svg" alt="list-bnb-logo" className="h-9 mb-10" />
                        <p className="text-[#666666] mb-7 font-light lg:px-28 px-0 flex justify-center text-center">
                            <span>
                                <span className="text-[#212121] font-semibold">Listbnb</span> is the largest Classified Listing Marketplace offering perfect Ads classifieds...
                            </span>
                        </p>
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-8 lg:px-64 px-0 flex justify-center text-center">
                            Login To Your Account
                        </h2>

                        <form className="w-full max-w-sm lg:max-w-none px-4 lg:px-14" onSubmit={handleSubmit}>
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

                            <button
                                type="submit"
                                className={`w-full flex justify-center items-center py-3 px-4 rounded-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#F50963] hover:bg-pink-600'
                                    } text-white transition-colors`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin h-5 w-5 text-white mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            ></path>
                                        </svg>
                                        Logging in...
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        Login <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="lg:w-[43%] w-full bg-pink-50 p-8 lg:p-10 flex flex-col items-center justify-center">
                        <img
                            src="/assets/thumb.svg"
                            alt="Illustration"
                            className="w-[75%] lg:w-[65%] mb-8"
                        />
                        <h3 className="text-lg lg:text-xl font-bold text-gray-700 mb-4 text-center">
                            Don’t Have an Account<span className="text-pink-500 ml-1">?</span>
                        </h3>
                        <p className="text-[#666666] mb-8 font-light tracking-wide leading-relaxed text-center px-6 lg:px-24">
                            To connect with us, please register for a new account if you do not have one already.
                        </p>
                        <button
                            onClick={handleRegisterClick}
                            className="flex items-center px-5 py-3 bg-[#F50963] text-white rounded-full hover:bg-pink-600 transition-colors"
                        >
                            Register <img src="/assets/arrow.svg" alt="Arrow Icon" className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginSection;
