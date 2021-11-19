import { Container, makeStyles, Typography } from '@material-ui/core';
import {
  Bookmark,
  ExitToApp,
  Home,
  List,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    },
  },
  text: {
    marginRight: theme.spacing(5),
    fontWeight: 500,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function LeftBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.items}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.items}>
        <List className={classes.icon} />
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.items}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.items}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Video</Typography>
      </div>
      <div className={classes.items}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.items}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collection</Typography>
      </div>
      <div className={classes.items}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.items}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Setting</Typography>
      </div>
      <div className={classes.items}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default LeftBar;
