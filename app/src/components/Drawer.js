import React from 'react'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HomeIcon from 'material-ui-icons/Home'
import Divider from 'material-ui/Divider'
import {TOGGLE_DRAWER} from '../constants'

import {Drawer} from 'material-ui'

const sideList = (
  <div>
    <List>
      <Link to="/" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/feeditems" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        <ListItemText primary="Desintations" />
        </ListItem>
      </Link>
      <Link to="/tips" className="router-link">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        <ListItemText primary="Travel Tips" />
        </ListItem>
      </Link>
    </List>
    <Divider />
  </div>

)

const withDrawer = function (PageComponent) {

const WrapDrawerComponent = props => {
  return (
    <div>
      <PageComponent {...props} />
      <Drawer open={props.open} onRequestClose={props.toggleDrawer} >
        <div tabIndex={0}
        role="button"
        onClick={props.toggleDrawer}
        onKeyDown={props.toggleDrawer}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  )
}

function mapSateToProps(state) {
  return {
    open: state.drawer.open
  }
}

function mapActionsToProps (dispatch) {
  return{
    toggleDrawer: () => dispatch({type: TOGGLE_DRAWER})
  }

}
const connector = connect(mapSateToProps, mapActionsToProps)
return connector(WrapDrawerComponent)

}

export default withDrawer
