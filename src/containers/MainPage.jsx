import { connect } from 'react-redux';
import MainPage from '../components/MainPage/MainPage';
import * as actionCreators from '../actions/auth';

export default connect(null, actionCreators)(MainPage);