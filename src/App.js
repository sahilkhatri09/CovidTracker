import React from "react";
import './App.css'
import CountryData from "./components/CountryData";
import TotalData from "./components/TotalData";
function App() {
 
  return (
    <>
    <h1>Covid-19 TRACKER</h1>
    <TotalData/>
    <CountryData/>
    </>
  );
}

export default App;
