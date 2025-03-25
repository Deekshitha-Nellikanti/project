import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute bottom-4 right-4 bg-white p-3 rounded-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:text-white">
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-light text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-1">{product.description}</p>
        <span className="text-sm font-medium text-gray-900">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;