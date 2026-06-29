"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  Lightbulb,
  ShieldCheck,
  CircleDollarSign,
  Factory,
  Handshake,
  Leaf,
  Users,
  Power
} from "lucide-react";

export default function Hero() {
  // State to manage the light switch (false = hero-01, true = hero-02)
  const [isLightOn, setIsLightOn] = useState(false);

  // Data for the 8 bottom feature cards
  const features = [
    { title: "PREMIUM QUALITY", icon: Award },
    { title: "INNOVATIVE SOLUTIONS", icon: Lightbulb },
    { title: "BIS CERTIFIED PRODUCTS", icon: ShieldCheck },
    { title: "COST EFFECTIVE", icon: CircleDollarSign },
    { title: "ADVANCED MANUFACTURING", icon: Factory },
    { title: "CUSTOMER FOCUS", icon: Handshake },
    { title: "SUSTAINABLE & GREEN", icon: Leaf },
    { title: "EXPERIENCED TEAM", icon: Users },
  ];

  return (
    <section className="relative w-full h-[100vh] min-h-[850px] flex flex-col justify-center pt-20 mb-32">
      
      {/* ================= BACKGROUND IMAGES ================= */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        {/* Image 1: Lights Off */}
        <Image
          src="/hero-011.jfif"
          alt="Street Lights Off"
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            isLightOn ? "opacity-0" : "opacity-100"
          }`}
          priority
        />
        
        {/* Image 2: Lights On */}
        <Image
          src="/hero-022.jfif"
          alt="Street Lights On"
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            isLightOn ? "opacity-100" : "opacity-0"
          }`}
          priority
        />

        {/* Gradient overlay to ensure text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      </div>

      {/* ================= HERO TEXT & INTERACTION ================= */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.1] tracking-wide">
            <span className="text-[#d87c45]">Business Strength:</span><br />
            Best of Best.
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-serif italic text-gray-200">
            Light Crafted for a Brighter Tomorrow.
          </p>

          {/* Interactive Light Switch Button */}
          <button
            onClick={() => setIsLightOn(!isLightOn)}
            className={`mt-10 px-8 py-4 font-bold tracking-widest rounded-full transition-all duration-300 flex items-center gap-3 uppercase text-sm shadow-xl ${
              isLightOn 
                ? "bg-white text-[#d87c45] shadow-[0_0_30px_rgba(255,255,255,0.4)]" 
                : "bg-[#d87c45] text-white hover:bg-[#bf6836]"
            }`}
          >
            <Power 
              size={22} 
              className={`transition-colors duration-500 ${isLightOn ? "text-[#d87c45]" : "text-white"}`} 
            />
            {isLightOn ? "Turn Lights Off" : "Turn Lights On"}
          </button>
        </div>
      </div>

      {/* ================= FEATURE CARDS (Overlapping Bottom) ================= */}
      <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-1/2">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Grid setup to match your reference image */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
            
            {features.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl shadow-2xl p-4 md:p-5 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
              >
                {/* Circular Icon Wrapper */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#d87c45] flex items-center justify-center mb-3 md:mb-4 text-[#d87c45] group-hover:bg-[#d87c45] group-hover:text-white transition-colors duration-300">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-[10px] md:text-xs font-bold text-gray-900 uppercase leading-tight mb-4 h-8 flex items-center justify-center w-full">
                  {item.title}
                </h3>
                
                {/* Action Button */}
                <button className="bg-[#16202c] text-white text-[9px] md:text-[11px] font-bold px-4 py-2 rounded-md uppercase tracking-wider hover:bg-[#d87c45] transition-colors w-full mt-auto">
                  Learn More
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>
      
    </section>
  );
}