import React from "react";

export function Logo({ className = "", size = "md", href = "/" }) {
  const sizes = {
    sm: { width: 120, height: 32 }, // Similar to Codecademy's small logo
    md: { width: 160, height: 42 }, // Similar to Udemy's medium logo
    lg: { width: 200, height: 54 }, // Similar to Coursera's large logo
  };

  return (
    <a
      href={href}
      className={`inline-block hover:opacity-90 transition-opacity duration-200 ${className}`}
    >
      <img
        src="/logo.png" // Make sure you have a rectangular version of your logo
        alt="FELEGEHIWOT"
        width={sizes[size].width}
        height={sizes[size].height}
        className="object-contain" // Removed rounded-full for rectangular shape
      />
    </a>
  );
}

export default Logo;
