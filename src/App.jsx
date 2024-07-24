import { useState } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>procreate palette converter</h1>
      <form action='' method='post'>
        <label for='source_url'>URL: </label>
        <input
          type='text'
          id='source_url'
          placeholder='https://lospec.com/palette-list/sunny_14'
        ></input>
        <br></br>
        <button type='submit'>convert</button>
      </form>
    </>
  )
}

export default App
