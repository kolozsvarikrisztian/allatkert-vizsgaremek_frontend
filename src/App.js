 import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import './Home.css';
import Home from './Home';
import Allatok from "./Allatok";
import Gallery from "./Gallery";
import Programok from "./Programok";
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
              <strong><Link to="/">Szabályzat</Link></strong>  
              </li>
              <li>  
              <strong><Link to="/">Térkép</Link></strong>
              </li>  
              <li>  
              <strong><Link to="/Gallery">Galéria</Link> </strong> 
              </li>  
            </ul>  
            </div>
           <Routes>  
                 <Route exact path='/Home' element={< Home />}></Route>  
                 <Route exact path='/Gallery' element={< Gallery />}></Route>  
          </Routes>  
          </div>  
       </Router>
              
  );
}

export default App;
