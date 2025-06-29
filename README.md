# VENVL - Real Estate Rental Platform

A modern, responsive real estate rental platform built with Next.js that connects users with premium rental properties. VENVL offers a seamless experience for finding daily and monthly rentals with advanced filtering and search capabilities.

## 🏠 About VENVL

VENVL is more than just a real estate platform—it's the beginning of a life, an investment, or a dream come true. We connect you with the best real estate opportunities in the market, whether you're looking for a dream home, an office for your business, or a successful investment.

### Our Values
- **Transparency** - Clear and honest communication
- **Professionalism** - Expert service and guidance
- **Innovation** - Cutting-edge technology and solutions
- **Customer Satisfaction** - Dedicated support and attention to detail

## ✨ Features

### 🏡 Property Management
- Browse featured rentals with detailed property information
- Advanced search and filtering options
- Property type filtering (Villa, Floor, Ground, Detached House, Apartment)
- Size range selection with interactive sliders
- Room count filtering
- Feature-based filtering (Pet-Friendly, Family Friendly, Beachfront, Work-Friendly)

### 🔍 Search & Discovery
- Location-based search
- Date and duration selection
- Guest count specification
- Real-time search results
- Sort by price, size, and other criteria

### 📱 User Experience
- Responsive design for all devices
- Modern, intuitive interface
- Interactive property cards with detailed information
- Contact forms with floating labels
- Social media integration

### 🎨 Design & UI
- Clean, modern design with Tailwind CSS
- Custom CSS modules for specialized styling
- Responsive layout with mobile-first approach
- Professional color scheme and typography

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.4
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Components**: 
  - React Range Slider Input
  - React Select
- **Internationalization**: next-i18next
- **Development Tools**: ESLint

## 📁 Project Structure

```
venvl/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── units/             # Property listings page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # React components
│   ├── About.jsx          # About page component
│   ├── Banar.jsx          # Hero banner component
│   ├── ClientExp.jsx      # Client experience component
│   ├── Contact.jsx        # Contact form component
│   ├── Explore.jsx        # Property exploration component
│   ├── Footer.jsx         # Footer component
│   ├── Header.jsx         # Header component
│   ├── Stays.jsx          # Stays showcase component
│   ├── Trust.jsx          # Trust indicators component
│   └── Units.jsx          # Property listings component
├── public/                # Static assets
│   ├── Images and SVGs
│   └── Property photos
├── style/                 # CSS modules
│   ├── banar.module.css
│   ├── explore.module.css
│   ├── header.module.css
│   ├── trust.module.css
│   └── units.module.css
└── Configuration files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd venvl
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 Pages

### Home Page (`/`)
- Hero banner with search functionality
- Featured property listings
- Trust indicators and client testimonials
- Property showcase section

### About Page (`/about`)
- Company information and mission
- Core values presentation
- Professional background

### Contact Page (`/contact`)
- Contact form with floating labels
- Social media links
- Contact information

### Units Page (`/units`)
- Advanced property search and filtering
- Property listings with detailed information
- Sort and filter options
- Interactive property cards

## 🎯 Key Features Implementation

### Advanced Filtering System
The platform includes a comprehensive filtering system that allows users to:
- Filter by property type
- Set size ranges with interactive sliders
- Select room counts
- Choose specific features
- Sort results by various criteria

### Responsive Design
Built with mobile-first approach using Tailwind CSS:
- Responsive breakpoints for all screen sizes
- Optimized layouts for mobile, tablet, and desktop
- Touch-friendly interface elements

### Modern UI Components
- Interactive range sliders for price and size filtering
- Floating label form inputs
- Custom property cards with hover effects
- Professional typography and spacing

## 🔧 Customization

### Styling
- CSS modules for component-specific styles
- Tailwind CSS for utility classes
- Custom color schemes and typography
- Responsive design patterns

### Components
- Modular component architecture
- Reusable UI components
- Custom hooks for state management
- Form handling with validation

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: venvl real-estate@gmail.com
- **Phone**: 638-833-839
- **Social Media**: Facebook, LinkedIn, Twitter

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the comprehensive icon library
- All contributors and supporters of the VENVL platform

---

**VENVL** - Where dreams find their perfect home. 🏠✨
