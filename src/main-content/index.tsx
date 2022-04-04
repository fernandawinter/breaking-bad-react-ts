import React, { useEffect, useState } from 'react';
import './main-content.css';
import { fetchRandomQuote } from '../api';

function MainContent() {
  const [randomQuote, setRandomQuote] = useState<any>(null);
  function getNewRandomQuote() {
    fetchRandomQuote().then((response) => {
      setRandomQuote(response)
    })
  }

  useEffect(() => {
    getNewRandomQuote()
  }, [])

  if (randomQuote === null) {
    return (
      <div className='content'>
        <h1>The quotes</h1>
        <div className='isLoading'>Is loading...</div>
        <button className='button' onClick={() => {
          getNewRandomQuote()
        }}>
          Get another one
        </button>
      </div>
    )
  }

  return (
    <div className='content'>
      <h1>The quotes</h1>

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