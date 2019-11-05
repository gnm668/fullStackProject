import React from 'react';
import { Route } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Main from './main/main';
import { Switch } from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <Route exact={true} path='/login' component={LoginFormContainer} />
            <Route exact={true} path='/signup' component={SignupFormContainer} />
            <Route exact={true} path='/' component={Main} />
        </Switch>
    </div>
);

export default App;
