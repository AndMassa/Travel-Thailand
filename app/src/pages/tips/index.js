import React from 'react'

import {connect} from 'react-redux'
import { map } from 'ramda'

const Tips = props => {

  return (

    <div>
      <h1>Tips</h1>
      <div>
        <ol>
          {map(t => <li>t.name</li>, props.tips)}
        </ol>
      </div>
    </div>
  )
}

const mapSateToProps = state => {
return{
  tips: state.tips
  }

}

const connector = connect(mapSateToProps)

export default connector(Tips)
