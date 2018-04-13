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

class FeedItem extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getFeedItem(id)
  }


  render() {

        const matchTips = compose(
          innerJoin(
            (tip, interest) => contains(interest.tag, tip.tags),
            this.props.tips
          ),
          filter(i => i.checked)
        )(this.props.interests)

        console.log('match tips', matchTips)


    const tipOfTheDay =
      compose(
        head,
        sortBy(prop('randomID')),
        map( t => assoc('randomID', uuidv4(), t))
      )(matchTips)

    console.log('tipOfTheDay', tipOfTheDay)

    const { classes } = this.props
    if (this.props.feedItem._id !== this.props.match.params.id) {
      return (
        <div>
          <center><MenuAppBar {...this.props} showBackArrow={true} title="Destination" /></center>
          <div className={classes.loading}>
            {' '}
            <h1 className="animated infinite swing">Loading</h1>
          </div>
          <CircularProgress className={classes.progress} />
        </div>
      )
    }

    return (
    <div className={classes.fullScreen}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.feedItem.img}
          title={this.props.feedItem.name}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.feedItem.name}
          </Typography>
          <Typography component="p">
            {this.props.feedItem.desc}
          </Typography>
        </CardContent>
      </Card>
      <AlertDialog tip={tipOfTheDay}/>


    </div>
  );
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

export default connector(withStyles(styles)(FeedItem))
