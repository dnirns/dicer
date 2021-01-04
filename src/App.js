import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Dice from './components/Dice'
import Letter from './components/Letter'
import Nav from './components/Nav'
import Timer from './components/Timer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route path='/' component={Home} exact />
        <Route path='/roll-dice' component={Dice} />
        <Route path='/random-letter' component={Letter} />
        <Route path='/timer' component={Timer} />
      </BrowserRouter>
    </>
  )
}

export default App
