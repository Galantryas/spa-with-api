import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import FontIcon from '@material-ui/FontIcon';
// import IconButton from '@material-ui/core/IconButton';
// import ActionHome from '@material-ui/icons/home';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }, 
  smallIcon: {
    width: 36,
    height: 36,
  },
});


function MyAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
        <Button className={classes.button}>
            <Link style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}} to="/home">Home</Link>&nbsp;&nbsp;
        </Button>
          <Button className={classes.button}>
            <Link style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}} to="/profile">Profile</Link>&nbsp;&nbsp;
          </Button>
          <Button  className={classes.button}>
            <Link style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}} to="/portofolio">Portofolio</Link>&nbsp;&nbsp;
          </Button>
          <Button  className={classes.button}>
            <Link style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}} to="/kontak">Kontak</Link>&nbsp;&nbsp;
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAppBar);
