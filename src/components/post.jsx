import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import mango from '../static/images/mango.jpg';
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      //width: 250,
    },
  },
  media: {
    height: 300,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={mango} title="post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Fruites
          </Typography>
          <Typography variant="body2">
            Fruites are the means by which flowering plants disseminate their
            seed. In botaincal usage, the term frutes a collection of usage
            rights for a block of spectrumthat is granted by a regulator often
            through an auction.Fruites are the means by which flowering plants
            disseminate their seed. In botaincal usage, the term frutes a
            collection of usage rights for a block of spectrumthat is granted by
            a regulator often through an auction.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" size="small" variant="outlined">
          Share
        </Button>
        <Button color="primary" size="small" variant="outlined">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
