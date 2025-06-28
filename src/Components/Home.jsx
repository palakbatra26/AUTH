import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate=  useNavigate();

    function handlelogout() {

        sessionStorage.removeItem('token');
 navigate('/SIgnin');
    }
  return (
    <div>Home
        <button onClick={handlelogout}>Logout</button>
    </div>
    // <butto</button>
  )
}

export default Home