export const signUp = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    }).fail(error => console.log(error));
};

export const logout = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    });
};

export const login = (user) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user }
    });
};