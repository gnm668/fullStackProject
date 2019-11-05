import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
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
        this.setState({ username: "" })
        this.setState({ email: "" })
        this.setState({ password: "" })
    }

    render() {
        return (
            <div>
                <h1>{this.props.formName}</h1>
                <label>Username:
                    <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
                </label>
                <br />
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                </label>
                <br />
                <button onClick={this.handleSubmit}>{this.props.formName}</button>
            </div>
        );
    }
}

export default SignupForm;