import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:80/contact', formData);
      alert('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="bg-zinc-100 p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-semibold mb-4">Let's Get In Touch Today!</h2>
            <p className="text-zinc-600 mb-4">We'd love to hear from you! Whether you have a question about features, trials, need a demo, or anything else, our team is ready to answer all your questions.</p>
            <div className="text-zinc-600">
              <h3 className="font-semibold">London</h3>
              <p>123 Fake Street, London, England</p>
              <p>+44 123 4567 8901</p>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-zinc-700 text-sm font-bold mb-2">Your name</label>
                <input type="text" id="name" value={formData.name} className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-zinc-700 text-sm font-bold mb-2">Your email</label>
                <input type="email" id="email"  value={formData.email} className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="message"  value={formData.message} className="block text-zinc-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}></textarea>
              </div>
              <button onClick={handleSubmit} type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
