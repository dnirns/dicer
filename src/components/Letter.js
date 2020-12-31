import React, { useState } from 'react'

const Letter = () => {
  const [letter, setLetter] = useState('?')
  const [bounce, setBounce] = useState('')

  const letterGenerator = () => {
    const startTime = new Date().getTime()
    setBounce('')
    const interval = setInterval(() => {
      if (new Date().getTime() - startTime > 1200) {
        clearInterval(interval)
        return
      }
      setLetter(String.fromCharCode(65 + Math.floor(Math.random() * 26)))
      setBounce('animate__animated animate__tada animate__delay-1s')
    }, 50)
  }
  return (
    <>
      <div className='letter-container '>
        <button className='hvr-grow' onClick={letterGenerator}>
          Get a Letter
        </button>

          <h1 className={`letter ${bounce}`}>{letter}</h1>

      </div>
    </>
  )
}

export default Letter
