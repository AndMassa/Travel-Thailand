import React from 'react'
import Icon from 'material-ui/Icon'
import {ListItem, ListItemText} from 'material-ui/List'
import { Link } from 'react-router-dom'
import Divider from 'material-ui/Divider'





const FeedItemList = props => {
  const { shortName, shortDesc, icon } = props.feedItem

return (
  <div>
    <Link
      to={`/feeditems`}
      style={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
    <ListItem>
        <Icon>{icon}</Icon>
      <ListItemText primary={shortName} secondary={shortDesc} />
    </ListItem>
  <Divider />
  </Link>
</div>
    )
}


export default FeedItemList
