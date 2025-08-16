"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedButton from "@/components/ui/animated-button";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
  Shield,
  Star
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Dr. Usama", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Service Areas", href: "#service-areas" },
    { name: "Gallery", href: "#gallery" },
    { name: "Client Reviews", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" }
  ];

  const services = [
    "24/7 Emergency Care",
    "Routine Checkups",
    "Pet Vaccinations",
    "Surgical Procedures",
    "Home Visits",
    "Pet Grooming",
    "Dental Care",
    "Diagnostic Services"
  ];

  return (
    <footer className="bg-vet-purple text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative bg-white rounded-lg p-2">
                <Image
                  src="/images/media/Clinic Logo.png"
                  alt="Capital Veterinary Clinic Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Capital Veterinary Clinic</h3>
                <p className="text-blue-200 text-sm">Professional Pet Care 24/7</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Led by Dr. Usama Naseer with 4+ years of experience, we provide comprehensive 
              veterinary care across Rawalpindi, Islamabad, and Lahore. Your pet's health 
              is our priority.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <span className="text-sm text-gray-300">200+ Reviews</span>
            </div>

            <div className="flex items-center gap-2 text-vet-green">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">DVM, RVMP, PVMC Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-vet-green transition-colors duration-200 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-vet-green rounded-full"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <div className="w-1 h-1 bg-vet-blue rounded-full"></div>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {/* Emergency Number */}
              <div className="bg-red-600 rounded-lg p-4">
                <p className="font-semibold text-sm mb-2">Emergency 24/7</p>
                <a 
                  href="tel:03489032106"
                  className="text-white font-bold text-lg hover:text-yellow-300 transition-colors"
                >
                  0348-9032106
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-vet-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Clinic Address</p>
                  <p className="text-gray-300 text-sm">
                    Westridge 1, opposite Punjab Cash & Carry<br />
                    Rawalpindi Cantt, Pakistan
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-vet-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Operating Hours</p>
                  <p className="text-gray-300 text-sm">
                    OPD: 11:00 AM - 11:00 PM<br />
                    Emergency: 24/7 Available
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-vet-green" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:info@capitalvetclinic.com"
                    className="text-gray-300 text-sm hover:text-vet-green transition-colors"
                  >
                    info@capitalvetclinic.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/capital_veterinary_clinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="https://www.facebook.com/p/Capital-Veterinary-Clinic-100063850278921/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="https://pk.linkedin.com/in/dr-usama-naseer-3b5541245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://share.google/SyksRwKyMUEHegTTO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="text-center md:text-right">
              <div className="inline-block bg-vet-green rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Need Emergency Care?</h3>
                <p className="text-green-100 mb-4">We're available 24/7 for your pet's urgent needs</p>
                <AnimatedButton 
                  className="bg-white text-vet-green hover:bg-gray-100 font-semibold"
                  hoverScale={1.05}
                  tapScale={0.95}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animals Image Section */}
      <div className="relative flex -bottom-4 sm:-bottom-12 justify-center">
        <motion.div 
          className="h-50 sm:h-70 w-[90%] sm:w-[70%] overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/footer-animals.webp"
            alt="Happy animals at Capital Veterinary Clinic"
            width={1200}
            height={128}
            className="w-full h-full object-cover object-bottom"
            style={{
              filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.2))'
            }}
          />
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Heart className="w-4 h-4 text-red-400" />
              <span>© 2024 Capital Veterinary Clinic. Made with care for pets and their families.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-blue-900 text-sm text-gray-400">
            <p>
              <strong>Dr. Usama Naseer</strong> - DVM, RVMP, PVMC | 
              Licensed Veterinary Physician & Surgeon | 
              Serving Rawalpindi, Islamabad & Lahore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
