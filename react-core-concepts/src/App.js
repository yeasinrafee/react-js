import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser(){
  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  
  return (
    <div>
      {users.map( user => <User name = {user.name} email = {user.email} website={user.website
      }></User>)}
    </div>
  )
  

}

function User({name, email, website}){
  return(
    <div style={{backgroundColor: 'skyblue', border: '2px solid cyan', margin: '36px', padding: '20px'}}>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  )
}

export default App;
