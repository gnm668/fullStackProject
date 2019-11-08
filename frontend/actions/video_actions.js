import * as APIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

const receieve_all_videos = videos => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    };
};

const receive_video = video => {
    return {
        type: RECEIVE_VIDEO,
        video
    };
};

const remove_video = videoId => {
    type: REMOVE_VIDEO
    videoId
};

