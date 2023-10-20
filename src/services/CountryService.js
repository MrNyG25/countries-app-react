import axios from 'axios';
import { useEffect, useState } from 'react';
import _ from 'lodash';

function CountryService() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  },[]);

  const getCountries = async () => {
    let res = await axios.get('https://restcountries.com/v3.1/all');
    setCountries(res.data)
    console.log(res.data);
  }

  const getFilteredCountries = async (term) => {
    if(!term){
        await getCountries();
        return;
    }
    let res = await axios.get('https://restcountries.com/v3.1/name/'+term);
    setCountries(res.data)
    console.log(res.data);
  }

  const handleSearchInput = (query) => {
    console.log(`Searching for: ${query}`);
    let bounce = _.debounce(async () => {
        await getFilteredCountries(query);
    }, 600)
    bounce();
    // ... you might want to call an API or perform other side effects here.
  };
  

  return {
    countries,
    handleSearchInput
  };
}

export default CountryService;