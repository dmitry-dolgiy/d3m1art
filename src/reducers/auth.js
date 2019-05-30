import { handleActions } from 'redux-actions';
import { authenticated, unauthenticated, authenticatedError, hideAuthenticatedError } from '../actions/auth';

export const auth = handleActions({
  [authenticated]: state => ({ ...state, authenticated: true }),
  [unauthenticated]: state => ({ ...state, authenticated: false }),
  [authenticatedError]: (state, { payload: { error } }) => ({ ...state, error }),
  [hideAuthenticatedError]: (state) => ({ ...state, error: null }),
}, {});