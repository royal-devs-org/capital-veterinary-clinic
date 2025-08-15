"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedButton from "@/components/ui/animated-button";
import { Star, Quote, Heart, ExternalLink, ChevronLeft, ChevronRight, Users, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Review {
  name: string;
  image: string;
  review: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  
  const groupSize =3;
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

  // Featured reviews (first 6 from the reviews data)
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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging, featuredReviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
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
                transform: `translateX(-${currentIndex * (100 / 3)}%) translateX(${dragOffset}px)`,
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
              {featuredReviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 px-4"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-vet-blue transition-all duration-300 bg-white shadow-lg hover:shadow-2xl">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-vet-blue to-vet-purple rounded-full flex items-center justify-center">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 leading-relaxed italic flex-grow text-center mb-6">
                        "{review.review}"
                      </p>

                      {/* Rating */}
                      <div className="flex justify-center gap-1 mb-6">
                        {renderStars(review.rating)}
                      </div>

                      {/* Reviewer Info */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="relative">
                          <Image
                            src={review.image}
                            alt={review.name}
                            width={60}
                            height={60}
                            className="rounded-full object-cover border-4 border-white shadow-lg"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-vet-green rounded-full flex items-center justify-center">
                            <Heart className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-gray-900 text-lg">
                            {review.name}
                          </h4>
                          <p className="text-gray-600">Verified Client</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
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

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {featuredReviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
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
          <Card className="inline-block border-vet-purple border-2 bg-gradient-to-r from-purple-50 to-blue-50 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">
                  Join 200+ Happy Pet Families
                </h3>
                
                <p className="text-gray-600 max-w-md">
                  Experience the same level of care and compassion that has earned us 
                  consistently 5-star reviews from pet owners across the region.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AnimatedButton 
                    className="bg-vet-green hover:bg-green-600 text-white font-semibold shadow-lg"
                    hoverScale={1.05}
                    tapScale={0.95}
                  >
                    Book Your Appointment
                  </AnimatedButton>
                  
                  <a
                    href="https://share.google/SyksRwKyMUEHegTTO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimatedButton 
                      variant="outline" 
                      className="border-vet-blue text-vet-blue hover:bg-vet-blue hover:text-white font-semibold w-full sm:w-auto shadow-lg"
                      hoverScale={1.05}
                      tapScale={0.95}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      See All 200+ Reviews
                    </AnimatedButton>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
