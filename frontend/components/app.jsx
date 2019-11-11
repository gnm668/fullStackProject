import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from './main/main';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import videoShowContainer from './video/video_show_container';
import videoFormContainer from './forms/video_form_container';

const App = () => (
    <div>
        <Switch>
            <Route exact={true} path='/' component={Main} />
            <Route exact={true} path='/signin' component={LoginFormContainer} />
            <Route exact={true} path='/signup' component={SignupFormContainer} />
            <Route exact={true} path='/videos/new' component={videoFormContainer} />
            <Route exact={true} path='/videos/:videoId' component={videoShowContainer} />
        </Switch>
    </div>
);

export default App;
