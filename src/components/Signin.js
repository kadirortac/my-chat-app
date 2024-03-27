import React from 'react';
import styles from './Signin.module.css';
import logo from './logo.png'; // Logo resmi
import googleIcon from './icons8-google-48.png'; // Google simgesi
import appleIcon from './icons8-apple-50.png'; // Apple simgesi

const Signin = () => {
  return (
    <div className={styles.container}>
     
     <form className={styles.form}>
  <h2>Sign in to Passific House</h2>
  <p className={styles.inputLabel}>Email address</p>
  <input className={styles.inputs} type="email" required />
  <div className={styles.passwordLabelContainer}>
    <p className={styles.passwordLabel}>Password <a href="/forgot" className={styles.forgotLink}>Forgot?</a></p>
  </div>
  <input type="password" required />
  <button type="submit" className={styles.signinButton}>Sign in</button>
  <p className={styles.SubText}>
  Don't have an account?   <a className={styles.SignUplink} href="/signup">Sign Up</a>

  <div className={styles.orContainer}>
    <div className={styles.orLine}></div> 
    <div className={styles.orText}>or</div> 
    <div className={styles.orLine}></div>
  </div>
</p>

  <div className={styles.socialButtons}>
    <button className={styles.googleButton}>
      <img src={googleIcon} alt="Google" className={styles.socialIcon} />
      Sign in with Google
    </button>
    <button className={styles.appleButton}>
      <img src={appleIcon} alt="Apple" className={styles.socialIcon} />
      Sign in with Apple
    </button>
  </div>
  <p className={styles.Privacy}>Terms of Use | Privacy Policy</p>

</form>
    </div>
  );
};

export default Signin;
