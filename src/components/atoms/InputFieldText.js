import React from 'react'

const InputFieldText = ({label, id, type, value, onChange,multiple}) => {
  return (
    <div className="form-row">
    <label htmlFor={id}>{label}</label>
    {type === 'file' ? (
        <input id={id} type={type} onChange={onChange} multiple={multiple} />
      ) : (
        <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
  </div>    
  )
}

export default InputFieldText

