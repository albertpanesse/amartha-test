import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './List';
import Detail from './Detail';

import './App.css';

const App = function () {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
