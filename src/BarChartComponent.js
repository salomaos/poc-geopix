// BarChartComponent.js
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';
import { useGraphContext } from './GraphContext';

import data from './data.js';

const BarChartComponent = () => {
  const { selectedData, setSelectedData } = useGraphContext();

  const handleClick = (data) => {
    setSelectedData(data.activePayload[0].payload);
  };

  return (
    <BarChart width={600} height={300} data={data} onClick={handleClick}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="value" barSize={30}>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={
              selectedData && selectedData.name === entry.name
                ? '#ff7300'
                : '#413ea0'
            }
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default BarChartComponent;
