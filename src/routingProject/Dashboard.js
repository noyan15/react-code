import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './comps/Footer';

function Dashboard({ products, cart, setCart }) {
    const navigate = useNavigate();
    function toLanding () {
        navigate('/');
    }
    function toCart () {
        navigate('/cart');
    }
    function addToCart (product) {

        var existing = cart.find((item) => item.id === product.id);
        console.log(existing);
        var newCart = cart;
        if (existing) {
            const index = newCart.indexOf(product);
            newCart[index].quantity += 1;

            setCart(newCart);
            alert('Product added to cart');
            return;
        }
        
        newCart.push(product);
        setCart(newCart);
        alert('Product added to cart');
    }
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>MyShop</h2>
        <div>
          <button onClick={toCart} style={styles.navButton}>Cart</button>
          <button onClick={toLanding} style={styles.navButton}>Logout</button>
        </div>
      </nav>

      {/* Products Section */}
      <main style={styles.productsSection}>
        <h3>Products</h3>
        <div style={styles.productsGrid}>
          {products.map((item) => (
            <div key={item} style={styles.productCard}>
              <h4>{item.title}</h4>
              <p> {item.description} </p>
              <button onClick={() => addToCart(item)} style={styles.addButton}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer   />
      
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  navbar: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
  },
  navButton: {
    marginLeft: '10px',
    padding: '8px 16px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#007bff',
    cursor: 'pointer',
  },
  productsSection: {
    flex: 1,
    padding: '40px 30px',
    backgroundColor: '#f9f9f9',
  },
  productsGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '200px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  addButton: {
    marginTop: '10px',
    padding: '8px 12px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
  },
};

export default Dashboard;
