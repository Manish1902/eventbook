import React, { useState } from 'react';
import { DataContext } from './DataContext';

function DataStore({ children }) {
  const [user, setUser] = useState();

  return (
    <DataContext.Provider value={[user, setUser]}>
      {children}
    </DataContext.Provider>
  );
}

export default DataStore;
