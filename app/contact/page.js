import Contact from "@/components/Contact";

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with VENVL for any questions, comments, or assistance regarding properties. Contact our real estate experts for personalized support and guidance.',
  keywords: [
    'contact VENVL',
    'real estate contact',
    'property assistance',
    'VENVL support',
    'real estate inquiry',
    'property consultation',
    'VENVL customer service',
    'real estate experts'
  ],
  openGraph: {
    title: 'Contact VENVL - Get in Touch with Real Estate Experts',
    description: 'Contact VENVL for property inquiries, assistance, or questions. Our real estate experts are here to help you find your perfect property.',
    url: 'https://venvl.com/contact',
    images: [
      {
        url: '/contact_bg.png',
        width: 1200,
        height: 630,
        alt: 'Contact VENVL - Get in Touch',
      },
    ],
  },
  alternates: {
    canonical: '/contact',
  },
};

const ContactPage = () => {
    return <div>
        <Contact/> </div>;
}

export default ContactPage;