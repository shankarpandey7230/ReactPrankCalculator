import React from 'react';

const Button = ({
  cls,
  label,
  handleButtonClick,
  handleOnMouseDown,

  isMouseDown,
}) => {
  return (
    <div
      style={
        isMouseDown === label
          ? {
              transform: isMouseDown ? 'scale(0.9)' : 'scale(1)',
              transition: 'transform 0.2s',
            }
          : null
      }
      className={'btn ' + cls}
      onClick={() => handleButtonClick(label)}
      onMouseDown={() => handleOnMouseDown(label)}
    >
      {label}
    </div>
  );
};

export default Button;
