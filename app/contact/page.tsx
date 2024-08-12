"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Inquiry about your services",
    message: "Hello, I would like to know more about the services you offer. Can you please provide more details?",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject } = formData;
    if (!name || !email || !subject) {
      alert("Please fill out all required fields.");
      return;
    }
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-red-950 to-slate-900 text-white p-6 md:p-10">
        <h1 className="text-yellow-300 text-2xl md:text-3xl text-center mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none h-40"
          />
          <button
            type="submit"
            className="text-white bg-green-500 rounded-full flex items-center justify-center w-[120px] h-10 mt-2 cursor-pointer hover:opacity-70 self-center"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;


