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
    userType: 'business',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'business@cliqit.co',
          subject: 'New Contact Form Submission',
          text: `User Type: ${formData.userType}\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}\nSocial Handle: ${formData.socialHandle}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>User Type:</strong> ${formData.userType}</p>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
            <p><strong>Social Handle:</strong> ${formData.socialHandle}</p>
          `,
        }),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        alert('Failed to send message. Please try again later.');
      }

      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        socialHandle: '',
        userType: 'business',
      });

    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-[#3C184E] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
      <h2 className="text-white text-xl sm:text-2xl font-medium mb-4 sm:mb-6 text-center">Contact us</h2>
      
      {/* User Type Selection Tabs */}
      <label className="block text-white text-sm mb-2">I am</label>
      <div className="flex mb-4 sm:mb-6 bg-[#4A2B5C] rounded-lg p-1">
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, userType: 'business' }))}
          className={`flex-1 py-2 px-3 sm:px-4 rounded-md text-sm font-medium transition-colors ${
            formData.userType === 'business'
              ? 'bg-[#EDE8F2] text-[#3C184E]'
              : 'text-[#EDE8F2] hover:bg-[#5A3B6C]'
          }`}
        >
          Business
        </button>
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, userType: 'influencer' }))}
          className={`flex-1 py-2 px-3 sm:px-4 rounded-md text-sm font-medium transition-colors ${
            formData.userType === 'influencer'
              ? 'bg-[#EDE8F2] text-[#3C184E]'
              : 'text-[#EDE8F2] hover:bg-[#5A3B6C]'
          }`}
        >
          Influencer
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-white text-sm mb-1.5 sm:mb-2">First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="w-full h-10 sm:h-12 px-3 sm:px-4 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1.5 sm:mb-2">Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="w-full h-10 sm:h-12 px-3 sm:px-4 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1.5 sm:mb-2">Phone</label>
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
            buttonClass="!pl-1 !pr-1"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1.5 sm:mb-2">
            Email <span className="text-[#FF6B6B]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required  
            className="w-full h-10 sm:h-12 px-3 sm:px-4 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1.5 sm:mb-2">
            Message <span className="text-[#FF6B6B]">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="w-full h-24 sm:h-32 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none resize-none"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1.5 sm:mb-2">Social Handle</label>
          <input
            type="text"
            name="socialHandle"
            value={formData.socialHandle}
            onChange={handleChange}
            placeholder="Your social media handle"
            className="w-full h-10 sm:h-12 px-3 sm:px-4 rounded-lg bg-[#EDE8F2] placeholder:text-[#4A2B5C] text-[#4A2B5C] text-sm focus:ring-2 focus:ring-[#9B6AB1] focus:outline-none"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-28 sm:w-32 h-10 sm:h-12 bg-[#EDE8F2] rounded-full text-[#3C184E] font-medium text-sm hover:bg-opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#3C184E] border-t-transparent rounded-full animate-spin" />
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
