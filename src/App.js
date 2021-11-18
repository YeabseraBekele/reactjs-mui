import { Grid } from '@material-ui/core';
import Feed from './components/feed';
import LeftBar from './components/leftbar';
import NavBar from './components/navbar';
import RightBar from './components/rightbar';
import './App.css';
function App() {
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
        <Grid item sm={3}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
