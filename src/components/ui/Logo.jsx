import React from "react";

export function Logo({ className = "", size = "md", href = "/" }) {
  const sizes = {
    sm: { width: 120, height: 32 },
    md: { width: 140, height: 42 },
    lg: { width: 200, height: 54 },
  };

  return (
    <a
      href={href}
      className={`inline-block hover:opacity-90 transition-opacity duration-200 ${className}`}
    >
      <img
        src="/logo.png"
        alt="FELEGEHIWOT"
        width={sizes[size].width}
        height={sizes[size].height}
        className="object-contain"
      />
    </a>
  );
}

export default Logo;
