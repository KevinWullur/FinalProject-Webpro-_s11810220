// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indonesia, Provinsi } from './pages'

function App() {
    return (
        <Router>
            <div className='background'>
              <div className='home'>
                <nav className='nav'>  
                <h1 className='text'> Covid-19 Tracker</h1>
                    <ul>
                        <li>
                        <Link to="/">
                        Home
                        </Link>
                        </li>
                        <li>
                        <Link to="/Global">
                        Global
                        </Link>
                        </li>
                        <li>
                        <Link to="/Indonesia">
                        Indonesia
                        </Link>
                        </li>
                        <li>
                        <Link to="/Provinsi">
                        Provinsi
                        </Link>
                        </li>
                    </ul> 

                </nav>

        <center>
            <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
                <Route path="/Provinsi">
                    <Provinsi />
                </Route>
                <Route path="/Indo">
                    <Indo />
                </Route>
                <Route path="/Global">
                    <Global />
                </Route>
            </Switch>
            </center>
        </div>
        </div>
        </Router>
    )
}