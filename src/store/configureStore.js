import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dreamsReducer from './reducers/dreams';

const rootReducer = combineReducers({
  dreams: dreamsReducer
});

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
    );
};

export default configureStore;