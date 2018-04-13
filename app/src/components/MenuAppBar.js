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
      color: 'white'
    },
    lastButton: {
      marginLeft: 12,
      marginRight: -12,
    }
  }
)

const MenuAppBar = props => {
  const {classes} = props
  return (
    <div className={classes.root}>
    <AppBar position="fixed">
    <Toolbar>
    <IconButton
          className={classes.firstButton}
          aria-label="Menu"
          onClick={() =>
            props.goBack(props.history)
          }
        ><GoBackIcon />
        </IconButton>
        {props.title}
        </Toolbar>
        </AppBar>
        </div>
  )
}

const mapActionsToProps = (dispatch) => {
  return{
    goBack: (history) => history.goBack()
  }
}

const connector = connect(mapActionsToProps)

export default connector(withStyles(styles)(MenuAppBar))
