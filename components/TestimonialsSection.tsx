"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedButton from "@/components/ui/animated-button";
import {
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Heart,
  PawPrint,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    review:
      "Dr. Usama is truly one of the most compassionate and skilled vets I’ve come across. The staff was friendly, professional, and very attentive to my pet’s needs. The clinic was clean, well-equipped, and the overall environment felt very calm and caring. My pet received excellent care, and I felt fully informed and reassured throughout the process. Highly recommend this clinic to any pet owner looking for quality veterinary services in Rawalpindi!",
    rating: 5,
  },
  {
    name: "Hammad Afzal",
    image: "/images/reviews/hammad-afzal.webp",
    review:
      "I had a great experience at Capital Veterinary Clinic with Dr. Usama Naseer. I brought my dog for treatment, and the care we received was truly professional and compassionate. Dr. Usama was patient, knowledgeable, and took the time to explain everything clearly. My dog is doing much better now, and I’m very thankful for the excellent treatment and attention he received. Highly recommended for anyone looking for a trustworthy vet in the Westridge area.",
    rating: 5,
  },
  {
    name: "Bro is Done",
    image: "/images/reviews/bro-is-done.webp",
    review:
      "Amazing service... I love how my cats are treated and taken care of here.. this was my first ever experience visiting any veterinary clinic and I&apos;m happy to have decided on capital veterinary clinic. Dr Usama is very patient, explained the situation of my cat carefully and extensively... forever grateful and thankful to him..",
    rating: 5,
  },
  {
    name: "Raji Kanwel Khawaja Attiq",
    image: "/images/reviews/raji-kanwel.webp",
    review:
      "Took my cat to get a hair cut from Dr.Usama, he and his team handled her with care. Showed professionalism and gave best advice as to how to go about her haircut and trimming. The aftercare was just as good. We went back with the cutest lion cut. Very happy and satisfied with their service, totally recommend 👍🏻",
    rating: 5,
  },
  {
    name: "Zeeshan Ahmed Awan",
    image: "/images/reviews/zeeshan-ahmed.webp",
    review:
      "I had a wonderful experience at the Capital Vet Clinic Westridge. The staff was incredibly kind, professional, and attentive. They treated my pet like family and explained everything clearly. Highly recommend this clinic to all pet owners!",
    rating: 5,
  },
  {
    name: "Mubeen Mujeeb",
    image: "/images/reviews/mubeen-mujeeb.webp",
    review:
      "I can’t say enough good things! When my puppies suddenly fell ill, he was there without hesitation. His compassion, quick response, and expert care made all the difference during such a stressful time. He treated my pups like his own and went above and beyond to get them on the road to recovery. I’m so grateful and wouldn’t trust anyone else with their care. Highly recommend!",
    rating: 5,
  },
  {
    name: "Kashaf Malik",
    image: "/images/reviews/kashaf-malik.webp",
    review:
      "Doctor Usama is humble person. He gives our cats good treatment. Very caring and friendly to animals. On his hands our cats alhamdulillah healthy. If you look for good clinic for your pets I recommend you to come to his clinic.",
    rating: 5,
  },
  {
    name: "Shumaim Tariq",
    image: "/images/reviews/shumaim-tariq.webp",
    review:
      "Capital vet clinic is the best clinic in Rawalpindi and doc usama is theBest doc in town. My cat Lily got injured and doc usama treat her very well .such nice doc. I really appreciate his work",
    rating: 5,
  },
  {
    name: "Muhammad Faizan",
    image: "/images/reviews/muhammad-faizan.webp",
    review:
      "Had an amazing experience at Capital Veterinary Clinic! Dr. Usama is super knowledgeable, kind, and truly cares for the animals. The treatment was top-notch and my pet recovered quickly. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mehmona Seerat",
    image: "/images/reviews/mehmona-seerat.webp",
    review:
      "So far, I have had the best experience with this clinic.Dr Usama is a truly compassionate person who treats animals with great love.He performed surgery on my cat,who is now completely fine Masha Allah .May Allah almighty grant him the ability to continue doing such good deeds and help innocent animals ❤️",
    rating: 5,
  },
  {
    name: "Hamna Shahzad",
    image: "/images/reviews/hamna-shahzad.webp",
    review:
      "5 star service. Dr. Usama took extra care of my male cat as he was excessively panting since he was extremely hot given the weather and stressed out from the car ride. I&apos;m very thankful for the care, effort and service of Dr. Usama and his assistant.",
    rating: 5,
  },
  {
    name: "Muneeb Ul Hassan",
    image: "/images/reviews/muneeb-hassan.webp",
    review:
      "Dr usama is very telented guy. He treated my milo {dog}. His surgery was done by Dr usama. I&apos;m very satisfied with him. Whenever I see milo, I recommend Dr usama for any type of surgery and treatment (capital vet clinic Westridge 1 rwp)",
    rating: 5,
  },
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const groupSize = 3; // Show 3 cards at a time on desktop

  // Calculate total groups for desktop
  const totalGroups = Math.ceil(featuredReviews.length / groupSize);

  // Intersection Observer for animation trigger - removed stats code

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
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
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
          i < rating ? "text-yellow-500 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <motion.section
      id="testimonials"
      className="pb-20 pt-30 bg-gradient-to-br from-gray-50 to-white"
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
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have
            to say about the care their beloved pets receive at Capital
            Veterinary Clinic
          </p>
        </motion.div>

        {/* Sliding Reviews Carousel */}
        <div className="relative max-w-7xl mx-auto mb-16">
          
          {/* Desktop Carousel (3 cards per view) */}
          <div className="hidden md:block">
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * 100
                  }%) translateX(${dragOffset}px)`,
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
                    {featuredReviews
                      .slice(groupIndex * groupSize, (groupIndex + 1) * groupSize)
                      .map((review, index) => (
                        <motion.div
                          key={`${groupIndex}-${index}`}
                          className="flex-shrink-0 w-1/3 px-4"
                          whileHover={{ y: -10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Card className="h-full relative overflow-hidden bg-gradient-to-br from-[#53B7E9]/10 to-[#53B7E9]/40 border border-[#53B7E9]/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                            {/* Gradient Glow Border */}
                            {/* <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-[#53B7E9]/20 to-[#412F85]/30 opacity-60 group-hover:opacity-100 blur-[3px] transition" /> */}

                            <CardContent className="relative z-10 py-4 px-8 h-full flex flex-col">
                              {/* Top Icons Row */}
                              <div className="flex justify-between items-start mb-6">
                                {/* Paw Icon */}
                                <motion.div
                                  className="w-12 h-12 bg-gradient-to-br from-[#53B7E9] to-[#412F85] rounded-xl flex items-center justify-center shadow-md"
                                  whileHover={{ scale: 1.1, rotate: 10 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <PawPrint className="w-7 h-7 text-white" />
                                </motion.div>

                                {/* Rating Stars */}
                                <div className="flex gap-1">
                                  {renderStars(review.rating).map(
                                    (star, starIndex) => (
                                      <motion.div
                                        key={starIndex}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{
                                          delay: starIndex * 0.1,
                                          type: "spring",
                                          stiffness: 500,
                                        }}
                                      >
                                        {star}
                                      </motion.div>
                                    )
                                  )}
                                </div>
                              </div>

                              {/* Review Text */}
                              <div className="relative mb-3 flex-grow">
                                <p className="text-gray-700 leading-relaxed text-center font-medium italic text-sm">
                                  &quot;{review.review}&quot;
                                </p>
                              </div>

                              {/* Reviewer Info */}
                              <motion.div
                                className="flex items-center gap-4 p-5"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                {/* Avatar */}
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
                                  {/* Heart Badge */}
                                  <motion.div
                                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#4CB735] to-green-500 rounded-full flex items-center justify-center shadow-md"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    <Heart className="w-3 h-3 text-white" />
                                  </motion.div>
                                </div>

                                {/* Reviewer Details */}
                                <div className="flex flex-col">
                                  <h4 className="font-bold text-gray-900 text-lg">
                                    {review.name}
                                  </h4>
                                  <p className="text-[#412F85] font-medium text-sm">
                                    Verified Client
                                  </p>
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
                className="absolute left-4 sm:left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-600 hover:text-vet-blue hover:bg-blue-50 transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextReview}
                className="absolute right-4 sm:right-0  top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-600 hover:text-vet-blue hover:bg-blue-50 transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots Indicator for Desktop */}
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                <motion.button
                  key={groupIndex}
                  onClick={() => goToGroup(groupIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    groupIndex === currentIndex
                      ? "bg-vet-blue scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>

          {/* Mobile Carousel (1 card per view) */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {featuredReviews.map((review, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-full px-4"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full relative overflow-hidden bg-gradient-to-br from-[#53B7E9]/10 via-white to-[#412F85]/10 border border-[#53B7E9]/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                      {/* Gradient Glow Border */}
                      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-[#53B7E9]/20 to-[#412F85]/30 opacity-60 group-hover:opacity-100 blur-[3px] transition" />

                      <CardContent className="relative z-10 py-4 px-6 h-full flex flex-col">
                        {/* Top Icons Row */}
                        <div className="flex justify-between items-start mb-4">
                          {/* Paw Icon */}
                          <motion.div
                            className="w-10 h-10 bg-gradient-to-br from-[#53B7E9] to-[#412F85] rounded-xl flex items-center justify-center shadow-md"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <PawPrint className="w-6 h-6 text-white" />
                          </motion.div>

                          {/* Rating Stars */}
                          <div className="flex gap-1">
                            {renderStars(review.rating).map(
                              (star, starIndex) => (
                                <motion.div
                                  key={starIndex}
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{
                                    delay: starIndex * 0.1,
                                    type: "spring",
                                    stiffness: 500,
                                  }}
                                >
                                  {star}
                                </motion.div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Review Text */}
                        <div className="relative mb-4 flex-grow">
                          <p className="text-gray-700 leading-relaxed text-center font-medium italic text-sm">
                            &quot;{review.review}&quot;
                          </p>
                        </div>

                        {/* Reviewer Info */}
                        <motion.div
                          className="flex items-center gap-3 p-4"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {/* Avatar */}
                          <div className="relative">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#53B7E9] to-[#412F85] p-1">
                              <Image
                                src={review.image}
                                alt={review.name}
                                width={56}
                                height={56}
                                className="rounded-full object-cover w-full h-full"
                              />
                            </div>
                            {/* Heart Badge */}
                            <motion.div
                              className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#4CB735] to-green-500 rounded-full flex items-center justify-center shadow-md"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Heart className="w-2.5 h-2.5 text-white" />
                            </motion.div>
                          </div>

                          {/* Reviewer Details */}
                          <div className="flex flex-col">
                            <h4 className="font-bold text-gray-900 text-base">
                              {review.name}
                            </h4>
                            <p className="text-[#412F85] font-medium text-sm">
                              Verified Client
                            </p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Navigation Buttons */}
              <motion.button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-vet-blue hover:bg-blue-50 transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setCurrentIndex((prev) => Math.min(featuredReviews.length - 1, prev + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-vet-blue hover:bg-blue-50 transition-all duration-300 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Mobile Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {featuredReviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-vet-blue scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
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
