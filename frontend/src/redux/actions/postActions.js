import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getPosts = () => async (dispatch) => {
  dispatch({ type: 'GET_POSTS_START' });
  try {
    const response = await axios.get(`${API_URL}/posts`);
    dispatch({
      type: 'GET_POSTS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_POSTS_FAILURE',
      payload: error.message,
    });
  }
};

export const createPost = (caption, image) => async (dispatch) => {
  dispatch({ type: 'CREATE_POST_START' });
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${API_URL}/posts`,
      { caption, image },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: 'CREATE_POST_SUCCESS',
      payload: response.data.post,
    });
  } catch (error) {
    dispatch({
      type: 'CREATE_POST_FAILURE',
      payload: error.message,
    });
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_URL}/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: 'DELETE_POST',
      payload: postId,
    });
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};
