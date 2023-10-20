import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setInput(event.target.value);
    onSearch(event.target.value); // Pass the search input back to the parent component
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleInputChange}
      placeholder="Search..."
      // Here we apply Tailwind CSS classes
      className="shadow appearance-none border rounded w-96 py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

SearchInput.propTypes = {
    onSearch: PropTypes.any.isRequired
}

export default SearchInput;