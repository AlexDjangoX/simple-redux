import React from 'react';
import { dispatch } from '@reduxjs/toolkit';
import { useGetSearchResultsQuery } from '@/redux/services/jobApi';
import SearchQuery from '@/components/SearchQuery';

const page = () => {
  const hardQuery = 'Javascript developer in Texas, USA';

  console.log(hardQuery);

  const {
    data: searchResults,
    error,
    isLoading,
  } = dispatch(useGetSearchResultsQuery).initiate(hardQuery);

  console.log(searchResults);
  console.log(hardQuery);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(searchResults.data[0]);

  return (
    <div>
      <SearchQuery
        searchResults={searchResults}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
};

export default page;
