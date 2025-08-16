"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-vet-purple text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="flex flex-row gap-4 items-center justify-between sm:justify-start w-full sm:w-auto gap-auto">
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
              <a href="tel:03489032106" className="hover:text-vet-green transition-colors">
                Emergency 24/7: 0348-9032106
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        mounted && isScrolled ? 'bg-white shadow-lg py-2 top-0 ' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/media/Clinic Logo.png"
                  alt="Capital Veterinary Clinic Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-vet-purple">Capital Veterinary Clinic</h1>
                <p className="text-xs text-gray-600">Dr. Usama Naseer - Professional Care 24/7</p>
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

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:03489032106">
                <AnimatedButton 
                  variant="outline" 
                  className="border-vet-blue text-vet-blue hover:bg-vet-blue hover:!text-white"
                  hoverScale={1.05}
                  tapScale={0.95}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </AnimatedButton>
              </a>
              <Link href="#contact">
                <AnimatedButton 
                  className="bg-vet-green hover:bg-green-600 !text-white"
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

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-vet-green font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <a href="tel:03489032106">
                    <AnimatedButton 
                      variant="outline" 
                      className="w-full border-vet-blue text-vet-blue hover:bg-vet-blue hover:!text-white"
                      hoverScale={1.02}
                      tapScale={0.98}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </AnimatedButton>
                  </a>
                  <Link href="#contact">
                    <AnimatedButton 
                      className="w-full bg-vet-green hover:bg-green-600 !text-white"
                      hoverScale={1.02}
                      tapScale={0.98}
                    >
                      Book Appointment
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
