import React, { useState } from 'react';
import './Table.css'; 

const Table = ({ data }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          {data.length > 0 && Object.keys(data[0]).map((key) => (
            <th key={key} onClick={() => sortData(key)}>
              {key}
              {sortConfig && sortConfig.key === key && (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.BikeID}>
            {Object.values(item).map((val, idx) => (
              <td key={idx}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

