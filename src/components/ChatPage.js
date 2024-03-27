// ChatPage.js

import React, { useState } from 'react';
import styles from './ChatPage.module.css';

const ChatPage = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionSubmit = () => {
    // Soruyu gönderme işlemleri burada gerçekleştirilebilir
    // Örneğin: API çağrısı yapılabilir
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftPanel}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
        <button className={styles.newChatButton}>New Chat</button>
        <div className={styles.userInfo}>
          <img src="user-photo.jpg" alt="User" className={styles.userPhoto} />
          <span className={styles.userName}>John Doe</span>
        </div>
        <button className={styles.logoutButton}>Logout</button>
      </div>
      <div className={styles.chatScreen}>
        <div className={styles.question}>
          <label className={styles.label}>Question:</label>
          <p>{question}</p>
        </div>
        <div className={styles.answer}>
          <label className={styles.label}>Answer:</label>
          <p>{answer}</p>
        </div>
      </div>
      <div className={styles.questionInput}>
        <input
          type="text"
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleQuestionSubmit}>Send</button>
      </div>
   
    </div>
  );
};

export default ChatPage;
