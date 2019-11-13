import React from 'react';
import DelayLink from 'react-delay-link';
//installed library for delaying native Link element
import { LinearProgress } from '@material-ui/core';
import { focusOn } from '../../util/ui_util';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailInput: false,
            addEmailEffect: false,
            addPasswordEffect: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleModal = this.handleModal.bind(this);
        this.clearModal = this.clearModal.bind(this);

        this.handleLoading = this.handleLoading.bind(this);
        this.clearLoading = this.clearLoading.bind(this);

        this.toggleEmailInput = this.toggleEmailInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);

        this.toggleEmail = this.toggleEmail.bind(this);
        this.togglePassword = this.togglePassword.bind(this);

        this.handleTransition = this.handleTransition.bind(this);
        this.clearTransition = this.clearTransition.bind(this);
    }   

    componentDidMount() {
        this.props.clearErrors()
        focusOn('input');
    }

    toggleEmail() {
        // toggles email full name state for render 
        this.setState({ addEmailEffect: !this.state.addEmailEffect });
    }

    togglePassword() {
        // toggles signin button state for render 
        this.setState({ addPasswordEffect: !this.state.addPasswordEffect });
    }

    toggleEmailInput() {
        this.setState({ emailInput: !this.state.emailInput });
    }

    handleLoading() {
        document.getElementById('signup-load').style.opacity = '100%';
    }

    handleModal() {
        //alters modal visibility on DelayLink action
        document.getElementsByClassName('content-modal')[0].style.opacity = '100%';
    }

    handleTransition() {
        this.handleModal();
        this.handleLoading();
    }

    clearModal() {
        document.getElementsByClassName('content-modal')[0].style.opacity = '0%';
    }

    clearLoading() {
        document.getElementById('signup-load').style.opacity = '0%';
    }

    clearTransition() {
        this.clearModal();
        this.clearLoading();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleEmailInput() {
        if (this.state.email.length > 0) {
            this.handleTransition();
            window.setTimeout(this.clearTransition, 280)
            window.setTimeout(this.toggleEmailInput, 300);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <div key={`error-${i}`} className='login-error'>
                        {error}
                    </div>
                ))}
            </div>
        );
    }

    render() {
        let emailClass = ['login-email'];
        if (this.state.addEmailEffect || this.state.email.length > 0) {
            emailClass.push('effect');
        }

        let passwordClass = ['login-password'];
        if (this.state.addPasswordEffect || this.state.password.length > 0) {
            passwordClass.push('effect');
        }

        if (!this.state.emailInput) {
            return (
            <div className='login-form-container'>
                <LinearProgress id='signup-load' />
                <div className='content-modal'></div>
                <div className='login-form'>
                    <div className='content'>
                        <p className={'label'} >Sign in</p>
                        <br/>
                        <p className={'sub-label'} >to continue to Tubie</p>
                        <br/>
                            <div className='email-field'>
                                <div className={emailClass.join(' ')}>Email</div>
                                <input type='text' 
                                value={this.state.email} 
                                onChange={this.handleInput('email')} 
                                onFocus={this.toggleEmail}
                                onBlur={this.toggleEmail}
                                />
                            </div>
                        <br/>
                        {this.renderErrors()}
                        <div className='clickable-items-container'>
                            <div className='login-link'>
                                <DelayLink className='a' 
                                clickAction={this.handleTransition} 
                                delay={300} 
                                to="/signup">
                                Create Account
                                </DelayLink >
                            </div>
                            <button onClick={this.handleEmailInput}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
            return (
                <div className='login-form-container'>
                    <LinearProgress id='signup-load' />
                    <div className='content-modal'></div>
                    <div className='login-form'>
                        <div className='content-2'>
                            <p className={'label'} >Welcome</p>
                            <br />
                                <div className='sub-label-parent'>
                                    <div className={'login-sub-label'}
                                    onClick={this.handleEmailInput}>
                                    <svg src='app/assets/images/noun-avatar-1995052.svg' 
                                    className={'login-avatar'} />
                                        <p className={'login-sub-label-text'}>
                                            {this.state.email}
                                        </p>
                                    </div>
                                </div>
                            <br />
                                <div className='password-field'>
                                    <div className={passwordClass.join(' ')}>Password</div>
                                    <input type='password'
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    onFocus={this.togglePassword}
                                    onBlur={this.togglePassword}
                                    />
                                </div>
                            <br />
                            {this.renderErrors()}
                            <div className='clickable-items-container-2'>
                                <button onClick={this.handleSubmit}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default LoginForm;