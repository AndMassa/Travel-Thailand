import React from 'react'

import List from 'material-ui/List'
import FeedItemList from '../../components/FeedItemList'

import {connect} from 'react-redux'
import { map } from 'ramda'


import MenuAppBar from '../../components/MenuAppBar'

import {TOGGLE_DRAWER} from '../../constants'


const FeedItems = props => {
  const { classes } = props

  return (

    <div style={{ marginTop: '56px'}}>
      <MenuAppBar title="Feed Items" />
      <List>
          {map(f => <FeedItemList feedItem={f}/>, props.feedItems)}
      </List>
    </div>
  )
}

const mapSateToProps = state => {
return{
  feedItems: state.feedItems
  }

}

const mapActionsToProps = (dispatch, getState) => {
  return{
    toggleDrawer: () => dispatch({type: TOGGLE_DRAWER})
  }
}

const connector = connect(mapSateToProps)

export default connector(FeedItems)
