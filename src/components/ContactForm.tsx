import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import email from '../assets/invite_icon.png'
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    try {
      await emailjs.send(
        "service_tfqzvgc", // Replace with your EmailJS Service ID
        "template_2f1i6fy", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Vy_UVUQuZHtr7jI0j" // Replace with your EmailJS Public Key
      );
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError((err as { text: string }).text);
    }
  };

  return (
    <div className=" w-full bg-[#FBFBFC] p-4">
    <div className=" flex justify-around  mt-24 mx-auto bg-black text-white p-6 rounded-lg shadow-lg mb-32">
      <div className=" justify-center mb-10 w-96">
        <img className=" mb-10" src={email} alt="" />
      </div>
      <div className="w-96 mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Still have a Query, Email Us</h2>
      {isSent && <p className="text-green-500 text-center font-semibold">Your message has been sent!</p>}
      {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded h-32 resize-none focus:outline-none focus:border-gray-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-300 transition"
        >
          Send Message
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
