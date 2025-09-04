"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/animated-button";
import { Container } from "@/components/ui/container";
import { Menu, X, Phone, Clock, MapPin, Calendar } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Add/remove scrolled class on HTML element for CSS
      if (scrolled) {
        document.documentElement.classList.add('scrolled');
      } else {
        document.documentElement.classList.remove('scrolled');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clean up the scrolled class
      document.documentElement.classList.remove('scrolled');
    };
  }, [mounted]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Improved smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const targetId = elementId.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      try {
        // Calculate the offset based on the current navigation height
        const navHeight = mounted && isScrolled ? 64 : 96; // 64px when scrolled, 96px when not scrolled
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementTop - navHeight);

        // Close mobile menu first if it's open
        if (isOpen) {
          setIsOpen(false);
          // Wait for the sidebar to close before scrolling
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 300); // Match the sidebar animation duration
        } else {
          // For desktop, scroll immediately
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } catch (error) {
        console.error('Error during smooth scroll:', error);
        // Fallback to simple scroll
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      console.warn(`Element with id '${targetId}' not found`);
    }
  };

  // Handle navigation item click
  const handleNavigationClick = (href: string) => {
    smoothScrollTo(href);
  };

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-vet-purple text-white py-2 text-sm sm:block hidden">
        <Container>
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-row gap-4 items-center justify-between sm:justify-start w-full sm:w-auto">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>OPD: 11 AM - 11 PM</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Westridge 1, Rawalpindi</span>
              </div>
            </div>
            <div className="flex items-center gap-1 font-semibold">
              <Phone className="w-4 h-4" />
              <a
                href="tel:03489032106"
                className="hover:text-vet-green transition-colors"
              >
                Emergency 24/7: 0348-9032106
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 overflow-hidden ${
          mounted && isScrolled
            ? "bg-white shadow-lg py-2 top-0 "
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => handleNavigationClick("#home")}
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <Image
                  src="/images/media/Clinic Logo.png"
                  alt="Capital Veterinary Clinic Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-xl font-bold text-vet-purple truncate">
                  Capital Veterinary Clinic
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Dr. Usama Naseer - Professional Care 24/7
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item.href)}
                  className="text-gray-700 hover:text-vet-green font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vet-green transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="tel:03489032106">
                <AnimatedButton
                  variant="outline"
                  className="border-vet-green bg-vet-green !text-white hover:bg-vet-green/90 flex items-center cursor-pointer"
                  hoverScale={1.05}
                  tapScale={0.95}
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Call Now
                </AnimatedButton>
              </Link>
              <button
                onClick={() => handleNavigationClick("#contact")}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-vet-blue hover:bg-vet-blue/90 text-white h-10 px-4 py-2"
              >
                <Calendar className="w-4 h-4 mr-1" />
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </Container>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <motion.div
        className={`fixed top-0 right-0 h-screen w-full bg-white shadow-2xl z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        style={{ 
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          overscrollBehavior: 'contain',
          height: '100vh',
          maxHeight: '100vh'
        }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative bg-vet-purple rounded-lg p-2">
              <Image
                src="/images/media/Clinic Logo.png"
                alt="Capital Veterinary Clinic Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-vet-purple">
                Capital Veterinary Clinic
              </h3>
              <p className="text-xs text-gray-600">Dr. Usama Naseer</p>
            </div>
          </div>
          <motion.button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6 text-gray-600" />
          </motion.button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-[calc(100vh-84px)] overflow-hidden">
          {/* Navigation Links */}
          <div className="flex-1 px-6 py-6 overflow-y-auto">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavigationClick(item.href);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-vet-green font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="px-6 py-6 flex-shrink-0 border-t border-gray-100">
            <div className="flex flex-col items-center space-y-4 w-full">
              <Link
                href="tel:03489032106"
                className="w-full flex justify-center"
                onClick={() => setIsOpen(false)}
              >
                <AnimatedButton
                  className="w-full px-6 py-4 flex justify-center items-center bg-vet-green hover:bg-vet-green/90 !text-white text-base font-semibold shadow-md rounded-lg"
                  hoverScale={1.02}
                  tapScale={0.98}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </AnimatedButton>
              </Link>
              <button
                onClick={() => {
                  handleNavigationClick("#contact");
                  setIsOpen(false);
                }}
                className="w-full px-6 py-4 flex justify-center items-center bg-vet-blue hover:bg-blue-600 text-white text-base font-semibold shadow-md rounded-lg transition-colors duration-200"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}