import React from 'react'
import Icon from 'material-ui/Icon'
import {ListItem, ListItemText} from 'material-ui/List'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
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
    <GridList cellHeight={180} className={props.feedItems}>
        <Icon>{icon}</Icon>
      <ListItemText primary={shortName} secondary={shortDesc} />
    </GridList>
  <Divider />
  </Link>
</div>
    )
}


export default FeedItemList
