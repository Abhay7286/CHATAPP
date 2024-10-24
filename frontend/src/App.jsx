import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Login from '../pages/login/Login.jsx';
// import Signup from '../pages/signup/Signup.jsx';
import Home from '../pages/Home/home.jsx';
import './index.css';  // Path to your Tailwind-included CSS file


function App() {
  return (
    <Router>
      <div className="p-4 h-screen flex items-center justify-center">
        <Home />
      </div>
    </Router>
  );
}

export default App;
