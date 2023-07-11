"use client";

import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '@/redux/features/counterSlice';
import { useGetUsersQuery } from '@/redux/services/userApi';
import Loader from '../components/Loader'

export default function Counter() {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);



  return (
    <main className=" max-w-1200 mx-auto p-2">
      
      <div className="mb-4 text-center">
       
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <h4 className="mt-4">{count}</h4>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <div className='flex justify-center'>
        <Loader/>
        </div>
        
      ) : data ? (
        <div className="flex flex-wrap justify-center m-24 ">
          {data.map((user) => (
            <div key={user.id} className="border border-gray-300 text-center m-12 ">
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                width='180'
                height='180'
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
