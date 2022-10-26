import React from 'react'
import Card from "../../molecules/card/card.jsx";
import './grid.css'

const Grid = ({ items }) => {
  return (
    <section className="grid">
      {items.map(item => (
        <Card currentStatus={item.status} imgAlt={item.name} imgSrc={item.image} name={item.name} />
      ))}
    </section>
  )
}

export default Grid