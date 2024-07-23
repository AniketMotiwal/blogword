import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [titledescription, setDescription] = useState('');
  const [img, setImg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`http://localhost:80/posts/${id}`);
        const postData = response.data;
        setTitle(postData.title);
        setDescription(postData.titledescription);
        setImg(postData.img);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching post: ', error);
      }
    };

    fetchPostData();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:80/posts/${id}`, {
        title,
        titledescription,
        img,
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error editing post: ', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-32">
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
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="border rounded-md px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
          onClick={handleEdit}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
