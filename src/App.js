import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Audience from './components/Audience';
import CourseProgram from './components/CourseProgram';
import Footer from './components/Footer';


function App() {
  return (
   <div className="container">
      <Header />
      <MainBanner />
      <Audience />
      <CourseProgram />
      <Footer />
    </div>

  );
}

export default App;
