import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { user_id } = useParams();
  const [ localData, setLocalData ] = useState();
  const [state, setState] = useState({
    email: "",
    password: "",
    userType: ""
  })

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('users')));
  }, [])

  const submitHandler = () => {
    console.log(state, 'state', localData, 'localData', +user_id, 'user_id');
    const obj = {
      id: +user_id,
      ...state
    }
    const arr = localData.filter(item=>item.id!==+user_id);
    console.log(arr, 'arra');
    localStorage.setItem('users', JSON.stringify([obj, ...arr]));
  }

  const onChangeHandler = (e) => {
    const {name, value} = e.target
    setState(prev=> ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form>
      <label htmlFor="email">
        Email :
      </label>
      <input type='text' id='email' name='email' onChange={onChangeHandler} />
      <label htmlFor="password">
        Password :
      </label>
      <input type='password' id='password' name='password' onChange={onChangeHandler} />
      <label htmlFor="userType">
        userType :
      </label>
      <select onChange={onChangeHandler} name='userType'>
        <option>Admin</option>
        <option>user</option>
      </select>
      <button type='button' id='submit' onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default EditUser