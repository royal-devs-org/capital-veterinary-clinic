import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Car, Clock, Phone } from "lucide-react";

export default function ServiceAreasSection() {
  const serviceAreas = [
    {
      city: "Rawalpindi",
      areas: ["Westridge 1", "Westridge 2", "Saddar", "Committee Chowk", "Raja Bazar", "Commercial Market"],
      isMain: true,
      travelTime: "0-15 min",
      description: "Our main clinic location with full services available"
    },
    {
      city: "Islamabad",
      areas: ["F-6", "F-7", "F-8", "F-10", "F-11", "Blue Area", "DHA"],
      isMain: false,
      travelTime: "20-45 min",
      description: "Home visits and mobile clinic services available"
    },
    {
      city: "Lahore",
      areas: ["DHA", "Gulberg", "Model Town", "Johar Town", "Cantt", "Garden Town"],
      isMain: false,
      travelTime: "2-3 hours",
      description: "Scheduled home visits for specialized cases"
    }
  ];

  return (
    <section id="service-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-vet-blue text-white mb-4">Service Coverage</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            We Come to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional veterinary care across multiple cities with convenient home visit services 
            for your pet's comfort and your convenience
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                area.isMain 
                  ? 'border-vet-green border-3 bg-gradient-to-br from-green-50 to-white' 
                  : 'border-gray-200 border-2 hover:border-vet-blue'
              }`}
            >
              {area.isMain && (
                <div className="absolute top-0 right-0">
                  <div className="bg-vet-green text-white px-3 py-1 text-xs font-semibold">
                    Main Clinic
                  </div>
                </div>
              )}

              <CardContent className="p-6 space-y-4">
                {/* City Header */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    area.isMain ? 'bg-vet-green text-white' : 'bg-vet-blue text-white'
                  }`}>
                    {area.isMain ? <MapPin className="w-6 h-6" /> : <Home className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{area.city}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {area.description}
                </p>

                {/* Areas List */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Coverage Areas:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {area.areas.map((location, locationIndex) => (
                      <div 
                        key={locationIndex}
                        className="text-xs text-gray-600 flex items-center gap-1"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          area.isMain ? 'bg-vet-green' : 'bg-vet-blue'
                        }`}></div>
                        {location}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Type */}
                <div className="pt-2">
                  {area.isMain ? (
                    <div className="space-y-2">
                      <Badge className="bg-vet-green text-white w-full justify-center">
                        Full Clinic Services
                      </Badge>
                      <Badge variant="outline" className="border-vet-green text-vet-green w-full justify-center">
                        Emergency 24/7
                      </Badge>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Badge className="bg-vet-blue text-white w-full justify-center">
                        Home Visit Services
                      </Badge>
                      <Badge variant="outline" className="border-vet-blue text-vet-blue w-full justify-center">
                        Scheduled Appointments
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
}
