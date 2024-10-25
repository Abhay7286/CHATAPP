import { Link } from 'react-router-dom';
import './Signup.css'; 
import { useState } from 'react';

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
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
              required value={inputs.fullName} onChange={(e) =>setInputs({...inputs, fullName:e.target.value})}
            />
          </div>

          {/* Username Field */}
          <div className="form-group">
            <label className="label">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="input"
              required value={inputs.username} onChange={(e) =>setInputs({...inputs,username:e.target.value})}
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
              required value={inputs.password} onChange={(e) =>setInputs({...inputs,password:e.target.value})}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input"
              required value={inputs.confirmPassword} onChange={(e) =>setInputs({...inputs,confirmPassword:e.target.value})}
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
