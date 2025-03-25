import React from 'react';
import { ShoppingCart, Search, Menu, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-5 w-5 mr-4 cursor-pointer md:hidden" />
            <Link to="/" className="text-xl font-light tracking-wider text-gray-900">BHARAT BAZAAR</Link>
          </div>
          
          {isAuthenticated && (
            <>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-sm text-gray-600 hover:text-black transition-colors">Home</Link>
                <Link to="/shop" className="text-sm text-gray-600 hover:text-black transition-colors">Shop</Link>
                <Link to="/category/jewellery" className="text-sm text-gray-600 hover:text-black transition-colors">Jewellery</Link>
                <Link to="/category/traditional-wear" className="text-sm text-gray-600 hover:text-black transition-colors">Traditional Wear</Link>
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
                <span className="text-sm text-gray-600">Hi, {user?.name}</span>
                <Link to="/cart" className="p-2 hover:bg-gray-50 rounded-none relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                    2
                  </span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="p-2 hover:bg-gray-50 rounded-none flex items-center text-sm text-gray-600"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
          
          {!isAuthenticated && (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-sm text-gray-600 hover:text-black transition-colors">Login</Link>
              <Link to="/register" className="text-sm bg-black text-white px-4 py-2 hover:bg-gray-900 transition-colors">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;