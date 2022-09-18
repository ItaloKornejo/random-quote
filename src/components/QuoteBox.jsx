import React from 'react'
import QuoteBoxData from './QuoteBoxData'


const QuoteBox = ({randomQuote,randomColor,getRandomAll}) => {

    const colorObj={
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor: randomColor
    }

  return (
    <article className='card' style={colorObj} >
        <div className='marks'>
            <i className='bx bxs-quote-left' ></i>
        </div>
        <QuoteBoxData randomQuote={randomQuote}/>
        <div className='nextIcon'>
            <a onClick={getRandomAll} >
                <i style={backgroundObj} className='bx bxs-chevron-right' ></i>
            </a>
        </div>
    </article>
  )
}

export default QuoteBox