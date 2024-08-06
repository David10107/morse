import { useState } from 'react'
import { morseCodeMap, textToMorseMap } from './morse'
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [morseToNormal, setMorseToNormal] = useState(true);



  function handleInputChange(e) {
    let value = e.target.value;
    setInput(value);
    console.log(input);
  }


  function handleButtonChange() {
    setMorseToNormal(mtn => !mtn);
    setInput('');
    console.log(input);
  }


  function decodeMorse(code) {

    if (code.charAt(0) === '.' || code.charAt(0) === '-') {
      return code
              .split('   ')
              .map(word => word
                                            .split(' ')
                                            .map(char => morseCodeMap[char])
                                            .join('')
              )
              .join(' ')
    } else {
      return 'Please enter a morse code'
    }

  }


  function decodeNormal(text) {

    if (text.charAt(0) === '.' || text.charAt(0) === '-' || text.charAt(0) === '') {
      return 'Please enter words'
    } else {
      return text
                .toUpperCase()
                .split('')
                .map(char => textToMorseMap[char])
                .join(' ');
    }

  }


  return (
    <>
    <div className="app">

      <h1>Morse Code Translator<span>byDavid</span></h1>   

      <div className="app-container">

        <button onClick={handleButtonChange}>{morseToNormal ? 'From Normal To Morse' : 'From Morse To Normal'}</button>
        <div className="display">{morseToNormal ? decodeMorse(input) : decodeNormal(input)}</div>
        <input type="text" placeholder={morseToNormal ? 'Enter morse code' : 'Enter your words'} onChange={handleInputChange}/>

      </div>
      
    </div>
    </>
  )
}

export default App
