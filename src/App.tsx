import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cigarette as Cigar, Package, Award, ShieldCheck, Star, Info, Clock, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import SmokingAccessories from './SmokingAccessories';

function FadeInSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#1a1a1a] text-white">
      {/* Navbar */}
      <nav className="bg-[#111] fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Stogie's" className="h-10 w-10 rounded-full" />
              <span className="ml-2 text-xl font-bold">STOGIE'S</span>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="#accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#111] border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#about" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#products" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#accessories" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Adding pt-16 to account for fixed navbar */}
      <header className="min-h-screen relative flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
          }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.img
            src="/logo.png"
            alt="Stogie's"
            className="w-48 h-48 mx-auto mb-8 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            STOGIE'S
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Fine Cigars & Luxury Accessories
          </motion.p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8">Our Heritage</h2>
            <p className="text-lg text-gray-300 mb-8">
              Since 2024, Stogie's has been a sanctuary for cigar enthusiasts, offering an unparalleled selection of premium cigars and accessories. Our commitment to quality and authenticity has made us India's most trusted destination for connoisseurs.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-amber-500">100+</h3>
                <p className="text-gray-400">Premium Cigars</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-500">100%</h3>
                <p className="text-gray-400">Authentic Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-500">500+</h3>
                <p className="text-gray-400">Happy Customers</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#222]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose Stogie's</h2>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Cigar className="w-12 h-12" />, 
                title: "Premium Selection", 
                desc: "Curated collection of the world's finest hand-rolled cigars from renowned makers" 
              },
              { 
                icon: <Package className="w-12 h-12" />, 
                title: "Secure Shipping", 
                desc: "Temperature-controlled, discreet packaging with nationwide delivery" 
              },
              { 
                icon: <Award className="w-12 h-12" />, 
                title: "Expert Curation", 
                desc: "Each product personally selected by certified cigar sommeliers" 
              },
              { 
                icon: <ShieldCheck className="w-12 h-12" />, 
                title: "Authentication", 
                desc: "100% genuine products with certified authenticity guarantee" 
              },
            ].map((feature, index) => (
              <FadeInSection key={index}>
                <div className="text-center p-8 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-colors h-full flex flex-col items-center">
                  <div className="mb-6 text-amber-500 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-16">Featured Collection</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1589821945066-5c9be5f33f82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Cohiba Behike",
                price: "$450",
                rating: "4.9",
                origin: "Cuba"
              },
              {
                img: "https://images.unsplash.com/photo-1590492177367-4337d4eab455?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Arturo Fuente OpusX",
                price: "$350",
                rating: "4.8",
                origin: "Dominican Republic"
              },
              {
                img: "https://images.unsplash.com/photo-1577991940756-28ba3cfb50c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Padron Anniversary 1964",
                price: "$280",
                rating: "4.7",
                origin: "Nicaragua"
              }
            ].map((product, index) => (
              <FadeInSection key={index}>
                <div className="bg-[#222] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                  <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-500 mr-1" />
                        <span className="text-amber-500">{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{product.origin}</p>
                    <p className="text-amber-500 font-bold">{product.price}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection>
            <div className="mt-12 flex justify-center">
              <a 
                href="/products" 
                className="group flex items-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                View Full Catalog
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SmokingAccessories Component */}
      <section id="accessories">
        <SmokingAccessories />
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#111] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Stogie's" className="w-24 h-24 mb-4 rounded-full shadow-md" />
              <p className="text-gray-400">Elevating your cigar experience since 2024.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="text-gray-400 space-y-2">
                <li>About Us</li>
                <li>Our Products</li>
                <li>Store Locations</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Shipping Policy</li>
                <li>Returns & Exchanges</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="text-gray-400 space-y-2">
                <li>support@stogies.com</li>
                <li>+91 98765 43210</li>
                <li>Vadodara, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-4">© 2024 Stogie's. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Must be 21 or older to purchase. Please enjoy responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;