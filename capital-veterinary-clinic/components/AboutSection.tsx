import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Award, MapPin, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left Content - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/media/Vet and Cat.png"
                alt="Dr. Usama Naseer examining a cat at Capital Veterinary Clinic"
                width={300}
                height={400}
                className="object-cover object-top w-full h-160"
              />
            </div>

            {/* Clinic Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-indigo-200 via-indigo-400 to-blue-600 text-white shadow-md">
                <CardContent className="p-5">
                  <MapPin className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-2">Prime Location</h4>
                  <p className="text-sm opacity-90">
                    Westridge 1, opposite Punjab Cash & Carry, Rawalpindi Cantt
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-200 via-green-500 to-emerald-600 text-white shadow-md">
                <CardContent className="p-5">
                  <Clock className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold mb-2">Always Available</h4>
                  <p className="text-sm opacity-90">
                    OPD: 11 AM - 11 PM
                    <br />
                    Emergency: 24/7
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-vet-purple text-white">
                About Our Clinic
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 font-heading">
                Meet Dr. Usama Naseer
              </h2>
              <p className="text-xl text-vet-blue font-medium">
                Your Trusted Veterinary Partner in Rawalpindi
              </p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With over{" "}
                <strong className="text-vet-purple">
                  4 years of dedicated experience
                </strong>{" "}
                in veterinary medicine, Dr. Usama Naseer brings expertise,
                compassion, and round-the-clock care to pet families across
                Rawalpindi, Islamabad, and Lahore.
              </p>

              <p>
                As a certified{" "}
                <strong className="text-vet-purple">DVM, RVMP, and PVMC</strong>{" "}
                professional, Dr. Usama specializes in comprehensive animal
                care, from routine check-ups to complex surgical procedures. His
                commitment to animal welfare and pet owner education has made
                Capital Veterinary Clinic a trusted name in the region.
              </p>

              <p>
                Our clinic philosophy centers on treating every pet as family,
                providing personalized care plans, and ensuring pet parents are
                fully informed about their beloved companion's health journey.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-vet-green border-2">
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-vet-green mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">DVM Certified</p>
                  <p className="text-sm text-gray-600">
                    Doctor of Veterinary Medicine
                  </p>
                </CardContent>
              </Card>

              <Card className="border-vet-blue border-2">
                <CardContent className="p-4 text-center">
                  <Stethoscope className="w-8 h-8 text-vet-blue mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">RVMP & PVMC</p>
                  <p className="text-sm text-gray-600">
                    Registered Professional
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-vet-purple">
                Why Choose Capital Veterinary Clinic?
              </h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vet-green rounded-full"></div>
                  <span className="text-gray-700">
                    24/7 Emergency Services - Always here when you need us
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vet-green rounded-full"></div>
                  <span className="text-gray-700">
                    Multi-species expertise - Cats, dogs, birds, and reptiles
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vet-green rounded-full"></div>
                  <span className="text-gray-700">
                    Home visit services available across multiple cities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-vet-green rounded-full"></div>
                  <span className="text-gray-700">
                    Modern clinic with state-of-the-art equipment
                  </span>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
