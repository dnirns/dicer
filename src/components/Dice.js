import React, { useState } from 'react'

const Dice = () => {
  const [dice1, setDice1] = useState(1)
  const [dice2, setDice2] = useState(null)
  const [bounce, setBounce] = useState('')

  const rollOneDice = (min, max) => {
    setBounce('')
    setDice2(null)
    const startTime = new Date().getTime()
    const interval = setInterval(() => {
      if (new Date().getTime() - startTime > 1500) {
        clearInterval(interval)
        return
      }
      setDice1(Math.floor(Math.random() * (max - min + 1)) + min)
      setBounce('animate__animated animate__bounce')
    }, 100)
  }

  const rollTwoDice = (min, max) => {
    setBounce('')
    const startTime = new Date().getTime()
    const interval = setInterval(() => {
      if (new Date().getTime() - startTime > 1500) {
        clearInterval(interval)
        return
      }
      setDice1(Math.floor(Math.random() * (max - min + 1)) + min)
      setDice2(Math.floor(Math.random() * (max - min + 1)) + min)
      setBounce('animate__animated animate__bounce')
    }, 100)
  }

  return (
    <div className='container'>
      <div className='button-container'>
        <button className='hvr-grow' onClick={() => rollOneDice(1, 6)}>
          Roll 1 Dice
        </button>
        <button className='hvr-grow' onClick={() => rollTwoDice(1, 6)}>
          Roll 2 Dice
        </button>
      </div>

      <div className='dice-wrapper'>
        {dice1 && <div class={`dice dice-${dice1} ${bounce}`} />}

        {dice2 && dice1 && <div class={`dice dice-${dice2} ${bounce}`} />}
      </div>
    </div>
  )
}

export default Dice
