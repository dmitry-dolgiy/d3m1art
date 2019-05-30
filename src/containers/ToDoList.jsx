import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList/ToDoList';
import * as actionCreators from '../actions/toDoList';

const mapStateToProps = ({ currentTaskValue, activeStateButton, listOfTasks, }) =>
  ({ currentTaskValue, activeStateButton, listOfTasks });

export default connect(mapStateToProps, actionCreators)(ToDoList);