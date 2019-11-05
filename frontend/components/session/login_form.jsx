import React from 'react';

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
                        <h1>{this.props.formName}</h1>
                        <label>Email:
                            <input type='text' value={this.state.email} onChange={this.handleInput('email')} />
                        </label>
                        <br />
                        <label>Password:
                            <input type='password' value={this.state.password} onChange={this.handleInput('password')} />
                        </label>
                        <br />
                        <button onClick={this.handleSubmit}>{this.props.formName}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;