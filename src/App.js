import React from 'react';
import Header from './components/Header';

import Home from './pages/Home';
import Basket from './pages/Basket';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* <Home /> */}
        <Basket />
      </div>
    </div>
  );
}

export default App;
