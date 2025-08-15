"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedButton from "@/components/ui/animated-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  Calendar,
  Heart,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    petType: "",
    petAge: "",
    petBreed: "",
    serviceRequired: "",
    urgency: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Set minimum date to today on client side to avoid hydration mismatch
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you! We'll contact you within 30 minutes to confirm your appointment."
      );
      setFormData({
        name: "",
        phone: "",
        email: "",
        petType: "",
        petAge: "",
        petBreed: "",
        serviceRequired: "",
        urgency: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    }, 2000);
  };

  return (
   <motion.section 
  id="contact" 
  className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>


      <div className="container mx-auto px-4 z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-vet-blue text-white mb-4">Get In Touch</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            Book Your Pet's Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to give your pet the care they deserve? Contact us today for
            an appointment or emergency consultation. We're here for you 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white z-10">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <Card className="border-vet-purple border-2 shadow-xl bg-white py-0">
              <CardContent className="p-8 space-y-6">
                <motion.h3 
                  className="text-2xl font-bold text-vet-purple mb-6 flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Heart className="w-6 h-6" />
                  Contact Information
                </motion.h3>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Phone className="w-6 h-6 text-vet-green flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Phone & WhatsApp
                      </p>
                      <p className="text-gray-600 font-mono text-lg">0348-9032106</p>
                      <p className="text-sm text-vet-green font-medium">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MapPin className="w-6 h-6 text-vet-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Clinic Address
                      </p>
                      <p className="text-gray-600">
                        Westridge 1, opposite Punjab Cash & Carry
                        <br />
                        Rawalpindi Cantt, Pakistan
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Clock className="w-6 h-6 text-vet-purple flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Operating Hours
                      </p>
                      <p className="text-gray-600">
                        OPD: 11:00 AM - 11:00 PM (Daily)
                      </p>
                      <p className="text-vet-green font-semibold">
                        Emergency: 24/7 Available
                      </p>
                    </div>
                  </motion.div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-vet-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@capitalvetclinic.com</p>
                      <p className="text-sm text-gray-500">
                        Response within 2 hours
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-vet-purple border-2 shadow-xl bg-white py-0">
              <CardContent className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-vet-purple mb-4 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <MapPin className="w-5 h-5" />
                  Find Our Clinic
                </motion.h3>

                {/* Google Maps Embed */}
                <motion.div 
                  className="aspect-video rounded-lg overflow-hidden border-2 border-gray-200 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.8954580777254!2d73.04566!3d33.56511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x2a2b3e8a8c8a8c8a!2sWestridge%201%2C%20Rawalpindi!5e0!3m2!1sen!2spk!4v1640995200000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Elegant Appointment Form */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Emergency Alert */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-red-500 border-2 bg-gradient-to-r from-red-50 to-pink-50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-red-900">Emergency?</h3>
                  </div>
                  <p className="text-red-800 mb-4">
                    If your pet needs immediate medical attention, don't wait!
                    Call us right now.
                  </p>
                  <a href="tel:03489032106">
                    <AnimatedButton 
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full shadow-lg"
                      hoverScale={1.05}
                      tapScale={0.95}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Emergency: 0348-9032106
                    </AnimatedButton>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
            

            {/* Elegant Contact Form */}
            <Card className="border-vet-blue border-2 shadow-2xl bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-vet-purple mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Book an Appointment
                </h3>

                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-700 font-medium"
                      >
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-gray-700 font-medium"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="03XX-XXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-gray-700 font-medium"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Pet Information */}
                  <div className="grid md:grid-cols-2 gap-4 w-full">
                    <div>
                      <Label
                        htmlFor="petType"
                        className="text-gray-700 font-medium"
                      >
                        Pet Type *
                      </Label>
                      <select
                        id="petType"
                        name="petType"
                        required
                        value={formData.petType}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue"
                      >
                        <option value="">Select pet type</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="reptile">Reptile</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label
                        htmlFor="petAge"
                        className="text-gray-700 font-medium"
                      >
                        Pet Age
                      </Label>
                      <Input
                        id="petAge"
                        name="petAge"
                        type="text"
                        value={formData.petAge}
                        onChange={handleInputChange}
                        className="mt-1 w-full"
                        placeholder="e.g., 2 years"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="serviceRequired"
                        className="text-gray-700 font-medium"
                      >
                        Service Required *
                      </Label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        required
                        value={formData.serviceRequired}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue"
                      >
                        <option value="">Select service</option>
                        <option value="routine-checkup">Routine Checkup</option>
                        <option value="vaccination">Vaccination</option>
                        <option value="surgery">Surgery</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="home-visit">Home Visit</option>
                        <option value="grooming">Grooming</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label
                        htmlFor="urgency"
                        className="text-gray-700 font-medium"
                      >
                        Urgency Level *
                      </Label>
                      <select
                        id="urgency"
                        name="urgency"
                        required
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue"
                      >
                        <option value="">Select urgency</option>
                        <option value="emergency">Emergency (Immediate)</option>
                        <option value="urgent">Urgent (Within 24 hours)</option>
                        <option value="routine">
                          Routine (Within 3-5 days)
                        </option>
                        <option value="flexible">
                          Flexible (Next available)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Appointment Timing */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="preferredDate"
                        className="text-gray-700 font-medium"
                      >
                        Preferred Date
                      </Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="mt-1"
                        min={minDate}
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="preferredTime"
                        className="text-gray-700 font-medium"
                      >
                        Preferred Time
                      </Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (11 AM - 2 PM)</option>
                        <option value="afternoon">
                          Afternoon (2 PM - 6 PM)
                        </option>
                        <option value="evening">Evening (6 PM - 11 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-gray-700 font-medium"
                    >
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1"
                      placeholder="Please describe your pet's condition, symptoms, or any specific concerns..."
                    />
                  </div>

                  {/* Submit Button */}
                  <AnimatedButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-vet-green hover:bg-green-600 text-white font-semibold py-3 text-lg"
                    hoverScale={1.02}
                    tapScale={0.98}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Book Appointment
                      </>
                    )}
                  </AnimatedButton>

                  <p className="text-sm text-gray-600 text-center">
                    We'll contact you within 30 minutes to confirm your
                    appointment
                  </p>
                </form>
              </CardContent>
            </Card>
            </motion.div>
          </div>
          
        </div>
          {/* Background pattern */}
  <div 
    className="absolute inset-0 z-0 bg-[url('/images/paw-pattern.svg')] bg-cover bg-center opacity-2 mx-20" 
  />
    </motion.section>
  );
}
