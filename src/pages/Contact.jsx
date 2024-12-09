import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Get in Touch</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        We are here to help! Whether you have a question, feedback, or just want to say hello, we’d love to hear from you.
      </p>

      <div className="flex justify-center space-x-8 mb-6">
        <a 
          href="mailto:info@digitallibrary.com" 
          className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300"
        >
          Send an Email
        </a>
        <a 
          href="tel:+1234567890" 
          className="bg-green-600 text-white py-2 px-6 rounded-full text-lg hover:bg-green-700 transition duration-300"
        >
          Call Us
        </a>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Email: <a href="mailto:info@digitallibrary.com" className="text-blue-600">Omony.a@northeastern.edu</a></h3>
        <h3 className="text-xl font-semibold mt-2">Phone: <a href="tel:+1234567890" className="text-blue-600">+1 781 957-5576</a></h3>
      </div>

      <div className="mt-12 bg-blue-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Still have questions? Reach out now!</h2>
        <p className="text-lg text-gray-700 mb-6">
          We're always ready to assist you with any inquiries. Fill out the form below, and one of our team members will get back to you shortly.
        </p>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
