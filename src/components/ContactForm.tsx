'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FormData } from '@/types/form';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    socialHandle: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

   

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#3C184E] rounded-2xl p-8 shadow-lg">
        <h2 className="text-white text-2xl font-medium mb-6">Contact us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-full h-12 px-4 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full h-12 px-4 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Phone</label>
            <PhoneInput
              country="in"
              value={formData.phone}
              onChange={(phone) =>
                setFormData((prev) => ({ ...prev, phone }))
              }
              containerClass="!w-full !mb-0"
              inputStyle={{
                width: '100%',
                height: '48px',
                backgroundColor: '#EDE8F2',
                border: 'none',
                borderRadius: '8px',
                paddingLeft: '48px',
                fontSize: '14px',
                color: '#4A2B5C',
              }}
              buttonStyle={{
                backgroundColor: '#EDE8F2',
                border: 'none',
                borderRadius: '8px 0 0 8px',
                borderRight: 'none',
                padding: '0 12px',
              }}
              dropdownStyle={{
                backgroundColor: 'white',
                color: 'black',
                width: '260px',
              }}
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Email <span className="text-[#FF6B6B]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required  
              className="w-full h-12 px-4 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Message <span className="text-[#FF6B6B]">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full h-32 px-4 py-3 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none resize-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="w-32 h-12 bg-[#EDE8F2] rounded-full text-[#3C184E] font-medium text-sm hover:bg-opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
