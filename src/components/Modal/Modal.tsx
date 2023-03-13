import React from 'react';
import ReactDOM from 'react-dom';
import { closeModal } from '../../store/Modal/ModalSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { UserData } from '../../types';
import Button from '../Button/Button';
import style from './Modal.module.css';

const container = document.getElementById('portal') as HTMLElement;

function Modal() {
  const { isOpen, userId } = useAppSelector((state) => state.modal);
  const { data } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  const { address, company } = data.find((el) => el.id === userId) as UserData;
  const handleClick = () => {
    dispatch(closeModal());
  };

  return ReactDOM.createPortal(
    <>
      <div className={style.overlay} onClick={handleClick}></div>
      <div className={style.modal}>
        <div className={style.head}>
          <h3>Additional information</h3>
          <Button variant="red" onClick={handleClick}>
            Close
          </Button>
        </div>
        <div className={style.wrapper}>
          <p className={style.title}>Address:</p>
          <p className={style.text}>City: {address.city}</p>
          <p className={style.text}>Street: {address.street}</p>
          <p className={style.text}>Suite: {address.suite}</p>
          <p className={style.text}>Zipcode: {address.zipcode}</p>
        </div>
        <div className={style.wrapper}>
          <p className={style.title}>Company:</p>
          <p className={style.text}>Name: {company.name}</p>
          <p className={style.text}>Catch phrase: {company.catchPhrase}</p>
          <p className={style.text}>Bs: {company.bs}</p>
        </div>
      </div>
    </>,
    container
  );
}

export default Modal;
