import React from 'react'

export default function Button({button,className}) {
  return (
    <button className={`${className} py-2 px-3 rounded-lg  `}> {button} </button>
  )
}
