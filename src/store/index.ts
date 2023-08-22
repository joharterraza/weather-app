import { combineReducers, createStore } from 'redux';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,  
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>; // Define RootState type

export default store;