import React, { useState, useCallback, useEffect } from "react";
import Country from "./Country";
import './CountryData.css'

function CountryData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const getData = useCallback(async () => {
    try {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      if (!response.ok) throw new Error("something went wrong");
      const fetchData = await response.json();
      let filteredData = fetchData.map((event) => {
        return {
          country: event.country,
          death: event.deaths,
          active: event.active,
          total: event.cases,
          id: event.countryInfo._id,
          recovered: event.recovered,
          tests: event.tests
        }
      });
      setData(filteredData);
    }
    catch (error) {
      setError(error.message);
    }
  }, [])
  useEffect(() => {
    getData();
  }, [getData]);
  let tableRows = error;
  if (!error) tableRows = data.map((event) => {
    return <Country
      country={event.country}
      death={event.death}
      active={event.active}
      total={event.total}
      key={event.id + event.total}
      recovered={event.recovered}
      tests={event.tests}
    />
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Tests</th>
          <th>Total</th>
          <th>Recovered</th>
          <th>Active</th>
          <th>Death</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default CountryData;
