import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp } from 'react-icons/fa6';

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    adjustHeight();
  }, [message]);

  const sendMessage = () => {
    if (message.trim()) {
      addMessage({ message });
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      }
      e.preventDefault();
      sendMessage();
    }
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, 100);
    textarea.style.height = `${newHeight}px`;
  };

  return (
    <div className="message-input-container">
      <textarea
        ref={textareaRef}
        name="message"
        id="message"
        rows="1"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button 
        onClick={sendMessage} 
        disabled={!message.trim()}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

InputText.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default InputText;
