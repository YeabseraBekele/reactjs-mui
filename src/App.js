import { Grid, makeStyles } from '@material-ui/core';
import Feed from './components/feed';
import LeftBar from './components/leftbar';
import NavBar from './components/navbar';
import RightBar from './components/rightbar';
import './App.css';

const useStyles = makeStyles((theme) => ({
  right: {
    display: 'block',
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
        <Grid item sm={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
