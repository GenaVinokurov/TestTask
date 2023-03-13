import React, { useEffect } from 'react';
import Item from '../../components/Item/Item';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchUsersData } from '../../store/Users/UsersAction';
import { UserData } from '../../types';
import style from './List.module.css';

export default function List() {
  const { data, filter, error, loading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const filteredUsers = data.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.username.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  if (error) return <div>{error}</div>;

  return (
    <ul className={style.list}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        filteredUsers.map((user: UserData) => {
          return <Item key={user.id} filter={filter} {...user} />;
        })
      )}
    </ul>
  );
}
