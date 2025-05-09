import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Have questions about our products or want to schedule a visit? Reach out to us!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-cream-200 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-brown-200 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-green-200" />
                </div>
                <div>
                  <h4 className="font-medium text-brown-200">Farm Location</h4>
                  <p className="text-gray">Adu Village, Lawoyin, Iddo/Akufo Road, Oyo state</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="w-6 h-6 text-green-200" />
                </div>
                <div>
                  <h4 className="font-medium text-brown-200">Phone</h4>
                  <p className="text-gray">08060599605</p>
                  <p className="text-gray">08139420269</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="w-6 h-6 text-green-200" />
                </div>
                <div>
                  <h4 className="font-medium text-brown-200">Email</h4>
                  <p className="text-gray">info@ekselarfarms.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Clock className="w-6 h-6 text-green-200" />
                </div>
                <div>
                  <h4 className="font-medium text-farm-brown">Farm Hours</h4>
                  <p className="text-gray-800">Monday-Saturday: 8am - 6pm</p>
                </div>
              </div>
            </div>
          {/*---------- Google Map ----------------*/}
            <div className="mt-8">
              <div className="w-full lg:w-3/4 xl:w-2/3 p-4 flex justify-center">
                <div className="rounded-full overflow-hidden w-full max-w-[40rem] aspect-square">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0!2d3.7119!3d7.5068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c2e6f1c3e4a7d%3A0x1a3b3c4d5e6f7g8h!2sIdo%2C%20Oyo%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1652901957916"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-brown-200 mb-6">Send us a Message</h3>
            <form> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">Your Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">Your Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full" 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="How can we help you?"
                  className="w-full" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..."
                  className="w-full h-32" 
                />
              </div>
              <Button type="submit" className="btn-primary w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
