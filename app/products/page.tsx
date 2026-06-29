import React from "react";
import Link from "next/link";

// In Next.js, dynamic routes receive the URL parameters via the 'params' prop
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-[60vh] bg-gray-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center bg-white p-12 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-black text-gray-900 mb-4">
          Product Details for: <span className="text-[#c25a1a] uppercase">{params.id}</span>
        </h1>
        
        <p className="text-gray-600 mb-10">
          Detailed specifications, wattage options, and pricing information for this lighting solution will be displayed here.
        </p>
        
        <Link
          href="/products"
          className="inline-block bg-[#16202c] text-white px-8 py-3 text-sm font-bold rounded-md hover:bg-[#202e3f] transition-colors uppercase tracking-wider"
        >
          Back to All Products
        </Link>
      </div>
    </div>
  );
}