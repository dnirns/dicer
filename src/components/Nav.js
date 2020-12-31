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
    background: '#5555553e',
    boxShadow: 'none',
    display: 'flex',

    alignItems: 'center',
  },
  icon: {
    marginLeft: 'auto',
  },
  menuLink: {
    fontFamily: 'Work Sans',
    color: 'white',
    fontSize: '.9em',
    background: 'none',
  },
})

const NavBar = () => {
  const classes = useStyles()

  return (
    <HideOnScroll>
      <AppBar className={classes.root} position='sticky'>
        <Toolbar variant='dense'>
          <Box display={{ xs: 'none', sm: 'none', md: 'none' }}>
            <div aria-haspopup='true'>
              <IconButton edge='start' color='inherit' aria-label='menu'>
                <MenuIcon fontSize='medium' />
              </IconButton>
            </div>
          </Box>
          <Box display={{ xs: 'block', sm: 'block', md: 'block' }}>
            <Link to='/'>
              <button className={classes.menuLink}>Home</button>
            </Link>
            <Link to='/roll-dice'>
              <button className={classes.menuLink}>Roll Dice</button>
            </Link>
            <Link to='/random-letter'>
              <button className={classes.menuLink}>Pick a Letter</button>
            </Link>
          </Box>

          <Box className={classes.icon}></Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
export default NavBar
