import React from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-5 w-5 mr-4 cursor-pointer md:hidden" />
            <Link to="/" className="text-xl font-light tracking-wider text-gray-900">SHOPHUB</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm text-gray-600 hover:text-black transition-colors">Home</Link>
            <Link to="/shop" className="text-sm text-gray-600 hover:text-black transition-colors">Shop</Link>
            <Link to="/category/electronics" className="text-sm text-gray-600 hover:text-black transition-colors">Electronics</Link>
            <Link to="/category/fashion" className="text-sm text-gray-600 hover:text-black transition-colors">Fashion</Link>
          </div>

          <div className="hidden md:flex items-center flex-1 mx-8">
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 bg-gray-50 border-none rounded-none text-sm focus:outline-none focus:ring-0"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-50 rounded-none">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-none relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;