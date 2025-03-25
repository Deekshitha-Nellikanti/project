import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">About Us</h3>
            <p className="text-sm text-gray-500">
              ShopHub is your destination for minimalist, thoughtfully designed products that enhance your everyday life.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-500 hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-sm text-gray-500 hover:text-black transition-colors">Shop</Link></li>
              <li><Link to="/category/electronics" className="text-sm text-gray-500 hover:text-black transition-colors">Electronics</Link></li>
              <li><Link to="/category/fashion" className="text-sm text-gray-500 hover:text-black transition-colors">Fashion</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-gray-500 hover:text-black transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-gray-500 hover:text-black transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-sm text-gray-500 hover:text-black transition-colors">Returns</Link></li>
              <li><Link to="/track" className="text-sm text-gray-500 hover:text-black transition-colors">Track Order</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 text-sm text-center text-gray-500">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;