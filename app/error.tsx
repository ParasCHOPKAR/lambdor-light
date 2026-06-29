"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-md w-full">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 flex items-center justify-center mx-auto mb-6">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 className="mb-3 text-2xl font-bold text-gray-900">Something went wrong!</h2>
        
        <p className="mb-8 text-gray-500 text-sm">
          {error.message || "An unexpected error occurred while loading this page."}
        </p>
        
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="w-full rounded-md bg-[#c26e38] px-4 py-3 text-sm font-bold text-white hover:bg-[#a65d2f] transition-colors uppercase tracking-wider shadow-md"
        >
          Try again
        </button>
      </div>
    </div>
  );
}