import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  const removeItem = (id) => {
    //remove specific id, filter is a javascript function
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          //when we render a list, we need to have key prop
          <div key={id} className="item">
            <h5>{name}</h5>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginLeft: '480px' }}
        onClick={clearAll}
      >
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
