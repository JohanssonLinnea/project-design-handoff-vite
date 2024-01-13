import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './StartPage/StartPage';
import SecondPage from './SecondPage/SecondPage';
import Footer from './StartPage/Footer'; 

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about" element={<SecondPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};




