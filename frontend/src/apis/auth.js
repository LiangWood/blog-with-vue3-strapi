import { request } from '../utils/request';

export const getJwtToken = () => {
  return localStorage.getItem('jwtToken');
};

export const setJwtToken = (jwt) => {
  localStorage.setItem('jwtToken', jwt);
};

export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const register = async (email, username, password) => {
  const result = await request('/api/auth/local/register', {
    method: 'POST',
    auth: false,
    body: {
      email,
      username,
      password,
      name: username,
    },
  });

  setJwtToken(result.jwt);
  saveUser(result.user);

  return result.user;
};

export const login = async (email, password) => {
  const result = await request('/api/auth/local', {
    method: 'POST',
    auth: false,
    body: {
      identifier: email,
      password,
    },
  });

  setJwtToken(result.jwt);
  saveUser(result.user);

  return result.user;
};
