import React from 'react';
import { GridContextProvider } from './components/contexts/gridContext';
import { DefaultHeader } from './components/headers/DefaultHeader';

function App() {
  return (
    <GridContextProvider>
      <div className="App">
        <DefaultHeader/>
      </div>
    </GridContextProvider>
  );
}

export default App;
