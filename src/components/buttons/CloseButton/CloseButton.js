import React from 'react';
import s from './CloseButton.module.css';

const CloseButton = ({ onClick }) => (
  <button className={s.closeButton} type='button' onClick={onClick}>
    &times;
  </button>
);

export default CloseButton;
