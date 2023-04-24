 import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Home from './Home';
import Gallery from "./Gallery";
import Terms from "./Terms";
import Map from "./Map";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  


function App() {
  // return (
  //   <div className="App">
  //     <Home />
  //   </div>
  // );
  return (
    <Router>  
           <div className="App">  
           <div id="menu">
            <ul className="App-header">  
              <li>  
                <strong><Link to="/Home">Főoldal</Link></strong>  
              </li>
              <li>  
              <strong><Link to="/Terms">Szabályzat</Link></strong>  
              </li>
              <li>  
              <strong><Link to="/Map">Térkép</Link></strong>
              </li>  
              <li>  
              <strong><Link to="/Gallery">Galéria</Link> </strong> 
              </li>  
            </ul>  
            </div>
           <Routes>  
                 <Route exact path='/Home' element={< Home />}></Route>  
                 <Route exact path='/Terms' element={< Terms />}></Route>  
                 <Route exact path='/Gallery' element={< Gallery />}></Route>  
                 <Route exact path='/Map' element={< Map />}></Route>  
          </Routes>  
          </div>  
       </Router>
              
  );
}

export default App;
