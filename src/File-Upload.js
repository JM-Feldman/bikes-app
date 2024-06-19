import React from 'react';
import './File-Upload.css';  

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const json = JSON.parse(event.target.result);
        onFileUpload(json);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="file-upload">
      <label className="file-upload-label">
        Choose File
        <input type="file" accept=".json" onChange={handleFileChange} className="file-input" />
      </label>
    </div>
  );
};

export default FileUpload;
