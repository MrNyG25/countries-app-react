import PropTypes from 'prop-types';

function CountryCard({country}) {
  return (
    <div className="bg-white rounded-lg	w-60 container ">
        <div className='flex flex-col'>
            <img src={country.flags.png} className='rounded-sm' />
            <h3 className='text-black text-lg font-normal'>{country.name.official}</h3>
            <h4 className='text-black text-sm '>{country.region}</h4>
            <div className="flex gap-3 justify-center">
              <img src={country.coatOfArms.png} className='rounded-lg mb-2 w-20' />
            </div>
        </div>
    </div>
  )
}

CountryCard.propTypes = {
    country: PropTypes.object.isRequired
}

export default CountryCard