import React from 'react';

const Button = ({ cls, label }) => {
  return <div className={'btn ' + cls}>{label}</div>;
};

export default Button;
