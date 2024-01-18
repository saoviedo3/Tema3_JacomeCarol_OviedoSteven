import React, { useState } from 'react';

const InputExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Escribe algo"
        style={{
          width: '100%',
          padding: '10px',
          boxSizing: 'border-box',
          marginBottom: '10px',
        }}
      />
      <p style={{ color: '#555' }}>Valor actualizado: {inputValue}</p>
    </div>
  );
};

export default InputExample;
