import React, { useState } from 'react';
import styles from '../styles/Signup.module.css'; // Import the CSS module
import Header1 from '../layout/Header1';

function SignupPage() {
  const [formData, setFormData] = useState({
    id: '',
    mainPassword: '',
    confirmPassword: '',
    email: '',
    phoneNumber: ''
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
    console.log('Form Data:', formData);
    // Handle form submission, like sending data to a server
  };

  return (
    <div>
        <Header1/>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label className={styles.label}>
            아이디
            <input type="text" name="id" value={formData.id} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            비밀번호
            <input type="password" name="mainPassword" value={formData.mainPassword} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            비밀번호 확인
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            이메일
            <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            전화번호
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>회원가입</button>
        </form>
    </div>
  );
}

export default SignupPage;