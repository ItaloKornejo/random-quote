import React from 'react'

const QuoteBoxData = ({randomQuote}) => {
  return (
    <div className='quote_data'>
        <p className='card_quote'>{randomQuote.quote}</p>
        <h2>{randomQuote.author}</h2>
    </div>
  )
}

export default QuoteBoxData