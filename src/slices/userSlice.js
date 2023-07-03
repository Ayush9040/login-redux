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
      const users = JSON.parse(localStorage.getItem('users'));
      const obj={
        id: users && users.length ? users.length+1:1,
        ...action.payload
      }
      if(users) state.users = [...users, obj];
      else state.users.push(obj);
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
        localStorage.setItem('loggedInUserType', 'admin')
        console.log(user);
      } else if(user?.userType === 'user'){
        window.location.href = 'http://localhost:3000/user';
        localStorage.setItem('loggedInUserType', 'student')
        
      }else{
        alert('login failed');
      }
    },
  },
});

export const { registerUser, loginUser } = userSlice.actions;
export default userSlice.reducer;

