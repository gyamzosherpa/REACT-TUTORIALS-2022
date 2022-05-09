import React from 'react';
import Book from './Book';

const images = {
  img: 'https://www.ektabooks.com/images/books/thumb-HSvSXKaDIEpWlSvif5My.jpg',
  title: 'Day Trade For a Living',
  author: 'Gyamzo Sherpa',
};

const BookList = () => {
  return (
    <>
      <div className="bookList">
        <Book img={images.img} title={images.title} author={images.author}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            fugit. Iste ex ipsam cum expedita libero natus ratione quos harum
            iusto? Consectetur, adipisci temporibus saepe inventore atque aut
            ipsum error.
          </p>
        </Book>
      </div>
    </>
  );
};

export default BookList;
