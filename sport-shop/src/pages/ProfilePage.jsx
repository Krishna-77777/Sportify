import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserOrders = async () => {
      if (!user) return;
      try {
        const response = await fetch('/api/orders/myorders', {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserOrders();
  }, [user]);

  if (loading) {
    return <div className={styles.profileContainer}><p>Loading profile...</p></div>;
  }

  if (error) {
    return <div className={styles.profileContainer}><p>Error: {error}</p></div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileDetails}>
        <h1>User Profile</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <div className={styles.orderHistory}>
        <h2>Order History</h2>
        {orders.length === 0 ? (
          <p>You have no past orders.</p>
        ) : (
          <table className={styles.ordersTable}>
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                  <td>{order.isPaid ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;