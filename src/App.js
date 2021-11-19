import { Grid, makeStyles } from '@material-ui/core';
import Feed from './components/feed';
import LeftBar from './components/leftbar';
import NavBar from './components/navbar';
import RightBar from './components/rightbar';
import './App.css';
import AddPost from './components/addPost';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <AddPost />
    </div>
  );
}

export default App;
