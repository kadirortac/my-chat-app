import React, { useState,useEffect } from 'react';
import logo from './img_passific_house_logo.png'; // Logo resmi
import sendIcon from './icons8-send-letter-50.png'; // Gönder butonu ikonu
import styles from './Home.module.css';
import Signin from './Signin';
import Signup from './Signup';


const Home = () => {

  return (
    <div className={styles.container}>
      <img src={logo} alt="Pacific House Logo" className={styles.logoImage} />
      <p className={styles.descriptionText}>
        Pacific House ChatBot is your AI-powered assistant, ready to help you clear your mind about
        Accessory Dwelling House (ADU). We are here to make your life easier. Let's get started on
        this exciting journey together!
      </p>
      <div className={styles.loginButton}>
        <a href="/signin" className={styles.sendButton}>SIGN IN</a>
      </div>
      <div className={styles.subText}>
        <p>Don't have an account? <a href="Signup">Sign Up</a></p>
      </div>
      <p className={styles.Privacy}>Terms of Use | Privacy Policy</p>
    </div>
  );
};

export default Home;