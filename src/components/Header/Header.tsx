import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setFilter, reset } from '../../store/Users/UsersSlice';
import style from './Header.module.css';
import Button from '../Button/Button';

function Header() {
  const { filter } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  const onReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);
  return (
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
      <Button onClick={onReset} variant="blue">
        Reset
      </Button>
    </header>
  );
}

export default Header;
