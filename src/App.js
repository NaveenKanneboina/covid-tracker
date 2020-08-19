import React,{useState, useEffect} from 'react';
import './App.css';
import {FormControl , Select, MenuItem} from '@material-ui/core';
function App() {
  const [countries, setcountries] = useState(["hello","world","hey"]);

useEffect(() => {
  
}, [])


  return (
    <div className="app">
      <div className="header">
        <h1>Covid Tracker</h1>
        <h1>https://disease.sh/v3/covid-19/countries</h1>
        <FormControl>
          <Select variant="outlined" value="WorldWide">
            <MenuItem value="wolrdWide">WorldWide</MenuItem>
            {
              countries.map((country)=>(
                <MenuItem value={country}>{country}</MenuItem>
                ))
            }
            
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
