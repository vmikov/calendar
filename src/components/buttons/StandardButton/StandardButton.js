import React from 'react';
import s from './StandardButton.module.css';

const StandardButton = ({ type = 'button', children, onClick }) => (
  <button className={s.standard} type={type} onClick={onClick}>
    {children}
  </button>
);

export default StandardButton;
