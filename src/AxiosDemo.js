import React, { useState } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
const AxiosDemo = () => {
  const [joke,setJoke]=useState();

  const fetchJoke = async () => {
    try{
      const [data]=await axios(url,{
        headers:{
          Accepts:'application/json',
        },
      });
      setJoke(data.joke);
    }catch(error){
      console.log(error.response);
    }
    // console.log('fetch joke');
  };

  return (
    <div>
        <span>Axios Demo..</span><br/>
        <button onClick={fetchJoke}>Random joke</button>
        <p >{joke}</p>
    </div>
  )
}

export default AxiosDemo