    import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-[60vh] bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center uppercase tracking-tight">
            Contact <span className="text-[#c25a1a]">Us</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1">Proprietor</h3>
                <p className="text-xl font-semibold text-gray-900">Mr. Rahul S Dhakne</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1">Contact No.</h3>
                <p className="text-xl font-semibold text-gray-900">9325953398</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1">Email ID</h3>
                <a href="mailto:oem.rdlights@gmail.com" className="text-xl font-semibold text-[#c25a1a] hover:underline">
                  oem.rdlights@gmail.com
                </a>
              </div>
            </div>

            {/* Addresses */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1">Office Address</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Office no. F-20, 1st Floor, Khinvasara August highstreet Market,<br />
                  Ulkanaagari, Garkheda parisar<br />
                  Chhatrapati Sambhajinagar (MH) 431005
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1">Plant Address</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Plot No. 23,24, Sargam City,<br />
                  Jalna (MH) 431203
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}