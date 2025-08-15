"use client";

import { LayoutGrid } from "@/components/ui/layout-grid";
import { FocusCards } from "@/components/ui/focus-cards";
import { Badge } from "@/components/ui/badge";

export default function GallerySection() {
  // Layout Grid cards - mix of sizes
  const layoutGridCards = [
    {
      id: 1,
      content: (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            Professional Surgery
          </p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            State-of-the-art surgical procedures performed with precision and care for your beloved pets.
          </p>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/images/media/Vet in OT (2).png",
    },
    {
      id: 2,
      content: (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            Multi-Species Care
          </p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Expert care for cats, dogs, birds, and exotic animals.
          </p>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/images/media/Vet and Cats.png",
    },
    {
      id: 3,
      content: (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            Emergency Care
          </p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            24/7 emergency services available for urgent pet care needs.
          </p>
        </div>
      ),
      className: "col-span-1",
      thumbnail: "/images/media/Vet with Dog.png",
    },
    {
      id: 4,
      content: (
        <div>
          <p className="font-bold md:text-4xl text-xl text-white">
            Exotic Animal Care
          </p>
          <p className="font-normal text-base text-white"></p>
          <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Specialized treatment for reptiles, birds, and other exotic pets.
          </p>
        </div>
      ),
      className: "md:col-span-2",
      thumbnail: "/images/media/Vet with Tiger.png",
    },
  ];

  // Focus Cards for hover effects
  const focusCards = [
    {
      title: "Post-Surgery Recovery",
      src: "/images/media/Cat after Surgery (2).png",
    },
    {
      title: "Large Breed Specialists",
      src: "/images/media/Vet with Husky.png",
    },
    {
      title: "Golden Retriever Care",
      src: "/images/media/Vet with Golden Retriever.png",
    },
    {
      title: "Avian Medicine",
      src: "/images/media/Vet and Parrot.png",
    },
    {
      title: "Wildlife Veterinary",
      src: "/images/media/vet with deer.jpg",
    },
    {
      title: "Professional Treatment",
      src: "/images/media/Vet in Uniform.png",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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

        {/* Layout Grid Section */}

        {/* Focus Cards Section */}
        <div className="mb-20">
          <FocusCards cards={focusCards} />
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
