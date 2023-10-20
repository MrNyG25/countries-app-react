import PropTypes from 'prop-types';

function CountryCard({country}) {
  return (
    <div className="bg-white rounded-lg	w-60 container ">
        <div className='flex flex-col'>
            <img src={country.flags.png} className='rounded-lg' />
            <h3>{country.name.official}</h3>
            <h4>{country.region}</h4>
            <img src={country.coatOfArms.png} className='rounded-lg mb-2' />
        </div>
    </div>
  )
}

CountryCard.propTypes = {
    country: PropTypes.object.isRequired
}

export default CountryCard