import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter here
import { Navbar } from './components/Navbar'; 
import Home from './Home';
import Programs from './Programs'; // Make sure this file exists
import Gallery from './Gallery';
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}