import { combineReducers, createStore } from 'redux';
import themeReducer from './reducers/themeReducer';

//Reducers creations

const rootReducer = combineReducers({
  theme: themeReducer,  
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>; // Define RootState type

export default store;