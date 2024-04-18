import React from 'react';
import './App.css';
import Home from './Home';
import Cod from './Cod';
import Gta from './Gta';
import Valorant from './Valorant';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function App() {
return (
<div className="App">
<Router>
<center>
    <nav id="navbar">
<ul>
<div className='navigation'>
<Link to = "/" className='home'style={{ color: 'orange' }}>Home</Link>&nbsp;&nbsp;
<Link to = "/Gta"style={{ color: 'orange' }}>GTA </Link> &nbsp;&nbsp;
<Link to = "/Cod"style={{ color: 'orange' }}>COD</Link>&nbsp;&nbsp;
<Link to = "/Valorant"style={{ color: 'orange' }}>Valorant</Link>  &nbsp;&nbsp;
</div>
</ul>
</nav>
</center>
<Routes>
<Route exact path ="/" element = {<Home/>}></Route>
<Route exact path ="/Gta" element = {<Gta/>}></Route>
<Route exact path ="/Cod" element = {<Cod/>}></Route>
<Route exact path ="/Valorant" element = {<Valorant/>}></Route>
</Routes>
</Router>
</div>
)
}
export default App;

