import React, { useCallback, useEffect } from 'react';
import Item from '../../components/Item/Item';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchUsersData } from '../../store/Users/UsersAction';
import { UserData } from '../../types';
import { openModal } from '../../store/Modal/ModalSlice';
import { removeUser, setDeletedUsers } from '../../store/Users/UsersSlice';
import style from './List.module.css';

export default function List() {
  const { data, filter, error, loading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const deleteUser = useCallback(
    (id: number) => {
      dispatch(setDeletedUsers(id));
      dispatch(removeUser(id));
    },
    [dispatch]
  );
  const handleClick = useCallback(
    (id: number) => {
      dispatch(openModal(id));
    },
    [dispatch]
  );

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
          return (
            <Item
              key={user.id}
              filter={filter}
              deleteUser={deleteUser}
              handleClick={handleClick}
              {...user}
            />
          );
        })
      )}
    </ul>
  );
}
