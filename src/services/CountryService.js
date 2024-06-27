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

  const debounceGetFilteredCountries = _.debounce(async (query) => {
    await getFilteredCountries(query);
  }, 600);

  const handleSearchInput = (query) => {

    debounceGetFilteredCountries(query);

  };
  

  return {
    countries,
    handleSearchInput
  };
}

export default CountryService;