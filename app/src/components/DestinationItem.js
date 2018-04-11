import React from 'react';
import Icon from 'material-ui/Icon'
import { withStyles } from 'material-ui/styles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const DestinationItem = (props) => {

  const {classes, img, shortName, shortDesc, icon } = props.feedItem

  return (

    <GridListTile key={img} style={{height: '100%'}}>
           <img src={img} />
           <GridListTileBar
             title={shortName}
             subtitle={shortDesc}
             actionIcon={
               <IconButton className={icon}>
                 Placeholder
               </IconButton>
             }
           />
         </GridListTile>
  )
}

export default withStyles(styles)(DestinationItem)
