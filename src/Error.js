import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div>OOPS!!</div>
      <h2>{err.status + " : " + err.statusText}</h2>
    </>
  )
}

export default Error