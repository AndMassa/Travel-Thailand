import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import SearchIcon from 'material-ui-icons/Search'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import {TOGGLE_DRAWER} from '../constants'

const styles = theme => (
  {
    root: {
      width: '100%'
    },
    flex: {
      flex: 1
    },
    firstButton: {
      marginLeft: -12,
      marginRight: 12,
    },
    lastButton: {
      marginLeft: 12,
      marginRight: -12,
    }
  }
)

const MenuAppBar = props => {
  const {classes, drawerToggleState} = props
  return (
    <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.firstButton}
        color="contrast"
        aria-label="Menu"
        onClick={props.toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

      <Typography className={classes.flex} variant="title" color="inherit">
        {props.title}
      </Typography>
      <IconButton className={classes.lastButton} color="contrast" aria-label="Search">
        <SearchIcon />
      </IconButton>
      </Toolbar>
    </AppBar>
    </div>
  )
}

const mapSateToProps = state => {

  return{
    drawerToggleState: state.drawer
  }
}

const mapActionsToProps = (dispatch, getState) => {
  return{
    toggleDrawer: () => dispatch({type: TOGGLE_DRAWER})
  }
}

const connector = connect(mapSateToProps, mapActionsToProps)

export default connector(withStyles(styles)(MenuAppBar))
