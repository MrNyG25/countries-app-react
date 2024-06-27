import { useEffect } from 'react'

import CountryCard from '../components/CountryCard'
import CountryService from '../services/CountryService'
import SearchInput from '../components/SearchInput';

function CountriesList() {
  const {countries, handleSearchInput} = CountryService();

  useEffect(() => {
    
  }, [])
  return (
   <>
    <h1 className="text-3xl font-bold text-center my-4">Countries App</h1> 
    <div className='flex justify-center'>
      <SearchInput onSearch={handleSearchInput}/>
    </div>
    <div className="grid gap-4 my-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 ">
      {
        countries.map(country => (  <CountryCard key={country?.area+''+country?.cca2} country={country} />))
      }
    </div>
   </>
  )
}

export default CountriesList