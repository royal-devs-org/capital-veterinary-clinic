"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion, easeOut } from "framer-motion";
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

  return (
    <section id="services" className="py-20 bg-gray-50">
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
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
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
          {/* Services positioned around the center */}
          <div className="relative h-[550px] md:h-[800px] lg:h-[700px]">
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
                {/* Pet Image outside the circle */}
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

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-gray-900">
                Ready to give your pet the best care?
              </p>
              <p className="text-gray-600">
                Contact us today to schedule an appointment
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:03489032106"
                className="bg-vet-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Shield className="w-4 h-4" />
                Emergency Call
              </a>
              <a
                href="#contact"
                className="border border-vet-blue text-vet-blue hover:bg-vet-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
