import { DataService } from '../services/data/DataService';
import { createAction } from 'redux-actions';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const authenticated = createAction('AUTHENTICATED');
export const unauthenticated = createAction('UNAUTHENTICATED');
export const authenticatedError = createAction('AUTHENTICATION_ERROR');
export const hideAuthenticatedError = createAction('HIDE_AUTHENTICATION_ERROR');

export const signInAction = ({ email, password }) => async dispatch => {

  try {
    dispatch(showLoading());

    const { token } = await DataService.signIn({ email, password });

    localStorage.setItem('user', token);

    dispatch(authenticated());
  } catch (error) {
    dispatch(authenticatedError({ error: 'Invalid email or password' }));
  } finally {
    dispatch(hideLoading());
  }
};
export const signOutAction = history => async dispatch => {
  localStorage.clear();

  dispatch(unauthenticated());
  history.push('/signin');
};