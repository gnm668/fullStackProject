
export const fetchComments = () => {
    return $.ajax({
        url: `api/comments`
    });
};

export const createComment = () => {
    return $.ajax({})
};