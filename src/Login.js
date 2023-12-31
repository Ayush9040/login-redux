import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './slices/userSlice';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  console.log(email)

  return (
    <div className='container'>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     <button onClick={handleLogin}> <Link to={`/user/${email}`}>Login</Link></button>
    </div>
  );
};

export default Login;
