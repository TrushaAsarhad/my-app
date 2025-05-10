import React, { useState } from 'react';
import Wish from './components/Wish';
import TraitsChecklist from './components/TraitsChecklist';
import PermissionButton from './components/PermissionButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Happy Mother's Day, Mumma! ❤️</h1>
      <Wish />
      <TraitsChecklist />
      <PermissionButton />
    </div>
  );
}

export default App;
