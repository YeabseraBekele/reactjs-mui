import { Container, makeStyles, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
  },
  items: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

function LeftBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.items}>
        <Home />
        <Typography>HomePage</Typography>
      </div>
      <div className={classes.items}>
        <Home />
        <Typography>HomePage</Typography>
      </div>
      <div className={classes.items}>
        <Home />
        <Typography>HomePage</Typography>
      </div>
      <div className={classes.items}>
        <Home />
        <Typography>HomePage</Typography>
      </div>
      <div className={classes.items}>
        <Home />
        <Typography>HomePage</Typography>
      </div>
      <div className={classes.items}>
        <Home />
        <Typography>HomePage</Typography>
      </div>
    </Container>
  );
}

export default LeftBar;
