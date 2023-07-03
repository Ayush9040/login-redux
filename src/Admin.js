import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Admin = () => {
  const getData = () => {
    const localData = JSON.parse(localStorage.getItem('users'));
    return localData;
  }

  const [ data, setData ] = useState(getData());

  return (
    <div>
      <h1>All Students</h1>
      <table>
        <thead>
        <tr>
          <th>Email</th>
          <th>User Type</th>
          <th>Edit</th>
          <th>Add Details</th>
        </tr>
        </thead>
        <tbody>
          {data.filter((item) => item.userType === 'user').map((item) => {
            return (
                <tr key={item.id}>
                  <td>{item.email}</td>
                  <td>{item.userType}</td>
                  <Link to={`/user/edit-user/${item.id}`}>Edit</Link>
                  <Link to={`/user/add-details/${item.id}`}>Add Details</Link>
                </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Admin