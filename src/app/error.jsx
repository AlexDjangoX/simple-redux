'use client';

import { useEffect } from 'react';

import PropTypes from 'prop-types';

export default function Error({ name, error, reset, errorStyles, searchFor }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className={`mt-10 text-center ${errorStyles}`}>
      <h1>{error ? error.message : 'Something went wrong'}</h1>
      <div className="mt-4 flex justify-center">
        <label htmlFor="jobSearch" className="sr-only">
          Search to find your dream jobs
        </label>
        <input
          id="jobSearch"
          className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder={searchFor || 'Search to find your dream jobs'}
        />
        <button
          className="ml-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          onClick={() => reset()}
        >
          {name || 'Search'}
        </button>
      </div>
    </div>
  );
}

Error.propTypes = {
  name: PropTypes.string,
  error: PropTypes.shape({ message: PropTypes.string }),
  reset: PropTypes.func.isRequired,
  errorStyles: PropTypes.string,
  searchFor: PropTypes.string,
};
