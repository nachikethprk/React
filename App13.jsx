import React from 'react'

import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

import ViewPost from './ViewPost';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';

const App13 = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<CreatePost />}/>
              <Route path="/viewposts" element={<ViewPost />}/>
              <Route path="/updateposts/:id" element={<UpdatePost/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App13