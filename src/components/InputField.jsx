import React from 'react';

function InputField({label, type, placeholder, iconSrc, altText, margin, value, handleChange, name }) {
    return (
        <div className={`${margin}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label} <span className="text-[#F50963]">*</span>
            </label>
            <div className="flex items-center border border-[#E1E1E1] rounded-xl overflow-hidden">
                <input
                    onChange={handleChange}
                    value={value}
                    type={type}
                    placeholder={`Enter ${placeholder}`}
                    className="w-full px-4 py-4 text-sm text-[#95999D] focus:outline-none"
                    required
                    name={name} 
                />
                <span className="px-4 text-gray-500">
                    <img src={iconSrc} alt={altText} />
                </span>
            </div>
        </div>
    );
}

export default InputField;
