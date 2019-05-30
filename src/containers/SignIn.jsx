import { connect } from 'react-redux';
import SignIn from '../components/SignIn/SignIn';
import * as actionCreators from '../actions/auth';

const mapStateToProps = ({ auth: { error } }) => ({ errorMessage: error });

export default connect(mapStateToProps, actionCreators)(SignIn);