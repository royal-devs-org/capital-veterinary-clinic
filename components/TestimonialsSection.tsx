"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedButton from "@/components/ui/animated-button";
import { Star, ExternalLink, ChevronLeft, ChevronRight, Users, Calendar, Quote, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Review {
  name: string;
  image: string;
  review: string;
  rating: number;
}

export default function TestimonialsSection() {
  // Featured reviews
  const featuredReviews: Review[] = [
    {
      name: "Hayat Ullah",
      image: "/images/reviews/hayat-ullah.webp",
      review: "Dr. Usama is truly one of the most compassionate and skilled vets I've come across. The staff was friendly, professional, and very attentive to my pet's needs. Highly recommend this clinic to any pet owner!",
      rating: 5
    },
    {
      name: "Hammad Afzal",
      image: "/images/reviews/hammad-afzal.webp",
      review: "I had a great experience at Capital Veterinary Clinic with Dr. Usama Naseer. Dr. Usama was patient, knowledgeable, and took the time to explain everything clearly. Highly recommended for anyone looking for a trustworthy vet.",
      rating: 5
    },
    {
      name: "Bro is Done",
      image: "/images/reviews/bro-is-done.webp",
      review: "Amazing service... I love how my cats are treated and taken care of here. Dr Usama is very patient, explained the situation of my cat carefully and extensively... forever grateful and thankful to him.",
      rating: 5
    },
    {
      name: "Raji Kanwel",
      image: "/images/reviews/raji-kanwel.webp",
      review: "Took my cat to get a hair cut from Dr.Usama, he and his team handled her with care. Showed professionalism and gave best advice. Very happy and satisfied with their service, totally recommend 👍🏻",
      rating: 5
    },
    {
      name: "Mubeen Mujeeb",
      image: "/images/reviews/mubeen-mujeeb.webp",
      review: "I can't say enough good things! When my puppies suddenly fell ill, he was there without hesitation. His compassion, quick response, and expert care made all the difference. Highly recommend!",
      rating: 5
    },
    {
      name: "Kashaf Malik",
      image: "/images/reviews/kashaf-malik.webp",
      review: "Doctor Usama is humble person. He gives our cats good treatment. Very caring and friendly to animals. If you look for good clinic for your pets I recommend you to come to his clinic.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  
  const groupSize = 3; // Show 3 cards at a time on desktop
  
  // Calculate total groups for desktop
  const totalGroups = Math.ceil(featuredReviews.length / groupSize);
  // Animated stats
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    rating: 0,
    experience: 0
  });
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      label: "Happy Clients",
      value: 200,
      suffix: "+",
      color: "text-vet-green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Star,
      label: "Google Rating",
      value: 4.9,
      suffix: "★",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: Calendar,
      label: "Years Experience",
      value: 4,
      suffix: "+",
      color: "text-vet-purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate counters when visible
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

      setCounts({
        clients: Math.min(Math.floor(easeOutProgress * 200), 200),
        rating: Math.min(parseFloat((easeOutProgress * 4.9).toFixed(1)), 4.9),
        experience: Math.min(Math.floor(easeOutProgress * 4), 4)
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts({ clients: 200, rating: 4.9, experience: 4 });
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Auto-play carousel - move by groups of 3 on desktop
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, totalGroups]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToGroup = (groupIndex: number) => {
    setCurrentIndex(groupIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        prevReview();
      } else {
        nextReview();
      }
    }
    
    setDragOffset(0);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <motion.section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-vet-green text-white mb-4">Client Reviews</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            What Pet Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about 
            the care their beloved pets receive at Capital Veterinary Clinic
          </p>
        </motion.div>

        {/* Animated Stats Section */}
        <motion.div 
          ref={statsRef}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const countValue = index === 0 ? counts.clients : 
                               index === 1 ? counts.rating : 
                               counts.experience;
              
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card 
                    className={`${stat.borderColor} border-2 hover:shadow-xl transition-all duration-300 group text-center bg-white`}
                  >
                    <CardContent className="p-8 space-y-4">
                      <div className={`${stat.bgColor} w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-10 h-10 ${stat.color}`} />
                      </div>
                      
                      <div className="space-y-2">
                        <motion.div 
                          className="text-4xl font-bold text-gray-900"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 500 }}
                          viewport={{ once: true }}
                        >
                          {countValue}{stat.suffix}
                        </motion.div>
                        <div className="text-gray-600 font-medium text-lg">
                          {stat.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Sliding Reviews Carousel */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-vet-blue text-white mb-4">What Our Clients Say</Badge>
            <h3 className="text-3xl font-bold text-gray-900 font-heading">
              Real Stories from Pet Parents
            </h3>
          </div>

          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%) translateX(${dragOffset}px)`,
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              whileDrag={{ cursor: "grabbing" }}
            >
              {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                <div key={groupIndex} className="flex w-full flex-shrink-0">
                  {featuredReviews.slice(groupIndex * groupSize, (groupIndex + 1) * groupSize).map((review, index) => (
                    <motion.div 
  key={`${groupIndex}-${index}`}
  className="flex-shrink-0 w-full md:w-1/3 px-4"
  whileHover={{ y: -10 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Card className="h-full relative overflow-hidden bg-gradient-to-br from-[#53B7E9]/10 via-white to-[#412F85]/10 border border-[#53B7E9]/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
    
    {/* Animated Gradient Border */}
    <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-[#53B7E9]/10 to-[#53B7E9]/40 opacity-80 group-hover:opacity-100 blur-[2px] transition" />
    
    <CardContent className="relative z-10 p-8 h-full flex flex-col">
      
      {/* Quote Badge */}
      <div className="flex justify-center mb-6">
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-[#53B7E9] to-[#412F85] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Review Text */}
      <div className="relative mb-6 flex-grow">
        <p className="text-gray-800 leading-relaxed text-center font-medium italic text-lg">
          "{review.review}"
        </p>
        
      </div>

      {/* Rating */}
      <div className="flex justify-center gap-1 mb-6">
        {renderStars(review.rating).map((star, starIndex) => (
          <motion.div
            key={starIndex}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: starIndex * 0.1, type: "spring", stiffness: 500 }}
          >
            {star}
          </motion.div>
        ))}
      </div>

      {/* Reviewer Info */}
      <motion.div 
        className="flex items-center justify-center gap-4 p-4 bg-gradient-to-br from-white/80 to-[#53B7E9]/10 backdrop-blur-sm rounded-xl border border-[#412F85]/10 shadow-inner"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#53B7E9] to-[#412F85] p-1">
            <Image
              src={review.image}
              alt={review.name}
              width={60}
              height={60}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <motion.div 
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#4CB735] to-green-500 rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-3 h-3 text-white" />
          </motion.div>
        </div>
        <div className="text-center">
          <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
          <p className="text-[#412F85] font-medium text-sm">Verified Client</p>
        </div>
      </motion.div>
    </CardContent>
  </Card>
</motion.div>

                  ))}
                </div>
              ))}
            </motion.div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-600 hover:text-vet-blue hover:bg-blue-50 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-600 hover:text-vet-blue hover:bg-blue-50 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator - Show dots for groups */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalGroups }).map((_, groupIndex) => (
              <motion.button
                key={groupIndex}
                onClick={() => goToGroup(groupIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  groupIndex === currentIndex 
                    ? 'bg-vet-blue scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* See More Reviews CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://share.google/SyksRwKyMUEHegTTO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton 
              size="lg"
              variant="outline" 
              className="border-vet-blue text-vet-blue hover:bg-vet-blue hover:text-white font-semibold shadow-lg"
              hoverScale={1.05}
              tapScale={0.95}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              See All 200+ Reviews on Google
            </AnimatedButton>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

