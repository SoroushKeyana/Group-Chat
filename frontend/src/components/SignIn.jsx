import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp } from 'react-icons/fa6';
import '../style.css';

const SignIn = ({ setUser }) => {
  const [userName, setUserName] = useState('');

  const handleUser = () => {
    if (userName.trim()) {
      localStorage.setItem('user', userName);
      setUser(userName);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUser();
    }
  };

  return (
    <div className="sign-in-container">
      <div className="name-input-wrapper">
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          onClick={handleUser}
          disabled={!userName.trim()}
          aria-label="Submit"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SignIn;
