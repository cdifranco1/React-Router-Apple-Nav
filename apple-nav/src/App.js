import React from 'react';
import { Route } from "react-router-dom";

import './App.css';
import MainNav from './components/MainNav';
import SubNav from './components/SubNav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNav />
        <Route path="/:category">
          <SubNav/>
        </Route>
      </header>
    </div>
  );
}

export default App;
