import React from 'react'
import { getDataFromAPI } from './apis'
import './App.css'

const pickRandomButtonString = () => {
  const buttonStringOptions = ['Here we go again', 'Why me', 'Make it stop']
  return buttonStringOptions[
    Math.floor(Math.random() * buttonStringOptions.length)
  ]
}

function App() {
  const [buttonString, setButtonString] = React.useState("I'll take my chances")
  const [mainContentString, setMainContentString] =
    React.useState('Click if you dare.')

  const handleGrabJokeButtonClick = () => {
    // We can use .then() because axios returns a Promise
    // You can look into Promises as extra homework!
    getDataFromAPI().then((result) => {
      setMainContentString(result.joke)
      setButtonString(pickRandomButtonString)
    })
  }

  return (
    <div className="App">
      <h3>{mainContentString}</h3>
      <button onClick={() => handleGrabJokeButtonClick()}>{buttonString}</button>
    </div>
  )
}

export default App
