import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  const fetchData = () => {
    setShowData(!showData);
    if (!showData) {
        axios.get('https://reactnd-books-api.udacity.com/books', {
        headers: { Authorization: 'whatever-you-want' }
      })
      .then((response) => {
        setData(response.data.books);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(`Error is ${error}`);
      });
    };
    }

    

  return (
    <>
    <div className='header'>
      <p className='heading'>My Reads</p>
      <button onClick={fetchData} className='button'>
          {showData ? 'Hide Books' : 'Fetch Books'}
      </button>
    </div >
    <div className='booklist'>
      { showData && data.map((item) => (
          <div key={item.id} className='books'>
            <h1>{item.title}</h1>
            <div className='blog'>
              <img src={item.imageLinks.thumbnail} alt="" />
              <p> {item.description} </p>
            </div>
            <h3>{item.authors}</h3>
          </div>
        ))}
    </div>
    </>
  );
}

export default App;
