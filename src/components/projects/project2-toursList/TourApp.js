import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './index.css';
import data from './data';

const TourApp = () => {
  const [loading, setLoading] = useState(true); //by default loading will be true
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(data);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      <main>
        {/* prop drilling i.e tours and removeTour */}
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
};

export default TourApp;
