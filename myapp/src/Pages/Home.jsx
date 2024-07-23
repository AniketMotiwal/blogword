// Inside your component file
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Hero from '../Components/Hero';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch posts
    const fetchPosts = async () => {
      try {
        // Make a GET request to fetch posts from the server
        const response = await axios.get('http://localhost:80/posts');
        // Set the fetched posts to the state
        setPosts(response.data);
        // Initialize expanded state for each post to false
        setExpandedPosts(response.data.map(() => false));
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleDelete = async (postId) => {
    try {
      // Make a DELETE request to delete the post
      await axios.delete(`http://localhost:80/posts/${postId}`);
      // Remove the deleted post from the state
      setPosts(posts.filter(post => post.id !== postId));
      // Remove the expanded state for the deleted post
      setExpandedPosts(expandedPosts.filter((_, index) => posts[index].id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  const toggleExpand = (index) => {
    setExpandedPosts(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      <Hero />
      <div className='home grid grid-cols-1 sm:grid-cols-3 gap-6 rounded p-8 sm:p-20 my-8 sm:my-20'>
        {posts.map((post, index) => (
          <div className="post relative overflow-hidden rounded" key={post.id}>
            <div className="img relative">
              <img className="object-cover w-full h-40 sm:h-64 hover:scale-105 transition-transform" src={post.img} alt={post.title} />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between absolute top-0 right-0 p-2">
                <Link to={`/editpost/${post.id}`} className="text-blue-500 cursor-pointer flex items-center mb-2 sm:mb-0">
                  <span className="mr-2"><FaEdit /></span>
                </Link>
                <span className="text-red-500 cursor-pointer flex items-center" onClick={() => handleDelete(post.id)}>
                  <span className="mr-1"><FaTrash /></span>
                </span>
              </div>
            </div>
            <div className="content mt-4 sm:mt-6">
              <h1 className="text-lg sm:text-xl font-bold mb-2">{post.title}</h1>
              <p className={`text-gray-700 font-semibold ${expandedPosts[index] ? '' : 'truncate'}`}>{post.titledescription}</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded" onClick={() => toggleExpand(index)}>
                {expandedPosts[index] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
