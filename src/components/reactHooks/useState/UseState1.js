import React, { useState } from 'react';

const UseState1 = () => {
  // default value "Hello"
  const [text, setText] = useState('Hello');

  const handleClick = () => {
    if (text === 'Hello') {
      setText('Hello world');
    } else {
      setText('No world');
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button
        type="button"
        className="btn"
        onClick={handleClick}
        // onClick={(handleClick) => setText('hello world')}
      >
        change
      </button>
    </>
  );
};

export default UseState1;
