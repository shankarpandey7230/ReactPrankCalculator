import React from 'react';
import './App.css';
import Button from './Button';
import { btns } from './Buttons';
const App = () => {
  return (
    <div className="wrapper flex-center">
      <div className="calculator">
        <div className="display">0.0</div>
        {/* <div className="btn btn-ac">AC</div> */}
        {btns.map((btn, i) => {
          return <Button key={i} {...btn} />;
          {
            /* return <Button key={i} cls={btn.cls} label={btn.label} />; */
          }
        })}
      </div>
    </div>
  );
};

export default App;
