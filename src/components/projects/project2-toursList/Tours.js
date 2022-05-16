import React from 'react';
import Tour from './Tour';
import './index.css';

// tours and removeTour comes from 'TourApp' file i.e prop drilling
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Tour list</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
