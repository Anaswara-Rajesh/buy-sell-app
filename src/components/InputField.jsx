import React from 'react'

function InputField({ type, placeholder, iconSrc, altText, margin }) {
    return (
        <div className={`${margin}`}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {placeholder} <span className="text-[#F50963]">*</span>
            </label>
            <div className="flex items-center border border-[#E1E1E1] rounded-xl overflow-hidden">
                <input
                    type={type}
                    placeholder={`Enter ${placeholder}`}
                    className="w-full px-4 py-4 text-sm text-[#95999D] focus:outline-none"
                />
                <span className="px-4 text-gray-500">
                    <img src={iconSrc} alt={altText} />
                </span>
            </div>
        </div>
    )
}

export default InputField