import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ loggedIn, email, setLoggedIn }) => {
  const navigate = useNavigate();

  const onLoginButtonClick = () => {
    if (loggedIn) {
      setLoggedIn(false);
      // Clear user session or token if necessary
    } else {
      navigate('/login');
    }
  };

  const onStudentListButtonClick = () => {
    navigate('/students');
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Welcome! To Degree Request Page. Login to move ahead. Keep your marksheet and Aadhar details ready.</div>
      </div>
      <div className="buttonContainer">
        <input
          className="inputButton"
          type="button"
          onClick={onLoginButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn && <div className="emailInfo">Your email address is {email}</div>}
        <input
          className="inputButton"
          type="button"
          onClick={onStudentListButtonClick}
          value="View Student List"
        />
      </div>
    </div>
  );
};

export default Home;
