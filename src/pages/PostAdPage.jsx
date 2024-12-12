import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import InputField from '../components/InputField';
import api from '../services/api';

function PostAdPage() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|.*\?.*)?)$/i;

    if (!formData.title) newErrors.title = 'Ad Title is required.';
    if (!formData.price) newErrors.price = 'Price is required.';
    if (!formData.description) newErrors.description = 'Description is required.';
    if (!formData.image) {
      newErrors.image = 'Photo URL is required.';
    } else if (!urlRegex.test(formData.image)) {
      newErrors.image = 'Please enter a valid image URL (e.g., https://example.com/image.jpg).';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await api.post('/api/advertisements', {
        title: formData.title,
        price: Number(formData.price),
        description: formData.description,
        image: formData.image,
      });

      toast.success('Ad created successfully!');
      setFormData({ title: '', price: '', description: '', image: '' });
      navigate('/ads');

    } catch (error) {
      console.error('Error creating advertisement:', error);
      toast.error('Failed to create the advertisement. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="bg-white items-center py-16 px-44 rounded-lg"
      style={{
        boxShadow: 'rgb(147 184 209 / 30%) 0px 1px 2px 0px, rgb(133 133 133 / 15%) 0px 2px 6px 2px',
      }}
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField
          label="Ad Title"
          margin="mb-7"
          type="text"
          placeholder="Type here"
          name="title"
          value={formData.title}
          handleChange={handleChange}
          error={errors.title}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <InputField
          label="Price"
          margin="mb-7"
          type="text"
          placeholder="Type here"
          name="price"
          value={formData.price}
          handleChange={handleChange}
          error={errors.price}
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

        <div className="mb-7">
          <label className="block text-gray-700 font-bold mb-2">
            Description <span className="text-[#F50963]">*</span>
          </label>
          <div className="flex items-center border border-[#E1E1E1] rounded-xl overflow-hidden">
            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description}
              placeholder="Type Here"
              className="w-full px-4 py-4 text-sm text-[#95999D] focus:outline-none focus:outline-pink-500"
              rows="7"
            ></textarea>
          </div>
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <InputField
          label="Photo"
          margin="mb-16"
          type="text"
          placeholder="Image URL"
          name="image"
          value={formData.image}
          handleChange={handleChange}
          error={errors.image}
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-16 py-3 rounded-full text-lg font-semibold ${isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#F50963] text-white hover:bg-pink-600'
            }`}
        >
          {isSubmitting ? 'Posting...' : 'Post'}
        </button>
      </form>
    </main>
  );
}

export default PostAdPage;
