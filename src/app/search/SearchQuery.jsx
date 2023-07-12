'use client';

import { useState } from 'react';
import Image from 'next/image';

import { useGetSearchResultsQuery } from '@/redux/services/jobApi';
import SearchQueryForm from '@/components/SearchQueryForm';

function SearchQuery() {
  const [searchQuery, setSearchQuery] = useState('');
  const hardQuery = 'Javascript developer in Texas, USA';

  const {
    data: searchResults,
    error,
    isLoading,
  } = useGetSearchResultsQuery(searchQuery || hardQuery);

  console.log(searchResults);

  console.log(hardQuery);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(searchResults.data.length);

  return (
    <div>
      <h2>Search Results</h2>
      <SearchQueryForm setSearchQuery={setSearchQuery} />
      <ul>
        {searchResults?.data?.map((result) => (
          <li key={result.job_id}>
            <h3>{result.employer_name}</h3>

            <div>
              {result.employer_logo ? (
                <img
                  src={result.employer_logo}
                  alt={result.employer_name}
                  width={60}
                  height={60}
                />
              ) : (
                <div>
                  <Image
                    src="/assets/logos/amazon.png"
                    alt="No logo"
                    width={60}
                    height={60}
                  />
                  <p>Sorry, no logo</p>
                </div>
              )}
            </div>
            <a
              href={result.employer_website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {result.employer_name} Website
            </a>
            <h4 className="font-manrope text-2xl font-light">
              {result.job_title}
            </h4>

            <p>{result.job_description.substring(0, 300)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchQuery;
