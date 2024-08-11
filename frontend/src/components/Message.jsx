import PropTypes from 'prop-types';
import '../style.css';

const Message = ({ chats }) => {
  const user = localStorage.getItem('user');

  function SendMessage({ message, isLast, shouldShowName }) {
    return (
      <div className="message-sent-container">
        {shouldShowName && <div className="sender-name">{user}</div>}
        <div
          className={`message message-sent ${isLast ? 'last-message-sent' : 'previous-message'}`}
        >
          {typeof message === 'object' ? JSON.stringify(message) : message}
        </div>
      </div>
    );
  }

  SendMessage.propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    isLast: PropTypes.bool.isRequired,
    shouldShowName: PropTypes.bool.isRequired,
  };

  function ReceiveMessage({ message, sender, isLast, shouldShowName }) {
    return (
      <div className="message-received-container">
        {shouldShowName && <div className="receiver-name">{sender}</div>}
        <div
          className={`message message-received ${isLast ? 'last-message-received' : 'previous-message'}`}
        >
          {typeof message === 'object' ? JSON.stringify(message) : message}
        </div>
      </div>
    );
  }

  ReceiveMessage.propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    sender: PropTypes.string.isRequired,
    isLast: PropTypes.bool.isRequired,
    shouldShowName: PropTypes.bool.isRequired,
  };

  Message.propTypes = {
    chats: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.string.isRequired,
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
          .isRequired,
      })
    ).isRequired,
  };

  let lastUser = null;

  return (
    <div className="messages">
      {chats.map((chat, index) => {
        const isCurrentUser = chat.user === user;
        const isLastInSequence = index === chats.length - 1 || chats[index + 1].user !== chat.user;
        const shouldShowName = chat.user !== lastUser;

        let messageElement;
        if (isCurrentUser){
          messageElement = (
            <SendMessage
              key={index} 
              message={chat.message}
              isLast={isLastInSequence}
              shouldShowName={shouldShowName}
            />
          );
        } else {
          messageElement = (
            <ReceiveMessage
              key={index}
              message={chat.message}
              sender={chat.user}
              isLast={isLastInSequence}
              shouldShowName={shouldShowName}
            />
          );
        }

        lastUser = chat.user;

        return messageElement;
      })}
    </div>
  );
};

export default Message;
