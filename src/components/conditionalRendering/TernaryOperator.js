import React, { useState } from 'react';

const TernaryOperator = () => {
  const [text, setText] = useState('');
  //   const firstValue = text || 'hello world';
  //   const secondValue = text && 'hello world';

  const [isError, setIsError] = useState(false);

  return (
    <div>
      {/* <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1> */}

      {/* if text is true, return 'gyamzo sherpa', if we provide value in useState,it returns
      that value. And it also return the next text value i.e hello world
       */}
      <h1>{text || 'gyamzo sherpa'}</h1>

      {/* if text is true, return 'hello world' .i.e if there is value in useState already */}
      {/* {text && <h1>hello world</h1>} */}

      <h2>{text || 'peter'}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>

      {/* && check only one condition */}

      {isError && <h1>error.....</h1>}

      {/* check 2 condition */}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>no error</h2>
        </div>
      )}
    </div>
  );
};

export default TernaryOperator;
