import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/home';
import Login from './components/Login';
import Signup from './components/Signup';
import StudentRequestPage from './components/studentrequestpage';
import StudentList from './components/studentlist'; // Import the StudentList component
import './App.css';
import headerpic from "./assets/image6.png"

import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <img src={headerpic} className='image6' alt="header" />
        {/* 
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/studentrequest">DEGREE REQUEST</Link></li>
        </ul> 
        */}
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studentrequest" element={<StudentRequestPage />} />
          <Route path="/students" element={<StudentList />} /> {/* Add the new route here */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
