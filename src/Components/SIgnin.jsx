import React from 'react'
import {supabase} from '../Index'
import { Link ,useNavigate} from 'react-router-dom'
import Home from './Home'

function SIgnin({settoken}) {
  let navigate = useNavigate()
  const [dataa, setdata] = React.useState({
  
    Email: "",
    Password: ""
  })  


  function handlechange(e) {
    setdata((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
 async function setsubmit(e) {
  e.preventDefault();

  if (!dataa.Email || !dataa.Password) {
    alert("Please fill all fields.");
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: dataa.Email,
    password: dataa.Password,
  });

  if (error) {
    alert("Login failed: " + error.message);
    return;
  }

  alert("Login successful!");
  settoken(data); // This will update token in App
  navigate('/home'); // Navigate only on success
}

  return (
    <div>
      <form onSubmit={setsubmit}>
        {/* <input type="text" name="Name" placeholder='Enter your Name' onChange={handlechange}  /> */}
        <input type="email" name="Email" placeholder='Enter your Email' onChange={handlechange}  />
        <input type="password" name="Password" placeholder='Enter your Password' onChange={handlechange}  />
        <button type='submit'>Submit</button>
      </form>
      Don't Have an Account? <Link  to="/">Signup</Link>
    </div>
  )
}

export default SIgnin