import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-20  bg-indigo-50 dark:bg-[#0f172a]">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Contact Info Sidebar */}
            <div className="md:w-2/5 p-8 md:p-12 bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-8">Get in touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-blue-400" />
                  <div>
                    <h3 className="font-medium">Our Office</h3>
                    <p className="text-gray-400">
                      123 Education St, San Francisco
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-blue-400" />
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-blue-400" />
                  <p className="text-gray-400">contact@edutech.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5 p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Contact us</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-gray-50"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-gray-50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Regarding your services"
                    className="bg-gray-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="bg-gray-50 min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
