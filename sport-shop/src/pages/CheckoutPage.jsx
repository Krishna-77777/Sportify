import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext); // Assuming clearCart exists
  const { user } = useContext(AuthContext);

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: 'India',
  });
  const [paymentMethod, setPaymentMethod] = useState('Stripe'); // Default payment method

  const subtotal = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const placeOrderHandler = async (e) => {
    e.preventDefault();
    console.log('Placing order...');
    // Here you would make the API call to your backend's /api/orders endpoint
    // with all the order details (user, cart, shippingAddress, paymentMethod, totalPrice).
    // For now, we'll simulate it.
    alert('Order placed successfully! (Simulation)');
    // clearCart(); // You'd clear the cart upon successful order
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1>Checkout</h1>
      <div className={styles.checkoutLayout}>
        <div className={styles.checkoutForm}>
          <form onSubmit={placeOrderHandler}>
            {/* Shipping Details */}
            <h2>Shipping Address</h2>
            <div className={styles.formGroup}>
              <label>Address</label>
              <input type="text" name="address" onChange={handleInputChange} required />
            </div>
            <div className={styles.formGroup}>
              <label>City</label>
              <input type="text" name="city" onChange={handleInputChange} required />
            </div>
            <div className={styles.formGroup}>
              <label>Postal Code</label>
              <input type="text" name="postalCode" onChange={handleInputChange} required />
            </div>
            <div className={styles.formGroup}>
              <label>Country</label>
              <input type="text" name="country" value={shippingAddress.country} onChange={handleInputChange} required />
            </div>

            {/* Payment Method */}
            <h2>Payment Method</h2>
            <div className={styles.paymentOptions}>
              <label>
                <input type="radio" value="Stripe" checked={paymentMethod === 'Stripe'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Credit/Debit Card (Stripe)
              </label>
              <label>
                <input type="radio" value="PayPal" checked={paymentMethod === 'PayPal'} onChange={(e) => setPaymentMethod(e.target.value)} />
                PayPal
              </label>
              <label>
                <input type="radio" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Cash on Delivery
              </label>
            </div>
            
            <button type="submit" className={styles.placeOrderButton}>Place Order</button>
          </form>
        </div>

        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          {cart.map(item => (
            <div key={item._id} className={styles.summaryItem}>
              <span>{item.name} (x{item.qty})</span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;