import React, { useState } from 'react';
import styles from '../styles/LoginPage.module.css';
import { Link } from 'react-router-dom';
import Header2 from '../layout/Header2';

function LoginPage() {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Handle the form submission logic here
  };

  return (
    <div>
        <div>
            <Header2/>
        </div>
        <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="id" 
            value={formData.id} 
            onChange={handleChange} 
            placeholder="아이디" 
            className={styles.inputField} 
            />
            <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="비밀번호" 
            className={styles.inputField} 
            />
            <div className={styles.buttonGroup}>
                <Link to='/LoginPage'>
                    <button type="submit" className={styles.button}>로그인</button>
                </Link>
                <Link to='/SignupPage'>
                    <button type="button" className={styles.button}>회원가입</button>
                </Link>
            </div>
        </form>
        <div className={styles.snsTitle}>SNS 로그인</div>
        <div className={styles.snsIcons}>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
        </div>
        </div>
    </div>
  );
}

export default LoginPage;