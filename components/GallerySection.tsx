"use client";

import { useState } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Badge } from "@/components/ui/badge";
import AnimatedButton from "@/components/ui/animated-button";
import { Container } from "@/components/ui/container";
import { Play, Heart, Shield, Star, ChevronDown, ChevronUp } from "lucide-react";

export default function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  const MOBILE_INITIAL_COUNT = 6;

  // Mixed media layout grid - images and videos with uneven sizes
  const mixedMediaGrid = [
    {
      id: 1,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Multiple Cats Care
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Handling multiple pets with patience and expertise.
          </p>
        </div>
      ),
      className: "col-span-1", // Small
      thumbnail: "/images/media/Vet and Cats.png",
      title: "Multi-Pet Handling",
    },
    {
      id: 2,
      type: "video",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-6 h-6 text-white" />
            <p className="font-bold md:text-4xl text-2xl text-white">
              Professional Treatment
            </p>
          </div>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Watch our skilled veterinarian providing compassionate care to a
            feline patient.
          </p>
        </div>
      ),
      className: "md:col-span-2 md:row-span-2",
      thumbnail: "/images/media/Vet treating Cat.mp4",
      isVideo: true,
      title: "Professional Cat Treatment",
    },
    {
      id: 3,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Professional Uniform
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Dr. Usama Naseer in professional veterinary attire.
          </p>
        </div>
      ),
      className: "col-span-1", // Small
      thumbnail: "/images/media/Vet in Uniform.png",
      title: "Dr. Usama Naseer",
    },
    {
      id: 4,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Surgical Expertise
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            State-of-the-art surgical procedures in our modern operating
            theater.
          </p>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/images/media/Vet in OT.png",
      title: "Surgical Operations",
    },
    {
      id: 5,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Alternative Husky Care
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Different approaches to large breed dog care.
          </p>
        </div>
      ),
      className: "col-span-1", // Small
      thumbnail: "/images/media/Vet with Husky(1).png",
      title: "Husky Care Variations",
    },
    {
      id: 6,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Canine Specialists
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Professional care for dogs of all breeds and sizes.
          </p>
        </div>
      ),
      className: "md:col-span-1", // Medium horizontal
      thumbnail: "/images/media/Vet and Tiger.png",
      title: "Tiger Care Specialist",
    },
    {
      id: 7,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Canine Specialists
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Professional care for dogs of all breeds and sizes.
          </p>
        </div>
      ),
      className: "md:col-span-1", // Medium horizontal
      thumbnail: "/images/media/Vet with Golden Retriever.png",
      title: "Golden Retriever Care",
    },
    {
      id: 8,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Advanced Surgery
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Modern surgical techniques with professional equipment.
          </p>
        </div>
      ),
      className: "col-span-1", // Small
      thumbnail: "/images/media/Vet in OT (2).png",
      title: "Advanced Surgery",
    },
    {
      id: 9,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Avian Medicine
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Expert care for birds with specialized avian medicine knowledge.
          </p>
        </div>
      ),
      className: "col-span-1", // Small
      thumbnail: "/images/media/Vet and Parrot.png",
      title: "Bird Veterinary Care",
    },
    {
      id: 10,
      type: "video",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-6 h-6 text-white" />
            <p className="font-bold md:text-3xl text-xl text-white">
              Veterinary Excellence
            </p>
          </div>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Comprehensive care for animals of all sizes and species.
          </p>
        </div>
      ),
      className: "",
      thumbnail: "/images/media/Vet with different amimals.mp4",
      isVideo: true,
      title: "Multi-Species Care",
    },
    {
      id: 11,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Large Breed Care
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Specialized care for large breed dogs and their unique needs.
          </p>
        </div>
      ),
      className: "col-span-1", // Small
      thumbnail: "/images/media/Vet with Husky.png",
      title: "Large Breed Specialists",
    },
    {
      id: 12,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Waterfowl Treatment
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Specialized care for waterfowl and aquatic birds.
          </p>
        </div>
      ),
      className: "col-span-1 ", // Small
      thumbnail: "/images/media/Vet with Goose.png",
      title: "Waterfowl Care",
    },
    {
      id: 13,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Reptile Medicine
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Expert care for reptiles and exotic cold-blooded animals.
          </p>
        </div>
      ),
      className: "col-span-1", // Small
      thumbnail: "/images/media/Vet with Turtle.png",
      title: "Reptile Specialists",
    },
  ];

  // Get the cards to display based on mobile state
  const getDisplayCards = () => {
    // On desktop, always show all cards
    // On mobile, show limited cards unless showAll is true
    return mixedMediaGrid;
  };

  const getMobileDisplayCards = () => {
    return showAll ? mixedMediaGrid : mixedMediaGrid.slice(0, MOBILE_INITIAL_COUNT);
  };

  return (
    <section
      
      className="md:py-20 pt-20 sm:pt-0 sm:pb-0 pb-10 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <Container className="pb-0 sm:pb-10">
        {/* Header */}
        <div className="text-center mb-4">
          <Badge className="bg-vet-green text-white mb-4">Our Work</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Veterinary Care
          </h2>
          <p className="text-md sm:text-lg 2xl:text-xl text-gray-600 max-w-3xl mx-auto">
            See the professional care and advanced medical treatments we provide
            for pets of all kinds. From routine checkups to complex surgeries,
            we ensure every animal receives the best possible care.
          </p>
        </div>

        {/* Desktop Layout Grid - Show all cards */}
        <div className="hidden mb-20 md:block">
          <LayoutGrid cards={getDisplayCards()} />
        </div>

        {/* Mobile Layout Grid - Show limited cards with pagination */}
        <div className="block md:hidden mb-8">
          <LayoutGrid cards={getMobileDisplayCards()} />
        </div>

        {/* Mobile Show More/Less Button */}
        <div className="md:hidden text-center flex items-center justify-center">
          {!showAll && mixedMediaGrid.length > MOBILE_INITIAL_COUNT && (
            <AnimatedButton
              onClick={() => setShowAll(true)}
              className="bg-vet-blue hover:bg-vet-blue/90 text-white font-semibold px-6 py-3 cursor-pointer"
              hoverScale={1.05}
              tapScale={0.95}
            >
              <ChevronDown className="w-5 h-5 mr-2" />
              Show More ({mixedMediaGrid.length - MOBILE_INITIAL_COUNT} more)
            </AnimatedButton>
          )}
          
          {showAll && (
            <AnimatedButton
              onClick={() => setShowAll(false)}
              variant="outline"
              className="border-vet-blue text-vet-blue hover:bg-vet-blue hover:text-white font-semibold px-6 py-3 cursor-pointer"
              hoverScale={1.05}
              tapScale={0.95}
            >
              <ChevronUp className="w-5 h-5 mr-2" />
              Show Less
            </AnimatedButton>
          )}
        </div>
      </Container>
    </section>
  );
}
