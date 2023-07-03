import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

  const  [data, setData] = useState();

  const { user_name } = useParams();

  console.log(user_name);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('users')));
  }, []);

  console.log(data);


  return (
    <div>
        <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>English</th>
          <th>Maths</th>
          <th>Tamil</th>
          <th>Telugu</th>
          <th>Hindi</th>
        </tr>
        </thead>
        <tbody>
          {data.filter((item) => item.email === user_name).map((item) => {
            return (
                <tr key={item.id}>
                  <td>{item.email}</td>
                  <td>{item.english}</td>
                </tr>
            )
          })} 
        </tbody>
      </table>
    </div>
  )
}

export default User