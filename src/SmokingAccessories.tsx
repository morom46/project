import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SmokingAccessories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: 1,
      name: 'Premium Metal Grinder',
      price: 29.99,
      image: '/images/products/grinder.jpg',
      description: 'Aircraft-grade aluminum 4-piece herb grinder with pollen catcher'
    },
    {
      id: 2,
      name: 'Handcrafted Glass Water Pipe',
      price: 149.99,
      image: '/images/products/waterpipe.jpg',
      description: 'Artisan-made borosilicate glass water pipe with ice catcher'
    },
    {
      id: 3,
      name: 'Luxury Rolling Papers',
      price: 12.99,
      image: '/images/products/papers.jpg',
      description: 'Ultra-thin 24k gold rolling papers, pack of 12'
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Premium Smoking Accessories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: product.id * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-primary">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmokingAccessories;