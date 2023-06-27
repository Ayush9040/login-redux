import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from './slices/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleRegister = () => {
    dispatch(registerUser({ email, password, userType }));
    setEmail('');
    setPassword('');
    setUserType('');
  };

  return (
    <div className='container'>
      <h2>Register</h2>
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
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="">Select User Type</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
