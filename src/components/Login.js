import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Login Component:
 * A React component responsible for rendering a login form and handling user login requests.
 * @param {Object} props - React component props.
 */
const Login = (props) => {
  // State to manage user input for email and password
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  // React Router's history hook for programmatic navigation
  const history = useHistory();

  /**
   * Handles form submission and sends a login request to the server.
   * Redirects to the home page on successful login or displays an error message.
   * @param {Object} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server with user credentials
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (response.ok) {
        // Parse the JSON response
        const json = await response.json();

        if (json.success) {
          // Redirect to the home page on successful login
          localStorage.setItem('token', json.authtoken);
          alert("successfully login")
          history.push('/');
          // Show a success alert for successful login
        } else {
          // Display an alert for invalid credentials
          alert("oops...  some error occur")
         
        }
      } else {
        // Handle different types of errors
        const isJsonContentType = response.headers.get('content-type')?.includes('application/json');

        if (isJsonContentType) {
          // Handle JSON error response
          try {
            const jsonError = await response.json();
            console.error('Error during login:', jsonError);
            // Handle the error response as needed
          } catch (jsonError) {
            console.error('Error parsing JSON error response:', jsonError);
            // Handle the error parsing as needed
          }
        } else {
          // Handle non-JSON error response
          const textError = await response.text();
          console.error('Error during login:', textError);
          // Handle the error response as needed
        }
      }
    } catch (error) {
      // Log unexpected errors during login
      console.error('Unexpected error during login:', error);
    }
  };

  /**
   * Handles input changes and updates the state accordingly.
   * @param {Object} e - The input change event.
   */
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Render the login form
  return (
    <div>
      <h2 className='mt-3'>Login to Continue</h2>
      <form onSubmit={handleSubmit}>
        {/* Email and password input fields */}
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
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
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

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// Export the Login component
export default Login;
