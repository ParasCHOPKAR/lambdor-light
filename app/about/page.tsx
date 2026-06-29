import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center bg-gray-50">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          ABOUT <span className="text-[#c25a1a]">LAMBODAR</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We are committed to delivering innovative, energy-efficient and high-quality LED lighting solutions for homes, businesses, and industries. With a focus on quality, reliability, and customer satisfaction, we light up spaces and build a brighter tomorrow.
        </p>

        <Link
          href="/products"
          className="inline-block bg-[#16202c] text-white px-8 py-3.5 text-sm font-bold rounded-md hover:bg-[#202e3f] transition-colors uppercase tracking-wider shadow-md"
        >
          View Our Products
        </Link>
      </div>
    </div>
  );
}