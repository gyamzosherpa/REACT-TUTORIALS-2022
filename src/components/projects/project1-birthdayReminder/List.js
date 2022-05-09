import React from 'react';
import './style.css';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        //destructuring
        const { id, name, age, image } = person;
        return (
          //key is needed when listing array value
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
