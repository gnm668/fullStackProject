import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    formName: 'Login!'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(loginUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));