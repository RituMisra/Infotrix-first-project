import React, { useEffect, useState } from 'react'
import './RandomQuote.css'

import changeImg from './Assets/change.png';

export default function RandomQuoteComponent() {

    let quotes = [];

    useEffect(() => {
        loadQuotes();
    });

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    const[quote, setQuote] = useState(
        {
            text: "Difficulties increase the nearer we get to the pool .",
            author: "Johann Wolfgang von Goethe",
        }
    );

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
   
  return (
    <div className='container'>
        <h1 >Quote Of The Day</h1>
       <div className='quote'>{quote.text}</div>
       <div>
            <div className='line'></div>
            <div className='bottom'>
                <div className='author'>~{quote.author.split(',')[0]}</div>
                <div className='icons'>
              
                    <img  src={changeImg} onClick={() =>{random()}} alt=""/>
                </div>
            </div>
       </div>

    </div>
  )
}

