import { Container, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import getPosts from '../static/images/fakePosts';
import Post from './post';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
}));

function Feed() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <Container className={classes.container}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
}

export default Feed;
