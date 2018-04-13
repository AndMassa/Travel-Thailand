import React from 'react'
import uuidv4 from 'uuid/v4'
import { CircularProgress } from 'material-ui/Progress'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import AlertDialog from '../../components/TipDialog'
import {getFeedItem} from '../../action-creators/feeditems'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import {
  compose,
  filter,
  map,
  innerJoin,
  contains,
  head,
  sortBy,
  assoc,
  prop
  } from 'ramda'

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
  },
  media: {
    height: '500px',
  },
  fullScreen: {
    display: 'flex'
  }
})

class FeedItemMap extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getFeedItem(id)
  }


  render() {

    const { classes, name } = this.props
    if (this.props.feedItem._id !== this.props.match.params.id) {
      return (
        <div>
          <center><MenuAppBar {...this.props} showBackArrow={true} title="Map" /></center>
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
      <MenuAppBar {...this.props} title="Map" />
        <Card className={classes.card} style={{ marginBottom: 32 }}>
          <CardMedia className={classes.media}>
            <iframe
              title={this.props.feedItem.name}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=
                AIzaSyDKun7eUBroAQcMt_FnhzZYGIvO8HFUbLw
              &q=${encodeURI(this.props.feedItem.name)}`}
              allowFullScreen
            />
          </CardMedia>
          </Card>
    </div>
  )
}
}

//     return (
//         <div>
//           <MenuAppBar {...this.props} showBackArrow={true} title="Destination" />
//           <Card>
//           <Paper className={classes.root} elevation={1}>
//             <FeedItemList feedItem={this.props.feedItem} />
//             <Typography style={{ paddingTop: '8px' }} component="p">
//               {this.props.feedItem.desc}
//             </Typography>
//           </Paper>
//           </Card>
//         </div>
//       )
//   }
// }

const mapStateToProps = state => {
  console.log('what is state', state)
  return {
    feedItem: state.feedItem,
    tips: state.tips,
    interests: state.interests
  }
}

const mapActionsToProps = dispatch => {
  return {
    getFeedItem: id => dispatch(getFeedItem(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(FeedItemMap))
