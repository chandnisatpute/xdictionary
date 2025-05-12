import React, { useState } from 'react';

const XDictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{ marginTop: '20px' }}>
        {result === "Word not found in the dictionary." ? (
          <p>{result}</p>
        ) : result ? (
          <>
            <h3>Definition:</h3>
            <p>{result}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default XDictionary;
