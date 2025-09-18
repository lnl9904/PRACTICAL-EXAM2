import React from 'react';
import subjects from '../data/subject.json';
import '../css/courseprogram.css';

const CourseProgram = () => (
  <section className="course-program">
    <h2>WHAT IS THE COURSE PROGRAM?</h2>
    <div className="subject-icons">
      {subjects.map((item) => (
        <div className="subject-card" key={item.id}>
          <img src={item.image} alt={item.subject} />
          <span>{item.subject}</span>
        </div>
      ))}
    </div>
    <div className="course-description">
      <p>{subjects[0].description}</p>
    </div>
  </section>
);

export default CourseProgram;