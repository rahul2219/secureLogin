import React from 'react';
import './App.css';
import Login from './components/login';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [success,setSuccess] = useState('');
  const[users,setUsers] = useState([]);

  const fetchUrl = async(url)=>{
    const response = await fetch(url);
    if(response.status === 200){
        const data = await response.json();
        setUsers(data);
    }
    else{
        return;
    }
}

  useEffect(()=>{

    fetchUrl(`https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json`);

  },[])

  

  return (
    <div className="App">
      <Login success = {success} setSuccess = {setSuccess} users={users}/>
    </div>
  );
}

export default App;
