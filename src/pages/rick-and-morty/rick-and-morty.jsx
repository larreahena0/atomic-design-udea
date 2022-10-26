import {useEffect, useState} from "react";
import HomeTemplate from "../../templates/home.template.jsx";

const RickAndMortyPage = () => {
  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    const request = await fetch('https://rickandmortyapi.com/api/character')
    const response = await request.json()
    const characters = response.results.map(character => {
      return {
        name: character.name,
        status: character.status,
        image: character.image
      }
    })
    setCharacters(characters)
  }

  useEffect(() => {
    getCharacters().catch(console.error)
  }, [])

  return (<HomeTemplate title="Rick and Morty" items={characters}/>)
}

export default RickAndMortyPage