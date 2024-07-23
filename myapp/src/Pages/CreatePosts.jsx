import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [titledescription, setDescription] = useState('');
  const [img, setImageUrl] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:80/posts', {
        title,
        titledescription,
        img,
      });
      console.log(response.data);
      navigate('/');
      // Handle success
    } catch (error) {
      console.error('Error creating post: ', error);
      // Handle error
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-32">
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-md px-4 py-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={titledescription}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-md px-4 py-2 w-full h-64"
        ></textarea>
        <input
          type="text"
          placeholder="Image"
          value={img}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border rounded-md px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
          onClick={handleSubmit}
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
