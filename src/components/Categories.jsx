import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, ShirtIcon, Shovel as Shoe, Watch, Smartphone, UtensilsCrossed, Palette, BookOpen } from 'lucide-react';

const categories = [
  {
    name: 'Jewellery',
    icon: <Gem className="h-6 w-6" />,
    path: '/category/jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Traditional Wear',
    icon: <ShirtIcon className="h-6 w-6" />,
    path: '/category/traditional-wear',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78dd99de2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Footwear',
    icon: <Shoe className="h-6 w-6" />,
    path: '/category/footwear',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Accessories',
    icon: <Watch className="h-6 w-6" />,
    path: '/category/accessories',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Electronics',
    icon: <Smartphone className="h-6 w-6" />,
    path: '/category/electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Home & Kitchen',
    icon: <UtensilsCrossed className="h-6 w-6" />,
    path: '/category/home-kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Art & Craft',
    icon: <Palette className="h-6 w-6" />,
    path: '/category/art-craft',
    image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Books',
    icon: <BookOpen className="h-6 w-6" />,
    path: '/category/books',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const Categories = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-light text-gray-900 mb-12 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              to={category.path}
              key={category.name}
              className="group relative h-64 overflow-hidden"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="bg-black bg-opacity-50 p-3 rounded-full mb-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-light tracking-wider">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;