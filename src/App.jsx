import "./App.css";
import { useState } from "react";
import { SearchBar } from "./componants/SearchBar";
import { SearchResultsList } from "./componants/SearchResultsList";
import { Nav } from "./componants/Nav";
import { Footer } from "./componants/Footer";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <Nav />
      <div className="search-bar-containter">
        <h1 className="header"> Search For Employee By Name</h1>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
