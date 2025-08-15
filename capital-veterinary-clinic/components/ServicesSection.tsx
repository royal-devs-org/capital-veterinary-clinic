import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MovingBorder } from "@/components/ui/moving-border";
import { 
  Shield, 
  Heart, 
  Scissors, 
  Syringe, 
  Home, 
  Stethoscope,
  Clock,
  Phone,
  Activity,
  PlusCircle
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services for critical situations. Our team is always ready to provide immediate care when your pet needs it most.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      badge: "Emergency",
      badgeColor: "bg-red-600"
    },
    {
      icon: Stethoscope,
      title: "Routine Checkups",
      description: "Comprehensive health examinations, preventive care, and early disease detection to keep your pets healthy and happy.",
      color: "text-vet-blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      badge: "Regular Care",
      badgeColor: "bg-vet-blue"
    },
    {
      icon: Scissors,
      title: "Surgical Procedures",
      description: "Advanced surgical services in our modern operating theater, from routine spaying/neutering to complex procedures.",
      color: "text-vet-purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      badge: "Surgical",
      badgeColor: "bg-vet-purple"
    },
    {
      icon: Syringe,
      title: "Pet Vaccinations",
      description: "Complete vaccination programs for puppies, kittens, and adult pets. Protecting your pets from preventable diseases.",
      color: "text-vet-green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      badge: "Prevention",
      badgeColor: "bg-vet-green"
    },
    {
      icon: Heart,
      title: "Multi-Species Care",
      description: "Expert care for cats, dogs, birds, and reptiles. Specialized knowledge for different animal species and their unique needs.",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      badge: "Specialized",
      badgeColor: "bg-pink-600"
    },
    {
      icon: Home,
      title: "Home Visit Services",
      description: "Convenient at-home veterinary care available across Rawalpindi, Islamabad, and Lahore for stressed or immobile pets.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      badge: "Convenience",
      badgeColor: "bg-amber-600"
    }
  ];

  const additionalServices = [
    "Pet Grooming & Hygiene",
    "Deworming Treatment",
    "Diagnostic Services",
    "Dental Care",
    "Behavioral Consultation",
    "Nutritional Guidance",
    "Pet Health Certificates",
    "Microchip Services"
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-vet-green text-white mb-4">Our Services</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            Comprehensive Veterinary Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency care to routine checkups, we provide complete veterinary services 
            tailored to your pet's unique needs
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`${service.borderColor} border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Service Badge */}
                  <div className="flex items-center justify-between">
                    <Badge className={`${service.badgeColor} text-white`}>
                      {service.badge}
                    </Badge>
                    {index === 0 && (
                      <div className="flex items-center gap-1 text-xs text-red-600 font-medium">
                        <Clock className="w-3 h-3" />
                        24/7
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  {index === 0 && (
                    <div className="pt-2">
                      <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
                        <Phone className="w-4 h-4" />
                        Emergency: 0348-9032106
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <MovingBorder 
          duration={6}
          borderColors={[
            "#412F85", // purple-500
            "#53B7E9", // cyan-500  
            "#4CB735", // emerald-500
            "#412F85", // back to purple
          ]}
          className="relative"
        >
          <Card className="bg-white border-0 shadow-none">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <PlusCircle className="w-6 h-6 text-vet-purple" />
                  <h3 className="text-2xl font-bold text-vet-purple font-heading">
                    Additional Services
                  </h3>
                </div>
                <p className="text-gray-600">
                  Complete care solutions for all your pet's health and wellness needs
                </p>
              </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-200"
                >
                  <Activity className="w-4 h-4 text-vet-purple flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
            </CardContent>
          </Card>
        </MovingBorder>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-gray-900">Need immediate care?</p>
              <p className="text-gray-600">Our emergency team is standing by 24/7</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:03489032106"
                className="bg-vet-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Emergency Call
              </a>
              <a 
                href="#contact"
                className="border border-vet-blue text-vet-blue hover:bg-vet-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
