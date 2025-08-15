"use client";

import { LayoutGrid } from "@/components/ui/layout-grid";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Shield, Star } from "lucide-react";

export default function GallerySection() {
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
      title: "Multi-Pet Handling"
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
            Watch our skilled veterinarian providing compassionate care to a feline patient.
          </p>
        </div>
      ),
      className: "md:col-span-2 md:row-span-2",
      thumbnail: "/images/media/Vet treating Cat.mp4",
      isVideo: true,
      title: "Professional Cat Treatment"
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
      title: "Dr. Usama Naseer"
    },
    {
      id: 4,
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
      className: "md:col-span-3 row-span-2",
      thumbnail: "/images/media/Vet with different amimals.mp4",
      isVideo: true,
      title: "Multi-Species Care"
    },
    {
      id: 5,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Surgical Expertise
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            State-of-the-art surgical procedures in our modern operating theater.
          </p>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/images/media/Vet in OT.png",
      title: "Surgical Operations"
    },
    {
      id: 6,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Post-Surgery Recovery
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Comprehensive post-operative care and monitoring.
          </p>
        </div>
      ),
      className: "object-top object-cover col-span-1 md:row-span-1",
      thumbnail: "/images/media/Cat after Surgery (2).png",
      title: "Recovery Care"
    },
    {
      id: 6,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-3xl text-xl text-white">
            Exotic Animal Expertise
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Specialized treatment for reptiles, birds, and other exotic pets.
          </p>
        </div>
      ),
      className: "md:col-span-2", // Medium horizontal
      thumbnail: "/images/media/Vet with Tiger.png",
      title: "Exotic Animal Care"
    },
    {
      id: 7,
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
      title: "Advanced Surgery"
    },
    {
      id: 8,
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
      title: "Bird Veterinary Care"
    },
    {
      id: 9,
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
      className: "md:col-span-2", // Medium horizontal
      thumbnail: "/images/media/Vet with Dog.png",
      title: "Dog Care Experts"
    },
    {
      id: 10,
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
      className: "col-span-2 md:row-span-2", // Tall vertical
      thumbnail: "/images/media/Vet with Husky.png",
      title: "Large Breed Specialists"
    },
    {
      id: 11,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-3xl text-xl text-white">
            Golden Retriever Care
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Breed-specific care tailored to Golden Retrievers' needs.
          </p>
        </div>
      ),
      className: "md:col-span-2", // Medium horizontal
      thumbnail: "/images/media/Vet with Golden Retriever.png",
      title: "Golden Retriever Care"
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
      title: "Waterfowl Care"
    },
    {
      id: 13,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-3xl text-xl text-white">
            Wildlife Veterinary
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Specialized care for wildlife and conservation efforts.
          </p>
        </div>
      ),
      className: "md:col-span-3", // Wide horizontal
      thumbnail: "/images/media/vet with deer.jpg",
      title: "Wildlife Conservation"
    },
    {
      id: 14,
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
      title: "Reptile Specialists"
    },
    {
      id: 15,
      type: "image",
      content: (
        <div>
          <p className="font-bold md:text-2xl text-lg text-white">
            Operating Theater
          </p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Modern surgical facilities for complex procedures.
          </p>
        </div>
      ),
      className: "md:col-span-2", // Medium horizontal
      thumbnail: "/images/media/Vet While Operating.png",
      title: "Surgical Excellence"
    },
    {
      id: 16,
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
      title: "Husky Care Variations"
    }
  ];

  return (
    <section id="gallery" className="md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-vet-blue text-white mb-4">Our Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Veterinary Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the professional care and advanced medical treatments we provide for pets of all kinds.
            From routine checkups to complex surgeries, we ensure every animal receives the best possible care.
          </p>
        </div>

        {/* Mixed Media Layout Grid */}
        <div className="mb-20">
          <LayoutGrid cards={mixedMediaGrid} />
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Shield className="w-12 h-12 text-vet-blue mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-gray-600">Happy Pets Treated</div>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Emergency Care</div>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-vet-green mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Care Dedication</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-vet-green">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Schedule Your Pet's Visit?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to book an appointment with Dr. Usama Naseer. We're here to provide 
            the best possible care for your beloved companion animals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:03489032106"
              className="bg-vet-green hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Call Now: 0348-9032106
            </a>
            <a 
              href="#contact"
              className="border-2 border-vet-blue text-vet-blue hover:bg-vet-blue hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
