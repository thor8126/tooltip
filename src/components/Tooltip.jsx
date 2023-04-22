import React from 'react';
import './Tooltip.css'

const Tooltip = ({ children, position, text }) => {
  const [show, setShow] = React.useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>
      {show && (
        <div
          className={`tooltip ${position}`}
          style={{ position: 'absolute', zIndex: '1' }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
