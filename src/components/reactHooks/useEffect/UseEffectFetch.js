import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  //  ( useEffect is usually the place where data fetching happens in React. Data fetching means using asynchronous functions,
  //    and using them in useEffect might not be as straightforward as you'd think.)

  //   The issue here is that the first argument of useEffect is supposed to be a function
  //   that returns either nothing (undefined) or a function (to clean up side effects).
  //   But an async function returns a Promise, which can't be called as a function!
  //   It's simply not what the useEffect hook expects for its first argument.

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Fetch Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          //destructuring user
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>HTML Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetch;
