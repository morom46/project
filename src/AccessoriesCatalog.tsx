import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, Search, Filter, X } from 'lucide-react';

const AccessoriesCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Categories
  const categories = [
    { id: 'all', name: 'All Accessories' },
    { id: 'grinders', name: 'Grinders' },
    { id: 'papers', name: 'Papers & Wraps' },
    { id: 'pipes', name: 'Water Pipes' },
    { id: 'storage', name: 'Storage' }
  ];
  
  // Products data
  const products = [
    {
      id: 1,
      name: "Premium Metal Grinder",
      price: 89.99,
      rating: 4.7,
      origin: "USA",
      category: "grinders",
      image: "/images/products/grinder.jpg",
      description: "Aircraft-grade aluminum 4-piece herb grinder with diamond-sharp teeth and pollen catcher."
    },
    {
      id: 2,
      name: "Handcrafted Glass Water Pipe",
      price: 299.99,
      rating: 4.8,
      origin: "USA",
      category: "pipes",
      image: "/images/products/waterpipe.jpg",
      description: "Artisan-made borosilicate glass water pipe with premium percolation system and ice catcher."
    },
    {
      id: 3,
      name: "24K Gold Rolling Papers",
      price: 24.99,
      rating: 4.5,
      origin: "USA",
      category: "papers",
      image: "/images/products/papers.jpg",
      description: "Ultra-thin genuine gold leaf rolling papers, pack of 12."
    },
    {
      id: 4,
      name: "Titanium 5-Piece Grinder",
      price: 129.99,
      rating: 4.9,
      origin: "Germany",
      category: "grinders",
      image: "/images/products/titanium-grinder.jpg",
      description: "Precision-engineered titanium grinder with magnetic seal and micron screen."
    },
    {
      id: 5,
      name: "Premium Hemp Wraps",
      price: 12.99,
      rating: 4.6,
      origin: "USA",
      category: "papers",
      image: "/images/products/hemp-wraps.jpg",
      description: "Organic hemp wraps with no tobacco, pack of 25."
    },
    {
      id: 6,
      name: "Recycler Dab Rig",
      price: 249.99,
      rating: 4.8,
      origin: "USA",
      category: "pipes",
      image: "/images/products/dab-rig.jpg",
      description: "Scientific glass dab rig with recycler function for maximum filtration."
    },
    {
      id: 7,
      name: "Wooden Storage Box",
      price: 79.99,
      rating: 4.7,
      origin: "Canada",
      category: "storage",
      image: "/images/products/storage-box.jpg",
      description: "Handcrafted walnut wood box with humidity control and multiple compartments."
    },
    {
      id: 8,
      name: "Glass Bubbler Pipe",
      price: 139.99,
      rating: 4.6,
      origin: "USA",
      category: "pipes",
      image: "/images/products/bubbler.jpg",
      description: "Compact water-filtered glass pipe with artistic color accents."
    },
    {
      id: 9,
      name: "Natural Raw Papers",
      price: 9.99,
      rating: 4.8,
      origin: "Spain",
      category: "papers",
      image: "/images/products/raw-papers.jpg",
      description: "Unrefined natural papers with hemp gum, pack of 50."
    },
    {
      id: 10,
      name: "Acrylic Grinder with Window",
      price: 29.99,
      rating: 4.4,
      origin: "USA",
      category: "grinders",
      image: "/images/products/acrylic-grinder.jpg",
      description: "Clear acrylic grinder with viewing window and storage compartment."
    },
    {
      id: 11,
      name: "Vacuum-Sealed Storage Jar",
      price: 34.99,
      rating: 4.7,
      origin: "USA",
      category: "storage",
      image: "/images/products/storage-jar.jpg",
      description: "Airtight UV-protected glass jar for maximum freshness preservation."
    },
    {
      id: 12,
      name: "Portable Mini Pipe",
      price: 59.99,
      rating: 4.5,
      origin: "USA",
      category: "pipes",
      image: "/images/products/mini-pipe.jpg",
      description: "Discreet pocket-sized pipe with cooling system."
    }
  ];
  
  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Animation for page elements
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#111] fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/logo.png" alt="Stogie's" className="h-10 w-10 rounded-full" />
                <span className="ml-2 text-xl font-bold">STOGIE'S</span>
              </a>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="/#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              <a href="/#accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Header */}
      <header className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <a href="/" className="text-amber-500 flex items-center hover:underline">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Home
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Smoking Accessories</h1>
          <p className="text-gray-400 max-w-2xl">Explore our curated collection of high-quality smoking accessories designed to elevate your experience.</p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="pb-20 px-4" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-8">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#222] border border-gray-700 rounded-full px-4 py-2 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center bg-[#222] border border-gray-700 rounded-full px-4 py-2 text-white"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {/* Mobile Filter Panel */}
            {isFilterOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-75 z-40 md:hidden flex items-center justify-center">
                <div className="bg-[#222] rounded-lg w-11/12 max-w-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Filter Accessories</h3>
                    <button onClick={() => setIsFilterOpen(false)}>
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 rounded ${
                          activeCategory === category.id ? 'bg-amber-500 text-black' : 'bg-[#333] text-white'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Desktop Category Sidebar */}
            <div className="hidden md:block w-64 bg-[#222] p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                      activeCategory === category.id ? 'bg-amber-500 text-black' : 'bg-[#333] hover:bg-[#444] text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="bg-[#222] rounded-lg p-8 text-center">
                  <p className="text-xl">No accessories found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="mt-4 text-amber-500 hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: (product.id % 6) * 0.1 }}
                      className="bg-[#222] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-amber-500 mr-1" />
                            <span className="text-amber-500">{product.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{product.origin}</p>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <p className="text-amber-500 font-bold">${product.price}</p>
                          <button className="bg-[#333] hover:bg-[#444] px-3 py-1 rounded transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#111] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Stogie's" className="w-24 h-24 mb-4 rounded-full shadow-md" />
              <p className="text-gray-400">Elevating your cigar experience since 2024.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="/" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="/#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="/#products" className="hover:text-amber-500 transition-colors">Our Products</a></li>
                <li><a href="/#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
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
};

export default AccessoriesCatalog; 