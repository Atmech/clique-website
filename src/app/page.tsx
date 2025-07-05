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


const TYPEWRITER_TEXT = " Not just a platform, a whole vibe!";
const TYPEWRITER_DELAY = 100;
const START_DELAY = 700;

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(startTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [eSpring.x, eSpring.y, exclamationSpring.x, exclamationSpring.y, hSpring.x, hSpring.y, ySpring.x, ySpring.y, lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F2FF]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-between w-full transition-transform duration-300 z-50 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <Image
          src={logo}
          alt="CLIQIT"
          width={250}
          height={100}
          priority
          className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
        />
        <div className="flex items-center gap-2.5 sm:gap-3.5 md:gap-5">
          <a href="/contact" className="text-[#4A2B5C] hover:text-[#3C184E] transition-colors font-medium text-sm sm:text-base">
            Contact
          </a>
          <a href="/privacy-policy" className="text-[#4A2B5C] hover:text-[#3C184E] transition-colors font-medium text-sm sm:text-base">
            Privacy
          </a>
          <a href="https://www.instagram.com/cliqit.in/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={instagram} alt="Instagram" width={20} height={20} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
          <a href="https://www.linkedin.com/company/cliqit-media/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image src={linkedin} alt="LinkedIn" width={20} height={20} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-screen pt-12 sm:pt-14 md:pt-16">
        <motion.div 
          className="mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#4A2B5C] leading-tight">
            <motion.span
              className="font-bold block mb-2 sm:mb-4 text-1xl sm:text-2xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Almost time to CLIQ into something iconic.
            </motion.span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">{typedText}</span>
          </h1>
        </motion.div>
        <div className="relative w-full max-w-4xl flex justify-center items-center px-4 sm:px-6">
          <motion.div style={{ x: hSpring.x, y: hSpring.y }} className="w-24 sm:w-40 md:w-64 lg:w-96">
            <Image
              src={h}
              alt="H"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: eSpring.x, y: eSpring.y }} className="w-24 sm:w-40 md:w-64 lg:w-96">
            <Image
              src={e}
              alt="E"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: ySpring.x, y: ySpring.y }} className="w-24 sm:w-40 md:w-64 lg:w-96">
            <Image
              src={y}
              alt="Y"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.div style={{ x: exclamationSpring.x, y: exclamationSpring.y }} className="w-24 sm:w-40 md:w-64 lg:w-96">
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
      </footer>
    </div>
  );
}
