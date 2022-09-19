import React, { useState } from 'react';
import FormsContext from './FormsContext';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');
  const [data, setData] = useState([]);

  const contextValue = {
    name,
    setName,
    age,
    setAge,
    city,
    setCity,
    module,
    setModule,
    data,
    setData,
  };

  return (
    <FormsContext.Provider value={contextValue}>
      {children}
    </FormsContext.Provider>
  );
}

export default Provider;
