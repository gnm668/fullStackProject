import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.setState({ email: '' })
        this.setState({ password: '' })
    }

    render() {
        return (
            <div className='login-form-container'>
                <div className='login-form'>
                    <div className='content'>
                        <p className={'label'} >Sign in</p>
                        <br/>
                        <p className={'sub-label'} >to continue to Tubie</p>
                        <br/>
                            <input type='text' 
                            value={this.state.email} 
                            onChange={this.handleInput('email')} 
                            placeholder={'Email'}/>
                        <br />
                            <input type='password' 
                            value={this.state.password} 
                            onChange={this.handleInput('password')} 
                            placeholder={'Password'} />
                        <br />
                        <div className='clickable-items-container'>
                            <div className='login-link'>
                                <Link to="/signup">Create Account</Link>
                            </div>
                            <button onClick={this.handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;