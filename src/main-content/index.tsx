import React, { useEffect, useState } from 'react';
import './main-content.css';
import { fetchRandomQuote } from '../api';

function MainContent() {
  const [randomQuote, setRandomQuote] = useState<any>();
  function getNewRandomQuote() {
    fetchRandomQuote().then((response) => {
      setRandomQuote(response)
    })
  }

  useEffect(() => {
    getNewRandomQuote()
  }, [])

  return (
    <div className='content'>
      <h1>The best quotes from Breaking Bad</h1>

      <span className='id'>#{randomQuote?.quote_id}</span>

      <p className='quote'>{randomQuote?.quote}</p>

      <p className='series'>{randomQuote?.series}</p>

      <p className='author'>{randomQuote?.author}</p>
      <button className='button' onClick={() => {
        getNewRandomQuote()
      }}>
        Get another one
      </button>
    </div>
  );

}

export default MainContent;