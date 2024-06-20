import React, { useState } from 'react';
import FileUpload from './File-Upload';
import Table from './Table';
import Search from './Search';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFileUpload = (jsonData) => {
    setData(jsonData);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="App">
      <h1>Bikes Catalogue</h1>
      <p>Choose a data file to upload.</p>
      <FileUpload onFileUpload={handleFileUpload} />
      {data.length > 0 && (
        <>
          <Search onSearch={handleSearch} />
          <p>Click each header to sort by it.</p>
        </>
      )}
      <Table data={filteredData} />  
    </div>
  );
};

export default App;

