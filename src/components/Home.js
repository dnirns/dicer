import React from 'react'


const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      <div className='container'>
        <h1 className='title'>DICER</h1>
        <h3>A simple tool kit for playing group games on Zoom</h3>
        <p>
          (<em>other video conferencing software may be avalaible</em>)
        </p>
        <p>
          A little (work in progress) app to solve some needs I had while
          playing group board games online.
        </p>
      </div>
      <div className='footer'>
        <p>
          Developed by <a href='https://www.dnirns.com'>Daniel Irons</a>. View
          the code on
          <a href='https://github.com/dnirns/dicer'> GitHub</a>
        </p>
      </div>
    </div>
  )
}

export default Home
