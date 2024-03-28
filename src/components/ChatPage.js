// ChatPage.js

import React, { useState } from 'react';
import styles from './ChatPage.module.css';
import sendIcon from './icons8-send-letter-50.png';
import logo from './img_passific_house_logo.png';
import userPhoto from './icons8-user-48.png';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState('');

  const handleQuestionSubmit = () => {
    if (question) {
      setMessages(prevMessages => [...prevMessages, {type: "question", text: question}]);
      setQuestion('');
      request(question).then((data) => {
        setMessages(prevMessages => [...prevMessages, {type: "answer", text: data.text}]);
      });
    }
  };

  const handleNewChat = () => {
    setMessages([]);
  }

  const request = async (question) => {
    try {
      //TODO: Uncomment the following code to make a request to the server
      //const response = await fetch('http://localhost:5000/chat', {
      //  method: 'POST',
      //  headers: {
      //    'Content-Type': 'application/json',
      //  },
      //  body: JSON.stringify({ question }),
      //});
      //const data = await response.json();
      const data = await { type: "answer", text: "This is an answer"}
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftPanel}>
        <div className={styles.leftPanelTop}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <button onClick={handleNewChat} className={styles.newChatButton}>New Chat</button>
        </div>
        <div className={styles.leftPanelBottom}>
          <div className={styles.userInfo}>
            <img src={userPhoto} alt="User" className={styles.userPhoto} />
            <span className={styles.userName}>John Doe</span>
          </div>
          <button className={styles.logoutButton}>Logout</button>
        </div>
        
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.chatScreen}>
        {messages.length === 0 && <p className={styles.welcomeMessage}>How can I help you today?</p>}
        {messages.map((message, index) => (
          <div key={index} className={message.type === "question" ? styles.question : styles.answer}>
            
            <label className={styles.label}>
              {message.type === "question" ? "Question:" : "Pasific AI:"}
            </label>
            <p>{message.text}</p>
          </div>
        ))}
        </div>
        <div className={styles.questionInput}>
          <input
            type="text"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button className={styles.submitQuestionButton} onClick={handleQuestionSubmit}>
            <img src={sendIcon} style={{
              width: 30,
              height: 30
            }} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
