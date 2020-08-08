import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './ducks/reducers';
import thunk from 'redux-thunk';


const envType = process.env.NODE_ENV;
let composeEnhancers;
const middleWares = [thunk];

if (envType !== 'production') {
  // const logger  = async () => await require('redux-logger')()
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}


const configureStore = (initialState = {}) => {
    const store = createStore(createReducer(),initialState,composeEnhancers(
        applyMiddleware(...middleWares),
      ))
    return store;
}

export default configureStore;