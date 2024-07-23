import React from 'react';

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="https://placehold.co/40x40" alt="Logo" className="h-8" />
        <span className="text-xl font-bold text-green-600">blinkit</span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Show delivery info on larger screens */}
        <div className="hidden md:flex flex-col">
          <span className="font-medium">Delivery in 10 minutes</span>
          <span className="text-sm text-zinc-500">PVR Anupam Saket E, Comm...</span>
        </div>
        {/* Search bar */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder='Search "egg"'
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Login button */}
        <button className="hidden md:block text-zinc-700">Login</button>
        {/* Cart button */}
        <button className="hidden md:flex items-center px-4 py-2 text-white bg-green-600 rounded-full">
          <img src="https://placehold.co/20x20" alt="Cart" className="h-5 mr-2" />
          My Cart
        </button>
      </div>
      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        {/* Your hamburger menu icon and menu content */}
      </div>
    </header>
  );
};

export default function Widget() {
  return (
    <div>
      {/* Widget content */}
    </div>
  );
}
