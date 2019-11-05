import React from 'react';
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Main from './main/main';

const App = () => (
    <div>
        <switch>
            <Route exact={true} path="/" component={Main} />
            <Route exact={true} path="/login" component={LoginFormContainer} />
            <Route exact={true} path="/signup" component={SignupFormContainer} />
        </switch>        
    </div>
);

export default App;
