import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'whereever i go, i see your face',
  });

  const changeMessage = () => {
    // ... returns all the previous value, it is a spread operator
    setPerson({ ...person, message: 'hello world' });
    // setMessage('hello world')
  };

  const defaultMessage = () => {
    setPerson({ ...person, message: 'whereever i go, i see your face' });
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>

      {person.message === 'whereever i go, i see your face' ? (
        <button className="btn" onClick={changeMessage}>
          change message
        </button>
      ) : (
        <button className="btn" onClick={defaultMessage}>
          Default Message
        </button>
      )}
    </div>
  );
};

export default UseStateObject;
