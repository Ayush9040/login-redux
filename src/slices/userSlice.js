import { createSlice } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import Admin from '../Admin';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      // const userAdmin = users.find(
      //   (user) => user.userType === "admin"
      // );

      if (user?.userType === 'admin') {
        window.location.href = 'http://localhost:3000/admin';
        console.log(user);
      } else if(user?.userType === 'user'){
        window.location.href = 'http://localhost:3000/user';
      }else{
        alert('login failed');
      }
    },
  },
});

export const { registerUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
