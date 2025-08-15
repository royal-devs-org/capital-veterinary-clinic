"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedButton from "@/components/ui/animated-button";
import { Phone, Clock, MapPin, Heart, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Expert Veterinary Care 24/7";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-green-50 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23412F85' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}></div>
      </motion.div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Emergency Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-vet-green text-white px-4 py-2 rounded-full text-sm font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-4 h-4" />
              </motion.div>
              24/7 Emergency Services Available
            </motion.div>

            {/* Main Headline with Typewriter Effect */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-heading">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block"
                >
                  |
                </motion.span>
              </h1>
              <motion.h2 
                className="text-xl md:text-2xl font-medium text-vet-purple"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                Your Pet's Health is Our Priority
              </motion.h2>
            </motion.div>

            {/* Subheadline */}
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Led by <strong>Dr. Usama Naseer</strong> with <strong>4+ years</strong> of dedicated animal care experience in Rawalpindi. Professional veterinary services for cats, dogs, birds, and reptiles.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-3 gap-4 py-4"
              variants={itemVariants}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">200+ Reviews</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-vet-purple mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.5, type: "spring", stiffness: 500 }}
                >
                  4+
                </motion.div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-vet-purple mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 4, type: "spring", stiffness: 500 }}
                >
                  24/7
                </motion.div>
                <p className="text-sm text-gray-600">Emergency Care</p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <AnimatedButton
                size="lg" 
                className="bg-vet-green hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg shadow-lg"
                hoverScale={1.05}
                tapScale={0.95}
              >
                <Heart className="w-5 h-5 mr-2" />
                Book an Appointment
              </AnimatedButton>
              
              <AnimatedButton
                variant="outline" 
                size="lg"
                className="border-vet-blue text-vet-blue hover:bg-vet-blue hover:text-white font-semibold px-8 py-4 text-lg shadow-lg"
                hoverScale={1.05}
                tapScale={0.95}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 0348-9032106
              </AnimatedButton>
            </motion.div>

            {/* Quick Info */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center gap-3 text-gray-600"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="w-5 h-5 text-vet-purple" />
                <div>
                  <p className="font-medium">OPD Hours</p>
                  <p className="text-sm">11:00 AM - 11:00 PM</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-gray-600"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-vet-purple" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm">Westridge 1, Rawalpindi</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              animate={floatingAnimation}
            >
              <Image
                src="/images/media/Vet in Uniform.png"
                alt="Dr. Usama Naseer - Professional Veterinarian"
                width={600}
                height={700}
                className="object-cover w-full h-[600px]"
                priority
              />
              
              {/* Floating Card */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-vet-green rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Usama Naseer</p>
                    <p className="text-sm text-gray-600">DVM, RVMP, PVMC</p>
                    <p className="text-sm text-vet-green font-medium">Available 24/7 for Emergencies</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Animated Background Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-72 h-72 bg-vet-blue opacity-10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-72 h-72 bg-vet-green opacity-10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
