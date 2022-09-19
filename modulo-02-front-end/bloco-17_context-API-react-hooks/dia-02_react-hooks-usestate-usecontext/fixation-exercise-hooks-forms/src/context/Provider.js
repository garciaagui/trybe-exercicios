import React, { useState } from 'react';
import FormsContext from './FormsContext';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  const contextValue = {
    name,
    setName,
    age,
    setAge,
    city,
    setCity,
    module,
    setModule,
  };

  return (
    <FormsContext.Provider value={contextValue}>
      {children}
    </FormsContext.Provider>
  );
}

export default Provider;
