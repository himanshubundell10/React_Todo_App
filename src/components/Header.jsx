import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context, server } from '../main'
import axios from 'axios';
import toast from 'react-hot-toast';

const Header = () => {
const {isAuthenticated,setIsAuthenticated,loading,setLoading} = useContext(Context);

const logoutHandler = async() => {
  setLoading(true);

  try{
    await axios.get(`${server}/user/logout`, {
      
      withCredentials:true,
    }
    );

    toast.success("Logged Out Successfully")
    setIsAuthenticated(false)
    setLoading(false)
  }catch(error){
    toast.error(error.response.data.message);
    setIsAuthenticated(true)
    setLoading(false)

  }


};






  return <nav className='header'>
    <div>
        <h2>Todo App</h2>
    </div>
    <article>
        <Link className='element' to={"/"}>Home</Link>
        <Link className='element' to={"/profile"}>Profile</Link>
        {
          isAuthenticated?<button className='btn' disabled={loading} onClick={logoutHandler}>Logout</button>: <Link to={"/login"}>Login</Link>
        }
       
        
    </article>
  </nav>
}


export default Header
