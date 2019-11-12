import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    errors : state.errors.session,
    formName: 'Login!'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(loginUser(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));