import Explore from "@/components/Explore";
import Banar from "../components/Banar";
import Image from "next/image";
import Trust from "@/components/Trust";
import Stays from "@/components/Stays";
import ClientExp from "@/components/ClientExp";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Home',
  description: 'Find your perfect stay anywhere, anytime with VENVL. Browse featured rentals, explore properties, and discover your dream accommodation with our advanced search and filtering options.',
  keywords: [
    'home rental',
    'featured properties',
    'rental search',
    'property listings',
    'vacation rental',
    'daily rental',
    'monthly rental',
    'property exploration'
  ],
  openGraph: {
    title: 'VENVL - Find Your Perfect Stay Anywhere, Anytime',
    description: 'Explore thousands of handpicked rentals tailored to your lifestyle. Find your perfect accommodation with VENVL.',
    url: 'https://venvl.com',
    images: [
      {
        url: '/Photoroom.png',
        width: 1200,
        height: 630,
        alt: 'VENVL Home - Find Your Perfect Stay',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div>
      <Banar />
      <div className="container w-full max-w-[1280px] mx-auto my-[40px] max-lg:mx-0 max-lg:px-[10px] ">
        <Explore />
        <Trust />
      </div>
      <Stays />
      <div className="container w-full max-w-[1280px] mx-auto my-[40px] max-lg:mx-0 max-lg:px-[10px] ">

      <ClientExp />
      </div>
      <Footer />
    </div>
  );
}
