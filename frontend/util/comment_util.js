
export const fetchComments = () => {
    return $.ajax({
        url: `api/comments`
    });
};

export const createComment = comment => {
    return $.ajax({
        url: `api/comments`,
        method: `POST`,
        data: { comment }
    });
};

