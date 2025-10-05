import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();
    function toLogin () {
        navigate('/login');
    }
    function toSignup () {
        navigate('/signup');
    }
  return (
    <div style={styles.container}>
      <h1>Welcome to Our App</h1>
      <div style={styles.buttonContainer}>
        <button onClick={toSignup} style={styles.button}>Sign Up</button>
        <button onClick={toLogin} style={styles.button}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  buttonContainer: {
    marginTop: '30px',
  },
  button: {
    margin: '10px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #007bff',
    backgroundColor: '#007bff',
    color: '#fff',
    transition: 'background-color 0.3s ease',
  }
};

export default LandingPage;
