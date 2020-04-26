import { combineReducers } from 'redux';

// Import Reducers
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer,
});
