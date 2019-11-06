import React from 'react';
import { Link } from 'react-router-dom';
import DelayLink from '../delayLink';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);
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

    handleModal() {
        document.getElementById('content-modal').style.visibility = 'visible';
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
                                <DelayLink onClick={this.handleModal} to="/signup">Create Account</DelayLink>
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