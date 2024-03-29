// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
      console.log(user);
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
