import React from 'react'
import Nav from './Nav';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Signup from './Forms/Signup';


const App = () => {
  return (
    <Router>
      <Nav/>
        <Routes>
        <Route  path="/signup" element={<Signup/>}/>
              {/* <Route path="*" element={<PagenotFound/>}></Route>
              <Route path='/' element={<Home/>}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/aboutus" element={<About/>} /> */
              }

        </Routes>
    </Router>
  )
}

export default App