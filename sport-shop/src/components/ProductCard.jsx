import React, { useContext } from 'react'; // <-- Import useContext
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext'; // <-- Import the context
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  // Get the addToCart function from the context
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <p className={styles.cardCategory}>{product.category}</p>
        <div className={styles.cardFooter}>
          <p className={styles.cardPrice}>${product.price}</p>
          {/* Add the onClick handler to the button */}
          <button onClick={handleAddToCart} className={styles.addToCartBtn}>
            <FaShoppingCart style={{ marginRight: '8px' }} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;