import React,{useState} from "react";
import './App.css';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
function App() {
  const [city,setCity] = useState("");
  const handleSearch = (searchCity)=>{
    setCity(searchCity)
  }
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch}/>
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;