import React,{useState, useEffect} from 'react';
import './App.css';
import {FormControl , Select, MenuItem, CardContent, Card} from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from "./Map";
import Table from "./Table";

function App() {

  const [countries, setcountries] = useState([]);
  const [country, setcountry] = useState('worldwide');
  const [countryInfo, setcountryInfo] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(response => response.json())
      .then(data => setcountries(data))
    }
    getCountries();
  }, [])

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response=>response.json())
    .then(data=>
      setcountryInfo(data))
  }, [])

  const onchange = async (event) => {
    const country = event.target.value;
    setcountry(country)
    const url = 
    country === "worldwide" ? "https://disease.sh/v3/covid-19/all" : 
    `https://disease.sh/v3/covid-19/countries/${country}`;
    await fetch(url)
    .then(response=>response.json())
    .then(data=>
      setcountryInfo(data))
  }
  const sorted = [...countries] 
  const sortdata = sorted.sort((a,b) => a.cases > b.cases ? -1 : 1)

  return (
    <div className="app">
      <div className="left">
        <div className="header">
          <h1>Covid-19 Tracker</h1>
          <FormControl>
            <Select variant="outlined" value={country} onChange={onchange}>
              <MenuItem value="worldwide">WorldWide</MenuItem>
              {
                countries.map((country)=>(
                  <MenuItem value={country.countryInfo.iso2}>{country.country}</MenuItem>
                  ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="infoBox">
          <InfoBox total={countryInfo.cases} cases={countryInfo.todayCases} title="CoronaVirus Cases"/>
          <InfoBox total={countryInfo.recovered} cases={countryInfo.todayRecovered} title="Recovered"/>
          <InfoBox total={countryInfo.deaths} cases={countryInfo.todayDeaths} title="Deaths"/>
        </div>
        <Map/>
      </div>
      <div className="right">
        <Card>
          <CardContent>
            <h3>Live Cases by Countries</h3>
            <Table countries={sortdata}/> 
            <h3>Worldwide new Cases </h3>
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
