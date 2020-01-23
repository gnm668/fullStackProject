
export const fetchVideos = () => {
    return $.ajax({
        url: `api/videos`
    });
};

export const searchVideos = search => {
    return $.ajax({
        url: `api/videos`,
        data: search
    });
};

export const fetchVideo = videoId => {
    return $.ajax({
        url: `api/videos/${videoId}`
    });
};

export const createVideo = video => {
    return $.ajax({
        url: `api/videos`,
        method: `POST`,
        data: video ,
        contentType: false,
        processData: false
    });
};

export const updateVideo = video => {
    return $.ajax({
        url: `api/videos/${video.id}`,
        method: `PATCH`
    })
}

export const deleteVideo = videoId => {
    return $.ajax({
        url: `api/videos/${videoId}`,
        method: `DELETE`
    })
}