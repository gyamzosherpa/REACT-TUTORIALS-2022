import React, { useEffect, useRef } from 'react';

// preserves value
// useRef does not trigger re-render, where useState trigger re-render
// target DOM nodes/elements
// uncontrolled

const UseRef = () => {
  const yourName = useRef(null);

  const handleSubmit = (e) => {
    //disable automatic refresh
    e.preventDefault();
    console.log(yourName.current.value);
  };
  //console.log(yourName);

  //   useEffect(() => {
  //     console.log(yourName.current);
  //     yourName.current.focus();
  //   });

  return (
    <div style={{ marginTop: '30px' }}>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          {/* ref attribute to an element => to access it directly in the DOM. */}
          <input type="text" ref={yourName} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UseRef;
