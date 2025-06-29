import Units from "@/components/Units";

export const metadata = {
  title: 'Property Listings',
  description: 'Browse comprehensive property listings with advanced search and filtering options. Find villas, apartments, and houses with detailed information, pricing, and amenities.',
  keywords: [
    'property listings',
    'real estate search',
    'rental properties',
    'villa rental',
    'apartment rental',
    'property filtering',
    'advanced property search',
    'rental listings',
    'property details',
    'real estate browse'
  ],
  openGraph: {
    title: 'VENVL Property Listings - Advanced Search & Filtering',
    description: 'Browse thousands of rental properties with advanced search and filtering. Find your perfect accommodation with detailed property information and amenities.',
    url: 'https://venvl.com/units',
    images: [
      {
        url: '/villa.png',
        width: 1200,
        height: 630,
        alt: 'VENVL Property Listings - Find Your Perfect Property',
      },
    ],
  },
  alternates: {
    canonical: '/units',
  },
};

const UnitsPage = () => {
    return <div>
        <Units/>
    </div>;
}

export default UnitsPage;