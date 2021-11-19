import { Avatar, Container, makeStyles, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { useEffect, useState } from 'react';
import { getFrindsImages } from '../static/images/fakePosts';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
  title: {
    fontSize: 18,
    fontWeight: 550,
    color: '#555',
  },
}));

function RightBar() {
  const classes = useStyles();
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    setImageUrls(getFrindsImages());
    console.log(imageUrls);
  }, [imageUrls]);

  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>
        Online Friends
      </Typography>
      <AvatarGroup max={4}>
        {imageUrls.map((image) => (
          <Avatar src={image} alt="A" />
        ))}
      </AvatarGroup>
    </Container>
  );
}

export default RightBar;
