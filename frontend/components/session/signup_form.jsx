import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            addUsernameEffect: false,
            addEmailEffect: false,
            addPasswordEffect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleUsername = this.toggleUsername.bind(this);
        this.toggleEmail = this.toggleEmail.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
    }

    toggleUsername() {
        //toggles full name input state for render
        this.setState({ addUsernameEffect: !this.state.addUsernameEffect });
    }

    toggleEmail() {
        // toggles email full name state for render 
        this.setState({ addEmailEffect: !this.state.addEmailEffect });
    }

    togglePassword() {
        // toggles signin button state for render 
        this.setState({ addPasswordEffect: !this.state.addPasswordEffect });
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({ username: '' })
        this.setState({ email: '' })
        this.setState({ password: '' })
    }

    render() {

        let usernameClass = ['full-name'];
        if (this.state.addUsernameEffect) {
            usernameClass.push('effect');
        }

        let emailClass = ['email'];
        if (this.state.addEmailEffect) {
            emailClass.push('effect');
        }

        let passwordClass = ['password'];
        if (this.state.addPasswordEffect) {
            passwordClass.push('effect');
        }

        return (
            <div className='signin-form-container'>
                <div className='signin-form'>
                    <div className='content'>
                        <p className='label'>Create your Tubie Account</p>
                        <br/>
                            <p className='sub-label'>to continue to Tubie</p>
                        <br/>
                            <div className='input-container'>
                                <div className='name-field'>
                                    <div  className={usernameClass.join(' ')}>Full Name</div>
                                    <input type='text' 
                                    value={this.state.username} 
                                    onChange={this.handleInput('username')} 
                                    onFocus={this.toggleUsername}
                                    onBlur={this.toggleUsername}
                                    />
                                </div>
                            <br />
                                <div className='email-field'>
                                    <div  className={emailClass.join(' ')}>Email</div>
                                    <input type='text' value={this.state.email} 
                                    onChange={this.handleInput('email')}
                                    onFocus={this.toggleEmail} 
                                    onBlur={this.toggleEmail}
                                    />
                                </div>
                            <br />
                                <div className='pasword-field'>
                                    <div  className={passwordClass.join(' ')}>Password</div>
                                    <input type='password' value={this.state.password} 
                                    onChange={this.handleInput('password')} 
                                    onFocus={this.togglePassword}
                                    onBlur={this.togglePassword}
                                    />
                                </div>
                            </div>
                        <br />
                        <div className='clickable-items-container'>
                            <div className='signin-link'>
                                <Link to="/signin">Sign in instead</Link>
                            </div>
                            <button onClick={this.handleSubmit}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupForm;