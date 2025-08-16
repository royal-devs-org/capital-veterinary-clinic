"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Star, Calendar, Stethoscope, PawPrint } from "lucide-react";
import { Badge } from "./ui/badge";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    rating: 0,
    experience: 0,
    treatments: 0,
  });
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      label: "Happy Clients",
      value: 200,
      suffix: "+",
      color: "from-vet-blue to-blue-600",
      bgColor: "bg-vet-blue/10",
      description: "Satisfied pet families",
    },
    {
      icon: Star,
      label: "Google Rating",
      value: 4.9,
      suffix: "★",
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-50",
      description: "Average review score",
    },
    {
      icon: Calendar,
      label: "Years",
      value: 4,
      suffix: "+",
      color: "from-vet-purple to-purple-600",
      bgColor: "bg-vet-purple/10",
      description: "Professional expertise",
    },
    {
      icon: Stethoscope,
      label: "Treatments",
      value: 500,
      suffix: "+",
      color: "from-vet-green to-green-600",
      bgColor: "bg-vet-green/10",
      description: "Successful lives improved",
    },
  ];

  // Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setCounts({
        clients: Math.floor(progress * 200),
        rating: parseFloat((progress * 4.9).toFixed(1)),
        experience: Math.floor(progress * 4),
        treatments: Math.floor(progress * 500),
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts({
          clients: 200,
          rating: 4.9,
          experience: 4,
          treatments: 500,
        });
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="relative">
      <div className="relative sm:pt-20 sm:pb-20 pb-0 pt-20 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-12 items-stretch">
            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-between relative">
              {/* Heading + Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-vet-green text-white mb-4">
                  Stats & Achievements
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-vet-purple mb-6">
                  Our Track Record
                  <PawPrint className="inline-block w-8 h-8 text-vet-purple ml-4 mb-2" />
                </h2>
                <p className="text-md sm:text-xl text-gray-700 leading-relaxed max-w-lg">
                  Numbers that speak volumes about our commitment to exceptional
                  veterinary care and the trust we&apos;ve built in the
                  Rawalpindi community.
                </p>
              </motion.div>

              {/* Image pinned to bottom */}
              <div className="relative sm:mt-12 flex justify-center lg:justify-start">
                <div className="absolute bottom-0 sm:-bottom-[195px] sm:-left-10 w-full md:w-[650px] lg:w-[980px]">
                  <Image
                    src="/images/cat-dog-2.png"
                    alt="Happy Cat & Dog"
                    width={750}
                    height={750}
                    className="hidden sm:block object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Stats Grid */}
            <motion.div
              className="relative z-20 sm:pb-0 pb-48"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-6" ref={statsRef}>
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  const value = Object.values(counts)[i] as number;

                  return (
                    <motion.div
                      key={i}
                      className={`group relative rounded-3xl p-3 sm:p-5 bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500backdrop-blur-sm flex flex-col items-center text-center`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div className="relative z-10 flex flex-col items-center">
                        <div
                          className={`inline-flex p-4 rounded-2xl text-vet-green `}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-3xl md:text-4xl font-bold text-gray-900">
                          {value}
                          {stat.suffix}
                        </span>
                        <h4 className="font-bold text-gray-800 text-lg mt-2">
                          {stat.label}
                        </h4>
                        <p className="text-gray-600 text-sm font-medium">
                          {stat.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* --- MOBILE IMAGE (below everything) --- */}
            <div className="absolute -bottom-[60px] flex justify-center sm:hidden">
              <Image
                src="/images/cat-dog-2.png"
                alt="Happy Cat & Dog"
                width={400}
                height={400}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
