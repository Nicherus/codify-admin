import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

const provider = async (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://localhost:3005/admin/signin', {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        const response = await fetch(request);
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        const { token } = await response.json();
        localStorage.setItem('token', token);
    }
    
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }

    if (type === AUTH_ERROR) {
        const status  = params.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }

    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.resolve();
}

export default provider;