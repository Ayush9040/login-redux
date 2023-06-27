import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import App, { appRouter } from './App';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
