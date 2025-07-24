import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login, user, loading, error } = useContext(AuthContext);

  useEffect(() => {
    // If user is already logged in, redirect to homepage
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={submitHandler} className={styles.loginForm}>
        <h1>Sign In</h1>
        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.loginButton} disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        <div className={styles.subLink}>
          New Customer? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;