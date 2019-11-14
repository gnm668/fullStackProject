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
        this.handleSignup = this.handleSignup.bind(this);
        this.guestLogin = this.guestLogin.bind(this);

        this.handleLoading = this.handleLoading.bind(this);
        this.clearLoading = this.clearLoading.bind(this);

        this.toggleEmailInput = this.toggleEmailInput.bind(this);
        this.handleEmailInput = this.handleEmailInput.bind(this);

        this.toggleEmail = this.toggleEmail.bind(this);
        this.togglePassword = this.togglePassword.bind(this);

        this.handleTransition = this.handleTransition.bind(this);
    }   

    componentDidMount() {
        this.props.clearErrors()
        focusOn('input');
        document.querySelector('.modal-child').classList.add('sign');
    }

    componentDidUpdate() {
        document.getElementsByClassName('content')[0].classList.remove('slide');
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

    handleTransition() {
        this.handleLoading();
        document.getElementsByClassName('content')[0].classList.add('slide');
    }

    
    clearLoading() {
        document.getElementById('signup-load').style.opacity = '0%';
    }
    
    handleSignup() {
        this.handleLoading();
        document.getElementsByClassName('content')[0].classList.add('slide');
        this.props.signup();
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleEmailInput() {
        if (this.state.email.length > 0) {
            this.handleTransition();
            window.setTimeout(this.clearLoading, 300);
            window.setTimeout(this.toggleEmailInput, 300);
        }
    }

    guestLogin() {
        const user = { email: 'test1', password: '123456' }
        this.props.processForm(user);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <div className='login-errors'>
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
                <div className='login-form'>
                    <div className='content'>
                        <p className={'label'} >Sign in</p>
                        <br/>
                        <p className={'sub-label'} >to continue to Tubie</p>
                        <br/>
                            <div className='input-container'>
                                {this.renderErrors()}
                                <div className='email-field'>
                                    <div className={emailClass.join(' ')}>Email</div>
                                    <input type='text' 
                                    value={this.state.email} 
                                    onChange={this.handleInput('email')} 
                                    onFocus={this.toggleEmail}
                                    onBlur={this.toggleEmail}
                                    />
                                </div>
                            </div>
                        <br/>
                        <div className='clickable-items-container'>
                            <div className='login-link'>
                                <div className='a'
                                onClick={this.handleSignup}
                                >
                                Create Account
                                </div>
                                <button id='guest-login'
                                onClick={this.guestLogin}
                                >Guest Login</button>
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
                    <div className='login-form'>
                        <div className='content'>
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
                                <div className='input-container'>
                                    {this.renderErrors()}
                                    <div className='password-field'>
                                        <div className={passwordClass.join(' ')}>Password</div>
                                        <input type='password'
                                        value={this.state.password}
                                        onChange={this.handleInput('password')}
                                        onFocus={this.togglePassword}
                                        onBlur={this.togglePassword}
                                        />
                                    </div>
                                </div>
                            <br />
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