import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import { faUser, faCheck } from '@fortawesome/free-solid-svg-icons';


import Authentication from './routes/auth/Authentication';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [setUserUsername] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
          axios.post('/api/auth/', {}, {
              headers: {
                  'Authorization': `Bearer ${accessToken}`
              }
          })
          .then(response => {
              setIsLoggedIn(true);
              setUserUsername(response.data.username);
          })
          .catch(error => {
              console.error('Error during authentication:', error);
              setIsLoggedIn(false);
          });
      }
  }, [setUserUsername]);

  const handleButtonClick = () => {
      alert('Button clicked!');
  };

  if (!isLoggedIn) {
      return (
     
      <Authentication />
      
      )
  }

  return (
      <div className="App">
          <Input
              label="Username"
              type="text"
              className="custom-class"
              value={inputValue}
              setValue={setInputValue}
              icon={faUser}
              inputAttributes={{ placeholder: 'Enter your username' }}
          />
          <SelectInput
              label="Options"
              options={[
                  { value: '', label: 'Select an option' },
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' }
              ]}
              className="custom-class"
              value={selectValue}
              setValue={setSelectValue}
          />
          <SearchBar
              title={searchTitle}
              setTitle={setSearchTitle}
          />
          <Button
              label="Submit"
              className="custom-button"
              onClick={handleButtonClick}
              icon={faCheck}
          />
          <p>Input value: {inputValue}</p>
          <p>Select value: {selectValue}</p>
          <p>Search value: {searchTitle}</p>
      </div>
  );
}

export default App;
