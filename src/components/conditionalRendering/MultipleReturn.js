import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/gyamzosherpa';

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((res) => {
        //200 indicate success:true
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  });

  if (isLoading) {
    <div>
      return (<h2>......Loading......</h2>; )
    </div>;
  }

  if (isError) {
    return (
      <div>
        <h1>Error.....</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturn;
