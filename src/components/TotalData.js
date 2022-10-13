import React ,{useState,useCallback,useEffect}from 'react'
import Card from './Card';
import './TotalData.css'
export default function TotalData() {
    const [error,setError] = useState(null);
    const [data,setData] = useState({});
    const getData = useCallback(async()=>{
        setError(null);
        setData({});
        try{
        const response = await fetch("https://disease.sh/v3/covid-19/all");
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        const parsedData = await response.json();
        let fetchData = {
            active : parsedData.active,
            deaths : parsedData.deaths,
            cases : parsedData.cases,
            recovered : parsedData.recovered
        }
        setData(fetchData);
        }
        catch (error){
            setError(error.message);
        }

    },[]);
    useEffect(()=>{
        getData();
    },[getData])
    let header = <>
        <Card title="Total No. of Covid-19 Cases : " num = {data.cases} id={"a"}/>
        <Card title="Total No. of Active Covid-19 Cases : " num = {data.active} id={"b"}/>
        <Card title="Total No. of RecoveredCovid-19 Cases : " num = {data.recovered} id={"c"}/>
        <Card title="Total No. of Covid-19 Deaths : " num = {data.deaths} id={"d"}/>
    </>
    if(error){
        header = <p>Something went wrong!</p>
    }
  return (
    <div className="card1">
     {header}
    </div>
  )
}
