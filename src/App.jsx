import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Details from './pages/Details';
import AboutUs from './pages/AboutUs';  // New import
import Contact from './pages/Contact';  // New import
import { LibraryProvider } from './context/LibraryContext';
import './index.css';

function App() {
  return (
    <LibraryProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          {/* Navigation Bar */}
          <Navbar />

          {/* Main Application Content */}
          <main className="container mx-auto px-6 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddItem />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/about" element={<AboutUs />} />  {/* About Us Route */}
              <Route path="/contact" element={<Contact />} />  {/* Contact Route */}
            </Routes>
          </main>
        </div>
      </Router>
    </LibraryProvider>
  );
}

export default App;
