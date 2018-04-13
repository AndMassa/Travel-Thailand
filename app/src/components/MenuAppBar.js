import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import {Link} from 'react-router-dom'
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
          <Link to="/"><GoBackIcon style={{color: 'white'}}/></Link>
        </IconButton>

      <Typography className={classes.flex} variant="title" color="inherit">
        {props.title}
      </Typography>
      </Toolbar>
    </AppBar>
    </div>
  )
}

const mapSateToProps = state => {

  return{
    state
  }
}

const mapActionsToProps = (dispatch, getState) => {
  return{
    toggleDrawer: () => dispatch({type: TOGGLE_DRAWER})
  }
}

const connector = connect(mapSateToProps, mapActionsToProps)

export default connector(withStyles(styles)(MenuAppBar))
