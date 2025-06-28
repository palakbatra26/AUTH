import React from 'react'
import {supabase} from '../Index'
import SIgnin from './SIgnin'
import { Link } from 'react-router-dom'

function Signup() {
  const [dataa, setdata] = React.useState({
    Name: "",
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
       e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: dataa.Email,
        password: dataa.Password,
        options: {
          data: {
            Name: dataa.Name
          }
        }
      })

      if (error) {
        throw error
      }

      alert("User Created Successfully")
    } catch (error) {
      console.error("Error signing up:", error)
      alert("Error signing up: " + error.message)
    
  }
  }
  return (
    <div>
      <form onSubmit={setsubmit}>
        <input type="text" name="Name" placeholder='Enter your Name' onChange={handlechange}  />
        <input type="email" name="Email" placeholder='Enter your Email' onChange={handlechange}  />
        <input type="password" name="Password" placeholder='Enter your Password' onChange={handlechange}  />
        <button type='submit'>Submit</button>
      </form>
      Already Have an Account? <Link  to="/SIgnin">Login</Link>
    </div>
  )
}

export default Signup