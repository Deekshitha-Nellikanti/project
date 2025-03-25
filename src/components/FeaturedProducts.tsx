import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 199.99,
    description: 'Advanced smartwatch with health tracking and notifications.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Designer Backpack',
    price: 89.99,
    description: 'Stylish and functional backpack perfect for everyday use.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Fashion'
  },
  {
    id: '4',
    name: 'Premium Sunglasses',
    price: 159.99,
    description: 'Luxury sunglasses with UV protection and premium design.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Fashion'
  }
];

const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;