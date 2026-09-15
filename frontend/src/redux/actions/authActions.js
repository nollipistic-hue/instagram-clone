import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const register = (username, email, password) => async (dispatch) => {
  dispatch({ type: 'REGISTER_START' });
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      email,
      password,
    });
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAILURE',
      payload: error.response?.data?.message || 'Registration failed',
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.response?.data?.message || 'Login failed',
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
