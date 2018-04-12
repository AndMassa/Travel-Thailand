import React from 'react'

import {connect} from 'react-redux'
import {
  compose,
  innerJoin,
  contains,
  filter,
  isEmpty,
  map
} from 'ramda'

import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'

import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

import MenuAppBar from '../../components/MenuAppBar'
import withDrawer from '../../components/Drawer'
import TipItem from '../../components/TipItem'

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


function mapStateToProps(state) {
  return {
    tips: state.tips,
    interests: state.interests
  }
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(FilteredTips))
