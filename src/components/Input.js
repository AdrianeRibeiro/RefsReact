import React, { InputHTMLAttributes } from 'react'

const Input = React.forwardRef(({name, label, ...rest}, ref) => (
  <div className="input-block"> 
    <label htmlFor={name}>{label}</label>

    <input
      ref={ref}
      type="text" 
      {...rest}
    />
  </div>
))

export default Input;