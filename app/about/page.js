import About from "@/components/About";

export const metadata = {
  title: 'About Us',
  description: 'Learn about VENVL, a modern real estate platform that connects you with the best real estate opportunities. Discover our values of transparency, professionalism, innovation, and customer satisfaction.',
  keywords: [
    'about VENVL',
    'real estate company',
    'property platform',
    'VENVL values',
    'real estate transparency',
    'professional property service',
    'innovative real estate',
    'customer satisfaction'
  ],
  openGraph: {
    title: 'About VENVL - Modern Real Estate Platform',
    description: 'Discover how VENVL connects you with the best real estate opportunities through transparency, professionalism, innovation, and customer satisfaction.',
    url: 'https://venvl.com/about',
    images: [
      {
        url: '/about_bg.png',
        width: 1200,
        height: 630,
        alt: 'About VENVL - Our Mission and Values',
      },
    ],
  },
  alternates: {
    canonical: '/about',
  },
};

const AboutPage = () => {
    return <div>
        <About/>
    </div>;
}

export default AboutPage;