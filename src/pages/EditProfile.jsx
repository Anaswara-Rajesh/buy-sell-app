import React, { useEffect, useState } from 'react';
import InputField from '../components/InputField';
import toast from 'react-hot-toast';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        phone: '',
        location: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await api.get('/api/profile');
                setFormData({
                    firstName: response.data.firstName || '',
                    lastName: response.data.lastName || '',
                    email: response.data.email || '',
                    username: response.data.username || '',
                    phone: response.data.phone || '',
                    location: response.data.location || '',
                });
            } catch (error) {
                console.error('Error fetching user profile:', error.response || error);
                toast.error('Failed to load user profile. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = 'First Name is required.';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.username) newErrors.username = 'Username is required.';
        if (!formData.phone) newErrors.phone = 'Phone number is required.';
        if (!formData.location) newErrors.location = 'Location is required.';

        return newErrors;
    };

    const handleEdit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await api.put('/api/profile', formData);
            if (response.status === 200) {
                toast.success('Profile updated successfully!');
                navigate('/my-account');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('Failed to update the profile. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <main
            className="bg-white items-center py-6 px-4 sm:px-8 md:px-16 lg:py-18 lg:px-16 xl:px-44 xl:py-16 rounded-lg "
            style={{
                boxShadow: 'rgb(147 184 209 / 30%) 0px 1px 2px 0px, rgb(133 133 133 / 15%) 0px 2px 6px 2px',
            }}
        >
            <form className="space-y-6" onSubmit={handleEdit}>
                <InputField
                    label="First Name"
                    margin="mb-7"
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    handleChange={handleChange}
                    error={errors.firstName}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

                <InputField
                    label="Last Name"
                    margin="mb-7"
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    handleChange={handleChange}
                    error={errors.lastName}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

                <InputField
                    label="Email"
                    margin="mb-7"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    handleChange={handleChange}
                    error={errors.email}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <InputField
                    label="Username"
                    margin="mb-7"
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={formData.username}
                    handleChange={handleChange}
                    error={errors.username}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                <InputField
                    label="Location"
                    margin="mb-7"
                    type="text"
                    placeholder="Enter your location"
                    name="location"
                    value={formData.location}
                    handleChange={handleChange}
                    error={errors.location}
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}

                <InputField
                    label="Contact Number"
                    margin="mb-12"
                    type="text"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    handleChange={handleChange}
                    error={errors.phone}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}



                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full mt-16 py-3 rounded-full text-lg font-semibold ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#F50963] text-white hover:bg-pink-600'
                        }`}
                >
                    {isSubmitting ? 'Saving...' : 'Save'}
                </button>
            </form>
        </main>
    );
}

export default EditProfile;
