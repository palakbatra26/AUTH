import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
import SIgnin from './Components/SIgnin'
import Home from './Components/Home'
function App() {
  const [token, settoken] = useState(false)
  if(token)
  {
    sessionStorage.setItem('token', JSON.stringify(token));
  }
  useEffect(()=>{
     if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      settoken(data)
    }
    
  }, [])
  
  
  return (
    <div>
   <Routes>
    <Route path={'/'} element={<Signup />} />
    <Route path={'/SIgnin'} element={<SIgnin settoken={settoken} />} />
   {token ?<Route path={'/home'} element={<Home />} />: " "}
   
   </Routes>
    </div>
  )
}

export default App