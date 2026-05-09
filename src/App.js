import React from "react";
import Cards from "./components/cards/Cards";
import "./App.css";
import axios from "axios";
import Box from "./components/box/Box";
import Graph from "./components/graph/Graph";
import Spinner from "./components/Spinner/Spinner";

const API_BASE = "https://disease.sh/v3/covid-19";

const App = () => {
  const [data, setData] = React.useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    updated: null
  });
  const [loading, setLoading] = React.useState(true);
  const [countries, setCountries] = React.useState(["Global"]);
  const [country, setCountry] = React.useState("Global");
  const [historicalData, setHistoricalData] = React.useState({});
  const [error, setError] = React.useState(null);

  // Fetch initial data
  React.useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [countriesRes, globalRes, historicalRes] = await Promise.all([
          axios.get(`${API_BASE}/countries`),
          axios.get(`${API_BASE}/all`),
          axios.get(`${API_BASE}/historical/all?lastdays=120`)
        ]);

        setCountries(["Global", ...countriesRes.data.map(c => c.country)]);
        setData({
          confirmed: globalRes.data.cases,
          recovered: globalRes.data.recovered,
          deaths: globalRes.data.deaths,
          updated: globalRes.data.updated
        });
        setHistoricalData(historicalRes.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch initial data. Please try again later.");
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch data when country changes
  React.useEffect(() => {
    if (loading) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `${API_BASE}/all`;
        let histUrl = `${API_BASE}/historical/all?lastdays=120`;

        if (country !== "Global") {
          url = `${API_BASE}/countries/${country}`;
          histUrl = `${API_BASE}/historical/${country}?lastdays=120`;
        }

        const [dataRes, histRes] = await Promise.all([
          axios.get(url),
          axios.get(histUrl).catch(() => ({ data: null })) // Some countries might not have historical data
        ]);

        setData({
          confirmed: dataRes.data.cases,
          recovered: dataRes.data.recovered,
          deaths: dataRes.data.deaths,
          updated: dataRes.data.updated
        });

        // Historical data structure differs for countries vs global
        if (country === "Global") {
          setHistoricalData(histRes.data);
        } else {
          setHistoricalData(histRes.data?.timeline || null);
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data for " + country);
        setLoading(false);
      }
    };

    fetchData();
  }, [country]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  if (error) {
    return (
      <div className="error-container">
        <h1>Error</h1>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>COVID-19 <span className="highlight">Tracker</span></h1>
        <p className="subtitle">Real-time Global Virus Statistics</p>
      </header>

      {loading && <Spinner />}
      
      {!loading && (
        <>
          <Cards {...data} />
          <div className="controls">
            <Box countries={countries} clicked={handleCountryChange} value={country} />
          </div>
          <Graph 
            confirmed={data.confirmed}
            recovered={data.recovered}
            deaths={data.deaths}
            historicalData={historicalData} 
            country={country} 
          />
        </>
      )}
      
      <footer className="app-footer">
        <p>Data provided by disease.sh</p>
      </footer>
    </div>
  );
};

export default App;