import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    // Redirect to login page when button is clicked
    navigate('/login');
  }

  return (
    
    <div className="mainContainer">
         
      <div className={'titleContainer'}>
        <div>Welcome! To Degree Request Page Login to Move Ahead Keep Your Marksheet and Aadhar details Ready </div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn? 'Log out' : 'Log in'}
        />
        {loggedIn? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Home;
