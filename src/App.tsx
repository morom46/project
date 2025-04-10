import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cigarette as Cigar, Package, Award, ShieldCheck, Star, Info, Clock, MapPin } from 'lucide-react';

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
  return (
    <div className="bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <header className="min-h-screen relative flex items-center justify-center">
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
            className="w-48 h-48 mx-auto mb-8"
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8">Our Heritage</h2>
            <p className="text-lg text-gray-300 mb-8">
              Since 2020, Stogie's has been a sanctuary for cigar enthusiasts, offering an unparalleled selection of premium cigars and accessories. Our commitment to quality and authenticity has made us India's most trusted destination for connoisseurs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-amber-500">1000+</h3>
                <p className="text-gray-400">Premium Cigars</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-500">24/7</h3>
                <p className="text-gray-400">Expert Support</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-500">100%</h3>
                <p className="text-gray-400">Authentic Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-500">5000+</h3>
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
              { icon: <Cigar className="w-12 h-12" />, title: "Premium Selection", desc: "Finest hand-rolled cigars" },
              { icon: <Package className="w-12 h-12" />, title: "Pan India Shipping", desc: "Delivered with care" },
              { icon: <Award className="w-12 h-12" />, title: "Expert Curated", desc: "By aficionados, for aficionados" },
              { icon: <ShieldCheck className="w-12 h-12" />, title: "Guaranteed Authentic", desc: "100% genuine products" },
            ].map((feature, index) => (
              <FadeInSection key={index}>
                <div className="text-center p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-colors">
                  <div className="mb-4 text-amber-500 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
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
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 px-4 bg-[#222]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-16">Luxury Accessories</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1579729998618-68e6557b4561?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Premium Humidors",
                desc: "Handcrafted cedar wood humidors with precise humidity control"
              },
              {
                img: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Luxury Cutters",
                desc: "Precision-engineered cutters for the perfect draw"
              }
            ].map((accessory, index) => (
              <FadeInSection key={index}>
                <div className="relative h-96 rounded-lg overflow-hidden group">
                  <img src={accessory.img} alt={accessory.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-bold mb-2">{accessory.name}</h3>
                      <p className="text-gray-300">{accessory.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-16">Visit Our Stores</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "Mumbai",
                address: "Colaba Causeway, Mumbai",
                hours: "10 AM - 9 PM"
              },
              {
                city: "Delhi",
                address: "Connaught Place, New Delhi",
                hours: "11 AM - 8 PM"
              },
              {
                city: "Bangalore",
                address: "MG Road, Bangalore",
                hours: "10:30 AM - 8:30 PM"
              }
            ].map((location, index) => (
              <FadeInSection key={index}>
                <div className="bg-[#222] p-6 rounded-lg">
                  <MapPin className="w-8 h-8 text-amber-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{location.city}</h3>
                  <p className="text-gray-400 mb-2">{location.address}</p>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Stogie's" className="w-24 h-24 mb-4" />
              <p className="text-gray-400">Elevating your cigar experience since 2020.</p>
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
                <li>Mumbai, India</li>
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