// LineChartComponent.js
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Dot,
} from 'recharts';
import { useGraphContext } from './GraphContext';

import data from './data.js';

const LineChartComponent = () => {
  const { selectedData, setSelectedData } = useGraphContext();

  const handleClick = (data) => {
    setSelectedData(data.activePayload[0].payload);
  };

  const CustomDot = (props) => {
    const { cx, cy, payload } = props;
    if (selectedData && selectedData.name === payload.name) {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={8}
          stroke="#ff7300"
          strokeWidth={2}
          fill="#ff7300"
        />
      );
    }
    return <Dot {...props} />;
  };

  return (
    <LineChart width={600} height={300} data={data} onClick={handleClick}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#413ea0"
        activeDot={{ r: 8 }}
        dot={<CustomDot />}
      />
    </LineChart>
  );
};

export default LineChartComponent;
