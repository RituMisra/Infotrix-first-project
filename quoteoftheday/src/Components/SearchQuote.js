import { useEffect, useState } from "react";
import './SearchQuote.css';

const SearchQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [searchAuthor, setSearchAuthor] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const handleSearch = () => {
    // Filter quotes when the search button is clicked
    const filtered = quotes.filter((quote) =>
      quote.author.toLowerCase().includes(searchAuthor.toLowerCase())
    );
    setFilteredQuotes(filtered);
    setShowResults(true);
  };

  return (
    <>
      <div className='search-bar'>
        <h2>Search Quote</h2>
        <div className='input-container'>
          <input
            className='input-tag'
            type='text'
            placeholder='Search your author'
            value={searchAuthor}
            onChange={(e) => setSearchAuthor(e.target.value)}
          />
          <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
        <div className='quote-list'>
          {showResults &&
            filteredQuotes.map((quote, index) => (
              <div key={index}>
                <ul>
                  <li>{quote.text}</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default SearchQuote;
