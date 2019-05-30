import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function ImgMediaCard(props) {

  const { classes, quote } = props;

  return (
    <Card className={ classes.card }>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={ classes.media }
          height="250"
          image="https://picsum.photos/345/290/?random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { quote.author }
          </Typography>
          <Typography component="p">
            { quote.quote }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled>
          Next
        </Button>
        <Button size="small" color="primary" disabled>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

export default withStyles(styles)(ImgMediaCard);
