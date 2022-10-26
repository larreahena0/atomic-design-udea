import React from 'react'
import './status.css'

const Status = ({ currentStatus }) => {
  return (
    <div className="status">
      <span className="status-circle"/>
      <span className="status-name">{currentStatus}</span>
    </div>
  )
}

export default Status