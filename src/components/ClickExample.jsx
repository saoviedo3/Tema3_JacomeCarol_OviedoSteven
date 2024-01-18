import React from 'react';

const ClickExample = () => {
  const handleClick = () => {
    alert('¡Has dado click en el botón!');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
    >
      Clickeame c:
    </button>
  );
};

export default ClickExample;
