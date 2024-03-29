import React, { useState } from 'react';
import styles from './Signup.module.css';
import googleIcon from './icons8-google-48.png'; // Google simgesi
import appleIcon from './icons8-apple-50.png'; // Apple simgesi

const Signup = () => {
  // State'ler kullanıcı bilgilerini tutacak
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form gönderildiğinde bu fonksiyon çalışacak
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kullanıcı bilgilerini içeren bir obje oluştur
      const userData = {
        fullName,
        email,
        password
      };

      // Backend'e POST isteği yap
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Kullanıcı başarıyla kaydedildi:', data);
        // Başarı durumunda yönlendirme veya diğer işlemler burada yapılabilir
      } else {
        console.error('Kullanıcı kaydı sırasında bir hata oluştu');
        // Hata durumunda kullanıcıya bilgi verilebilir
      }
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Sign up to Passific House</h2>
        <p className={styles.inputLabel}>Full name</p>
        <input
          className={styles.inputs}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <p className={styles.inputLabel}>Email address</p>
        <input
          className={styles.inputs}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className={styles.passwordLabelContainer}>
          <p className={styles.passwordLabel}>Password </p>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.signinButton}>
          Sign up
        </button>
        <p className={styles.SubText}>
          Already have an account?{' '}
          <a className={styles.SignUplink} href="/signin">
            Sign In
          </a>
        </p>

        <div className={styles.orContainer}>
          <div className={styles.orLine}></div>
          <div className={styles.orText}>or</div>
          <div className={styles.orLine}></div>
        </div>

        {/* Google ve Apple butonları */}
        <div className={styles.socialButtons}>
          <button className={styles.googleButton}>
            <img src={googleIcon} alt="Google" className={styles.socialIcon} />
            Continue with Google
          </button>
          <button className={styles.appleButton}>
            <img src={appleIcon} alt="Apple" className={styles.socialIcon} />
            Continue with Apple
          </button>
        </div>

        <p className={styles.Privacy}>Terms of Use | Privacy Policy</p>
      </form>
    </div>
  );
};

export default Signup;
