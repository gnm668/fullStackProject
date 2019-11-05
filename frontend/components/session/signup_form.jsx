import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
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
        return (
            <div className='signin-form-container'>
                <div className='signin-form'>
                    <div className='content'>
                        <p className='label'>Create your Tubie Account</p>
                        <br/>
                        <p className='sub-label'>to continue to Tubie</p>
                        <br/>
                        <input type='text' value={this.state.username} onChange={this.handleInput('username')} />
                        <br />
                        <input type='text' value={this.state.email} onChange={this.handleInput('email')} />
                        <br />
                        <input type='password' value={this.state.password} onChange={this.handleInput('password')} />
                        <br />
                        <button onClick={this.handleSubmit}>Sign up</button>
                        <Link to="/signin">Sign in instead</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupForm;