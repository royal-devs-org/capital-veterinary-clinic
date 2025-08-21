"use client";
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
  Star,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "24/7 Emergency Care",
    "Routine Checkups",
    "Pet Vaccinations",
    "Surgical Procedures",
    "Home Visits",
    "Pet Grooming",
    "Diagnostic Services",
  ];

  return (
    <footer className="bg-vet-purple text-white ">
      {/* Main Footer */}
      <div className="container mx-auto pt-16 sm:px-10 2xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 px-7 sm:px-0">
          {/* Clinic Information */}
          <div className="space-y-6 text-center lg:text-left lg:col-span-2 lg:mr-10">
            <div className="flex items-center justify-center lg:justify-start gap-3">
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
                <p className="text-blue-200 text-sm">
                  Professional Pet Care 24/7
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Led by Dr. Usama Naseer with 4+ years of experience, we provide
              comprehensive veterinary care across Rawalpindi, Islamabad, and
              Lahore. Your pet&apos;s health is our priority.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <span className="text-sm text-gray-300">200+ Reviews</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-vet-green">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">DVM, RVMP, PVMC Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left lg:ml-4">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 list-none">
              {quickLinks.map((link, index) => (
                <li key={index} className="list-none">
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-vet-green transition-colors duration-200 flex items-center gap-2 justify-center md:justify-start"
                  >
                    <div className="w-1 h-1 bg-vet-green rounded-full hidden md:block"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left lg:mr-4">
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 list-none">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-300 flex items-center gap-2 justify-center md:justify-start list-none"
                >
                  <div className="w-1 h-1 bg-vet-blue rounded-full hidden md:block"></div>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left lg:col-span-2 lg:ml-8">
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 sm:gap-3">
                  <div className="w-10 h-10 bg-vet-green/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-vet-green" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-white">Clinic Address</p>
                  </div>
                </div>
                <div className="text-center md:text-left md:ml-13">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Westridge 1, opposite Punjab Cash & Carry
                    <br />
                    Rawalpindi Cantt, Pakistan
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 sm:gap-3">
                  <div className="w-10 h-10 bg-vet-green/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-vet-green" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-white">Email</p>
                  
                  </div>
                </div>
                <div className="text-center md:text-left md:ml-13">
                  <a
                    href="mailto:info@capitalvetclinic.com"
                    className="text-gray-300 text-sm hover:text-vet-green transition-colors duration-200 block"
                  >
                    info@capitalvetclinic.com
                  </a>
                </div>
                <div className="text-center md:text-left md:ml-8">
                </div>
              </div>
            </div>
              {/* Social Media */}
              <div className="mt-7 w-full text-center items-center sm:items-start justify-center flex flex-col">
                <h3 className="text-lg font-bold mb-1">Follow Us</h3>
                <div className="flex justify-center">
                  <motion.a
                    href="https://www.instagram.com/capital_veterinary_clinic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="https://www.facebook.com/p/Capital-Veterinary-Clinic-100063850278921/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="https://pk.linkedin.com/in/dr-usama-naseer-3b5541245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="https://share.google/SyksRwKyMUEHegTTO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
            </div>
          </div>
        </div>

        {/* CTA & Image */}
        <div className="relative border-t border-blue-800 mb-52 sm:mb-0 sm:mt-8 py-8">
          <div className="w-full flex items-center justify-end">
            {/* Animals Image Section */}
            <div className="absolute -bottom-60 sm:-bottom-12 md:-left-8 flex justify-center">
              <motion.div
                className="h-50 sm:h-auto w-[90%] sm:w-[800px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/footer-pets.png"
                  alt="Happy animals at Capital Veterinary Clinic"
                  width={1200}
                  height={128}
                  className="w-full h-full object-bottom"
                  style={{
                    filter: "drop-shadow(0 -4px 8px rgba(0,0,0,0.2))",
                  }}
                />
              </motion.div>
            </div>
            {/* Emergency CTA */}
            <div className="text-center md:text-right px-7 sm:px-0">
              <div className="inline-block bg-vet-green rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Need Emergency Care?</h3>
                <p className="text-green-100 mb-4">
                  We&apos;re available 24/7 for your pet&apos;s urgent needs
                </p>
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

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="container mx-auto sm:px-10 px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex text-center gap-2 text-gray-300">
              <span>
                © 2025 Capital Veterinary Clinic. Made with care for pets and
                their families.
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link
                href="#contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-blue-900 text-sm text-gray-400">
            <p>
              <strong>Dr. Usama Naseer</strong> - DVM, RVMP, PVMC | Licensed
              Veterinary Physician & Surgeon | Serving Rawalpindi, Islamabad &
              Lahore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
