import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '../pages/login/Login.jsx';
import Signup from '../pages/signup/Signup.jsx';
import Home from '../pages/Home/home.jsx';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
