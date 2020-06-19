import React from 'react';

const ErrorDisplayer = ({ msg }) => {
  return (
    <div>
      <h2>Error!</h2>
      <p>{msg.message}</p>
    </div>
  );
};

export default ErrorDisplayer;
