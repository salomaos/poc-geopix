// DataTable.js
import React from 'react';
import { useGraphContext } from './GraphContext';

import dbData from './data.js';

const data = dbData;

const DataTable = () => {
  const { selectedData, setSelectedData } = useGraphContext();

  const handleRowClick = (item) => {
    setSelectedData(item);
  };

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.name}
              onClick={() => handleRowClick(item)}
              style={{
                backgroundColor:
                  selectedData && selectedData.name === item.name
                    ? '#ff7300'
                    : 'transparent',
              }}
            >
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
