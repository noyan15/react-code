import React from 'react'
import Footer from './comps/Footer'

function Cart({cart,setCart}) {
    function removeProduct (product) {
        if(product.quantity > 1){
            const newCart = cart;
            const index = newCart.indexOf(product);
            newCart[index].quantity -= 1;
            setCart(newCart);
            alert('Product removed')
            return
        }
        const newCart = cart.filter((item)=> item.id !== product.id);
        setCart(newCart);
        alert('Product removed')
    }
  return (
    <main>

        <h1>Cart Page</h1>

        {
            cart.map((item) => (
                <div style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    {
                        item.quantity > 1 && <p>Quantity: {item.quantity}</p>
                    }
                    <button onClick={()=>removeProduct(item)}>
                        Remove
                    </button>
                </div>
            ))
        }

        {/* Footer  */}
        <Footer />
    </main>
  )
}

export default Cart