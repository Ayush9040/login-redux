import React from 'react';
import Register from './Register';
import Login from './Login';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { Provider } from 'react-redux';
import Error from './Error';
import Admin from './Admin';
import User from './User';



const App = () => {
  return (
    <RouterProvider router={appRouter} />
    // // <Provider store={store}>
    //   <div className='container'>
    //   <h1>Registration & Login</h1>
    //   <Register />
    //   <Login />
    //   </div>
    // </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
    errorElement: <Error />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/user',
    element: <User />
  }
]);

export default App;
