import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Digital Library</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Digital Library is your gateway to a world of knowledge. Our platform provides easy access to a wide range of books, articles, and resources, aimed at fostering learning and personal growth for all.
      </p>

      {/* Mission Section */}
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 text-center">
          Our mission is to democratize knowledge and make it accessible to everyone, everywhere. We aim to break down barriers and empower individuals with the resources they need to grow, learn, and thrive.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Digital Library?</h2>
        <p className="text-lg text-gray-700 mb-4">
          We provide a diverse collection of resources that cater to all kinds of learners, from casual readers to research scholars. Our user-friendly interface, comprehensive catalog, and personalized recommendations make it easier than ever to find your next great read.
        </p>
        <a 
          href="/" 
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300"
        >
          Explore Our Library
        </a>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Join Our Community</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Ready to start your learning journey? Join us today to access thousands of resources and be a part of a growing community passionate about knowledge.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
