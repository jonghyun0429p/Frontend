import React from 'react';
import Header from '../layout/Header1';
import styles from '../styles/HistoryPage.module.css'
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';


const HistoryPage = () =>  {

    return (
        <div className={styles.container}>
          <Sidebar />
          <Content />
        </div>
      );
    
}

export default HistoryPage;