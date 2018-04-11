import React from 'react'

import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'

import FeedItemList from '../../components/FeedItemList'

import {connect} from 'react-redux'
import {
  map,
  isEmpty,
  innerJoin,
  filter,
  compose,
  contains
 } from 'ramda'

import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

import MenuAppBar from '../../components/MenuAppBar'
import withDrawer from '../../components/Drawer'
import DestinationItem from '../../components/DestinationItem'

import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'

import Interests from '../interests'

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'

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

  const matches = compose(
  innerJoin(
    (feedItem, interest) => contains(interest.tag, feedItem.tags), props.feedItems),
  filter(i => i.checked))
(props.interests)

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

    <div style={{ marginTop: '59px'}}>
      <MenuAppBar title="Destinations" style={{marginLeft: '40%'}}/>
      <GridList cellHeight={300}>
        {map(f => <Link to={`/feeditems/${f._id}`}><DestinationItem feedItem={f}/></Link>, matches)}
      </GridList>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('this is feeditems', state.feedItems)
return{
  feedItems: state.feedItems,
  interests: state.interests
  }

}

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(FeedItems)))
