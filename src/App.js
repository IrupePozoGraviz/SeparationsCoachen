import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Text1Component from './components/fetchSeparationsCoachen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/separation" element={<Text1Component />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
