import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//test
import { logoutUser, createUser } from './actions/session_actions'
import { 
    fetchVideo,
    fetchVideos,
    createVideo,
    updateVideo,
    deleteVideo, 
} from './actions/video_actions';
//test
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
//test
    window.fetchVideo = fetchVideo;
    window.fetchVideos = fetchVideos;
    window.createVideo = createVideo;
    window.updateVideo = updateVideo;
    window.deleteVideo = deleteVideo;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.store = store;
    window.logoutUser = logoutUser;
    window.createUser = createUser;
    window.store.getState = store.getState;
//test

    ReactDOM.render(<Root store={store} />, root);
});