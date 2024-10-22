import { Link } from 'react-router-dom';
import './Login.css'; // Add this line to link to your CSS file

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          Welcome to
          <span className="login-highlight"> TUXCHAT</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input"
              required
            />
          </div>

          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
              required
            />
          </div>

          <Link to="/signup" className="signup-link">
            Don’t have an account? Sign up
          </Link>

          <div>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
