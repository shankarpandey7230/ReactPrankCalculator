import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import { btns } from './Buttons';

const operators = ['%', '/', '*', '-', '+'];

const App = () => {
  const [valueToDisplay, setValueToDisplay] = useState('');
  const [lastOperator, setLastOperator] = useState('');

  const actionToDo = (value) => {
    if (value === 'AC') {
      setValueToDisplay('');
      return;
    }
    if (value === 'C') {
      setValueToDisplay(valueToDisplay.slice(0, -1));
      return;
    }
    if (value === '=' || value === 'Enter') {
      setLastOperator('');
      const lastChar = valueToDisplay[valueToDisplay.length - 1];
      // checking if last char is one of the operators
      if (operators.includes(lastChar)) {
        setValueToDisplay(valueToDisplay.slice(0, -1));
      }
      return totalValue();
    }
    // showing only one last operator
    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = valueToDisplay[valueToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        setValueToDisplay(valueToDisplay.slice(0, -1) + value);
        return;
      }
    }
    if (value === '.') {
      const lastOperatorIndex = valueToDisplay.lastIndexOf(lastOperator);
      const lastNumberSet = valueToDisplay.slice(lastOperatorIndex);
      // console.log(lastNumberSet)
      if (lastNumberSet.includes('.')) {
        return;
      }
    }

    setValueToDisplay(valueToDisplay + value);
  };

  // display total value

  const totalValue = () => {
    const prankValue = randomValue();

    const total = eval(valueToDisplay) + prankValue;
    console.log(total);
    setValueToDisplay(total.toString());
    // display(valueToDisplay);
  };

  const randomValue = () => {
    const num = Math.round(Math.random() * 10);
    return num < 4 ? num : 0;
  };
  const handleButtonClick = (value) => {
    // console.log(value);
    actionToDo(value);
  };
  return (
    <div className="wrapper flex-center">
      <div className="calculator">
        <div className="display">{valueToDisplay || '0.0'}</div>
        {/* <div className="btn btn-ac">AC</div> */}
        {btns.map((btn, i) => {
          return (
            <Button key={i} {...btn} handleButtonClick={handleButtonClick} />
          );
          {
            /* return <Button key={i} cls={btn.cls} label={btn.label} />; */
          }
        })}
      </div>
    </div>
  );
};

export default App;
