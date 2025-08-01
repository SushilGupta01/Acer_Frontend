import React, { useState } from "react";
import "./../styles/Header.css";
import acerLogo from "../assets/acer.png";
import { Search, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [activeNav, setActiveNav] = useState("Laptops");

  const navItems = [
    "Laptops",
    "Desktops",
    "Monitors",
    "Tablets",
    "Components",
    "Peripherals",
    "Lifestyles",
    "Acer Care",
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section */}
        <div className="header-left">
          <img src={acerLogo} alt="Acer Logo" className="logo" />

          <nav className="nav-links-vertical">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`nav-link ${activeNav === item ? "active" : ""}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section */}
        <div className="header-right">
          <div className="search-box">
            <Search className="search-icon" size={16} />
            <input type="text" placeholder="Search here..." />
          </div>
          <a href="#" className="header-link">Sign in</a>
          <a href="#" className="header-link">FAQ’s</a>
          <a href="#" className="cta-button">
            Contact us <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
