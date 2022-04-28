import React, { useState } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';
const AxiosDemo = () => {
  const [joke,setJoke]=useState();

  const fetchJoke = async () => {
    try{
      const resp=await axios(url);
      console.log(resp);
     

    }catch(error){
      console.log(error);
    }
    
  };

  return (
    <div>
        <span>Axios Demo..</span><br/>
        <button onClick={fetchJoke}>Random User</button>
        
    </div>
  )
}

export default AxiosDemo