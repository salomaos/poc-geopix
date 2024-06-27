// Dashboard.js
import React from 'react';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';
import DataTable from './DataTable';
import SunburstChartComponent from './SunburstChartComponent';
import { useGraphContext } from './GraphContext';

const Dashboard = () => {
  const { setSelectedData } = useGraphContext();

  const handleClick = () => {
    setSelectedData([
      { name: 'A', value: 12 },
      { name: 'B', value: 23 },
      { name: 'C', value: 45 },
    ]);
  };

  return (
    <div>
      <div
        className="title"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h1>Dashboard</h1>
        <button onClick={handleClick}>resetar</button>
      </div>
      <div className="container">
        <DataTable />
        <BarChartComponent />
      </div>
      <div className="container">
        <SunburstChartComponent />
        <LineChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
