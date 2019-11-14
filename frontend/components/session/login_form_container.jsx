import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom';
import { openModal} from '../../actions/modal_actions'; 


const mapStateToProps = state => ({
    errors : state.errors.session,
    formName: 'Login!'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(loginUser(user)),
    clearErrors: () => dispatch(clearErrors()),
    signup: () => dispatch(openModal('signup'))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));