import { capitalize } from 'lodash';
import { handleActions } from 'redux-actions';
import { taskValueChange, removeTask, addTask, updateTask, initSuccessListOfTask } from '../actions/toDoList';

export const currentTaskValue = handleActions({
  [taskValueChange]: (state, { payload: { value } }) => capitalize(value),
  [addTask]: () => '',
}, '');

export const activeStateButton = handleActions({
  [taskValueChange]: (state, { payload: { value } }) => !Boolean(value),
  [addTask]: () => true,
}, true);

export const listOfTasks = handleActions({
  [initSuccessListOfTask]: (state, { payload: { tasks } }) => tasks,

  [removeTask]: (state, { payload: { id } }) =>
    state.filter(task => task.id !== id),

  [updateTask]: (state, { payload: { task } }) =>
    state.map(currentTask => currentTask.id === task.id ? { ...task } : { ...currentTask }),

  [addTask]: (state, { payload: { task } }) => [...state, task],
}, []);

