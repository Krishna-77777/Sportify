import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStore, FaUserCircle } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const cartItemsCount = cart.reduce((count, item) => count + item.qty, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.logo}>
          <FaStore />
          Sportify
        </Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/products" className={styles.navLink}>Products</Link>
          <Link to="/cart" className={`${styles.navLink} ${styles.cartLink}`}>
            <FaShoppingCart size={22} />
            {cartItemsCount > 0 && (
              <span className={styles.cartBadge}>{cartItemsCount}</span>
            )}
          </Link>
          {user ? (
            <>
              {/* Turn the user name into a link to the profile page */}
              <Link to="/profile" className={styles.navLink}>
                <FaUserCircle style={{ marginRight: '0.5rem' }} />
                {user.name}
              </Link>
              <button onClick={logout} className={styles.logoutButton}>Logout</button>
            </>
          ) : (
            <Link to="/login" className={styles.navLink}>Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;