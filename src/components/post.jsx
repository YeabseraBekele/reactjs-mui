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

function Post({ post }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.imageUrl}
          title="post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {post.name}
          </Typography>
          <Typography variant="body2">
            {post.description + post.description}
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
