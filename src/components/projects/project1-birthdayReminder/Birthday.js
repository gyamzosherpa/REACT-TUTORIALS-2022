import React, { useState } from 'react';
import data from './data';
import List from './List';
import './style.css';

const Birthday = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>
        {people.length} birthdays today
      </h3>
      <section className="container">
        <List people={people} />
      </section>
      <button className="btn1" onClick={() => setPeople([])}>
        clear all
      </button>
    </main>
  );
};

export default Birthday;
