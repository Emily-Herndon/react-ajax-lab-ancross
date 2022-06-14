import './App.css'
import DisplayCards from './DisplayCards'
import { useEffect, useState } from 'react'

export default function App() {
  let [data, setData] = useState({villagers: []})
  const [search, setSearch] = useState('')
  const [faves, setFaves] = useState([])

  useEffect(() => {
    fetch('http://acnhapi.com/v1/villagers/')
      .then(response => response.json())
      .then((rdata) => {
        rdata = Object.values(rdata)
        setData({villagers: rdata})
        // console.log(rdata)
      })
  }, [])

  const getFilteredVillagers = () => {
    const filterValue = search.toLowerCase()
    return data.villagers.filter(villager => {
      const villagerName= villager.name['name-USen'].toLowerCase()
      return villagerName.includes(filterValue)
    })
  }

  const handleChange = e => {
    const searchTerm = e.target.value
    setSearch(searchTerm)
  }

  const handleClick = (villager) => {
    if(!faves.includes(villager)){
      setFaves([...faves, villager])
    }
  }
  
  return (
    <div className="App">
      <div>
        <label htmlFor="villager-search">Search for a villager:</label>
        <input 
          id="villager-search" 
          type="text" 
          value={search} 
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>Favorite Villagers:</h1>
        <DisplayCards villagers={faves} handleClick={handleClick}/>
      </div>
      <h2>Animal Crossing Villagers </h2>
      <DisplayCards villagers={getFilteredVillagers()} handleClick={handleClick} />
      
    </div>
  );
}