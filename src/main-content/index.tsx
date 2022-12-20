import React, { useEffect, useState } from 'react';
import './main-content.css';
import { fetchRandomQuote } from '../api';
import mixpanel from 'mixpanel-browser';

function MainContent() {
  const [randomQuote, setRandomQuote] = useState<any>(null);
  function getNewRandomQuote() {
    fetchRandomQuote().then((response) => {
      setRandomQuote(response)
      mixpanel.track('New random quote');
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
      <h1 className='tittle'>The best Breaking Bad quotes</h1>

      <div className='randomQuoteContainer'>
        <span className='series'>{randomQuote?.series}</span>

        <p className='quote'>{randomQuote?.quote}</p>

        <span className='author'>{randomQuote?.author}</span>
      </div>

      <button className='button' onClick={() => {
        getNewRandomQuote()
      }}>
        Get another one
      </button>
    </div>
  );

}

export default MainContent;