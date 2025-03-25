import React from 'react';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Handcrafted Gold Necklace',
      price: 24999,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 2,
      name: 'Traditional Silk Saree',
      price: 5999,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light text-gray-900 mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center py-6 border-b border-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />
              <div className="ml-6 flex-1">
                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">₹{item.price.toLocaleString()}</p>
                <div className="mt-2 flex items-center">
                  <select
                    value={item.quantity}
                    onChange={() => {}}
                    className="rounded-none border-gray-300 text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button className="ml-4 text-gray-400 hover:text-gray-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="ml-6">
                <p className="text-sm font-medium text-gray-900">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4">
          <div className="bg-gray-50 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-sm font-medium text-gray-900">₹{total.toLocaleString()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Shipping</p>
                <p className="text-sm font-medium text-gray-900">₹99</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <p className="text-base font-medium text-gray-900">Total</p>
                  <p className="text-base font-medium text-gray-900">₹{(total + 99).toLocaleString()}</p>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 hover:bg-gray-900 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;