import React,{useState} from "react";
import  "./SearchBar.css"


const SearchBar = ({onSearch}) => {
    const [city,setCity] = useState("")

    const handleSearch= ()=>{
      onSearch(city)
    }
  return (
    <div className="weather-cards">
      <input type="text" placeholder="Enter city Name" value={city} onChange={(e) => setCity(e.target.value)} className="input-tag"/>
      <button onClick={handleSearch} className="button-tag">Search</button>
    </div>
  )
}

export default SearchBar