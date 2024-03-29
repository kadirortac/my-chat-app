// PacificHouseChatBot.js
import React, { useState } from 'react';
import logo from './img_passific_house_logo.png'; // Logo resmi
import sendIcon from './Ekran görüntüsü 2024-03-27 020714.ico' // Gönder butonu ikonu
import styles from './Chat.module.css';

const Chat = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Burada API'ye mesaj gönderme işlemleri gerçekleştirilebilir
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Pacific House Logo" className={styles.logoImage} />
      <h1 className={styles.welcomeText}>Welcome to Passific House</h1>
      <p className={styles.descriptionText}>
        How can I help you?
      </p>
     
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Message..."
          className={styles.input}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          <img src={sendIcon} alt="Send" className={styles.sendIcon} />
        </button>
      </div>
      
    </div>
  );
};

export default Chat;

