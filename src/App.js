import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Contact from './page/Contact'
import Api from './page/Api'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact}/>
      <Route path="/api" component={Api}/>
    </BrowserRouter>
  );
}

export default App;
