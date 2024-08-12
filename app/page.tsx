"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      <main className="min-h-screen bg-gradient-to-r from-red-950 to-slate-900 text-white pt-16">
        <section id="home" className="flex flex-col md:flex-row items-center justify-between p-6 md:p-32 gap-6">
          <div className="flex flex-col max-w-md md:max-w-lg w-full md:w-1/2">
            <h1 className="text-yellow-300 text-2xl md:text-4xl">Hello,</h1>
            <h3 className="text-white text-3xl md:text-6xl">I am Jamila.</h3>
            <h3 className="text-green-500 text-sm md:text-lg">Web Developer</h3>
            <p className="text-white text-sm md:text-base mt-4">
              I specialize in turning creative ideas into functional digital experiences, leveraging the latest technologies and best practices in web development. Whether it's crafting responsive designs or optimizing site performance, I’m dedicated to delivering high-quality results that exceed expectations.
            </p>
            <a
              href="Resume (1).pdf"
              download={"resume"}
              className="text-white bg-green-500 rounded-full flex items-center justify-center w-[120px] h-10 mt-4 cursor-pointer hover:opacity-70"
            >
              My Resume
            </a>
          </div>
          <div className="flex justify-center w-full md:w-1/2">
            <Image
              src="/work.JPG"
              alt="work"
              width={400}
              height={400}
              className="rounded-full w-full max-w-sm md:max-w-md"
            />
          </div>
        </section>

        <section id="about" className="text-center p-6 md:p-32">
          <h1 className="text-yellow-300 text-2xl md:text-4xl">About Me</h1>
          <p className="text-white text-sm md:text-base mx-auto max-w-3xl">
            I am a passionate web developer with a strong foundation in coding and a drive to create engaging and effective digital solutions. Currently, I’m pursuing a Bachelor’s degree in Cybersecurity, which deepens my understanding of secure coding practices and enhances my ability to develop robust, secure applications. Outside of my professional realm, I indulge in cooking, where I love experimenting with new recipes, and I enjoy reading fictional novels that transport me to imaginative worlds. I’m also an enthusiastic badminton player, finding joy and strategy in each match. Balancing my technical skills with these diverse hobbies keeps me motivated and creatively inspired in all aspects of my life.
          </p>
          <h1 className="text-yellow-300 text-2xl md:text-4xl mt-6">Skills</h1>
          <div className="progress-bars flex flex-col items-center w-full px-4">
            {[
              { label: 'HTML', width: '93%', src: '/html.png' },
              { label: 'CSS', width: '75%', src: '/css.png' },
              { label: 'JavaScript', width: '62%', src: '/js.png' },
              { label: 'Next.js', width: '81%', src: '/next.png' }
            ].map((skill, index) => (
              <div key={index} className="flex items-center mb-4 w-full max-w-[800px]">
                <div className="flex-grow">
                  <div className="bg-gray-500 rounded-full h-2 w-full">
                    <div className="bg-green-600 rounded-full h-2" style={{ width: skill.width }}></div>
                  </div>
                </div>
                <Image
                  src={skill.src}
                  alt={skill.label}
                  width={90}
                  height={90}
                  className="mx-4"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 md:p-10">
          <h1 className="text-yellow-300 text-2xl md:text-4xl text-center">Contact Me</h1>
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
              className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none h-64"
            />
            <button
              type="submit"
              className="text-white bg-green-500 rounded-full flex items-center justify-center w-[120px] h-10 mt-2 cursor-pointer hover:opacity-70 self-center"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

