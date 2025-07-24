import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './LoginPage.module.css'; // We can reuse the login page styles

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null); // For password mismatch message
  const navigate = useNavigate();

  const { register, user, loading, error } = useContext(AuthContext);

  useEffect(() => {
    // If user is logged in, redirect to homepage
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      setMessage(null);
      register(name, email, password);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={submitHandler} className={styles.loginForm}>
        <h1>Sign Up</h1>
        {message && <p className={styles.errorMessage}>{message}</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit" className={styles.loginButton} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        <div className={styles.subLink}>
          Have an Account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;