import React from 'react';
import { UserItem } from '../../types';
import style from './Item.module.css';
import Highlight from '../HighLight/Highlight';
import Button from '../Button/Button';

const Item = React.memo(function ({
  id,
  name,
  username,
  email,
  filter,
  deleteUser,
  handleClick,
}: UserItem) {
  return (
    <li className={style.item}>
      <div className={style.data} onClick={() => handleClick(id)}>
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
      <Button onClick={() => deleteUser(id)} variant="red">
        Delete
      </Button>
    </li>
  );
});

export default Item;
