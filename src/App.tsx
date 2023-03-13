import React from 'react';
import List from './components/List/List';
import Header from './components/Header/Header';
import style from './App.module.css';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <h1>User list</h1>
      <List />
      <Modal />
    </div>
  );
}

export default App;
