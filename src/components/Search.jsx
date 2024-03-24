import React, {useState} from 'react'


const SearchBar = ({ placeholder, setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(json =>{
            const results = json.filter((user) => {
                return (
                    value &&
                    user && 
                    user.name && 
                    user.name.toLowerCase().includes(value)
                    );
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <input 
        type="text" 
        className="search-bar" 
        placeholder={placeholder} 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}
        />
    );
};


const SearchResult = ({ results }) => {
    return  (
        <div className='result-list'>
            {results.map((result, id) => {
                return <div key={id}>{result.name}</div>
            })}
        </div>
    );
};


export default {SearchBar, SearchResult};