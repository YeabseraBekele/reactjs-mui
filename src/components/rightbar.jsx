import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { getFrindsImages } from '../static/images/fakePosts';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    top: 0,
    paddingTop: theme.spacing(10),
    height: '100vh',
  },
  title: {
    fontSize: 18,
    fontWeight: 550,
    color: '#555',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}));

function RightBar() {
  const classes = useStyles();
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    setImageUrls(getFrindsImages());
  }, []);

  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: 20 }}>
        {imageUrls.map((image) => (
          <Avatar key={image} src={image} alt="A" />
        ))}
      </AvatarGroup>
      <Typography gutterBottom className={classes.title}>
        Gallery
      </Typography>
      <ImageList
        rowHeight={120}
        className={classes.imageList}
        cols={3}
        style={{ marginBottom: 20 }}
      >
        {imageUrls.map((image) => (
          <ImageListItem key={image} cols={image.cols || 1}>
            <img src={image} alt="sample pics" />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography gutterBottom className={classes.title}>
        Catagories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Animals
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Work
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        StudentsLife
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Others
      </Link>
    </Container>
  );
}

export default RightBar;
