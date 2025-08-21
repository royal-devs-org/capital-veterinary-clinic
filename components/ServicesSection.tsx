"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion, easeOut, easeInOut } from "framer-motion";
import {
  Shield,
  Heart,
  Scissors,
  Syringe,
  Home,
  Stethoscope,
  Sparkles,
  Activity,
} from "lucide-react";
import { useState } from "react";

export default function ServicesSection() {
  const services = [
    {
      icon: Sparkles,
      title: "Pet Grooming",
      description: "Professional grooming and hygiene services",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      position: "top-center",
    },
    {
      icon: Shield,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services for critical situations",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      position: "top-left",
    },
    {
      icon: Stethoscope,
      title: "Routine Checkups",
      description: "Comprehensive health examinations and preventive care",
      color: "text-vet-blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      position: "top-right",
    },
    {
      icon: Scissors,
      title: "Surgical Procedures",
      description: "Advanced surgical services in our modern operating theater",
      color: "text-vet-purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      position: "middle-left",
    },
    {
      icon: Syringe,
      title: "Pet Vaccinations",
      description: "Complete vaccination programs for all pets",
      color: "text-vet-green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      position: "middle-right",
    },
    {
      icon: Heart,
      title: "Multi-Species Care",
      description: "Expert care for cats, dogs, birds, and reptiles",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      position: "bottom-left",
    },
    {
      icon: Home,
      title: "Home Visits",
      description: "Convenient at-home veterinary care services",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      position: "bottom-right",
    },
  ];

  const getServicePosition = (position: string) => {
    const positions = {
      "top-left": "absolute top-20 left-2 md:top-10 md:left-42",
      "top-center":
        "absolute top-0 left-1/2 transform -translate-x-1/2 md:-top-10",
      "top-right": "absolute top-20 right-2 md:top-10 md:right-36",
      "middle-left":
        "absolute top-[400px] left-0 md:top-[300px] md:left-4 transform -translate-y-1/2",
      "middle-right":
        "absolute top-[400px] right-0 md:top-[300px] md:right-4 transform -translate-y-1/2",
      "bottom-left": "sm:block hidden absolute -bottom-10 left-10 md:bottom-24 md:left-8",
      "bottom-right": "sm:block hidden absolute -bottom-10 right-10 md:bottom-24 md:right-8",
    };
    return positions[position as keyof typeof positions];
  };

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
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const centerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.5,
      },
    },
  };

  // Carousel state for mobile
  const [currentGroup, setCurrentGroup] = useState(0);
  const groupSize = 3;
  const totalGroups = Math.ceil(services.length / groupSize);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animation variants for mobile carousel - bubble-like transitions
  const mobileCarouselVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.3,
      y: 60,
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.3,
      y: -60,
      transition: {
        duration: 0.3,
        ease: easeInOut
      }
    },
  };

  // Individual service bubble animation
  const bubbleVariants = {
    initial: { 
      scale: 0,
      opacity: 0,
      y: 50,
      rotate: -180
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        duration: 0.6
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      y: -50,
      rotate: 180,
      transition: {
        duration: 0.4,
        ease: easeInOut
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Get services for current group - always return exactly 3 services
  const getCurrentServices = () => {
    const start = currentGroup * groupSize;
    const currentServices = services.slice(start, start + groupSize);
    
    // If we have less than 3 services, fill with empty placeholders
    while (currentServices.length < groupSize) {
      currentServices.push({
        icon: Sparkles, // placeholder icon
        title: "",
        description: "",
        color: "text-transparent",
        bgColor: "bg-transparent",
        borderColor: "border-transparent",
        position: "placeholder"
      });
    }
    
    return currentServices;
  };

  // Mobile positions
  const mobilePositions = [
    "absolute top-0 left-1/2 transform -translate-x-1/2", // top-center
    "absolute top-35 left-2", // top-left
    "absolute top-35 right-2", // top-right
  ];

  // Navigation handlers with smooth transition
  const handlePrev = async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentGroup((prev: number) => (prev - 1 + totalGroups) % totalGroups);
    setTimeout(() => setIsTransitioning(false), 600);
  };
  
  const handleNext = async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentGroup((prev: number) => (prev + 1) % totalGroups);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section id="services" className="pt-20 sm:pb-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-vet-green text-white mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Comprehensive Care for Your Furry Family Members
          </h2>
          <p className="text-md sm:text-lg 2xl:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert Veterinary Care to Keep Tails Wagging and Hearts Happy.
          </p>
        </motion.div>

        {/* Services Layout */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* --- MOBILE CAROUSEL --- */}
          <div className="relative h-[550px] md:hidden">
            {/* Static Center Image - Outside carousel container */}
            <motion.div
              className="absolute top-96 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              variants={centerVariants}
            >
              <div className="relative flex items-center justify-center">
                <div
                  className="
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]
                  "
                >
                  <Image
                    src="/images/pets-sitting.png"
                    alt="Happy pets receiving veterinary care"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Carousel Services */}
            <motion.div
              key={currentGroup} // Force re-render on group change
              className="relative w-full h-full"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileCarouselVariants}
            >
              {getCurrentServices().map((service, idx) => {
                // Skip rendering placeholder services
                if (!service || service.title === "") {
                  return null;
                }
                
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={`${currentGroup}-${idx}`}
                    className={`${mobilePositions[idx]} w-36`}
                    variants={bubbleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover="hover"
                    custom={idx}
                  >
                    <div className="relative">
                      <motion.div
                        className={`w-14 h-14 ${service.bgColor} ${service.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ 
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          scale: 1.05
                        }}
                      >
                        <IconComponent className={`w-6 h-6 ${service.color}`} />
                      </motion.div>
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-tight">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Carousel Navigation */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8 z-30">
                <motion.button
                  onClick={handlePrev}
                  disabled={isTransitioning}
                  className={`bg-white border border-vet-blue text-vet-blue rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-vet-blue hover:text-white transition-all duration-200 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                  }`}
                  whileHover={{ scale: isTransitioning ? 1 : 1.1 }}
                  whileTap={{ scale: isTransitioning ? 1 : 0.95 }}
                  aria-label="Previous"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7"/>
                  </svg>
                </motion.button>
                
                {/* Pagination dots */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalGroups }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        if (!isTransitioning) {
                          setIsTransitioning(true);
                          setCurrentGroup(index);
                          setTimeout(() => setIsTransitioning(false), 600);
                        }
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentGroup ? 'bg-vet-blue w-6' : 'bg-gray-300'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
                
                <motion.button
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className={`bg-white border border-vet-blue text-vet-blue rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-vet-blue hover:text-white transition-all duration-200 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                  }`}
                  whileHover={{ scale: isTransitioning ? 1 : 1.1 }}
                  whileTap={{ scale: isTransitioning ? 1 : 0.95 }}
                  aria-label="Next"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* --- DESKTOP LAYOUT (unchanged) --- */}
          <div className="relative h-[550px] hidden md:block md:h-[800px] lg:h-[700px]">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className={`${getServicePosition(
                    service.position
                  )} w-36 md:w-44 lg:w-48`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Service Circle */}
                  <div className="relative">
                    {/* Circle Background */}
                    <div
                      className={`w-14 h-14 md:w-18 md:h-18 ${service.bgColor} ${service.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <IconComponent
                        className={`w-6 h-6 md:w-8 md:h-8 ${service.color}`}
                      />
                    </div>

                    {/* Service Content */}
                    <div className="text-center">
                      <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-tight">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Center Image */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              variants={centerVariants}
            >
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-vet-blue/60 rounded-full"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Pet Image*/}
                <div className="absolute top-1/2 left-1/2 w-56 md:w-80 lg:w-[750px] transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/images/pets-sitting.png"
                    alt="Happy pets receiving veterinary care"
                    width={800}
                    height={800}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}