'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from '@/assets/images/logo/logo.png';
import instagram from '@/assets/images/socials/instagram.svg';
import linkedin from '@/assets/images/socials/linkedin.svg';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F2FF]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 px-4 sm:px-6 md:px-8 py-1 sm:py-1.5 md:py-2 flex items-center justify-between w-full bg-[#F9F2FF]/95 backdrop-blur-sm z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link href="/">
          <Image
            src={logo}
            alt="CLIQIT"
            width={100}
            height={50}
            priority
            className="w-[90px] sm:w-[100px] md:w-[125px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
        <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-5">
          <a href="https://www.instagram.com/cliqit.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={instagram} alt="Instagram" width={20} height={20} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
          <a href="https://www.linkedin.com/company/cliqit-media/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={linkedin} alt="LinkedIn" width={20} height={20} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 sm:pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-[#4A2B5C] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-[#4A2B5C] text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-2xl mx-auto">
              Ready to create something iconic? We'd love to hear from you!
            </p>
          </motion.div>
        </section>

        {/* Contact Information */}
        <section className="py-8 sm:py-12 md:py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-[#4A2B5C] text-2xl sm:text-3xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-[#4A2B5C] text-lg mb-8">
                    Have questions or need support? We're here to help you succeed.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#3C184E] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#4A2B5C] font-semibold text-lg mb-1">Email Support</h3>
                      <a 
                        href="mailto:support@cliqit.co" 
                        className="text-[#3C184E] hover:text-[#4A2B5C] transition-colors text-lg"
                      >
                        support@cliqit.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#3C184E] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#4A2B5C] font-semibold text-lg mb-1">Phone Support</h3>
                      <a 
                        href="tel:+917758902113" 
                        className="text-[#3C184E] hover:text-[#4A2B5C] transition-colors text-lg"
                      >
                        +91 7758902113
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#3C184E] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#4A2B5C] font-semibold text-lg mb-1">Location</h3>
                      <p className="text-[#4A2B5C] text-lg">Pune, India</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-[#4A2B5C] font-semibold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2 text-[#4A2B5C]">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-start justify-center"
              >
                <div className="w-full max-w-md">
                  <ContactForm 
                    recipientEmail="support@cliqit.co"
                    title="Send us a message"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-[#4A2B5C] text-2xl sm:text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#4A2B5C] text-lg">
                Find quick answers to common questions
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-[#4A2B5C] font-semibold text-lg mb-2">
                  How can I get started with CLIQIT?
                </h3>
                <p className="text-[#4A2B5C]">
                  Simply fill out our contact form above or reach out to us via email or phone. Our team will guide you through the onboarding process.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-[#4A2B5C] font-semibold text-lg mb-2">
                  What services does CLIQIT offer?
                </h3>
                <p className="text-[#4A2B5C]">
                  We offer comprehensive media solutions for businesses and influencers, including content creation, strategy, and platform management.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-[#4A2B5C] font-semibold text-lg mb-2">
                  How quickly do you respond to inquiries?
                </h3>
                <p className="text-[#4A2B5C]">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 max-w-7xl mx-auto w-full">
        <div className="text-xs sm:text-sm text-[#4A2B5C] text-center sm:text-left">
          <div>business@cliqit.co</div>
          <div>Pune, India</div>
        </div>
        <Image
          src={logo}
          alt="Cliqit Media"
          width={120}
          height={45}
          className="h-32 sm:h-32 md:h-52 w-auto"
        />
        <div className="text-xs sm:text-sm text-[#4A2B5C] text-center sm:text-right">
          <div>&copy; 2024 Cliqit Digital Media LLP. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
} 