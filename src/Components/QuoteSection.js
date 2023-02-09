import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import { SocialIcon } from 'react-social-icons';
import { quoteList } from './quoteList';

export const QuoteSection = () => {
    // Quote draw
    const firstQuote = quoteList[Math.floor(Math.random()*quoteList.length)];
    
    const [quote, setQuote] = useState(firstQuote.quote);
    const [author, setAuthor] = useState(firstQuote.author);
    const [light, setLight] = useState(false);
    
    const randomQuoteHandler = () => {
      const newQuote = quoteList[Math.floor(Math.random()*quoteList.length)];
      setQuote(newQuote.quote);
      setAuthor(newQuote.author);
      setLight(!light);
    }
    
    useEffect(()=>{
      document.body.style.backgroundColor = (light) ? 'white' : 'black';
    });

    const white = (!light) ? '-white' : '';

    return (
    <main id='quote-box' className={`main-section${white}`}>

      <q id="text" className={`quote${white}`}>{quote}</q>
      <cite id="author" className={`author${white}`}>- {author}</cite>

      <section className='buttons-and-icons'>
        <a href='twitter.com/intent/tweet' target='_blank'><SocialIcon url="https://twitter.com/jaketrent" /></a>
        <button id="new-quote" className='button' onClick={randomQuoteHandler}>New Quote</button>
      </section>
    </main>
    );
}