import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'


const Welcome = () => (
  <center>
    <img
      alt="Travel Thailand"
      style={{ paddingTop: '16px' }}
      src="/Thailand-Welcome.png"
    />

    <Typography style={{ padding: '16px' }} variant="display1">
      Welcome to the Travel Companion App!
    </Typography>
    <div>
      <Link to="/feeditems" style={{ textDecoration: 'none' }}>
        <Button variant="raised" color="primary">
          Destinations
        </Button>
      </Link>
    </div>
    <div>
      <Link to="/tips" style={{ textDecoration: 'none' }}>
        <Button variant="raised" color="primary" style={{ marginTop: '8px' }}>
          Helpful Tips
        </Button>
      </Link>
    </div>
  </center>
)

const Home = props => {
  return (
    <div style={{ padding: '60px' }}>
      <Welcome />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default connector(Home)
