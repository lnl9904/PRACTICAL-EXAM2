import React from 'react';
import objects from '../data/object.json'; // đường dẫn tùy vị trí file
import '../css/audience.css';

const Audience = () => (
  <section className="audience">
    <h2>WHO SHOULD LEARN PROGRAMMING IN FPT APTECH?</h2>
    <div className="cards">
      {objects.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Audience;