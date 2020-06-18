import React from "react";

const ErrorDisplayer = ({ msg }) => {
  return (
    <div>
      <h2>Error!</h2>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorDisplayer;
