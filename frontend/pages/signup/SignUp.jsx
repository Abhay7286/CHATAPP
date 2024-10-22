import { Link } from 'react-router-dom';
import './Signup.css'; // Add this line to link to your CSS file

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">
          Create your
          <span className="signup-highlight"> TUXCHAT</span> Account
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Fullname Field */}
          <div className="form-group">
            <label className="label">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input"
              required
            />
          </div>

          {/* Username Field */}
          <div className="form-group">
            <label className="label">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="input"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input"
              required
            />
          </div>

          {/* Gender Selection */}
          <div className="form-group">
            <label className="label">Gender</label>
            <div className="gender-options">
              <label>
                <input type="radio" name="gender" value="male" required /> <p>Male</p>
              </label>
              <label>
                <input type="radio" name="gender" value="female" required /> <p>Female</p>
              </label>
              <label>
                <input type="radio" name="gender" value="other" required /> <p>other</p>
              </label>
            </div>
          </div>

          {/* Already have an account Link */}
          <Link to="/login" className="login-link">
            Already have an account? Login
          </Link>

          {/* Signup Button */}
          <div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
