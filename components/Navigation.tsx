"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/ui/animated-button";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

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
        <div className="container mx-auto px-10 2xl:px-4">
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
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 overflow-hidden ${
        mounted && isScrolled ? 'bg-white shadow-lg py-2 top-0 ' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
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
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-vet-green font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vet-green transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

           {/* Desktop CTA Buttons */}
<div className="hidden md:flex items-center gap-3">
  <Link href="tel:03489032106">
    <AnimatedButton
      variant="outline"
      className="border-vet-blue bg-vet-blue !text-white hover:bg-vet-blue/90 flex items-center cursor-pointer"
      hoverScale={1.05}
      tapScale={0.95}
    >
      <Phone className="w-4 h-4 mr-2" />
      Call Now
    </AnimatedButton>
  </Link>
  <Link href="#contact">
    <AnimatedButton
      className="bg-vet-green hover:bg-green-600 !text-white cursor-pointer"
      hoverScale={1.05}
      tapScale={0.95}
    >
      Book Appointment
    </AnimatedButton>
  </Link>
</div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
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
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <div className="p-6 pb-0">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-vet-green font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer pushes CTA + Contact to bottom */}
          <div className="flex-grow" />

          {/* CTA Buttons */}
          <div className="px-6 py-6">
            <div className="space-y-4">
              <Link href="tel:03489032106" className="block w-full" onClick={() => setIsOpen(false)}>
                <AnimatedButton
                  className="w-full flex justify-center items-center bg-vet-blue hover:bg-vet-blue/90 !text-white py-3 text-base font-semibold shadow-md"
                  hoverScale={1.02}
                  tapScale={0.98}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </AnimatedButton>
              </Link>
              <Link href="#contact" className="block w-full" onClick={() => setIsOpen(false)}>
                <AnimatedButton
                  className="w-full flex justify-center items-center bg-vet-green hover:bg-green-600 !text-white py-3 text-base font-semibold shadow-md"
                  hoverScale={1.02}
                  tapScale={0.98}
                >
                  Book Appointment
                </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-vet-green" />
                <span className="text-sm text-gray-600">
                  Emergency: 0348-9032106
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-vet-green" />
                <span className="text-sm text-gray-600">OPD: 11 AM - 11 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-vet-green" />
                <span className="text-sm text-gray-600">
                  Westridge 1, Rawalpindi
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
