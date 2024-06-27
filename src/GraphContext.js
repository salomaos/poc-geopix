// GraphContext.js
import React, { createContext, useContext, useState } from 'react';

import data from './data.js';

const GraphContext = createContext();

export const useGraphContext = () => useContext(GraphContext);

export const GraphProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState(data);

  return (
    <GraphContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </GraphContext.Provider>
  );
};
