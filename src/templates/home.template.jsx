import React from 'react'
import Grid from "../components/organisms/grid/grid.jsx";
import Title from "../components/atoms/title/title.jsx";
import './home.template.css'

const HomeTemplate = ({ title, items }) => {
  return (
    <>
      <header>
        <Title title={title} />
      </header>
      <main>
          <Grid items={items} />
      </main>
    </>
  )
}

export default HomeTemplate