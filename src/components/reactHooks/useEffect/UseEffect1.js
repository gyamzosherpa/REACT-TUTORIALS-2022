import React, { useEffect, useState } from 'react';

const UseEffect1 = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('useEffect render');
    if (value >= 5) {
      alert('data updated');
    }
  });

  return (
    <div>
      <center>
        <h2>useEFfect Basic EXample </h2>
        {value}
        <br />
        <button className="btn" onClick={() => setValue(value + 1)}>
          Add
        </button>
      </center>
    </div>
  );
};

export default UseEffect1;
