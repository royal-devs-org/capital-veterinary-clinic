"use client";

import { motion, easeOut } from "framer-motion";
import { Star, Users, Heart, PawPrint, Calendar} from "lucide-react";
import AnimatedButton from "@/components/ui/animated-button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HappyFamiliesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate counter when visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.min(Math.floor(easeOutProgress * 200), 200));

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(200);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  // ✅ Load dotlottie animation once visible
  useEffect(() => {
    if (typeof window !== "undefined" && lottieRef.current && isVisible) {
      // load script if not already injected
      if (!document.querySelector("#dotlottie-wc")) {
        const script = document.createElement("script");
        script.id = "dotlottie-wc";
        script.src =
          "https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js";
        script.type = "module";
        document.head.appendChild(script);
      }

      // inject lottie element
      const lottieElement = document.createElement("dotlottie-wc");
      lottieElement.setAttribute(
        "src",
        "https://lottie.host/d70d923a-b1d9-4dfd-9ba6-ba5e1085b15e/1FwC85laZq.lottie"
      );
      lottieElement.setAttribute("autoplay", "true");
      lottieElement.setAttribute("loop", "true");
      lottieElement.setAttribute("speed", "1");
      lottieElement.style.width = "100%";
      lottieElement.style.height = "100%";

      lottieRef.current.innerHTML = "";
      lottieRef.current.appendChild(lottieElement);
    }
  }, [isVisible]);

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
        ease: easeOut
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden px-6"
      style={{ backgroundColor: '#4CB735' }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 20c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm0 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* Floating Hearts */}
      <motion.div 
        className="absolute top-10 left-10 text-white/20"
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Heart className="w-8 h-8" />
      </motion.div>

      <motion.div 
        className="absolute top-20 right-20 text-white/20"
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        <PawPrint className="w-10 h-10" />
      </motion.div>

      <motion.div 
        className="absolute bottom-20 left-20 text-white/20"
        animate={{ 
          y: [-5, 15, -5],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Star className="w-6 h-6" />
      </motion.div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            variants={itemVariants}
          >


            <motion.div className="space-y-4" variants={itemVariants}>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-heading space-x-3">
                <span>Join</span>
                <motion.span 
                  className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg mx-2 mb-2"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 500 }}
                >
                  {count}+
                </motion.span>
                <span>Happy  Pet  Families</span>
              </h2>
              
              <p className="text-md sm:text-lg 2xl:text-xl text-green-100 leading-relaxed">
                Experience the same level of care and compassion that has earned us 
                consistently 5-star reviews from pet owners across Rawalpindi, Islamabad, and Lahore.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 500 }}
                >
                  4.9
                </motion.div>
                <div className="text-green-100 text-sm">Google Rating</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 500 }}
                >
                  24/7
                </motion.div>
                <div className="text-green-100 text-sm">Emergency Care</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.6, type: "spring", stiffness: 500 }}
                >
                  4+
                </motion.div>
                <div className="text-green-100 text-sm">Years Experience</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col gap-4 sm:gap-7 sm:flex-row justify-center lg:justify-center"
              variants={itemVariants}
            >
              <Link href="#contact" className="block w-full">
              <AnimatedButton 
                size="lg"
                className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold shadow-lg border-2 border-white"
                hoverScale={1.05}
                tapScale={0.95}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
              </AnimatedButton>
              </Link>
              
              <Link href="#testimonials" className="block w-full">
              <AnimatedButton 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold shadow-lg backdrop-blur-sm"
                hoverScale={1.05}
                tapScale={0.95}
              >
                <Star className="w-5 h-5 mr-2" />
                Read Success Stories
              </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Lottie Animation */}
          <motion.div 
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-80 h-80 md:w-96 md:h-96"
              initial={{ scale: 0, rotate: -10 }}
              animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
            >
              {/* Background Circle */}
              <motion.div 
                className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Lottie Container */}
              <div 
                ref={lottieRef}
                className="relative z-10 w-full h-full flex items-center justify-center scale-150"
              />
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  y: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [-3, 3, -3]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
