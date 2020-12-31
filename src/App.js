import Dice from './components/Dice'
import Letter from './components/Letter'

const App = () => {
  return (
    <div>
      <div className='header'>
        <h1 className='title'>DICER</h1>
        <h3>A simple tool kit for playing group games on Zoom</h3>
        <p style={{ fontSize: '.8em' }}>
          (<em>other video conferencing software may be avalaible</em>)
        </p>
      </div>

      <Dice />
      <Letter />
    </div>
  )
}

export default App
