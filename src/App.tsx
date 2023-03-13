import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './store/store';
import { setFilter, reset } from './store/Users/UsersSlice';
import List from './components/List/List';
import Button from './components/Button/Button';
import style from './App.module.css';
import Modal from './components/Modal/Modal';

function App() {
  const { filter } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  const onReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={style.app}>
      <header className={style.header}>
        <label className={style.label}>
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Search"
            className={style.input}
          />
        </label>
        <Button onClick={onReset} color="#000080">
          Reset
        </Button>
      </header>
      <h1>User list</h1>
      <List />
      <Modal />
    </div>
  );
}

export default App;
