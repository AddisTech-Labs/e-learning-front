import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import navLinks from "@/constants/navLinks";
import Logo from "@/components/ui/logo";
import CourseSearchBar from "./CourseSearch";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="font-montserrat sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:ml-12 ">
        {/* Logo */}
        <Logo size="md" href="/" />

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-3 ml-auto">
          {/* Hamburger  */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between w-full ml-6">
          {/* Nav Links */}
          <div className="flex gap-6 mr-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-gray-800 hover:text-indigo-600 transition duration-200 ease-in-out px-2 py-1 rounded-lg hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-3">
            <CourseSearchBar />
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-4 ml-auto">
            <Button
              size="lg"
              className="text-indigo-600 bg-gray-50 hover:bg-gray-200"
            >
              Log In
            </Button>
            <Button size="lg" variant="default">
              Sign Up
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white z-40 overflow-y-auto">
          <div className="container py-4 space-y-4">
            {/* Mobile Search Bar */}
            <div className="px-4">
              <CourseSearchBar />
            </div>

            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex py-2 px-4 text-sm font-medium hover:bg-accent rounded-md items-center justify-between"
                onClick={() => setMobileOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </div>

                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}

            {/* Auth Buttons */}
            <div className="flex gap-2 px-4 items-center justify-center">
              <Button variant="default" size="sm">
                Sign Up
              </Button>
              <Button
                variant="default"
                size="sm"
                className="text-indigo-600 bg-white hover:bg-gray-200 shadow-none"
              >
                Log In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
