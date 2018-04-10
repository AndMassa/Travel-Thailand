import React from 'react'

import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'

import FeedItemList from '../../components/FeedItemList'

import {connect} from 'react-redux'
import { map, isEmpty } from 'ramda'

import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

import MenuAppBar from '../../components/MenuAppBar'
import withDrawer from '../../components/Drawer'

import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'

import interests from '../interests'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'inlineBlock',
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    padding: 0
  },
  pageMargin: { marginTop: '56px' },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  loading: {
    position: 'absolute',
    top: '51.5%',
    left: '46.5%'
  }
})

const FeedItems = props => {
  const { classes } = props

if(isEmpty(props.feeditems)) {
  return (
  <div>
    <MenuAppBar title="Destinations" />
    <div className={classes.loading}>
      {' '}
      <h1 className="animated infinite swing">Loading</h1>
    </div>
    <CircularProgress className={classes.progress} />
  </div>
  )
}
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

const connector = connect(mapSateToProps)

export default withDrawer(connector(withStyles(styles)(FeedItems)))
