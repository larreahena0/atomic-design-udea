import React, {useEffect, useState} from 'react'
import HomeTemplate from "../../templates/home.template.jsx";

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState([])

  const getCharacters = async () => {
    const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b')
    const response = await request.json()
    const cocktails = response.drinks.map(cocktails => {
      return {
        name: cocktails.strDrink,
        image: cocktails.strDrinkThumb
      }
    })
    setCocktails(cocktails)
  }

  useEffect(() => {
    getCharacters().catch(console.error)
  }, [])

  return (<HomeTemplate title="Cocktails" items={cocktails} />)
}

export default CocktailsPage