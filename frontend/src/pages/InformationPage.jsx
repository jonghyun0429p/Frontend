import React, { useState, useEffect } from 'react';
import styles from '../styles/InformationPage.module.css'; // Import the CSS module
import Header2 from '../layout/Header2';
import axios from 'axios';

function InformationPage() {
  const [formData, setFormData] = useState({
    email: '',
    mainPassword: '',
    confirmPassword: '',
    address: '',
    age: '',
    gender : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    axios.post("/user/Information",
      {
        email : formData.email,
        password : formData.password,
        name : formData.name,
        age : formData.age,
        address : formData.address,
        gender : formData.gender
      }
    ).then((res) => {
        alert(res.data);
    })
  };

  useEffect(() => {
    axios.get('user/Information',{
      params : {
        email:formData.email
      }
    })
      .then(response => {
        setFormData({
          email: response.data.email,
          mainPassword: response.data.password,
          confirmPassword: response.data.password,
          address: response.data.address,
          age: response.data.age,
          gender: response.data.gender,
        });
      })
      .catch (error => {
          console.error('Error sending message:', error);
        })
  }, []);

  return (
    <div>
        <Header2/>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label className={styles.label}>
            이메일
            <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} />
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
            이름
            <input type="text" name="name" value={formData.id} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            나이
            <input type="text" name="age" value={formData.id} onChange={handleChange} className={styles.input} />
        </label>
        <label className={styles.label}>
            성별
            <input type="text" name="gender" value={formData.id} onChange={handleChange} className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>정보수정</button>
        </form>
    </div>
  );
}

export default InformationPage;