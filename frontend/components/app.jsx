import React from 'react';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import MainContainer from './main/main_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import videoShowContainer from './video/video_show_container';

const App = () => (
    <div>
        <Switch>
            <Route exact={true} path='/' component={MainContainer} />
            <Route exact={true} path='/signin' component={LoginFormContainer} />
            <Route exact={true} path='/signup' component={SignupFormContainer} />
            <Route exact={true} path='/videos/:videoId' component={videoShowContainer} />
        </Switch>
    </div>
);

export default App;
