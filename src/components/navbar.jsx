import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Close, Mail, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import profilepic from '../static/images/player456.png';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    paddingLeft: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    // to make it responsive //
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.openSearch ? 'flex' : 'none'),
      width: '80%',
      justifyContent: 'space-between',
    },
  },

  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
    width: '100%',
  },
  close: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  icons: {
    display: (props) => (props.openSearch ? 'none' : 'flex'),
    alignItems: 'center',
  },
  searchButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    marginRight: theme.spacing(2),
  },
  badge: {
    margin: theme.spacing(1),
  },
  profile: {
    marginLeft: theme.spacing(2),
  },
}));

function NavBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const classes = useStyles({ openSearch });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Yabeye
        </Typography>

        <Typography variant="h6" className={classes.logoSm}>
          YBY
        </Typography>

        <div className={classes.search}>
          <Search />
          <InputBase
            placeholder="Ask questions ..."
            className={classes.input}
          />
          <IconButton
            className={classes.close}
            onClick={() => setOpenSearch(false)}
          >
            <Close />
          </IconButton>
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpenSearch(true)}
          />
          <Badge color="error" badgeContent={1} className={classes.badge}>
            <Mail />
          </Badge>
          <Badge color="error" badgeContent={3} className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar src={profilepic} alt="Yabeye" className={classes.profile} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
