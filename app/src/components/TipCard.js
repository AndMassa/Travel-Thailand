import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


// sameple tip


function TipCard(props) {
  const { classes, tip } = props;
  console.log('tip', tip)
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {tip.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {tip.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(TipCard);
