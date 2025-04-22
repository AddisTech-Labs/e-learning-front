import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { Globe } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: ["Courses", "About", "Community", "Blog"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Terms & Privacy"],
  },
];

export const NewFooter = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Mission */}
        <Card className="bg-transparent border-none shadow-none text-gray-400">
          <CardContent className="p-0">
            <div>
              <h2 className="text-xl font-semibold text-white tracking-wide">
                FelegeHiwot
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Tradition meets technology.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Navigation Sections */}
        {footerLinks.map((section) => (
          <Card
            key={section.title}
            className="bg-transparent border-none shadow-none text-gray-400"
          >
            <CardContent className="p-0">
              <h3 className="text-sm font-semibold text-white mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}

        {/* Contact */}
        <Card className="bg-transparent border-none shadow-none text-gray-400">
          <CardContent className="p-0">
            <h3 className="text-sm font-semibold text-white mb-3">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="text-[#2A73CC]" size={16} />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-[#2A73CC]" size={16} />
                <span>+251 900 000 000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-[#2A73CC]" size={16} />
                <span>info@felegehiwot.org</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 space-y-4">
        <Separator className="bg-gray-700" />

        {/* Language & Socials */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-xs text-gray-500">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebook size={18} />
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-white">
              <FaTelegram size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <FaYoutube size={18} />
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-gray-400" />
            <select className="bg-transparent text-xs text-gray-400 focus:outline-none">
              <option value="en">English</option>
              <option value="am">አማርኛ</option>
            </select>
          </div>
        </div>

        {/* Terms & Copyright */}
        <div className="flex justify-center gap-6 text-xs text-gray-500">
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>

        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} FelegeHiwot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default NewFooter;
