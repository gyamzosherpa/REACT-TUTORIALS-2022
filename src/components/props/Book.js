import React from 'react';
import './style.css';

const Book = (props) => {
  const { img, author, title, children } = props;
  return (
    <>
      <div className="card">
        <img src={img} alt="..." />
        <h4>{title}</h4>
        <h6>{author}</h6>
        {children}
      </div>
    </>
  );
};

export default Book;
