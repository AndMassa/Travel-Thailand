import React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import { connect } from 'react-redux'
import FeedItemList from '../../components/FeedItemList'
import MenuAppBar from '../../MenuAppBar'
import {getFeedItem} from '../../action-creators/feeditems'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { compose, filter, map } from 'ramda'
import List from 'material-ui/List'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3
  }),
  cleaned: {
    textDecoration: 'none'
  },
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

class FeedItem extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getFeedItem(id)
  }

  render() {
    const props = this.props
    const { classes } = props
    if (props.feedItem._id !== props.match.params.id) {
      return (
        <div>
          <MenuAppBar {...this.props} showBackArrow={true} title="Destination" />
          <div className={classes.loading}>
            {' '}
            <h1 className="animated infinite swing">Loading</h1>
          </div>
          <CircularProgress className={classes.progress} />
        </div>
      )
    }
    return (
      <div>
        <div>
          <MenuAppBar {...this.props} showBackArrow={true} title="Destination" />
          <Paper className={classes.root} elevation={2}>
            <FeedItemList feedItem={props.feedItem} />
            <Typography style={{ paddingTop: '8px' }} component="p">
              {props.feedItem.desc}
            </Typography>
          </Paper>
        </div>
        <List>
          {compose(
            map(r => <FeedItemList feedItem={f} />),
            filter(f => props.feedItem._id == f.feeditemID)
          )(props.feedItems)}
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    feedItem: state.feedItem
  }
}
const mapActionsToProps = dispatch => {
  return {
    getFeedItem: id => dispatch(getFeedItem(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(FeedItem))
