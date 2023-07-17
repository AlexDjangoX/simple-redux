/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Image from 'next/image';

import { useGetSearchResultsQuery } from '@/redux/services/jobApi';
import SearchQueryForm from '@/components/SearchQueryForm';
import DateDisplay from '@/components/DateDisplay';
import Button from '@/components/Button';
import icons from '../../public/assets/outline/index.js';

import { shortenText } from '../utils/shortenText.js';

function SearchQuery() {
  const [searchQuery, setSearchQuery] = useState('');
  const hardQuery = 'Javascript developer in Manchester, UK';

  const placeholderJobDescription = 'Unfortunately, no job description';

  const {
    data: searchResults,
    error,
    isLoading,
  } = useGetSearchResultsQuery(searchQuery || hardQuery);

  const jobDescription = searchResults?.data[0].job_description;

  const shortDescription = jobDescription
    ? shortenText(jobDescription, 150)
    : null;

  console.log(searchResults);
  console.log(shortDescription);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const items = [
    { icon: icons.moon, alt: 'icon-moon', text: 'Full Time' },
    { icon: icons.people, alt: 'icon-people', text: '2 Applied' },
    { icon: icons.clock, alt: 'icon-clock', text: 'Freelance' },
  ];

  return (
    <div className="p-[80px] dark:bg-darkBG1 ">
      <h1 className="font-manrope text-[32px] font-bold ">
        Welcome to the Job Search Platform for Developers
      </h1>
      <DateDisplay />
      <div className="mb-[32px]">
        <h2>Latest Job Posts</h2>
      </div>

      <div className="flex">
        <div className="flex flex-wrap gap-8">
          {searchResults?.data?.map((result) => (
            <div
              className="h-[422px] w-[400px]  p-[20px] dark:bg-blackBG2 "
              key={result.job_id}
            >
              <div className="flex">
                <div className="h-[64px] w-[64px] rounded-xl ">
                  {result.employer_logo ? (
                    <img
                      className="bg-blackPadding p-[12px]"
                      src={result.employer_logo}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/logos/amazon.png';
                      }}
                      alt="Logo"
                      width={72}
                      height={72}
                    />
                  ) : (
                    <div>
                      <div className="h-[64px] w-[64px] bg-blackBG2"></div>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap justify-center">
                  <h2>Passionate Programmer</h2>
                  <div className="flex w-4/5 justify-between text-[12px] text-natural6 ">
                    <p className="m-[4px] rounded-md bg-blackBG3">PHP</p>
                    <p className="m-[4px] rounded-md bg-blackBG3">Laravel</p>
                    <p className="m-[4px] rounded-md bg-blackBG3">CSS</p>
                    <p className="m-[4px] rounded-md bg-blackBG3">React</p>
                  </div>
                </div>
              </div>
              <p className="min-h-[70px] pt-[28px] leading-relaxed text-natural6">
                {result.job_description
                  ? shortenText(result.job_description, 200)
                  : placeholderJobDescription}
              </p>
              <div className="flex justify-between text-natural6">
                <div className="flex  justify-between pb-[30px] pt-[20px] text-natural6 ">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="m-2 flex items-center justify-between rounded-md bg-blackBG3 p-[6px] text-[12px] "
                    >
                      <Image
                        className="mr-[10px]"
                        src={item.icon}
                        alt={item.alt}
                        height={20}
                        width={20}
                      />
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p>
                  $15k-20k<span className="text-natural6">/month</span>
                </p>

                <Button
                  classStyles="bg-primary rounded-xl text-white font-bold py-[10px] font-normal px-[12px] "
                  handleClick={() => {}}
                  btnName="Apply Now"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-[800px] w-[400px] dark:bg-slate-500 ">
          {searchResults?.data?.map((result) => (
            <div
              className="h-[422px] w-[400px]  p-[20px] dark:bg-blackBG2 "
              key={result.job_id}
            >
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
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
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
