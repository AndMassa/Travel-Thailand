import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

const styles ={
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 165,
    height: 165
  }
}

const Welcome = () => (
  <center>
    <Typography style={{ padding: '12px' }} variant="display1">
      Welcome to the Travel Companion App!
    </Typography>
  </center>
)


const Home = props => {
  const { classes } = props
  return (
    <div style={{ padding: '60px' }}>
      <Welcome />
      <center>
        <Avatar
        alt="thailand"
        src="http://www.dreamholidayshub.com/wp-content/uploads/2017/08/thailand-600x600.jpg"
        className={classNames(classes.avatar, classes.bigAvatar)}
        />
      <Typography style={{ padding: '16px' }} variant="display1">
        Are you ready to travel the world?
      </Typography>
      <dim>
        <Link to="/feeditems" style={{ textDecoration: 'none' }}>
          <Button
          variant="raised"
          color="purple"
          className={classes.button}
          >
            <p />
            Get Started!
          </Button>
        </Link>
      </dim>
    </center>
  </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(Home))
