import React, { useState } from 'react';

// In Javascript, const input = document.getElementById("idName");
// const inputValue = input.value

// React => value, onChange

const ControlInput = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    //The preventDefault() method cancels the event if it is cancelable,
    // meaning that the default action that belongs to the event will not occur.
    e.preventDefault();
    // console.log(firstName, email);

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };

  return (
    <>
      <article style={{ marginTop: '40px' }}>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              //target => target the input firstName
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              //target => target the input email
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Add Person</button>
          </div>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlInput;
