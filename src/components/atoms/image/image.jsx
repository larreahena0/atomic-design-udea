import React from 'react'
import './image.css'

const Image = ({src, alt}) => {
  return <img
    className="image"
    width="250px"
    height="250px"
    alt={alt}
    src={src}
  />
}

export default Image