import React from 'react';
import { Smartphone, Watch, Briefcase, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Electronics',
    icon: <Smartphone className="h-6 w-6" />,
    path: '/category/electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Accessories',
    icon: <Watch className="h-6 w-6" />,
    path: '/category/accessories',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Fashion',
    icon: <Briefcase className="h-6 w-6" />,
    path: '/category/fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Photography',
    icon: <Camera className="h-6 w-6" />,
    path: '/category/photography',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const Categories = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-light text-gray-900 mb-12 text-center">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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