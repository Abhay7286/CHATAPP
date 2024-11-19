import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from '../src/pages/login/Login.jsx';
import Signup from '../src/pages/signup/Signup.jsx';
import Home from '../src/pages/Home/home.jsx';
import { Toaster } from 'react-hot-toast';
import './index.css';
import { useAuthContext } from '../context/AuthContext.jsx';

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </>
  );
}

export default App;
