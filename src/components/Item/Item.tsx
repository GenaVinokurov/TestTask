import React from 'react';
import { UserItem } from '../../types';
import style from './Item.module.css';
import { removeUser, setDeletedUsers } from '../../store/Users/UsersSlice';
import { useAppDispatch } from '../../store/store';
import Highlight from '../HighLight/Highlight';
import Button from '../Button/Button';
import { openModal } from '../../store/Modal/ModalSlice';

const Item = React.memo(function ({ id, name, username, email, filter }: UserItem) {
  const dispatch = useAppDispatch();

  const deleteUser = () => {
    dispatch(setDeletedUsers(id));
    dispatch(removeUser(id));
  };
  const handleClick = () => {
    dispatch(openModal(id));
  };

  return (
    <li className={style.item}>
      <div className={style.data} onClick={handleClick}>
        <p className={style.text}>
          <span className={style.category}>Name: </span>
          <Highlight text={name} search={filter} />
        </p>
        <p className={style.text}>
          <span className={style.category}>User name: </span>
          <Highlight text={username} search={filter} />
        </p>
        <p className={style.text}>
          <span className={style.category}>Email: </span>
          <Highlight text={email} search={filter} />
        </p>
      </div>
      <Button onClick={deleteUser} color="#e34234">
        Delete
      </Button>
    </li>
  );
});

export default Item;
