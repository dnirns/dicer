import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Slide,
  useScrollTrigger,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { makeStyles } from '@material-ui/core/styles'

import NavDrawer from './NavDrawer'

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const useStyles = makeStyles({
  root: {
    background: '#222222',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: 'auto',
  },
  menuLink: {
    fontFamily: 'Work Sans',
    color: 'white',
    fontSize: '.9em',
    background: 'none',
  },
})

const NavBar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(true)
  const classes = useStyles()

  const handleCloseDrawer = () => {
    setSideDrawerOpen(false)
  }

  return (
    <>
      <NavDrawer
        open={sideDrawerOpen}
        closeDrawer={handleCloseDrawer}
      />
      <HideOnScroll>
        <AppBar className={classes.root} position='sticky'>
          <Toolbar variant='dense'>
            <Box display={{ xs: 'block', sm: 'none', md: 'none' }}>
              <div aria-haspopup='true'>
                <IconButton className={classes.icon} onClick={() => setSideDrawerOpen(true)} edge='start' color='inherit' aria-label='menu'>
                  <MenuIcon fontSize='medium' />
                </IconButton>
              </div>
            </Box>
            <Box display={{ xs: 'none', sm: 'block', md: 'block' }}>
              <Link to='/'>
                <button className={classes.menuLink}>Home</button>
              </Link>
              <Link to='/roll-dice'>
                <button className={classes.menuLink}>Roll Dice</button>
              </Link>
              <Link to='/random-letter'>
                <button className={classes.menuLink}>Pick a Letter</button>
              </Link>
              <Link to='/timer'>
                <button className={classes.menuLink}>Timer</button>
              </Link>
            </Box>


          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
export default NavBar
