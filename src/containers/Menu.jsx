import { connect } from 'react-redux';
import Menu from '../components/Menu/Menu';
import * as actionCreators from '../actions/auth';

const mapStateToProps = ({ auth: { authenticated } }) => ({ authenticated });

export default connect(mapStateToProps, actionCreators)(Menu);