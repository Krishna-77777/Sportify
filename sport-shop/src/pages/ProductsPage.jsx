import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from './ProductsPage.module.css'; // Import page-specific styles

const products = [
  { id: 1, name: 'Pro Running Shoes', price: 120, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', category: 'Footwear' },
  { id: 2, name: 'Official Basketball', price: 25, image: 'https://www.bing.com/th/id/OIP.1su4MP8FcFRhvjjHI3ZRygHaHa?w=206&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2', category: 'Equipment' },
  { id: 3, name: 'Team Jersey', price: 85, image: 'https://www.bing.com/images/search?q=team+jersey+image&id=E1FA6D2A28AAF1938B44F5189BA70980CE2E499E&FORM=IACFIR', category: 'Apparel' },
  { id: 4, name: 'Yoga Mat', price: 30, image: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=500&q=80', category: 'Fitness' },
];

const ProductsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Our Products</h1>
      <div className={styles.productGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;