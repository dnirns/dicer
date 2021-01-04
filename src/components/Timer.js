import React, { useState, useEffect } from 'react'
import TimerMenu from './TimerMenu'
import alarm from '../assets/alarm.wav'

const Timer = () => {
  const [startTime, setStartTime] = useState(60000)
  const [time, setTime] = useState(60000)
  const [timerOn, setTimerOn] = useState(false)
  const [showReset, setShowReset] = useState(false)

  useEffect(() => {
    let interval = null

    if (time === 0) {
      playAlarm()
    }
    if (time > 0) {
      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime - 1000)
        }, 1000)
      } else if (!timerOn) {
        clearInterval(interval)
      }
    }
    return () => clearInterval(interval)
  }, [setTime, timerOn, time])

  const playAlarm = () => {
    const audio = new Audio(alarm)
    audio.type = 'audio/wav'
    audio.play()
  }

  const handleStart = () => {
    setTimerOn(true)
    setShowReset(false)
  }

  const handleStop = () => {
    setTimerOn(false)
    setShowReset(true)
  }
  const handleReset = () => {
    setShowReset(false)
    setTime(startTime)
  }

  const handleChangeTime = (newTime) => {
    setTime(newTime)
    setStartTime(newTime)
    console.log(`log from timer component - new time is ${time}`)
  }

  return (
    <div className='container'>
      <div className='timer'>
        <span className={time > 0 ? 'time' : 'time-flashing'}>
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className={time > 0 ? 'time' : 'time-flashing'}>
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
        </span>
      </div>
      <div className='timer-buttons'>
        {!timerOn && time !== 0 && <button onClick={handleStart}>Start</button>}
        {timerOn && time > 0 && <button onClick={handleStop}>Stop</button>}
        {showReset || time === 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
        {!timerOn && time < 0 && <button onClick={handleStart}>Resume</button>}
      </div>
      <TimerMenu changeTime={handleChangeTime} />
    </div>
  )
}

export default Timer
