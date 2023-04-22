import React from 'react';
import Button from './components/Button'
import Tooltip from './components/Tooltip'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div style={{ padding: '50px' }}>
        <Tooltip position="top" text="This is a tooltip">
          <Button text="Hover me" />
        </Tooltip>&nbsp;&nbsp;
        <br /><br /><br />
        <Tooltip position="bottom" text="This is another tooltip">
          <Button text="Hover me again" />
        </Tooltip>&nbsp;&nbsp;
        <br /><br /><br />
        <Tooltip position="left" text="This is a tooltip on the left">
          <Button text="Hover me on the left" />
        </Tooltip>&nbsp;&nbsp;
        <br /><br /><br />
        <Tooltip position="right" text="This is a tooltip on the right">
          <Button text="Hover me on the right" />
        </Tooltip>
      </div>
    </div>
  );
};

export default App;





