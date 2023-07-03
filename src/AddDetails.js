import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AddDetails = () => {
  const { user_id } = useParams();

  

  const [ data, setData ] = useState();
  const [fstate, setFstate] = useState({
    // email: data[user_id]?.email,
    // password: data[user_id]?.password,
    // userType: data[user_id]?.userType,
    english: "",
    maths: "",
    telugu: "",
    tamil: "",
    hindi: ""
  })

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('users')));
  }, [])


  const getText = (e) => {
    const { name, value } = e.target;
    setFstate(prev=> ({
      ...prev,
      [name]: value
    }))
  }

  const submitMarks = () => {
    console.log(fstate, 'state', data, 'localData', +user_id, 'user_id');
    const obj = {
      id: +user_id,
      email: data[user_id]?.email,
      password: data[user_id]?.password,
      userType: data[user_id]?.userType,
      ...fstate
    }
    const arr = data.filter(item=>item.id!==+user_id);
    console.log(arr, 'arra');
    localStorage.setItem('users', JSON.stringify([obj, ...arr]));
  }



  return (
    <form>
      <label htmlFor='english'>English</label>
      <input type='text' id='english' name='english' onChange={getText} />

      <label htmlFor='maths'>Maths</label>
      <input type='text' id='maths' name='maths' onChange={getText} />

      <label htmlFor='telugu'>telugu</label>
      <input type='text' id='telugu' name='telugu' onChange={getText} />

      <label htmlFor='tamil'>tamil</label>
      <input type='text' id='tamil' name='tamil' onChange={getText} />

      <label htmlFor='hindi'>hindi</label>
      <input type='text' id='hindi' name='hindi' onChange={getText} />

      <button type='button' id='submit' onClick={submitMarks}>Submit</button>
    </form>
  )
}

export default AddDetails