import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <-- 1. Import useNavigate
import { CartContext } from '../context/CartContext';
import styles from './CartPage.module.css';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // <-- 2. Get the navigate function

  // Calculate the total price
  const subtotal = cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);

  const checkoutHandler = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className={styles.cartContainer}>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is currently empty.</p>
          <Link to="/products" className={styles.shopLink}>Continue Shopping</Link>
        </div>
      ) : (
        <div className={styles.cartLayout}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item._id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <Link to={`/product/${item._id}`} className={styles.itemName}>{item.name}</Link>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                  <p className={styles.itemQty}>Quantity: {item.qty}</p>
                </div>
                <button onClick={() => removeFromCart(item._id)} className={styles.removeButton}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryLine}>
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            {/* 3. Add the onClick handler to the button */}
            <button onClick={checkoutHandler} className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;