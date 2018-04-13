import React from 'react';
import { withStyles } from 'material-ui/styles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Info from 'material-ui-icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 800,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const DestinationItem = (props) => {

  const { img, shortName, shortDesc, icon } = props.feedItem

  return (

    <GridListTile key={img} style={{height: '105%', width: '200%'}}>
           <img src={img} alt={'Something beautiful!'}/>
           <GridListTileBar
             title={shortName}
             subtitle={shortDesc}
             actionIcon={
               <IconButton className={icon}>
                 <Info />
               </IconButton>
             }
           />
      </GridListTile>

  )
}

export default withStyles(styles)(DestinationItem)
