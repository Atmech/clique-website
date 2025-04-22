'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
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

const TYPEWRITER_TEXT = "Coming Soon ...";
const TYPEWRITER_DELAY = 150;
const START_DELAY = 700;

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
          setIsTypewriterComplete(true);
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
      hSpring.x.set(moveX * 20);
      hSpring.y.set(moveY * 20);
      
      eSpring.x.set(moveX * 30);
      eSpring.y.set(moveY * 30);
      
      ySpring.x.set(moveX * 40);
      ySpring.y.set(moveY * 40);
      
      exclamationSpring.x.set(moveX * 50);
      exclamationSpring.y.set(moveY * 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(startTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F2FF]">
      {/* Header */}
      <header className="px-8 py-6 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Image
          src={logo}
          alt="Cliqit Media"
          width={150}
          height={40}
          priority
          className="w-auto"
        />
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/cliqitmedia/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={instagram} alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/company/cliqit-media/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-screen">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#4A2B5C] leading-tight">
            <span className="font-medium block mb-4 text-4xl">Stay Tuned!</span>
            <span className="block text-2xl">{typedText}</span>
          </h1>
        </motion.div>
        <div className="relative w-full max-w-4xl flex justify-center items-center gap-4">
          <motion.div style={{ x: hSpring.x, y: hSpring.y }} className="w-32 md:w-40">
            <Image
              src={h}
              alt="H"
              width={200}
              height={200}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: eSpring.x, y: eSpring.y }} className="w-32 md:w-40">
            <Image
              src={e}
              alt="E"
              width={200}
              height={200}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: ySpring.x, y: ySpring.y }} className="w-32 md:w-40">
            <Image
              src={y}
              alt="Y"
              width={200}
              height={200}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: exclamationSpring.x, y: exclamationSpring.y }} className="w-32 md:w-40">
            <Image
              src={exclamation}
              alt="!"
              width={200}
              height={200}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="min-h-screen flex items-center justify-center bg-[#F9F2FF] px-4">
        <div className="w-full py-20">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-sm text-[#4A2B5C]">
          <div>business@cliqit.co</div>
          <div>Pune, India</div>
        </div>
        <Image
          src={logo}
          alt="Cliqit Media"
          width={80}
          height={30}
          className="h-6 w-auto"
        />
      </footer>
    </div>
  );
}
