'use client';

import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '@/redux/features/counterSlice';
import { useGetUsersQuery } from '@/redux/services/userApi';
import Loader from '../components/Loader';

import Button from '@/components/Button';

export default function Counter() {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <main className="p-4">
      <div className="mb-4 mt-16 flex justify-center ">
        <Button
          classStyles="bg-secondary3 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4"
          handleClick={() => dispatch(increment())}
          btnName="increment"
        />
        <Button
          classStyles="bg-secondary1 px-4 py-2 font-bold text-white hover:bg-blue-700"
          handleClick={() => dispatch(decrement())}
          btnName="decrement"
        />
        <Button
          classStyles="ml-4 bg-secondary4 px-4 py-2 font-bold text-white hover:bg-blue-700"
          handleClick={() => dispatch(reset())}
          btnName="reset"
        />
      </div>

      <div className="flex justify-center ">
        <h4 className="mt-4  text-3xl ">{count}</h4>
      </div>

      {error && <p>Oh no, there was an error</p>}
      {(isLoading || isFetching) && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}
      {data && (
        <div className="m-24 flex flex-wrap justify-center ">
          {data.map((user) => (
            <div
              key={user.id}
              className="m-12 border border-gray-300 text-center "
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                width="180"
                height="180"
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
