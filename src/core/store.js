import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './root.reducers';

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));
const preloadState = {};

export const store = createStore(rootReducers, preloadState, composedEnhancers);
