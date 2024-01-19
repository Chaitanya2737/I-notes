import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Signup Component:
 * A React component responsible for rendering a signup form and handling user registration requests.
 * @param {Object} props - React component props.
 */
const Signup = (props) => {
  // State to manage user input for name, email, password, and confirm password
  const [credentials, setCredentials] = useState({ name: "", email: '', password: '', cpassword: '' });

  // React Router's history hook for programmatic navigation
  const history = useHistory();

  /**
   * Handles form submission and sends a registration request to the server.
   * Redirects to the home page on successful registration or displays an error message.
   * @param {Object} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Destructure credentials for better readability
      const { name, email, password, cpassword } = credentials;

      // Validate password and confirm password match
      if (password !== cpassword) {
        // Show an alert for password mismatch
        props.showAlert('Password and confirm password do not match', 'danger');
        return;
      }

      // Send a POST request to the server with user registration details
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, email, password
        }),
      });

      if (response.ok) {
        // Parse the JSON response
        const json = await response.json();

        // Store authentication token in local storage and redirect to the home page on successful registration
        localStorage.setItem('token', json.authtoken);
        history.push('/');

        // Show a success alert for successful registration
        alert('Account created successfully', 'success');
      } else {
        // Show an alert for invalid credentials
      alert('Invalid Credentials', 'danger');
      }
    } catch (error) {
      // Log unexpected errors during signup
      console.error('Unexpected error during signup:', error);
    }
  };

  /**
   * Handles input changes and updates the state accordingly.
   * @param {Object} e - The input change event.
   */
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Render the signup form
  return (
    <div>
      <h2 className='mt-3'>
        Signup to Continue
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Legal name
          </label>
          <input
            type="text"
            onChange={onChange}
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
          />
          {/* Additional form text */}
          <div className="form-text">
            We'll never share your name with anyone else.
          </div>
        </div>

        {/* Email input field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={onChange}
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
          />
          {/* Additional form text */}
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* Password input field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onChange}
            name="password"
            value={credentials.password}
            className="form-control"
            id="password"
          />
        </div>

        {/* Confirm Password input field */}
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            onChange={onChange}
            name="cpassword"
            value={credentials.cpassword}
            className="form-control"
            id="cpassword"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// Export the Signup component
export default Signup;
