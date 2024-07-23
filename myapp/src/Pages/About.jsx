import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">We are the people who compelling the stories</h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <img src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148298375.jpg?size=626&ext=jpg&ga=GA1.1.259776567.1714506536&semt=ais_user" alt="Story Image 1" className="rounded-lg" />
          <img src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148298375.jpg?size=626&ext=jpg&ga=GA1.1.259776567.1714506536&semt=ais_user" alt="Story Image 2" className="rounded-lg" />
          <img src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148298375.jpg?size=626&ext=jpg&ga=GA1.1.259776567.1714506536&semt=ais_user" alt="Story Image 3" className="rounded-lg" />
        </div>
        <BlogSection />
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 rounded-lg shadow-lg">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-purple-900">About our blog</h2>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tempore quos amet eos aspernatur distinctio quis quaerat repellendus 
          nihil officiis eum ipsa eaque illum quae perferendis mollitia, harum tempora reprehenderit iusto fugiat nulla ratione.
        </p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
          Learn more
        </button>
      </div>
      <div className="flex-1 mt-4 md:mt-0 md:ml-4">
        <img
          src="https://images.pexels.com/photos/19239672/pexels-photo-19239672/free-photo-of-studio-shot-of-an-elegant-man-in-a-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Blog Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
