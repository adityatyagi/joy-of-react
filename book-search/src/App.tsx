import { useEffect, useState } from "react";
import "./App.css";
import SearchResult, { ISearchResult } from "./components/SearchResult";
import TextInput from "./components/TextInput";

const ENDPOINT = "https://jor-test-api.vercel.app/api/book-search";

function App() {
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  /** status: idle, loading, success, error, empty */
  const [status, setStatus] = useState("idle");

  useEffect(() => {}, []);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log("🚀 ~ file: App.tsx:24 ~ handleInputChange ~ name:", name);
    setSearchQuery(value);
  };

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const searchTerm = searchQuery;
    setSearchTerm(searchTerm);
    setIsSearching(true);
    const response = await fetch(ENDPOINT + `?searchTerm=${searchTerm}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: ISearchResult[] = await response.json();
    setIsSearching(false);
    setSearchResults(data);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <TextInput
          placeholder="The Fifth Season"
          value={searchQuery}
          id="seach"
          label="Search"
          onChange={handleInputChange}
        />
        <button type="submit">Go</button>
      </form>

      {isSearching ? (
        <p>Searching...</p>
      ) : (
        <main>
          {searchResults.length > 0 &&
            searchResults.map(({ result }) => (
              <SearchResult key={result.isbn} result={result} />
            ))}
          {!searchTerm ? (
            <p>Welcome to Book Search!</p>
          ) : (
            searchResults.length === 0 && <p>No Results</p>
          )}
        </main>
      )}
    </>
  );
}

export default App;
