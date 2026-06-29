import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-4 text-center bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 max-w-lg w-full">
        {/* Large 404 text in brand color */}
        <h2 className="text-8xl font-black text-[#c26e38] mb-4">404</h2>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h3>
        
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
         
        </p>
        
        {/* Return Home Button */}
        <Link
          href="/"
          className="inline-block rounded-md bg-[#c26e38] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#a65d2f] transition-all uppercase tracking-widest shadow-md hover:shadow-lg"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}