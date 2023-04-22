import React from 'react';

const Button = ({ text }) => {
  return (
    <button style={{ padding: '10px', backgroundColor: 'lightblue', border: 'none' }}>
      {text}
    </button>
  );
};

export default Button;
