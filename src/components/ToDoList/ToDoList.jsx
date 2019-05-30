import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';
import './ToDoList.css';

class ToDoList extends Component {

  async componentDidMount() {
    const { data } = await axios.get('https://5c99023942365600143931e4.mockapi.io/api/v1/tasks');
    this.props.initSuccessListOfTask({ tasks: data });
  }

  render() {
    const {
      classes,
      listOfTasks,
      taskValueChange,
      currentTaskValue,
      activeStateButton,

      onSaveTask,
      onRemoveTask,
      onUpdateTask,

    } = this.props;

    return (
      <div className={ classes.common }>
        <TextField
          type='text'
          autoFocus
          className={ classes.input }
          value={ currentTaskValue }
          placeholder='Enter new task..'
          onChange={ ({ target: { value } }) => taskValueChange({ value }) }
          onKeyPress={ ({ key }) => key === 'Enter' ? onSaveTask({ task: currentTaskValue }) : null } />

        <Button
          color='primary'
          className={ classes.button }
          disabled={ activeStateButton }
          onClick={ () => onSaveTask({ task: currentTaskValue }) }
          variant='contained'>
          Add
        </Button>

        <ItemList
          className='item-list'
          tasks={ listOfTasks }
          onRemoveTask={ onRemoveTask }
          onUpdateTask={ onUpdateTask } />
      </div>
    );
  }
}

const styles = () => ({
  common: {
    margin: 'auto',
  },
  input: {
    width: 180,
  },
  button: {
    marginLeft: 20,
  }
});

export default withStyles(styles)(ToDoList);
