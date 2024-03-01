import React from 'react';

const InputFieldNumber = ({ label, id, value, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default InputFieldNumber;
