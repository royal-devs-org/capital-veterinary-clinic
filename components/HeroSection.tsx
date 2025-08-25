"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedButton from "@/components/ui/animated-button";
import { Container } from "@/components/ui/container";
import {
  Phone,
  Clock,
  MapPin,
  Heart,
  Shield,
  Star,
  Send,
  Calendar,
} from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Expert Veterinary Care 24/7";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="relative min-h-screen 2xl:min-h-[85vh] flex items-center overflow-hidden 2xl:pt-20">
      {/* Background Wall */}
      <div className="absolute inset-0 bg-[#53B7E9]/[0.28]" />
      {/* Background Floor */}
      <div className="absolute bottom-0 w-full h-[25%] bg-[#53B7E9]/[0.10]" />
      <Container className="py-20 relative z-10">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-8 gap-2 items-center pb-40 sm:pb-0 2xl:pb-16 max-w-full">
          {/* Left Content */}
          <motion.div
            className="space-y-5 sm:space-y-4 2xl:space-y-7 2xl:col-span-4 w-full max-w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Headline with Typewriter Effect */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight font-heading break-words">
                {displayText}
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="text-sm sm:text-md lg:text-lg 2xl:text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Led by <strong>Dr. Usama Naseer</strong> with{" "}
              <strong>4+ years</strong> of dedicated animal care experience in
              Rawalpindi. Professional veterinary services for cats, dogs,
              birds, and reptiles.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:py-3 py-3 place-items-center"
              variants={itemVariants}
            >
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 2xl:w-7 2xl:h-7 text-yellow-500 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm 2xl:text-lg text-gray-600">
                  200+ Reviews
                </p>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <motion.div
                  className="text-2xl 2xl:text-3xl font-bold text-vet-purple mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.5, type: "spring", stiffness: 500 }}
                >
                  4+
                </motion.div>
                <p className="text-sm 2xl:text-lg text-gray-600">
                  Years Experience
                </p>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <motion.div
                  className="text-2xl 2xl:text-3xl font-bold text-vet-purple mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 4, type: "spring", stiffness: 500 }}
                >
                  24/7
                </motion.div>
                <p className="text-sm 2xl:text-lg  text-gray-600">
                  Emergency Care
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-row gap-2 sm:gap-4 items-center justify-center w-full"
              variants={itemVariants}
            >
              <Link href="#contact" className="w-full">
                <AnimatedButton
                  size="lg"
                  className="shadow-lg border-vet-purple bg-vet-purple hover:bg-purple-600 !text-white w-full cursor-pointer px-8 py-4 text-sm sm:text-lg 2xl:text-xl 2xl:py-6 font-semibold"
                  hoverScale={1.05}
                  tapScale={0.95}
                >
                  <Calendar className="w-5 h-5 sm:mr-2" />
                  <span className="inline">Book Appointment</span>
                </AnimatedButton>
              </Link>

              <Link href="tel:03489032106" className="w-full">
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  className="shadow-lg border-vet-green bg-vet-green hover:bg-green-600 !text-white w-full cursor-pointer px-8 py-4 text-sm sm:text-lg 2xl:text-xl 2xl:py-6 font-semibold"
                  hoverScale={1.05}
                  tapScale={0.95}
                >
                  <Phone className="w-5 h-5 sm:mr-2" />
                  <span className="hidden sm:inline">
                    Call Now
                  </span>
                  <span className="inline sm:hidden">Call Now</span>
                </AnimatedButton>
              </Link>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="flex flex-row gap-3 sm:gap-8 lg:gap-48 2xl:gap-20 pt-4 w-full items-center justify-start"
              variants={itemVariants}
            >
              <motion.div
                className="flex w-full sm:w-auto items-center gap-3 text-gray-600"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="w-5 h-5 text-vet-purple flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base 2xl:text-lg">
                    OPD Hours
                  </p>
                  <p className="text-xs sm:text-sm 2xl:text-md">
                    11:00 AM - 11:00 PM
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex w-full sm:w-auto items-center gap-3 text-gray-600"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-vet-purple flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base 2xl:text-lg">
                    Location
                  </p>
                  <p className="text-xs sm:text-sm 2xl:text-md">
                    Westridge 1, Rawalpindi
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
      {/* Right Image */}
      {/* Image positioned to avoid overlap */}
      <div className="absolute bottom-0 w-full flex justify-center sm:justify-end sm:right-4 2xl:right-10 z-10 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-dog-image.webp"
          alt="Character"
          width={900}
          height={900}
          className="w-[400px] sm:w-[450px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px] h-auto object-contain max-w-full"
        />
      </div>{" "}
    </section>
  );
}
