import React from 'react'

const InputFieldText = ({label, id, type = "text", value, onChange,name}) => {
  return (
    <div className="form-row">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>    
  )
}

export default InputFieldText

