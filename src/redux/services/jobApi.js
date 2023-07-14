import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const rapidApiHost = 'jsearch.p.rapidapi.com';
const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${rapidApiHost}/`,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', apiKey);
      headers.set('X-RapidAPI-Host', rapidApiHost);
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (query) => `search?query=${query}`,
    }),
    getSearchFilters: builder.query({
      query: (query) => `search-filters?query=${query}`,
    }),
    getJobDetails: builder.query({
      query: (jobId) =>
        `job-details?job_id=${jobId}&extended_publisher_details=false`,
    }),
    getEstimatedSalary: builder.query({
      query: ({ jobTitle, location, radius }) =>
        `estimated-salary?job_title=${jobTitle}&location=${location}&radius=${radius}`,
    }),
  }),
});

export const {
  useGetSearchResultsQuery,
  useGetSearchFiltersQuery,
  useGetJobDetailsQuery,
  useGetEstimatedSalaryQuery,
} = jobApi;

// export const {
//   useGetSearchResultsQuery,
//   useGetSearchFiltersQuery,
//   useGetJobDetailsQuery,
//   useGetEstimatedSalaryQuery,
//   usePrefetch,
// } = jobApi.endpoints;
