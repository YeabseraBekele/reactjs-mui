import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AddPost() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;

    setNotify(false);
  };

  return (
    <>
      <Tooltip
        title="Add"
        aria-label="add a new post"
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" className={classes.fab}>
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: '100%' }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="Desciption"
                defaultValue="What do you have in mind ? ..."
                multiline
                rows={4}
                size="small"
                style={{ width: '100%' }}
                variant="outlined"
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-select-currency"
                select
                label="Visibility"
                value="Public"
                /*onChange={handleChange}*/
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className="">
              <RadioGroup aria-label="Share" name="Share">
                <FormLabel component="legend">Who can Comment?</FormLabel>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="Friends"
                  control={<Radio size="small" />}
                  label="Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custome"
                  control={<Radio size="small" />}
                  label="Custome (Primium)"
                  disabled
                />
              </RadioGroup>
            </div>

            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => {
                  setNotify(true);
                  setOpen(false);
                }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={notify}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity="success">
          You succesfully created a post.
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddPost;
/**

<div className="">
              <RadioGroup aria-label="Share" name="Share">
                <FormLabel component="legend ">Who can Share</FormLabel>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="Friends"
                  control={<Radio />}
                  label="Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custome"
                  control={<Radio />}
                  label="Custome (Primium)"
                  disabled
                />
              </RadioGroup>
            </div>
 */
