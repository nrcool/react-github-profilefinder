
import React, { useEffect, useState ,useRef } from 'react';
import "./css/style.css"
import Header from './components/Header';
import User from './components/User';


function App() {

  const [user, setUser]= useState(null)
 
  const inputRef = useRef() //reference // tag

  //componentDidMount
  useEffect(()=>{
      fetchUserProfile("nrcool")
  } , [])

/*   async function fetchUserProfile(){} */

  const fetchUserProfile= async (name)=>{
    const response = await fetch(`https://api.github.com/users/${name}`)
    const result = await response.json()
    setUser(result)
  }


  const searchNewUser =(e) =>{
      e.preventDefault()
      console.log(inputRef.current.value)
      if(inputRef.current.value.trim() !== ""){ 
        fetchUserProfile(inputRef.current.value)
      } 
      inputRef.current.value=""
  }

  console.log("render")
  return (
    <div className="App">
        <Header/>

        <form onSubmit={searchNewUser}>
          <input type="text" name="username" ref={inputRef}/>
          <input type="submit" value="search" />
        </form>

        {user &&  <User userdata={user}/>}
       

    </div>
  );
}


export default App;