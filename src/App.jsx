import './App.css'
import RickAndMortyPage from "./pages/rick-and-morty/rick-and-morty";
import CocktailsPage from "./pages/cocktails/cocktails";

function App() {
  const page = window.location.search
  return page === '?rick-and-morty' ? <RickAndMortyPage /> : <CocktailsPage />
}

export default App
