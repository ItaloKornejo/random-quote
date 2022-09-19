import React from 'react'
import QuoteBoxData from './QuoteBoxData'


const QuoteBox = ({randomQuote,randomColor,getRandomAll,isDash,setDash}) => {

    const colorObj={
        color: randomColor
    }

    const backgroundObj = {
        backgroundColor: randomColor
    }

    const handleNext = ()=>{
        if(isDash){
        setDash(false)
        setTimeout(() => {setDash(true)}, 3000)
        setTimeout(() => {getRandomAll()}, 1400)
        }
    }   

  
  return (
    <article className='card' style={colorObj} >
        <div className='marks'>
            <i className='bx bxs-quote-left' ></i>
        </div>
        <QuoteBoxData randomQuote={randomQuote}/>
        <div className='nextIcon'>
            <a onClick={handleNext} >
                <i style={backgroundObj} className='bx bxs-chevron-right' ></i>
            </a> 
        </div>
    </article>
  )
}

export default QuoteBox