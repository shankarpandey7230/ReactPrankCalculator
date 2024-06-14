import React from 'react';

const Button = ({ cls, label, handleButtonClick }) => {
  return (
    <div className={'btn ' + cls} onClick={() => handleButtonClick(label)}>
      {label}
    </div>
  );
};

export default Button;
