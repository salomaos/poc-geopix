// App.js
import React from 'react';
import Dashboard from './Dashboard';
import { GraphProvider } from './GraphContext';

const App = () => {
  return (
    <GraphProvider>
      <div className="App">
        <Dashboard />
      </div>
    </GraphProvider>
  );
};

export default App;
