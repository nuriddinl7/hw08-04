import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {

    const savedNames = localStorage.getItem('names');
    if (savedNames) {
      setNames(JSON.parse(savedNames));
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveClick = () => {

    setNames([...names, name]);
    
    setName('');
  };

  return (
    <div>
      <h1>Список имен</h1>
      <ul>
        {names.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleSaveClick}>Сохранить</button>
    </div>
  );
};

export default App;