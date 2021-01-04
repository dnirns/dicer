import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import {
  List,
  Divider,
  ListItem,
  Box,
  ListItemText,
  Button,
  Drawer,
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  root: {
    background: '#222222',
    color: 'white',
    padding: '14px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
  },
  closeBox: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    width: '56px',
  },
  list: {
    width: '100vw',
    background: '#222222',
    color: 'white',
    marginLeft: 'auto',
  },
})

const SideSheet = ({ open, closeDrawer }) => {
  const classes = useStyles()
  return (
    <>
      <Drawer
        anchor='top'
        open={open}
        variant='temporary'
        onClose={closeDrawer}
      >
        <Box className={classes.root} display='flex' flexDirection='row'>
          <Button className={classes.label}>
            <CloseIcon fontSize='large' onClick={closeDrawer} />
          </Button>
          <Divider orientation='vertical' flexItem />
        </Box>

        <List className={classes.list} onClick={closeDrawer}>
          <ListItem className={classes.root}>
            <Link to='/'>
              <Button className={classes.label}>
                <ListItemText primary='Home' />
              </Button>
            </Link>
          </ListItem>

          <ListItem className={classes.root}>
            <Link to='/roll-dice'>
              <Button className={classes.label}>
                <ListItemText primary='Roll Dice' />
              </Button>
            </Link>
          </ListItem>

          <ListItem className={classes.root}>
            <Link to='/random-letter'>
              <Button className={classes.label}>
                <ListItemText primary='Get a Letter' />
              </Button>
            </Link>
          </ListItem>
          <ListItem className={classes.root}>
            <Link to='/timer'>
              <Button className={classes.label}>
                <ListItemText primary='Timer' />
              </Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default SideSheet
