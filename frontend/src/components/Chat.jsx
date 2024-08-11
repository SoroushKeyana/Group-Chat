import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import SignIn from './SignIn';
import InputText from './InputText'
import socketIOClient from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';
import { FaSignOutAlt } from 'react-icons/fa';

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [chats, setChats] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const socket = socketIOClient('http://localhost:3001');

  useEffect(() => {
    socket.on('chat', (chats) => {
      setChats(chats);
    });
  });

  const sendToSocket = (chat) => {
    socket.emit('chat', chat, (error) => {
      if (error) {
        setErrorMessage('Failed to send the message.');
      }
    });
  };

  const addMessage = (chat) => {
    const newChat = { ...chat, user: localStorage.getItem('user') };
    setChats([...chats, newChat]);
    sendToSocket([...chats, newChat]);
  };

  const SignOut = () => {
    localStorage.removeItem('user');
    setUser('');
  };

  if (user) {
    return (
      <div className="chat-container">
        <button 
          onClick={SignOut} 
          className="sign-out"
        >
          <FaSignOutAlt />
        </button>
        <ErrorNotification message={errorMessage} />
        <ScrollToBottom className="messages">
          <Message chats={chats} />
        </ScrollToBottom>
        <InputText addMessage={addMessage} />
      </div>
    );
  } else {
    return <SignIn setUser={setUser} />;
  }
};

const ErrorNotification = ({ message }) => {
  if (!message) return null;

  return <div className="error-notification">{message}</div>;
};

ErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChatContainer;
