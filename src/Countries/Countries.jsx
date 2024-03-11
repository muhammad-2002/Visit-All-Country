import { useEffect, useState } from "react";
import "./Countries.css";
import Country from "./Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>TOTAL NUMBER OF COUNTRIES IN API : {countries.length}</h1>
      <div className="boxes">
        {countries.map((country) => {
          return <Country country={country} key={Math.random()}></Country>;
        })}
      </div>
    </div>
  );
};

export default Countries;
