import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import the Navbar you just created
// Note: If you didn't use the src/ directory, your path might be "../components/Navbar"
import Navbar from "./components/Navbar"; 

// Setting up a clean, modern font
const inter = Inter({ subsets: ["latin"] });

// This metadata helps with SEO and what shows up on Google Search/Browser Tabs
export const metadata: Metadata = {
  title: "Lambodar Lightcrafters India | Best LED Lights",
  description: "Light Crafted for a Brighter Tomorrow. Wholesalers, Traders and Manufacturers of premium, energy-efficient LED lighting solutions including Street Lights, Flood Lights, and Panel Lights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 antialiased flex flex-col min-h-screen`}>
        
        {/* The Navbar will now appear at the top of every page */}
        <Navbar />
        
        {/* The padding-top (pt-[110px]) is crucial here! 
          Because your Navbar is "fixed", it floats above the page. 
          This padding pushes your page content down so it doesn't get covered by the Navbar.
        */}
        <main className="flex-grow pt-[110px] xl:pt-[124px]">
          {children}
        </main>
        
      </body>
    </html>
  );
}