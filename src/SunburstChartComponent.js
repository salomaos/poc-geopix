// SunburstChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useGraphContext } from './GraphContext';

import data from './data.js';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SunburstChartComponent = () => {
  const { selectedData, setSelectedData } = useGraphContext();

  const handleClick = (data) => {
    setSelectedData(data);
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onClick={(data) => handleClick(data)}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={
              selectedData && selectedData.name === entry.name
                ? '#ff7300'
                : COLORS[index % COLORS.length]
            }
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default SunburstChartComponent;
