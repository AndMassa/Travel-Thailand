import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader
} from 'material-ui/List'
import Switch from 'material-ui/Switch'
import Favorite from 'material-ui-icons/Favorite'
import {map} from 'ramda'
import {CHOOSE_INTERESTS} from '../../constants'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})


const Interests = props => {

  const { classes, interests, handleChange } = props

    console.log("Interests is:", JSON.stringify(interests))
    console.log("Tags are: ", interests.tag)
  return (
    <div style={{ padding: '260px' }}>
      <center>
        <div>
          <List
            subheader={
              <ListSubheader>What do you like to do? </ListSubheader>
            }
          >

          {map( i => <ListItem>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary= {i.tag} />
              <Switch checked={i.checked} onChange={handleChange(i.tag)}/>
            </ListItem> , interests )}


</List>
      </div>
      <dim>
        <Link to="/feeditems" style={{ textDecoration: 'none'}}>
          <Button
            variant="raised"
            size="large"
            color="grey"
            className={classes.button}
          >

          <p />
          Go Travel!
          </Button>
        </Link>
      </dim>
    </center>
  </div>
  )
}
function mapActionsToProps(dispatch) {
  return {
    handleChange: name => event => {
      console.log('handleChange fired', name)
      dispatch({type: CHOOSE_INTERESTS, payload: {tag: name, checked: event.target.checked}})
    }
  }
}

function mapStateToProps(state) {
  return {
    interests: state.interests
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Interests))
