import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'

function App() {
  const [isDash,setDash] = useState(true)

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  const getRandomColor = () => `hsl(${getRandomHSL(0,360)},${getRandomHSL(0,70)}%,${getRandomHSL(0,65)}%)`

  const firstElement =quotes[getIndexRandom(quotes)]
  const firstColor = getRandomColor()

  const [randomQuote,setRandomQuote] = useState(firstElement)
  const [randomColor,setRandomColor] = useState(firstColor)

  const getRandomAll = () =>{
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(getRandomColor())
  }

  const handleToggle = () => {

    setDash(!isDash);
  }

  function getRandomHSL(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  const backgorundObject = {
    backgroundColor : randomColor
  }

  console.log('Init DASH: '+isDash );


  return (
    <div className="App" style={backgorundObject}>
      <div className={isDash ? 'transition' : 'transition anim-trans'} style={backgorundObject}></div>
      <QuoteBox 
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
        setRandomColor={setRandomColor}
        isDash={isDash}                   
        setDash={setDash}

      />
    </div>
  )
}

export default App
