import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

const products: Product[] = [
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
  },
  {
    id: '5',
    name: 'Professional Camera',
    price: 999.99,
    description: 'High-end digital camera for professional photography.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Photography'
  },
  {
    id: '6',
    name: 'Wireless Earbuds',
    price: 149.99,
    description: 'True wireless earbuds with premium sound quality.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Electronics'
  }
];

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;