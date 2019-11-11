import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    formName: 'Sign Up!'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(createUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));