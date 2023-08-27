import { request } from '../utils/request';
import { getUser, saveUser } from './auth';

export const changeUser = async (user) => {
  const response = await request(`/api/users/${getUser().id}`, {
    method: 'PUT',
    body: user,
  });

  saveUser(response);
  return response;
};
