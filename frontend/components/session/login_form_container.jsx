import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    formName: 'Login!'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);