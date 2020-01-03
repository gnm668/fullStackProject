import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Main from './main/main';
import Modal from './modal/modal';
import Lost from './lost';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import videoShowContainer from './video/video_show_container';
import videoFormContainer from './forms/video_form_container';
import Search from './main/search';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact={true} path='/' component={Main} />
            <AuthRoute exact={true} path='/signin' component={LoginFormContainer} />
            <AuthRoute exact={true} path='/signup' component={SignupFormContainer} />
            <ProtectedRoute exact={true} path='/videos/new' component={videoFormContainer} />
            <Route exact={true} path='/videos/:videoId' component={videoShowContainer} />
            <Route exact={true} path='/search' component={Search} />
            <Route path='/' component={Lost} />
        </Switch>
    </div>
);

export default App;
