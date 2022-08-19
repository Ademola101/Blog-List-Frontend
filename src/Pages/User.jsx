import React from 'react';
import { useGetUserQuery } from '../reducers/api/apiSlice';
import UserNames from '../components/UserNames';
import UserBlognumber from '../components/UserBlognumber';

export default function User() {
  const { isLoading, isError, error, data, } = useGetUserQuery();

  if(isLoading) {
    return <div>Loading...</div>;
  }

  if(isError) {
    return <div>Error: {error.error.toString()}</div>;
  }


  // let content;

  // if(isLoading) {
  //   content = <div>Loading</div>;
  // }

  // else if(isSuccess) {

  //   content = data.map(data => <div> <UserNames key={data.id} name={data.username}/>

  //     <UserBlognumber key={data.id} number={data.blogs.length} /> </div>);

  // }
  // else if(isError) {
  //   content = <div>{error.error.toString()}</div>;
  // }

  return (


    <div style={
      {
        display: 'flex',
        flexDirection: 'row',
      }
    }>
      <div>

        {data.map(data =>

          <UserNames key={data.id} name={data.username} data = {data.id}/>


        )}
      </div>

      <div>
        {data.map(data => <UserBlognumber key={data.id} number={data.blogs.length} />)}
      </div>
    </div>

  );
}
