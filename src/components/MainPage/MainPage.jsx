import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Menu from '../../containers/Menu';
import ToDoList from '../../containers/ToDoList';
import './MainPage.css';

class MainPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div id='main-page' className={ classes.root }>
        <Menu history={ this.props.history } pageWrapId={ 'main-page-wrap' } outerContainerId={ 'main-page' } />
        <Grid
          id='main-page-wrap'
          container
          direction="row"
          justify="center"
          spacing={ 24 }>

          <Grid item xs={ 12 }>
            <Paper className={ classes.paper }>
              <ToDoList />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit * 4,
    maxWidth: 300,
    color: theme.palette.text.secondary,
    marginLeft: 95,
    textAlign: 'center',
    zIndex: 9999,
  },
});

export default withStyles(styles)(MainPage);