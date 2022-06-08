import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  const showAll = () => {
    setPeople(data);
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
        //destructuring
        const { id, name } = person;
        return (
          //when we render a list, we need to have key prop
          <div key={id} className="item">
            <h5>{name}</h5>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {/* if there is atleast one data, it shows "Clear All" btn, else it shows "Show All" */}
      {people.length > 0 ? (
        <button
          className="btn"
          style={{ marginLeft: '480px' }}
          onClick={clearAll}
        >
          Clear All
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginLeft: '480px' }}
          onClick={showAll}
        >
          Show All
        </button>
      )}

      {/* {people.length > 0 && (
        <button
          className="btn"
          style={{ marginLeft: '480px' }}
          onClick={clearAll}
        >
          Clear All
        </button>
      )}

      {people.length === 0 && (
        <button
          className="btn"
          style={{ marginLeft: '480px' }}
          onClick={showAll}
        >
          Show All
        </button>
      )} */}
    </>
  );
};

export default UseStateArray;
