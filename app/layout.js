import "./globals.css";
import Header from "../components/Header";
import { Geist } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'VENVL - Premium Real Estate Rental Platform',
    template: '%s | VENVL'
  },
  description: 'Find your perfect stay anywhere, anytime with VENVL. Explore thousands of handpicked rentals tailored to your lifestyle. Premium real estate platform for daily and monthly rentals.',
  keywords: [
    'real estate',
    'rental platform',
    'property rental',
    'vacation rental',
    'apartment rental',
    'villa rental',
    'daily rental',
    'monthly rental',
    'property search',
    'real estate platform',
    'VENVL',
    'property management',
    'rental properties',
    'real estate investment'
  ],
  authors: [{ name: 'VENVL Team' }],
  creator: 'VENVL',
  publisher: 'VENVL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://venvl.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://venvl.com',
    title: 'VENVL - Premium Real Estate Rental Platform',
    description: 'Find your perfect stay anywhere, anytime with VENVL. Explore thousands of handpicked rentals tailored to your lifestyle.',
    siteName: 'VENVL',
    images: [
      {
        url: '/Photoroom.png',
        width: 1200,
        height: 630,
        alt: 'VENVL Real Estate Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VENVL - Premium Real Estate Rental Platform',
    description: 'Find your perfect stay anywhere, anytime with VENVL. Explore thousands of handpicked rentals tailored to your lifestyle.',
    images: ['/Photoroom.png'],
    creator: '@venvl',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons:{
    icon:'/Photoroom.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
