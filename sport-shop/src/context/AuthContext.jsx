import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

// Use the environment variable for the API URL, with a fallback for local dev
const API_URL = import.meta.env.VITE_API_URL || '';
const login = async (email, password) => {
  // 1. Set loading state and clear previous errors
  setLoading(true);
  setError(null);

  try {
    // 2. Make the API request to the backend
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    // 3. Check for errors from the server
    if (!response.ok) {
      throw new Error(data.message || 'Failed to login');
    }

    // 4. On success, update the user state and save to localStorage
    setUser(data);
    localStorage.setItem('userInfo', JSON.stringify(data));
    
  } catch (err) {
    // 5. If any error occurs, update the error state
    setError(err.message);
  } finally {
    // 6. Always stop the loading indicator
    setLoading(false);
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to login');
      setUser(data);
localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to register');
      setUser(data);
localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};