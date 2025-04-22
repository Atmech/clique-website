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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'business@cliqit.co',
          subject: 'New Contact Form Submission',
          text: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}\nSocial Handle: ${formData.socialHandle}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
            <p><strong>Social Handle:</strong> ${formData.socialHandle}</p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        socialHandle: '',
      });

      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
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

          <div>
            <label className="block text-white text-sm mb-2">Social Handle</label>
            <input
              type="text"
              name="socialHandle"
              value={formData.socialHandle}
              onChange={handleChange}
              placeholder="Your social media handle"
              className="w-full h-12 px-4 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none"
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
