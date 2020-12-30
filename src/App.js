import Dice from './components/Dice'
import Letter from './components/Letter'

const App = () => {
  return (
    <div>
      <div className='header'>
        <h1>Some basic tools for playing group games on Zoom*</h1>
      </div>

      <Dice />
      <Letter />
    </div>
  )
}

export default App
