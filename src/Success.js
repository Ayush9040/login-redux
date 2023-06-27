import React from 'react';
import { useSelector } from 'react-redux';

const Success = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <div>
      <h2>Success Page</h2>
      <p>Welcome, {loggedInUser.email}!</p>
      <p>User Type: {loggedInUser.userType}</p>
    </div>
  );
};

export default Success;
