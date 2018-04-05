import React from 'react'

import {connect} from 'react-redux'
import { map } from 'ramda'

const FeedItems = props => {

  return (

    <div>
      <h1>Feed Items</h1>
      <div>
        <ol>
          {map(f => <li>f.shortName</li>, props.feedItems)}
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
