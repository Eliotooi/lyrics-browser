import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './RootReducer';
import createDebugger from 'redux-flipper';

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});
