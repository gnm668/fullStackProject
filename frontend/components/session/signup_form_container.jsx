import { connect } from 'react-redux';
import { createUser, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { withRouter } from 'react-router-dom';
import { openModal} from '../../actions/modal_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formName: 'Sign Up!'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(createUser(user)),
    clearErrors: () => dispatch(clearErrors()),
    signin: () => dispatch(openModal('signin'))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));