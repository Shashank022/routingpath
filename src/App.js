import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';
import Info from './Components/Info';


function App() {
  return (
    <BrowserRouter>  
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/info' component={ Info } />
        <Route path='/contact' component={Contact} />  
        <Route path='/posts/:post_id' component={Post} />  
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
