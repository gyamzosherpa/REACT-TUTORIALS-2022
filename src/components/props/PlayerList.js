import React from 'react';
import Players from './Players';

const images = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS7IUxwTBwYm9c08dFT2pTmVLkWgUbd5Yg&usqp=CAU',
    name: 'Bukayo Saka',
    club: 'Arsenal',
  },
];

const PlayerList = () => {
  return (
    <>
      <h3 style={{ textAlign: 'center', margin: '20px' }}>Player Card</h3>
      <div className="PlayerList">
        {images.map((image) => {
          //......player comes from "Players.js", i.e: "props.player"....
          return <Players player={image}></Players>;
        })}
      </div>
    </>
  );
};

export default PlayerList;
