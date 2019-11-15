
export const fetchDislikes = () => {
    return $.ajax({
        url: `api/dislikes`
    });
};

export const fetchDislike = dislikeId => {
    return $.ajax({
        url: `api/dislikes/${dislikeId}`
    });
};

export const createDislike = dislike => {
    return $.ajax({
        url: `api/dislikes`,
        method: `POST`,
        data: { dislike }
    });
};

export const deleteDislike = dislikeId => {
    return $.ajax({
        url: `api/dislikes/${dislikeId}`,
        method: `DELETE`
    });
};