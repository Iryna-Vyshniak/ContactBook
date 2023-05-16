import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set(token) {
    authInstance.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    authInstance.defaults.headers.Authorization = '';
  },
};

export const userSignUp = async body => {
  const { data: result } = await authInstance.post('/users/signup', body);
  token.set(result.token);
  return result;
};

export const userLogin = async body => {
  const { data: result } = await authInstance.post('/users/login', body);
  token.set(result.token);
  return result;
};

export const userLogout = async () => {
  const response = await authInstance.post('/users/logout');
  token.unset();
  return response;
};

export const userCurrent = async token => {
  const response = await authInstance.post('/users/logout');
  token.set(token);
  return response;
};
