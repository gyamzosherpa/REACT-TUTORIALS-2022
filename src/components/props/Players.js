import React from 'react';
import './style.css';

const Players = (props) => {
  //player is transfer to PlayerList
  //destructuring
  const { img, name, club } = props.player;
  return (
    <>
      <div className="playerCard">
        <img src={img} alt="..." />
        <h4>{name}</h4>

        <h6>{club}</h6>
      </div>
    </>
  );
};

export default Players;
