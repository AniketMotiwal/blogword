import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-12 pb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Let's Get in Touch with Latest News
          </h1>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
            In our latest blog post we take a closer look at the different ways you can grow and nurture your email community while building authority.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Latest News
          </button>
          <Link to="/about">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4 sm:mt-0">
              About Us
            </button>
          </Link>
        </div>
      </div>
      <div className="relative bg-white dark:bg-zinc-800">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-zinc-800">
          <img
            src="https://images.pexels.com/photos/106829/pexels-photo-106829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Blog Cover"
            className="w-full h-64 sm:h-96 md:h-128 lg:h-144 xl:h-160 object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-end p-4 sm:p-10">
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-lg w-full transform translate-y-1/2">
              <div className="flex flex-wrap justify-end gap-2 sm:justify-end sm:gap-4">
                <span className="px-4 py-1 text-sm bg-gray-200 text-blue-800 rounded-full transition-colors duration-300 ease-in-out hover:bg-purple-200 hover:text-purple-800 border border-gray-500">Product</span>
                <span className="px-4 py-1 text-sm bg-gray-200 text-purple-800 rounded-full transition-colors duration-300 ease-in-out hover:text-purple-900 hover:bg-purple-200 border border-gray-500">Development</span>
              </div>
              <p className="text-base sm:text-xl text-zinc-500 font-semibold">Latest Blog</p>
              <p className="text-base sm:text-xl font-semibold">The Psychology of Color in Marketing and Design</p>
              <p className="mt-2 sm:mt-4 text-gray-700 font-inter font-medium text-base leading-loose">A deep dive into the psychology of color,
                including how different colors can impact emotions, behavior, and perceptions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
