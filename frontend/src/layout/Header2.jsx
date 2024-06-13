// src/Header.js
import React from 'react';
import styles from '../styles/Header2.module.css';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <div className={styles.logo}>로고위치</div>
        <div className={styles.headerButtons}></div>        
      </Link>
  </header>
  );
};

export default Header2;