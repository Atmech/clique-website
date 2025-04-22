'use client';
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from '@/assets/images/logo/logo.png';
import instagram from '@/assets/images/socials/instagram.svg';
import linkedin from '@/assets/images/socials/linkedin.svg';
import h from '@/assets/images/heroImages/H.png';
import e from '@/assets/images/heroImages/E.png';
import y from '@/assets/images/heroImages/Y.png';
import exclamation from '@/assets/images/heroImages/exclamation_mark.png';
import ContactForm from '@/components/ContactForm';

const TYPEWRITER_TEXT = "We Are Launching Soon ...";
const TYPEWRITER_DELAY = 150;
const START_DELAY = 700;

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const springConfig = { damping: 15, stiffness: 150 };

  // Create spring animations for each letter
  const hSpring = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig)
  };
  const eSpring = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig)
  };
  const ySpring = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig)
  };
  const exclamationSpring = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig)
  };

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        setTypedText(TYPEWRITER_TEXT.slice(0, i + 1));
        i++;
        if (i === TYPEWRITER_TEXT.length) {
          clearInterval(intervalId);
        }
      }, TYPEWRITER_DELAY);

      return () => clearInterval(intervalId);
    }, START_DELAY);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized)
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;
      
      // Update spring animations with different intensities
      hSpring.x.set(moveX * 200);
      hSpring.y.set(moveY * 200);
      
      eSpring.x.set(moveX * 100);
      eSpring.y.set(moveY * 100);
      
      ySpring.x.set(moveX * 160);
      ySpring.y.set(moveY * 160);
    
      exclamationSpring.x.set(moveX * 200);
      exclamationSpring.y.set(moveY * 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(startTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [eSpring.x, eSpring.y, exclamationSpring.x, exclamationSpring.y, hSpring.x, hSpring.y, ySpring.x, ySpring.y]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F2FF]">
      {/* Header */}
      <header className="px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Image
          src={logo}
          alt="Cliqit Media"
          width={150}
          height={40}
          priority
          className="w-[120px] sm:w-[150px]"
        />
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="https://www.instagram.com/cliqitmedia/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={instagram} alt="Instagram" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://www.linkedin.com/company/cliqit-media/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[50vh] sm:min-h-screen -mt-16 sm:-mt-24">
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#4A2B5C] leading-tight">
            <span className="font-medium block mb-2 sm:mb-4 text-4xl sm:text-6xl">Stay Tuned!</span>
            <span className="block text-2xl sm:text-4xl">{typedText}</span>
          </h1>
        </motion.div>
        <div className="relative w-full max-w-4xl flex justify-center items-center">
          <motion.div style={{ x: hSpring.x, y: hSpring.y }} className="w-40 sm:w-64 md:w-96">
            <Image
              src={h}
              alt="H"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: eSpring.x, y: eSpring.y }} className="w-40 sm:w-64 md:w-96">
            <Image
              src={e}
              alt="E"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: ySpring.x, y: ySpring.y }} className="w-40 sm:w-64 md:w-96">
            <Image
              src={y}
              alt="Y"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: exclamationSpring.x, y: exclamationSpring.y }} className="w-40 sm:w-64 md:w-96">
            <Image
              src={exclamation}
              alt="!"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="min-h-screen flex items-center justify-center bg-[#F9F2FF] px-4">
        <div className="w-full max-w-2xl py-12 sm:py-20">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 max-w-7xl mx-auto w-full">
        <div className="text-sm text-[#4A2B5C] text-center sm:text-left">
          <div>business@cliqit.co</div>
          <div>Pune, India</div>
        </div>
        <Image
          src={logo}
          alt="Cliqit Media"
          width={80}
          height={30}
          className="h-5 sm:h-6 w-auto"
        />
      </footer>
    </div>
  );
}
