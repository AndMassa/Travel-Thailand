import React from 'react'

import {connect} from 'react-redux'
import { map } from 'ramda'

const FeedItems = props => {

  return (

    <div>
      <h1>FeedItems</h1>
      <div>
        <ol>
          {map(f => <li>r.name</li>, props.feedItems)}
        </ol>
      </div>
    </div>
  )
}

const mapSateToProps = state => {
return{
  feedItems: state.feedItems
  }

}

const connector = connect(mapSateToProps)

export default connector(FeedItems)
