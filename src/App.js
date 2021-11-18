import './App.css';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import { AddShoppingCart, Person } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  button: {
    color: '#fff',
    backgroundColor: theme.palette.success.dark,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <h1>Heading</h1>
      <p>Some paragraph</p>

      <Button variant="contained" color="primary" startIcon={<Person />}>
        SaveMe
      </Button>

      <br />

      <IconButton color="secondary" aria-label="add to cart">
        <AddShoppingCart />
      </IconButton>

      <Button variant="outlined" className={classes.button}>
        Styled Button
      </Button>
    </div>
  );
}

export default App;
