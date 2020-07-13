import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Search from "./components/layout/Search";
import CharactersGrid from "./components/characters/CharactersGrid";
import axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [query, setQuery] = useState("");

  // Docs - https://breakingbadapi.com/documentation
  useEffect(() => {
    const fetchData = async () => {
      const resault = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(resault.data);
      setIsloading(false);
      // console.log(resault.data);
    };
    fetchData();
  }, [query]);

  const newQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className='container'>
      <Header />
      <div className='main'>
        <Search newQuery={newQuery} />
        <CharactersGrid items={items} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
