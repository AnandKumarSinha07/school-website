
import React, { useState } from 'react';
import {toast} from "react-toastify"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({name: '',email: '',message: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    return setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully")
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-8 px-4 bg-white">

      <div className="max-w-lg mx-auto">

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Form</h1>

        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col gap-4">

          <label htmlFor="name" className="font-semibold">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded"
          />

          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded"
          />

          <label htmlFor="message" className="font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="p-2 border border-gray-300 rounded"
          ></textarea>

          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
          
        </form>
       
      </div>
      <ToastContainer width={12}/>
    </section>
  );
};

export default ContactForm;
