import React from 'react'


const Button = ({name, alert}) => {
  return (
    <button onClick={alert}>{name}</button>
  )
}

export default Button